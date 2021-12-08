#!/usr/bin/env node
/**
 * fixes exports
 * Node doesn't allow direcotry import/export like "export default from './dir'"
 * TypeScript doesn't translate exports for us and Microsoft doesn't want to fix this https://github.com/microsoft/TypeScript/issues/16577#issuecomment-703190339
 * if ./dir/index.ts and ./dir/index.js won't work, we have to make the fix after the translation
 *
 * in short the script finds all the exports and add "index.js" to the end of each of them
 *
 * */

import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TARGET_DIR = path.join(__dirname, '../build/esm/');

const EXPORT_REGX = /(export .+? from ')(.+?)(';)/g;

function fixFile(filePath) {
    const content = fs.readFileSync(filePath);
    let changeCount = 0;
    const newContent = content.toString().replace(EXPORT_REGX, function(match, p1, p2, p3, offset, string) {
        const matchPath = path.join(path.dirname(filePath), p2);
        if (fs.existsSync(matchPath)) {
            if (fs.lstatSync(matchPath).isDirectory()) {
                changeCount++;
                return p1 + path.join(p2, 'index.js') + p3; //TODO check if the file exists
            } else {
                return match;
            }
        } else if(fs.existsSync(matchPath + '.js')) {
            changeCount++;
            return p1 + p2 + '.js' + p3;
        } else {
            console.warn(`file ${p2} doesn't exist in ${filePath}`);
            return match;
        }
    });

    if (changeCount > 0) {
        fs.writeFileSync(filePath, newContent);
        console.log(`${filePath} has been updated, count = ${changeCount}`);
    }
}

function readDir(dirPath) {
    const list = fs.readdirSync(dirPath, {withFileTypes: true});
    list.forEach(function(dir) {
        const itemPath = path.join(dirPath, dir.name);
        if (dir.isFile() && dir.name.endsWith('.js')) {
            fixFile(itemPath);
        } else if (dir.isDirectory()) {
            readDir(itemPath);
        }
    });
}

readDir(TARGET_DIR);

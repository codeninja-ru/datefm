#!/usr/bin/env node
/**
 * Converts ES source to commonjs
 *
 * In sort it repolaces
 * 1. export default with moudule.exports = ...
 * 2. import ... to require
 *
 * */

import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import { log } from 'util';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TARGET_DIR = path.join(__dirname, '../build/cjs/');
const FUNC_NAME_REG = /export default function (.+?)\(/;
const IMPORT_REG = /import (.+?) from '(.+?)';/g;
const EXPORT_ALL_REG = /export \* from '(.+?)';/g;
const EXPORT_DEFAULT_REG = /export \{ default as (.+?) \} from '(.+?)';/g;
const EXPORT_CJS_REG = /module.exports.(.+?) = require\('(.+?)'\);/g;

function parseFuncName(content) {
    const match = content.match(FUNC_NAME_REG);
    if (match) {
        return match[1];
    }

    return null;
}

function parseImports(content) {
    const match = content.matchAll(IMPORT_REG);
    if (match) {
        return [...match].map(function(item) {
            return {name: item[1], path: item[2]};
        });

    }

    return [];
}

function fixFile(filePath) {
    const content = fs.readFileSync(filePath).toString();
    const funcName = parseFuncName(content);
    if (!funcName) {
        console.log(`esm module is not found in ${filePath}`);
        return;
    }

    const imports = parseImports(content);

    const newContent = [
        imports
            .map(function({name, path}) {
                return `var ${name} = require('${path}');\n`;
            })
            .join(''),
        content
            .replaceAll(IMPORT_REG, '')
            .replace(FUNC_NAME_REG, 'function $1(')
            .trim(),
        '',
        `module.exports = ${funcName};`

    ].join("\n");

    fs.writeFileSync(filePath, newContent);
    console.log(`${filePath} has been updated`);

}

function replaceExports(filePath, rootPath = './') {
    const content = fs.readFileSync(filePath).toString();

    let changeCount = 0;
    let newContent = content.replace(EXPORT_DEFAULT_REG, function(match, name, importPath) {
        changeCount++;
        return `module.exports.${name} = require('./${path.join(rootPath, importPath)}');`;
    });

    if (rootPath != './') {
        console.log(newContent);
        // this mean that file might be have been convered
        // update the path's accodring rootPath
        newContent = newContent.replace(EXPORT_CJS_REG, function(match, name, importPath) {
            console.log(match);
            changeCount++;
            const importFullPath = path.join(rootPath, importPath);
            return `module.exports.${name} = require('./${importFullPath}');`;
        });
    }

    newContent = newContent.replace(EXPORT_ALL_REG, function(match, importPath) {
        changeCount++;
        const importFullPath = path.join(path.dirname(filePath), importPath);
        const [importContent, _] = replaceExports(importFullPath, path.dirname(path.join(rootPath, importPath)));

        return importContent;

    });

    return [newContent, changeCount];
}

function fixIndexFile(filePath) {

    // it's not optimal since it fixes files that are going to be fixed on the next iteration
    // and it's error prone since the files might be have fixed before
    // for now we can ignore these problems
    let [newContent, changeCount] = replaceExports(filePath);

    if (changeCount > 0) {
        fs.writeFileSync(filePath, newContent);
        console.log(`exports have been converted in ${filePath}, count = ${changeCount}`);

    }
}

function readDir(dirPath) {
    const list = fs.readdirSync(dirPath, {withFileTypes: true});
    list.forEach(function(dir) {
        const itemPath = path.join(dirPath, dir.name);
        if (dir.isFile() && dir.name.endsWith('.js')) {
            if (dir.name == 'index.js') {
                fixIndexFile(itemPath);
            } else {
                fixFile(itemPath);
            }
        } else if (dir.isDirectory()) {
            readDir(itemPath);
        }
    });
}

readDir(TARGET_DIR);

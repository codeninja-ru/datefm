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

const TARGET_DIR = path.join(__dirname, '../build/esm/');
const PACKAGE_PATH = path.join(__dirname, '../build/package.json');

const content = fs.readFileSync(PACKAGE_PATH);
var obj = JSON.parse(content);
var exports = obj.exports || {};

function readDir(dirPath) {
    const list = fs.readdirSync(dirPath, {withFileTypes: true});
    list
        .filter((item) => item.isFile()
                && item.name.endsWith('.js')
                && item.name != 'index.js')
        .forEach((item) => {
            const filePath = path.relative(TARGET_DIR, path.join(dirPath, item.name));
            const importPath = './' + filePath.replace(/.js$/, '');
            exports[importPath] = {
                "import": "./esm/" + filePath,
                "require": "./cjs/" + filePath,
            };
        });

        list
          .filter((item) => item.isDirectory())
          .forEach((item) => {
              const filePath = path.relative(TARGET_DIR, path.join(dirPath, item.name, 'index.js'));
              const importPath = './' + path.relative(TARGET_DIR, path.join(dirPath, item.name));
              exports[importPath] = {
                  "import": "./esm/" + filePath,
                  "require": "./cjs/" + filePath,
              };
              readDir(path.join(dirPath, item.name));
          });
    return exports;
}

readDir(TARGET_DIR);
obj['exports'] = exports;

fs.writeFileSync(PACKAGE_PATH, JSON.stringify(obj, null, '    '));
console.log(`package.json has been update`);

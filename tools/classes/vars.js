import { FileName } from './fileName.js';

export class Vars {
    constructor(fileName, constArray, lang, desc) {
        this.fileName = fileName;
        this.array = constArray;
        this.lang = lang;
        this.desc = desc;
        this.name = fileName.name;
    }
}

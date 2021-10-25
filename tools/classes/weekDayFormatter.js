import path from 'path';
import fs from 'fs';

import { FileName } from './fileName.js';
import { log } from 'util';

export class WeekDayFormatter {
    constructor(vars, template) {
        this.vars = vars;
        this.template = template;
    }

    static make(vars, template) {
        return new this(vars, template);
    }

    write(fileName) {
        const { lang } = this.vars;
        const source = this.template.source(fileName, this.vars);
        const test = this.template.test(fileName, this.vars);

        const langDir = fileName.dirName.joinLang(lang);

        if (!fs.existsSync(langDir.path())) {
            fs.mkdirSync(langDir.path());
        }
        console.log(`writing ${langDir.shortDirPath()}/{${fileName.sourceName()}, ${fileName.testName()}}`);
        fs.writeFileSync(fileName.sourcePath(lang), source);
        fs.writeFileSync(fileName.testPath(lang), test);

        return this;
    }
}

import path from 'path';
import fs from 'fs';

import { FileName } from './fileName.js';
import { log } from 'util';

export class WeekDayFormatter {
    constructor(vars, template) {
        this.vars = vars;
        this.template = template;
    }

    write() {
        const { fileName, lang } = this.vars;
        const source = this.template.source(this.vars);
        const test = this.template.test(this.vars);

        const langDir = fileName.dirName.joinLang(lang);
        console.log(lang, langDir.path(), fileName.sourcePath(lang));

        if (!fs.existsSync(langDir.path())) {
            fs.mkdirSync(langDir.path());
        }
        console.log(`writing ${langDir.shortDirPath()}/{${fileName.sourceName()}, ${fileName.testName()}}`);
        fs.writeFileSync(fileName.sourcePath(lang), source);
        fs.writeFileSync(fileName.testPath(lang), test);
    }
}

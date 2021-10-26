#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SRC_DIR = path.join(__dirname, '../src');
const MONTH_DIR = path.join(SRC_DIR, 'month');
const WEEK_DAY_DIR = path.join(SRC_DIR, 'week_day');

import { Vars, ConstArray, Lang, FileName, DirName } from './classes/index.js';
import { FileStream } from './classes/fileStream.js';
import { WeekDayTemplate } from './templates/weekDayTemplate.js';
import { MonthTemplate } from './templates/monthTemplate.js';

const LANGS = {
    en: 'English',
    ru: 'Russian',
};

const WEEK_DAY_CCC_DESC = 'Abbreviated day of week. Stand-Along (in nominative case)';
const WEEK_DAY_CCCC_DESC = 'Full day of week. Stand-Along (in nominative case)';
const MONTH_STAND_ALONE_DESC = 'Name of month, Abbreveated. Stand-Alone (intended to be used without ‘d’ for day number).';
const MONTH_FORMAT_DESC = 'Name of month, (intended to be used in conjunction with ‘d’ for day number).';

function pad2(num) {
    return num < 10 ? '0' + num : num + '';
}

function weekDayTemplate(array, lang, desc, name) {
    return {
        source: function() {
            return `// auto-generated, DO NOT EDIT, see tools/${path.basename(__filename)}
const DAYS_OF_WEEK = [${array.map(item => `'${item}'`).join(', ')}];
/**
 * ${desc}
 * @lang ${LANGS[lang]}
 * @example ${array.slice(0, 4).join(', ')}...
 */
export default function ${name}(date: Date) : string {
    return DAYS_OF_WEEK[date.getDay()];
}
`;
        },
        test: function() {
            const expects = Array(9)
                  .fill(1)
                  .map((x, y) =>  3 + y)
                  .map(num => num < 10 ? '0' + num : num)
                  .map(day => `expect(formatter(new Date('10/${day}/2021 10:10:10 UTC'))).toEqual('${array[(day - 3) % 7]}');`);
            return `// auto-generated, DO NOT EDIT, see tools/${path.basename(__filename)}
import { datefm } from 'datefm';
import ${name} from 'datefm/week_day/${lang}/${name}';

describe('${name} (${lang})', () => {
    test('format day of week', () => {
        const formatter = datefm\`\$\{${name}\}\`;
        ${expects.join('\n        ')}
    });

});
`;
        },
        writeFile: function() {
            const source = this.source();
            const test = this.test();
            const fileName = new FileName(name);

            const langDir = path.join(WEEK_DAY_DIR, lang);
            if (!fs.existsSync(langDir)) {
                fs.mkdirSync(langDir);
            }
            console.log(`writing week_day/${lang}/{${fileName.sourceName()}, ${fileName.testName()}}`);
            fs.writeFileSync(fileName.sourcePath(langDir), source);
            fs.writeFileSync(fileName.testPath(langDir), test);
        }
    };
}

function monthTemplate(array, lang, desc, name) {
    const fileName = new FileName(name);
    return {
        source: function() {
            return `// auto-generated, DO NOT EDIT, see tools/${path.basename(__filename)}
const MONTHS = [${array.map(item => `'${item}'`).join(', ')}];

/**
 * ${desc}
 * @lang ${LANGS[lang]}
 * @example ${array.slice(0, 4).join(', ')}...
 * */
export default function ${name}(date: Date) : string {
    return MONTHS[date.getMonth()];
}
`;
        },
        test: function() {
            const items = array
                  .map((value, key) => {
                      return `        expect(formatter(new Date('${pad2(key + 1)}/10/2021 10:10:10 UTC'))).toEqual('${value}');`;
                  })
                  .join('\n');
            return `// auto-generated, DO NOT EDIT, see tools/${path.basename(__filename)}
import { datefm } from 'datefm';
import ${name} from 'datefm/month/${lang}/${fileName.importName()}';

describe('${name} (${lang})', () => {
    test('format month', () => {
        const formatter = datefm\`\$\{${name}\}\`;
${items}
    });

});
`;
        },
        writeFile: function() {
            const source = this.source();
            const test = this.test();

            const langDir = path.join(MONTH_DIR, lang);
            if (!fs.existsSync(langDir)) {
                fs.mkdirSync(langDir);
            }
            console.log(`writing month/${lang}/{${fileName.sourceName()}, ${fileName.testName()}}`);
            fs.writeFileSync(fileName.sourcePath(langDir), source);
            fs.writeFileSync(fileName.testPath(langDir), test);
        }
    };
}

function copyOf(name, template) {
    const fileName = new FileName(name);
    return Object.assign({}, template, {
        source: function() {
            return `// auto-generated, DO NOT EDIT, see tools/${path.basename(__filename)}
export { default } from './${fileName.importName()}';
`;
        }
    });
}

const locales = {
    en: {
        week_day: {
            standAlone: {
                short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                full: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            },
        },
        month: {
            standAlone: {
                short: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                full: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            },
            format: {
                //short: copyOf('LLL', monthTemplate(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], 'en', MONTH_FORMAT_DESC, 'MMM')),
                //full: copyOf('LLLL', monthTemplate(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], 'en', MONTH_FORMAT_DESC, 'MMMM')),
            }
        }
    },
    ru: {
        week_day: {
            standAlone: {
                short: ['Вск', 'Пон', 'Вт', 'Ср', 'Чт', 'Птн', 'Сб'],
                full: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
            },
        },
        month: {
            standAlone: {
                short: ["янв.", "февр.", "март", "апр.", "май", "июнь", "июль", "авг.", "сент.", "окт.", "нояб.", "дек."],
                full: ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь" ],
            },
            format: {
                //short: monthTemplate(["янв.", "февр.", "мар.", "апр.", "мая", "июня", "июля", "авг.", "сент.", "окт.", "нояб.", "дек." ], 'ru', MONTH_FORMAT_DESC, 'MMM'),
                //full: monthTemplate(['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'], 'ru', MONTH_FORMAT_DESC, 'MMMM'),
            }
        }
    }
};

const weekDayDirName = new DirName('week_day');
const monthDirName = new DirName('month');

Object.entries(locales).forEach(([lang, value]) => {
    // week day
    FileStream
        .make(
            new Vars(
                new ConstArray(value.week_day.standAlone.short),
                new Lang(lang),
                WEEK_DAY_CCC_DESC
            ),
            new WeekDayTemplate()
        ).write(new FileName(weekDayDirName, 'ccc'));

    FileStream
        .make(
            new Vars(
                new ConstArray(value.week_day.standAlone.full),
                new Lang(lang),
                WEEK_DAY_CCCC_DESC
            ),
            new WeekDayTemplate()
        ).write(new FileName(weekDayDirName, 'cccc'));

    // month
    FileStream
        .make(
            new Vars(
                new ConstArray(value.month.standAlone.short),
                new Lang(lang),
                MONTH_STAND_ALONE_DESC,
            ),
            new MonthTemplate()
        ).write(new FileName(monthDirName, 'LLL'));

    FileStream
        .make(
            new Vars(
                new ConstArray(value.month.standAlone.full),
                new Lang(lang),
                MONTH_STAND_ALONE_DESC,
            ),
            new MonthTemplate()
        ).write(new FileName(monthDirName, 'LLLL'));

    //value.month.standAlone.full.writeFile();
    //value.month.standAlone.short.writeFile();
    //value.month.format.full.writeFile();
    //value.month.format.short.writeFile();

});


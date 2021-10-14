#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const SRC_DIR = path.join(__dirname, '../src');
const MONTH_DIR = path.join(SRC_DIR, 'month');
const WEEK_DAY_DIR = path.join(SRC_DIR, 'week_day');

const LANGS = {
    en: 'English',
    ru: 'Russian',
};

const WEEK_DAY_CCC_DESC = 'Abbreviated day of week. Stand-Along (in nominative case)';
const WEEK_DAY_CCCC_DESC = 'Full day of week. Stand-Along (in nominative case)';

function weekDayTemplate(array, lang, desc, name) {
    return {
        source: function() {
            return `const DAYS_OF_WEEK = [${array.map(item => `'${item}'`).join(', ')}];
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
            return `import { datefm } from 'datefm';
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

            const langDir = path.join(WEEK_DAY_DIR, lang);
            if (!fs.existsSync(langDir)) {
                fs.mkdirSync(langDir);
            }
            console.log(`writing week_day/${lang}/{${name}.ts, ${name}_test.ts}`);
            fs.writeFileSync(path.join(langDir, name + '.ts'), source);
            fs.writeFileSync(path.join(langDir, name + '.test.ts'), test);
        }
    };
}

const locales = {
    en: {
        week_day: {
            standAlon: {
                short: weekDayTemplate(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], 'en', WEEK_DAY_CCC_DESC, 'ccc'),
                full: weekDayTemplate(["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], 'en', WEEK_DAY_CCCC_DESC, 'cccc')
            },
        },
    },
    ru: {
        week_day: {
            standAlon: {
                short: weekDayTemplate(['Вск', 'Пон', 'Вт', 'Ср', 'Чт', 'Птн', 'Сб'], 'ru', WEEK_DAY_CCC_DESC, 'ccc'),
                full: weekDayTemplate(['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'], 'ru', WEEK_DAY_CCCC_DESC, 'cccc')
            },
        },
    }
};

Object.entries(locales).forEach(([key, value]) => {
    value.week_day.standAlon.full.writeFile();
    value.week_day.standAlon.short.writeFile();
});

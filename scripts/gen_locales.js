#!/usr/bin/env node

import { Vars, ConstArray, Lang, FileName, DirName } from './classes/index.js';
import { FileStream } from './classes/fileStream.js';
import { WeekDayTemplate } from './templates/weekDayTemplate.js';
import { MonthTemplate } from './templates/monthTemplate.js';
import { ExportIfEqual } from './templates/exportIfEqual.js';

const WEEK_DAY_CCC_DESC = 'Abbreviated day of week. Stand-Along (in nominative case)';
const WEEK_DAY_CCCC_DESC = 'Full day of week. Stand-Along (in nominative case)';
const WEEK_DAY_EEE_DESC = 'Abbreviated day of week. Format style';
const WEEK_DAY_EEEE_DESC = 'Full day of week. Format style';
const MONTH_STAND_ALONE_DESC = 'Name of month, Abbreveated. Stand-Alone (intended to be used without ādā for day number).';
const MONTH_FORMAT_DESC = 'Name of month, (intended to be used in conjunction with ādā for day number).';

const locales = {
    en: {
        week_day: {
            standAlone: {
                short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                full: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            },
            format: {
                short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                full: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            }
        },
        month: {
            standAlone: {
                short: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                full: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            },
            format: {
                short: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                full: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            }
        }
    },
    ru: {
        week_day: {
            standAlone: {
                short: ['ŠŃŠŗ', 'ŠŠ¾Š½', 'ŠŃ', 'Š”Ń', 'Š§Ń', 'ŠŃŠ½', 'Š”Š±'],
                full: ['ŠŠ¾ŃŠŗŃŠµŃŠµŠ½ŃŠµ', 'ŠŠ¾Š½ŠµŠ“ŠµŠ»ŃŠ½ŠøŠŗ', 'ŠŃŠ¾ŃŠ½ŠøŠŗ', 'Š”ŃŠµŠ“Š°', 'Š§ŠµŃŠ²ŠµŃŠ³', 'ŠŃŃŠ½ŠøŃŠ°', 'Š”ŃŠ±Š±Š¾ŃŠ°'],
            },
            format: {
                short: ['ŠŃŠŗ', 'ŠŠ¾Š½', 'ŠŃ', 'Š”Ń', 'Š§Ń', 'ŠŃŠ½', 'Š”Š±'],
                full: ['Š²Š¾ŃŠŗŃŠµŃŠµŠ½ŃŠµ', 'ŠæŠ¾Š½ŠµŠ“ŠµŠ»ŃŠ½ŠøŠŗ', 'Š²ŃŠ¾ŃŠ½ŠøŠŗ', 'ŃŃŠµŠ“Ń', 'ŃŠµŃŠ²ŠµŃŠ³', 'ŠæŃŃŠ½ŠøŃŃ', 'ŃŃŠ±Š±Š¾ŃŃ'],
            },
        },
        month: {
            standAlone: {
                short: ["ŃŠ½Š².", "ŃŠµŠ²Ń.", "Š¼Š°ŃŃ", "Š°ŠæŃ.", "Š¼Š°Š¹", "ŠøŃŠ½Ń", "ŠøŃŠ»Ń", "Š°Š²Š³.", "ŃŠµŠ½Ń.", "Š¾ŠŗŃ.", "Š½Š¾ŃŠ±.", "Š“ŠµŠŗ."],
                full: ["ŃŠ½Š²Š°ŃŃ", "ŃŠµŠ²ŃŠ°Š»Ń", "Š¼Š°ŃŃ", "Š°ŠæŃŠµŠ»Ń", "Š¼Š°Š¹", "ŠøŃŠ½Ń", "ŠøŃŠ»Ń", "Š°Š²Š³ŃŃŃ", "ŃŠµŠ½ŃŃŠ±ŃŃ", "Š¾ŠŗŃŃŠ±ŃŃ", "Š½Š¾ŃŠ±ŃŃ", "Š“ŠµŠŗŠ°Š±ŃŃ" ],
            },
            format: {
                short: ["ŃŠ½Š².", "ŃŠµŠ²Ń.", "Š¼Š°Ń.", "Š°ŠæŃ.", "Š¼Š°Ń", "ŠøŃŠ½Ń", "ŠøŃŠ»Ń", "Š°Š²Š³.", "ŃŠµŠ½Ń.", "Š¾ŠŗŃ.", "Š½Š¾ŃŠ±.", "Š“ŠµŠŗ." ],
                full: ['ŃŠ½Š²Š°ŃŃ', 'ŃŠµŠ²ŃŠ°Š»Ń', 'Š¼Š°ŃŃŠ°', 'Š°ŠæŃŠµŠ»Ń', 'Š¼Š°Ń', 'ŠøŃŠ½Ń', 'ŠøŃŠ»Ń', 'Š°Š²Š³ŃŃŃŠ°', 'ŃŠµŠ½ŃŃŠ±ŃŃ', 'Š¾ŠŗŃŃŠ±ŃŃ', 'Š½Š¾ŃŠ±ŃŃ', 'Š“ŠµŠŗŠ°Š±ŃŃ'],
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

    FileStream
        .make(
            new Vars(
                new ConstArray(value.week_day.format.short),
                new Lang(lang),
                WEEK_DAY_EEE_DESC
            ),
            new WeekDayTemplate()
        ).write(new FileName(weekDayDirName, 'eee'));

    FileStream
        .make(
            new Vars(
                new ConstArray(value.week_day.format.full),
                new Lang(lang),
                WEEK_DAY_EEEE_DESC
            ),
            new WeekDayTemplate()
        ).write(new FileName(weekDayDirName, 'eeee'));

    // month
    const monthShortFileName = new FileName(monthDirName, 'LLL');
    FileStream
        .make(
            new Vars(
                new ConstArray(value.month.standAlone.short),
                new Lang(lang),
                MONTH_STAND_ALONE_DESC
            ),
            new MonthTemplate()
        ).write(monthShortFileName);

    const monthFullFileName = new FileName(monthDirName, 'LLLL');
    FileStream
        .make(
            new Vars(
                new ConstArray(value.month.standAlone.full),
                new Lang(lang),
                MONTH_STAND_ALONE_DESC
            ),
            new MonthTemplate()
        ).write(monthFullFileName);

    FileStream
        .make(
            new Vars(
                new ConstArray(value.month.format.short),
                new Lang(lang),
                MONTH_FORMAT_DESC
            ),
            new ExportIfEqual(
                monthShortFileName,
                value.month.standAlone.short,
                new MonthTemplate()
            )
        ).write(new FileName(monthDirName, 'MMM'));

    FileStream
        .make(
            new Vars(
                new ConstArray(value.month.format.full),
                new Lang(lang),
                MONTH_FORMAT_DESC
            ),
            new ExportIfEqual(
                monthFullFileName,
                value.month.standAlone.full,
                new MonthTemplate()
            )
        ).write(new FileName(monthDirName, 'MMMM'));
});

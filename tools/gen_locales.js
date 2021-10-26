#!/usr/bin/env node

import { Vars, ConstArray, Lang, FileName, DirName } from './classes/index.js';
import { FileStream } from './classes/fileStream.js';
import { WeekDayTemplate } from './templates/weekDayTemplate.js';
import { MonthTemplate } from './templates/monthTemplate.js';
import { ExportIfEqual } from './templates/exportIfEqual.js';

const WEEK_DAY_CCC_DESC = 'Abbreviated day of week. Stand-Along (in nominative case)';
const WEEK_DAY_CCCC_DESC = 'Full day of week. Stand-Along (in nominative case)';
const MONTH_STAND_ALONE_DESC = 'Name of month, Abbreveated. Stand-Alone (intended to be used without ‘d’ for day number).';
const MONTH_FORMAT_DESC = 'Name of month, (intended to be used in conjunction with ‘d’ for day number).';

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
                short: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                full: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
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
                short: ["янв.", "февр.", "мар.", "апр.", "мая", "июня", "июля", "авг.", "сент.", "окт.", "нояб.", "дек." ],
                full: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
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
    const monthShortFileName = new FileName(monthDirName, 'LLL');
    FileStream
        .make(
            new Vars(
                new ConstArray(value.month.standAlone.short),
                new Lang(lang),
                MONTH_STAND_ALONE_DESC,
            ),
            new MonthTemplate()
        ).write(monthShortFileName);

    const monthFullFileName = new FileName(monthDirName, 'LLLL');
    FileStream
        .make(
            new Vars(
                new ConstArray(value.month.standAlone.full),
                new Lang(lang),
                MONTH_STAND_ALONE_DESC,
            ),
            new MonthTemplate()
        ).write(monthFullFileName);

    FileStream
        .make(
            new Vars(
                new ConstArray(value.month.format.short),
                new Lang(lang),
                MONTH_FORMAT_DESC,
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
                MONTH_FORMAT_DESC,
            ),
            new ExportIfEqual(
                monthFullFileName,
                value.month.standAlone.full,
                new MonthTemplate()
            )
        ).write(new FileName(monthDirName, 'MMMM'));
});

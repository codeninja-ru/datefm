type Formatter = (date: Date) => string;

/**
 * @example var formatFunction = datefm`${dd}-${mm}-${YYY}`;
 * console.log(formatFunction(new Date()));
 */
export function datefm(strings : TemplateStringsArray, ...formatters : Array<Formatter>) : Formatter {
    return function(date: Date) : string {
        var result = '';
        for (var key in strings) {
            var formatter = formatters[key];
            result = result + strings[key] + (formatter ? formatter(date) : '');
        }

        return result;
    };
}

const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]
const MONTHS_SHORT = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

export { default as D } from './day/d_';
export { default as DD } from './day/dd_';
export { default as m } from './minute/m';
export { default as mm } from './minute/mm';
export { default as yy } from './year/yy';
export { default as yyyy } from './year/yyyy';
export { default as h } from './hour/h';
export { default as hh } from './hour/hh';
export { default as H } from './hour/h24';
export { default as HH } from './hour/hh24';
export { default as K } from './hour/k_';
export { default as KK } from './hour/kk_';
export { default as k } from './hour/k';
export { default as kk } from './hour/kk';
export { default as M } from './month/m_';
export { default as MM } from './month/mm_';
export { default as s } from './second/s';
export { default as ss } from './second/ss';
export { default as SSS } from './millisecond/sss_';
export { default as c } from './week_day/c';
export { default as cc } from './week_day/cc';

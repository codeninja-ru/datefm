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

const DAYS_OF_WEEK_SHORT = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
];
const DAYS_OF_WEEK = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];
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
/**
 * Full name of the day of the week in English
 * */
export function dddd(date: Date) : string {
    return DAYS_OF_WEEK[date.getDay() - 1];
}

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
export { default as M } from './month/m_';
export { default as MM } from './month/mm_';
export { default as s } from './second/s';
export { default as ss } from './second/ss';
export { default as SSS } from './millisecond/sss_';
export { default as c } from './week_day/c';

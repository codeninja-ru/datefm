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

export { default as D } from './d_';
export { default as DD } from './dd_';
export { default as m } from './m';
export { default as mm } from './mm';
export { default as yy } from './yy';
export { default as yyyy } from './yyyy';
export { default as h } from './h';
export { default as hh } from './hh';
export { default as H } from './h24';
export { default as HH } from './hh24';
export { default as M } from './m_';
export { default as MM } from './mm_';
export { default as s } from './s';
export { default as ss } from './ss';
export { default as SSS } from './sss_';
export { default as d } from './d';

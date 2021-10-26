// auto-generated, DO NOT EDIT, see tools/monthTemplate.js
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/**
 * Name of month, Abbreveated. Stand-Alone (intended to be used without ‘d’ for day number).
 * @lang English
 * @example Jan, Feb, Mar, Apr...
 * */
export default function LLL(date: Date) : string {
    return MONTHS[date.getMonth()];
}

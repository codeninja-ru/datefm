// auto-generated, DO NOT EDIT, see tools/gen_locales.js
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

/**
 * Name of month, Abbreveated. Stand-Alone (intended to be used without ‘d’ for day number).
 * @lang English
 * @example January, February, March, April...
 * */
export default function LLLL(date: Date) : string {
    return MONTHS[date.getMonth()];
}

// auto-generated, DO NOT EDIT, see tools/monthTemplate.js
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] as const;

/**
 * Name of month, Abbreveated. Stand-Alone (intended to be used without ‘d’ for day number).
 * @lang English
 * @example Jan, Feb, Mar, Apr...
 * */
export default function LLL(date: Date) : typeof MONTHS[number] {
    return MONTHS[date.getMonth()];
}

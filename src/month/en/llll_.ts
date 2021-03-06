// auto-generated, DO NOT EDIT, see scripts/monthTemplate.js
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] as const;

/**
 * Name of month, Abbreveated. Stand-Alone (intended to be used without ādā for day number).
 * @lang English
 * @example January, February, March, April...
 * */
export default function LLLL(date: Date) : typeof MONTHS[number] {
    return MONTHS[date.getMonth()];
}

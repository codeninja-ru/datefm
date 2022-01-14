// auto-generated, DO NOT EDIT, see scripts/monthTemplate.js
const EN_LLLL_MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] as const;

/**
 * Name of month, Abbreveated. Stand-Alone (intended to be used without ‘d’ for day number).
 * @lang English
 * @category month
 * @returns January, February, March, April...
 * @example ```javascript
 * import { format } from 'udate';
 * import LLLL from 'udate/month/en/llll_';
 *
 * console.log(format`The current month is ${LLLL}!`(new Date()));
 * ```
 * */
export default function LLLL(date: Date) : typeof EN_LLLL_MONTHS[number] {
    return EN_LLLL_MONTHS[date.getMonth()];
}

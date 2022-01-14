// auto-generated, DO NOT EDIT, see scripts/monthTemplate.js
const EN_LLL_MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] as const;

/**
 * Name of month, Abbreveated. Stand-Alone (intended to be used without ‘d’ for day number).
 * @lang English
 * @category month
 * @returns Jan, Feb, Mar, Apr...
 * @example ```javascript
 * import { format } from 'udate';
 * import LLL from 'udate/month/en/lll_';
 *
 * console.log(format`The current month is ${LLL}!`(new Date()));
 * ```
 * */
export default function LLL(date: Date) : typeof EN_LLL_MONTHS[number] {
    return EN_LLL_MONTHS[date.getMonth()];
}

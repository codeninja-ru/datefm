// auto-generated, DO NOT EDIT, see scripts/weekDayTemplate.js
const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] as const;

/**
 * Abbreviated day of week. Stand-Along (in nominative case)
 * @lang English
 * @category week_day
 * @returns Sun, Mon, Tue, Wed...
 * @example ```javascript
 * import { format } from 'udate';
 * import ccc from 'udate/week_day/en/ccc';
 *
 * console.log(format`The day of the week is ${ccc}!`(new Date()));
 * ```
 * */
export default function ccc(date: Date) : typeof DAYS_OF_WEEK[number] {
    return DAYS_OF_WEEK[date.getDay()];
}
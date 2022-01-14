// auto-generated, DO NOT EDIT, see scripts/weekDayTemplate.js
const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] as const;

/**
 * Abbreviated day of week. Format style
 * @lang English
 * @category week_day
 * @returns Sun, Mon, Tue, Wed...
 * @example ```javascript
 * import { format } from 'udate';
 * import eee from 'udate/week_day/en/eee';
 *
 * console.log(format`The day of the week is ${eee}!`(new Date()));
 * ```
 * */
export default function eee(date: Date) : typeof DAYS_OF_WEEK[number] {
    return DAYS_OF_WEEK[date.getDay()];
}
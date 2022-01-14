// auto-generated, DO NOT EDIT, see scripts/weekDayTemplate.js
const DAYS_OF_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] as const;

/**
 * Full day of week. Stand-Along (in nominative case)
 * @lang English
 * @category week_day
 * @returns Sunday, Monday, Tuesday, Wednesday...
 * @example ```javascript
 * import { format } from 'udate';
 * import cccc from 'udate/week_day/en/cccc';
 *
 * console.log(format`The day of the week is ${cccc}!`(new Date()));
 * ```
 * */
export default function cccc(date: Date) : typeof DAYS_OF_WEEK[number] {
    return DAYS_OF_WEEK[date.getDay()];
}
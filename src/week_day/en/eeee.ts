// auto-generated, DO NOT EDIT, see scripts/weekDayTemplate.js
const DAYS_OF_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] as const;

/**
 * Full day of week. Format style
 * @lang English
 * @category week_day
 * @returns Sunday, Monday, Tuesday, Wednesday...
 * @example ```javascript
 * import { format } from 'udate';
 * import eeee from 'udate/week_day/en/eeee';
 *
 * console.log(format`The day of the week is ${eeee}!`(new Date()));
 * ```
 * */
export default function eeee(date: Date) : typeof DAYS_OF_WEEK[number] {
    return DAYS_OF_WEEK[date.getDay()];
}
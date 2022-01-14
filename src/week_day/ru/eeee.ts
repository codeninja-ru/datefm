// auto-generated, DO NOT EDIT, see scripts/weekDayTemplate.js
const DAYS_OF_WEEK = ['воскресенье', 'понедельник', 'вторник', 'среду', 'четверг', 'пятницу', 'субботу'] as const;

/**
 * Full day of week. Format style
 * @lang Russian
 * @category week_day
 * @returns воскресенье, понедельник, вторник, среду...
 * @example ```javascript
 * import { format } from 'udate';
 * import eeee from 'udate/week_day/ru/eeee';
 *
 * console.log(format`The day of the week is ${eeee}!`(new Date()));
 * ```
 * */
export default function eeee(date: Date) : typeof DAYS_OF_WEEK[number] {
    return DAYS_OF_WEEK[date.getDay()];
}
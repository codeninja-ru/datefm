// auto-generated, DO NOT EDIT, see scripts/weekDayTemplate.js
const DAYS_OF_WEEK = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'] as const;

/**
 * Full day of week. Stand-Along (in nominative case)
 * @lang Russian
 * @category week_day
 * @returns Воскресенье, Понедельник, Вторник, Среда...
 * @example ```javascript
 * import { format } from 'udate';
 * import cccc from 'udate/week_day/ru/cccc';
 *
 * console.log(format`The day of the week is ${cccc}!`(new Date()));
 * ```
 * */
export default function cccc(date: Date) : typeof DAYS_OF_WEEK[number] {
    return DAYS_OF_WEEK[date.getDay()];
}
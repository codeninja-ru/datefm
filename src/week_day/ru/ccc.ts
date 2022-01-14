// auto-generated, DO NOT EDIT, see scripts/weekDayTemplate.js
const DAYS_OF_WEEK = ['Вск', 'Пон', 'Вт', 'Ср', 'Чт', 'Птн', 'Сб'] as const;

/**
 * Abbreviated day of week. Stand-Along (in nominative case)
 * @lang Russian
 * @category week_day
 * @returns Вск, Пон, Вт, Ср...
 * @example ```javascript
 * import { format } from 'udate';
 * import ccc from 'udate/week_day/ru/ccc';
 *
 * console.log(format`The day of the week is ${ccc}!`(new Date()));
 * ```
 * */
export default function ccc(date: Date) : typeof DAYS_OF_WEEK[number] {
    return DAYS_OF_WEEK[date.getDay()];
}
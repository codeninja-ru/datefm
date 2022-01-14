// auto-generated, DO NOT EDIT, see scripts/monthTemplate.js
const RU_LLLL_MONTHS = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'] as const;

/**
 * Name of month, Abbreveated. Stand-Alone (intended to be used without ‘d’ for day number).
 * @lang Russian
 * @category month
 * @returns январь, февраль, март, апрель...
 * @example ```javascript
 * import { format } from 'udate';
 * import LLLL from 'udate/month/ru/llll_';
 *
 * console.log(format`The current month is ${LLLL}!`(new Date()));
 * ```
 * */
export default function LLLL(date: Date) : typeof RU_LLLL_MONTHS[number] {
    return RU_LLLL_MONTHS[date.getMonth()];
}

// auto-generated, DO NOT EDIT, see scripts/monthTemplate.js
const RU_LLL_MONTHS = ['янв.', 'февр.', 'март', 'апр.', 'май', 'июнь', 'июль', 'авг.', 'сент.', 'окт.', 'нояб.', 'дек.'] as const;

/**
 * Name of month, Abbreveated. Stand-Alone (intended to be used without ‘d’ for day number).
 * @lang Russian
 * @category month
 * @returns янв., февр., март, апр....
 * @example ```javascript
 * import { format } from 'udate';
 * import LLL from 'udate/month/ru/lll_';
 *
 * console.log(format`The current month is ${LLL}!`(new Date()));
 * ```
 * */
export default function LLL(date: Date) : typeof RU_LLL_MONTHS[number] {
    return RU_LLL_MONTHS[date.getMonth()];
}

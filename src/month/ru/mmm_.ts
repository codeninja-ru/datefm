// auto-generated, DO NOT EDIT, see scripts/monthTemplate.js
const RU_MMM_MONTHS = ['янв.', 'февр.', 'мар.', 'апр.', 'мая', 'июня', 'июля', 'авг.', 'сент.', 'окт.', 'нояб.', 'дек.'] as const;

/**
 * Name of month, (intended to be used in conjunction with ‘d’ for day number).
 * @lang Russian
 * @category month
 * @returns янв., февр., мар., апр....
 * @example ```javascript
 * import { format } from 'udate';
 * import MMM from 'udate/month/ru/mmm_';
 *
 * console.log(format`The current month is ${MMM}!`(new Date()));
 * ```
 * */
export default function MMM(date: Date) : typeof RU_MMM_MONTHS[number] {
    return RU_MMM_MONTHS[date.getMonth()];
}

// auto-generated, DO NOT EDIT, see scripts/monthTemplate.js
const RU_MMMM_MONTHS = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'] as const;

/**
 * Name of month, (intended to be used in conjunction with ‘d’ for day number).
 * @lang Russian
 * @category month
 * @returns января, февраля, марта, апреля...
 * @example ```javascript
 * import { format } from 'udate';
 * import MMMM from 'udate/month/ru/mmmm_';
 *
 * console.log(format`The current month is ${MMMM}!`(new Date()));
 * ```
 * */
export default function MMMM(date: Date) : typeof RU_MMMM_MONTHS[number] {
    return RU_MMMM_MONTHS[date.getMonth()];
}

// auto-generated, DO NOT EDIT, see tools/monthTemplate.js
const MONTHS = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

/**
 * Name of month, (intended to be used in conjunction with ‘d’ for day number).
 * @lang Russian
 * @example января, февраля, марта, апреля...
 * */
export default function MMMM(date: Date) : string {
    return MONTHS[date.getMonth()];
}

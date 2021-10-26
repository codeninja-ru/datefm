// auto-generated, DO NOT EDIT, see tools/monthTemplate.js
const MONTHS = ['янв.', 'февр.', 'мар.', 'апр.', 'мая', 'июня', 'июля', 'авг.', 'сент.', 'окт.', 'нояб.', 'дек.'];

/**
 * Name of month, (intended to be used in conjunction with ‘d’ for day number).
 * @lang Russian
 * @example янв., февр., мар., апр....
 * */
export default function MMM(date: Date) : string {
    return MONTHS[date.getMonth()];
}

// auto-generated, DO NOT EDIT, see tools/gen_locales.js
const MONTHS = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];

/**
 * Name of month, Abbreveated. Stand-Alone (intended to be used without ‘d’ for day number).
 * @lang Russian
 * @example январь, февраль, март, апрель...
 * */
export default function LLLL(date: Date) : string {
    return MONTHS[date.getMonth()];
}

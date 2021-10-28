// auto-generated, DO NOT EDIT, see tools/monthTemplate.js
const MONTHS = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'] as const;

/**
 * Name of month, Abbreveated. Stand-Alone (intended to be used without ‘d’ for day number).
 * @lang Russian
 * @example январь, февраль, март, апрель...
 * */
export default function LLLL(date: Date) : typeof MONTHS[number] {
    return MONTHS[date.getMonth()];
}

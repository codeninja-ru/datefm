// auto-generated, DO NOT EDIT, see scripts/monthTemplate.js
const MONTHS = ['янв.', 'февр.', 'март', 'апр.', 'май', 'июнь', 'июль', 'авг.', 'сент.', 'окт.', 'нояб.', 'дек.'] as const;

/**
 * Name of month, Abbreveated. Stand-Alone (intended to be used without ‘d’ for day number).
 * @lang Russian
 * @example янв., февр., март, апр....
 * */
export default function LLL(date: Date) : typeof MONTHS[number] {
    return MONTHS[date.getMonth()];
}

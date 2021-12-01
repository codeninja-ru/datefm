// auto-generated, DO NOT EDIT, see scripts/weekDayTemplate.js
const DAYS_OF_WEEK = ['Вск', 'Пон', 'Вт', 'Ср', 'Чт', 'Птн', 'Сб'] as const;

/**
 * Abbreviated day of week. Stand-Along (in nominative case)
 * @lang Russian
 * @example Вск, Пон, Вт, Ср...
 * */
export default function ccc(date: Date) : typeof DAYS_OF_WEEK[number] {
    return DAYS_OF_WEEK[date.getDay()];
}

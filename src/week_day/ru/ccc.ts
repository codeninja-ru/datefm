const DAYS_OF_WEEK = ['Вск', 'Пон', 'Вт', 'Ср', 'Чт', 'Птн', 'Сб'];
/**
 * Abbreviated day of week. Stand-Along (in nominative case)
 * @lang Russian
 * @example Вск, Пон, Вт, Ср...
 */
export default function ccc(date: Date) : string {
    return DAYS_OF_WEEK[date.getDay()];
}

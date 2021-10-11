const DAYS_OF_WEEK_SHORT = ['Вск', 'Пон', 'Вт', 'Ср', 'Чт', 'Птн', 'Сб'];

/**
 * Abbreviated day of week, Russion language, Stand-Alone, in nominative case
 * @example Sun, Mon, Tue, Web, Thu...
 */
export default function ccc(date: Date) : string {
    return DAYS_OF_WEEK_SHORT[date.getDay()];
}

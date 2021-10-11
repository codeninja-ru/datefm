const DAYS_OF_WEEK = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];


/**
 * Full day of week, Stand-Alone, Russion in nominotive case
 * @example Понедельник, Вторинк, Среда...
 */
export default function ccc(date: Date) : string {
    return DAYS_OF_WEEK[date.getDay()];
}

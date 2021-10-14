const DAYS_OF_WEEK = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
/**
 * Full day of week. Stand-Along (in nominative case)
 * @lang Russian
 * @example Воскресенье, Понедельник, Вторник, Среда...
 */
export default function cccc(date: Date) : string {
    return DAYS_OF_WEEK[date.getDay()];
}

// auto-generated, DO NOT EDIT, see scripts/weekDayTemplate.js
const DAYS_OF_WEEK = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'] as const;

/**
 * Full day of week. Stand-Along (in nominative case)
 * @lang Russian
 * @example Воскресенье, Понедельник, Вторник, Среда...
 * */
export default function cccc(date: Date) : typeof DAYS_OF_WEEK[number] {
    return DAYS_OF_WEEK[date.getDay()];
}

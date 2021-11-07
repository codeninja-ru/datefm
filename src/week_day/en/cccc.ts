// auto-generated, DO NOT EDIT, see scripts/weekDayTemplate.js
const DAYS_OF_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] as const;

/**
 * Full day of week. Stand-Along (in nominative case)
 * @lang English
 * @example Sunday, Monday, Tuesday, Wednesday...
 * */
export default function cccc(date: Date) : typeof DAYS_OF_WEEK[number] {
    return DAYS_OF_WEEK[date.getDay()];
}
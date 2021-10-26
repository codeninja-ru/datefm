// auto-generated, DO NOT EDIT, see tools/weekDayTemplate.js
const DAYS_OF_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

/**
 * Full day of week. Stand-Along (in nominative case)
 * @lang English
 * @example Sunday, Monday, Tuesday, Wednesday...
 * */
export default function cccc(date: Date) : string {
    return DAYS_OF_WEEK[date.getDay()];
}

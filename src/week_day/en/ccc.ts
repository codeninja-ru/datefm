// auto-generated, DO NOT EDIT, see tools/weekDayTemplate.js
const MONTHS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

/**
 * Abbreviated day of week. Stand-Along (in nominative case)
 * @lang English
 * @example Sun, Mon, Tue, Wed...
 * */
export default function ccc(date: Date) : string {
    return MONTHS[date.getMonth()];
}

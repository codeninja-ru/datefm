// auto-generated, DO NOT EDIT, see tools/gen_locales.js
const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
/**
 * Abbreviated day of week. Stand-Along (in nominative case)
 * @lang English
 * @example Sun, Mon, Tue, Wed...
 */
export default function ccc(date: Date) : string {
    return DAYS_OF_WEEK[date.getDay()];
}

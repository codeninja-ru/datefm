const DAYS_OF_WEEK_SHORT = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
];

/**
 * Abbreviated day of week, English language
 * @example Sun, Mon, Tue, Web, Thu...
 */
export default function ccc(date: Date) : string {
    return DAYS_OF_WEEK_SHORT[date.getDay()];
}

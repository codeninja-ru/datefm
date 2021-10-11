const DAYS_OF_WEEK = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

/**
 * Full day of week, English locale
 * @example Sunday, Monday, Tuesday, Wednesday, Thursday...
 */
export default function ccc(date: Date) : string {
    return DAYS_OF_WEEK[date.getDay()];
}

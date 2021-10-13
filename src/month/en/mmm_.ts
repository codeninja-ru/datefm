const MONTHS_SHORT = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

/**
 * Name of month, Abbreveated. English
 * @example Sep, Oct, Nov ...
 * */
export default function MMM(date: Date) : string {
    return MONTHS_SHORT[date.getMonth()];
}

const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
/**
 * Full name of month, English,  (intended to be used in conjunction with ‘d’ for day number).
 * @example September, October, November ...
 * */
export default function MMMM(date: Date) : string {
    return MONTHS[date.getMonth()];
}

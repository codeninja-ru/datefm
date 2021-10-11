/**
 * day of week, no leading zero, starting from 0. 0 is Sunday
 */
export default function c(date: Date) : string {
    return date.getDay() + '';
}

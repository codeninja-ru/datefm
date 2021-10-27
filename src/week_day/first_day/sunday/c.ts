/**
 * day of week, no leading zero, starting from 1. 1 is Sunday
 */
export default function c(date: Date) : string {
    return date.getDay() + 1 + '';
}

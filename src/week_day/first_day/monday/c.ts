/**
 * day of week, no leading zero, starting from 1. The first day of week is Monday
 * @example 1, 2, 3, 4, 5, 6, 7
 */
export default function c(date: Date) : string {
    return (date.getDay() || 7) + '';
}

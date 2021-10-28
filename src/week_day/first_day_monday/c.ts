import { WeekDayResult_c } from 'datefm/week_day/types';

/**
 * day of week, no leading zero, starting from 1. The first day of week is Monday
 * @example 1, 2, 3, 4, 5, 6, 7
 */
export default function c(date: Date) : WeekDayResult_c {
    return (date.getDay() || 7) + '' as WeekDayResult_c;
}

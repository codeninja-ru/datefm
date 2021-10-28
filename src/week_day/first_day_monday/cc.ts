import { WeekDayResult_cc } from 'datefm/week_day/types';

/**
 * day of week, leading zero, starting from 01. The first day of week is Monday - 01
 * @example 01, 02, 03, 04, 05, 06, 07
 */
export default function cc(date: Date) : WeekDayResult_cc {
    return '0' + (date.getDay() || 7) as WeekDayResult_cc;
}

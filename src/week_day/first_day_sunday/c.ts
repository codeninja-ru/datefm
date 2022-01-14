import { WeekDayResult_c } from 'udate/week_day/types';

/**
 * day of week, no leading zero, starting from 1. 1 is Sunday
 * @category week_day
 * @category first_day_sunday
 */
export default function c(date: Date) : WeekDayResult_c {
    return date.getDay() + 1 + '' as WeekDayResult_c;
}

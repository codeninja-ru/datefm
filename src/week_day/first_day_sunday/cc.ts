import { WeekDayResult_cc } from 'udate/week_day/types';

/**
 * day of week, leading zero, starting from 01. 01 is Sunday 01 is Monday...
 * @category week_day
 * @category first_day_monday
 * @category first_day_sunday
 */
export default function cc(date: Date) : WeekDayResult_cc {
    return '0' + (date.getDay() + 1) as WeekDayResult_cc;
}

/**
 * day of week, leading zero, starting from 00. 00 is Sunday 01 is Monday...
 */
export default function cc(date: Date) : string {
    return '0' + date.getDay();
}

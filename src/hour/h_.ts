/**
 *  Hours; 24-hour clock, without leading zero; [0-23]
 */
export default function H(date: Date) : string {
    return date.getHours() + '';
}

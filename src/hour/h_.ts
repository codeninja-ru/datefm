/**
 * Hours; 24-hour clock, without leading zero; [0-23]
 * @category hour
 */
export default function H(date: Date) : string {
    return date.getHours() + '';
}

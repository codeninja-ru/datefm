/**
 * Hours; no leading zero for single-digit hours (24-hour clock). [1-24]
 */
export default function k(date: Date) : string {
    return (date.getHours() || 24) + '';
}

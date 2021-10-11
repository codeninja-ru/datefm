/**
 * Hours; no leading zero for single-digit hours (12-hour clock). [1-12]
 */
export default function h(date : Date) : string {
    return (date.getHours() % 12 || 12) + '';
}

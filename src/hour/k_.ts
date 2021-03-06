/**
 * Hours; no leading zero for single-digit hours (12-hour clock). [0-11]
 */
export default function K(date : Date) : string {
    return (date.getHours() % 12) + '';
}

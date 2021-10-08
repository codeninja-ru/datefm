/**
 * Seconds, no leading zero
 */
export default function s(date: Date) : string {
    return date.getSeconds() + '';
}

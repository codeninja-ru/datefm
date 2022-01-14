/**
 * Seconds, no leading zero
 * @category second
 */
export default function s(date: Date) : string {
    return date.getSeconds() + '';
}

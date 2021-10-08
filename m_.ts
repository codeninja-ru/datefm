/**
 * Minutes, no leading zero
 */
export default function M(date: Date) : string {
    return date.getMinutes() + '';
}

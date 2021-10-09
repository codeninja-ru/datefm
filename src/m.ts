/**
 * Minutes, no leading zero
 */
export default function m(date: Date) : string {
    return date.getMinutes() + '';
}

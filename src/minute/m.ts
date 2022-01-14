/**
 * Minutes, no leading zero
 * @category minute
 */
export default function m(date: Date) : string {
    return date.getMinutes() + '';
}

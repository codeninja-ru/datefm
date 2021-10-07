/**
 * four digit year (leading zero)
 */
export default function yyyy(date: Date) : string {
    return date.getFullYear() + '';
}

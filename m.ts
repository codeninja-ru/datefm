/**
 * Number of month starting from 1 (without leading zero)
 */
export default function m(date: Date) : string {
    return (date.getMonth() + 1) + '';
}

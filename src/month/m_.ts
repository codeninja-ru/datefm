/**
 * Number of month starting from 1 (without leading zero)
 * @category month
 */
export default function M(date: Date) : string {
    return (date.getMonth() + 1) + '';
}

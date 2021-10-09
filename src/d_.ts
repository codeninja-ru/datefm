/**
 * Day of month (without leading zero)
 */
export default function D(date: Date) : string {
    return date.getDate() + '';
}

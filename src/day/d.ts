/**
 * Day of month (without leading zero)
 */
export default function d(date: Date) : string {
    return date.getDate() + '';
}

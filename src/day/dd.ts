/**
 * Day of month (leading zero)
 */
export default function dd(date: Date) : string {
    var dt = date.getDate();
    return (dt > 9 ? dt : '0' + dt)+'';
}

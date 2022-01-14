/**
 * last tow digit of year, leading zero
 * @category year
 */
export default function yy(date: Date) : string {
    var yt = date.getFullYear() % 100;
    return (yt > 9 ? yt : '0' + yt) + '';
}

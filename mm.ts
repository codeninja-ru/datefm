/**
 * Number of month starting from 01 (leading zero)
 */
export default function mm(date: Date) : string {
    var mt = date.getMonth() + 1;
    return (mt > 9 ? mt : '0' + mt) + '';
}

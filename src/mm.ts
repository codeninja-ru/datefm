/**
 * Minutes, leading zero for single digit numbers
 */
export default function mm(date: Date) : string {
    var mt = date.getMinutes();
    return mt < 10 ? '0' + mt : mt + '';
}

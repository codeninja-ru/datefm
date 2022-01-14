/**
 * Seconds, leading zero for single digit numbers
 * @category second
 */
export default function ss(date: Date) : string {
    var mt = date.getSeconds();
    return mt < 10 ? '0' + mt : mt + '';
}

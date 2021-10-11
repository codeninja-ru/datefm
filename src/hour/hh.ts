/**
 * Hours; leading zero for single-digit hours (12-hour clock). [01-12]
 */
export default function hh(date: Date) : string {
    var ht = date.getHours() % 12 || 12;
    return ht < 10 ? '0' + ht : ht +'';
}

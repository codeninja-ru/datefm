/**
 * Hours; leading zero for single-digit hours (12-hour clock).
 */
export default function hh(date: Date) : string {
    var ht = date.getHours();
    if (ht == 0) {
        return '00';
    }
    ht = ht % 12 || 12;

    return ht < 10 ? '0' + ht : ht +'';
}

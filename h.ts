/**
 * Hours; no leading zero for single-digit hours (12-hour clock).
 */
export default function h(date : Date) : string {
    var ht = date.getHours();
    if (ht == 0) {
        return '0';
    }
    return (ht % 12 || 12) + '';
}

/**
 * Hours; 24-hour clock, with leading zero; [00-23]
 * @category hour
 */
export default function HH(date: Date) : string {
    var ht = date.getHours();
    return ht < 10 ? '0' + ht : ht + '';
}

/**
 * Hours; leading zero for single-digit hours (12-hour clock). [00-11]
 */
export default function KK(date: Date) : string {
    var kt = date.getHours() % 12;
    return kt < 10 ? '0' + kt : kt + '';
}

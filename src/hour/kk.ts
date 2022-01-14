/**
 * Hours; leading zero for single-digit hours (24-hour clock). [01-24]
 * @category hour
 */
export default function kk(date: Date) : string {
    var kt = date.getHours() || 24;
    return kt < 10 ? '0' + kt : kt + '';
}

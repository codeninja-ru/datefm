export default function HH(date: Date) : string {
    var ht = date.getHours();
    return ht < 10 ? '0' + ht : ht + '';
}

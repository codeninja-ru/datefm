/**
 * Milliseconds; 3 digits, leading zero
 * @category millisecond
 * */
export default function SSS(date: Date) : string {
    var st = date.getMilliseconds() + '';

    for (var z = ''; z.length < 3 - st.length; z+= '0'); //vmayorov: what is O(?) of z.length? can we speed up by using simple integer counter?

    return z + st;
}

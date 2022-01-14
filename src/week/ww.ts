import w from './w';

/**
 * ISO-8601 week number of year (leading zero)
 * @category week
 * @example 01, 02.. 53
 * */
export default function ww(date: Date) : string {
    var d = w(date);
    return d.length == 1 ? '0' + d : d;
}

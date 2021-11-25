import D from './d_';

/**
 * Day of year with 3 leading zeros, 001 - 365/366
 */
export default function DDD(date: Date) : string {
    const d = D(date);
    switch(d.length) {
        case 1:
            return '00' + d;
        case 2:
            return '0' + d;
        default:
            return d;
    }
}

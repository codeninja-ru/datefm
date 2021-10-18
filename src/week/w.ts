const MS_IN_DAY = 86400000;
/**
 * ISO-8601 week number of year
 * @see https://en.wikipedia.org/wiki/ISO_week_date#Algorithms
 * @example 1, 2.. 53
 * */
export default function w(date: Date) : string {
    // woy = (10 + doy − dow) div 7
    const c = new Date(date.getFullYear(), 0);
    const doy = (date.getTime() - c.getTime()) / MS_IN_DAY + 1;
    const dow = date.getDay() || 7;
    return Math.floor((10 + doy - dow) / 7) + '';
}

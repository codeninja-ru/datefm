const MS_IN_DAY = 86400000;

/**
 * Day of year 1 - 365/366
 */
export default function D(date: Date) : string {
    var d = new Date(date.getFullYear(), 0);
    return Math.floor((+date - +d) / MS_IN_DAY) + 1 + '';
}

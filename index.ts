type Formatter = (date: Date) => string;

/**
 * @example var formatFunction = datefm`${dd}-${mm}-${YYY}`;
 * console.log(formatFunction(new Date()));
 */
export function datefm(strings, ...formatters : array<Formatter>) : Formatter {
    return function(date: Date) : string {
        var result = '';
        for (var key of strings) {
            result = result + strings[key] + formatters[key](date);
        }

        return result;
    };
}

/**
 * Day of month (without leading zero)
 */
export function d(date: Date) : string {
    return date.getDate();
}

/**
 * Day of month (leading zero)
 */
export function dd(date: Date) : string {
    var dt = d(date);
    return dt > 9 ? dt : '0' + dt;
}

/**
 * Number of month starting from 1 (without leading zero)
 */
export function m(date: Date) : string {
    return date.getMonth() + 1;
}

/**
 * Number of month starting from 01 (leading zero)
 */
export function mm(date: Date) : string {
    var mt = m(date);
    return mt > 9 ? mt : '0' + mt;
}

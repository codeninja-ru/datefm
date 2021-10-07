type Formatter = (date: Date) => string;

/**
 * @example var formatFunction = datefm`${dd}-${mm}-${YYY}`;
 * console.log(formatFunction(new Date()));
 */
export function datefm(strings : TemplateStringsArray, ...formatters : Array<Formatter>) : Formatter {
    return function(date: Date) : string {
        var result = '';
        for (var key in strings) {
            console.log(formatters);

            result = result + strings[key] + formatters[key](date);
        }

        return result;
    };
}

export { default as d } from './d';

/**
 * Day of month (leading zero)
 */
export function dd(date: Date) : string {
    var dt = date.getDate();
    return (dt > 9 ? dt : '0' + dt)+'';
}

/**
 * Number of month starting from 1 (without leading zero)
 */
export function m(date: Date) : string {
    return (date.getMonth() + 1) + '';
}

/**
 * Number of month starting from 01 (leading zero)
 */
export function mm(date: Date) : string {
    var mt = date.getMinutes() + 1;
    return (mt > 9 ? mt : '0' + mt) + '';
}

export function yy(date: Date) : string {
    var yt = date.getFullYear() % 100;
    return (yt > 9 ? yt : '0' + yt) + '';
}

export function yyyy(date: Date) : string {
    return date.getFullYear() + '';
}

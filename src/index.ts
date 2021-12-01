type Formatter = (date: Date) => string;

/**
 * @example var formatFunction = udate`${DD}-${MM}-${YYY}`;
 * console.log(formatFunction(new Date()));
 */
export function format(strings : TemplateStringsArray, ...formatters : Array<Formatter>) : Formatter {
    return function(date: Date) : string {
        var result = '';
        for (var key in strings) {
            var formatter = formatters[key];
            result = result + strings[key] + (formatter ? formatter(date) : '');
        }

        return result;
    };
}

export * from './day';
export * from './year';
export * from './hour';
export * from './minute';
export * from './second';
export * from './millisecond';
export * from './week_day';
export * from './month';
export * from './week';

export type Formatter = (date: Date) => string;

/**
 * @example var formatFunction = format`${dd}-${mm}-${YYY}`;
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

export type Formatter = (date: Date) => string;

/**
 * @category format
 * @example ```javascript
 * import { format, dd, MM, yyy } from 'udate';
 *
 * var formatFunction = format`${dd}-${MM}-${yyy}`;
 * console.log(formatFunction(new Date()));
 * ```
 */
export default function format(strings : TemplateStringsArray, ...formatters : Array<Formatter>) : Formatter {
    return function(date: Date) : string {
        var result = '';
        for (var key in strings) {
            var formatter = formatters[key];
            result = result + strings[key] + (formatter ? formatter(date) : '');
        }

        return result;
    };
}

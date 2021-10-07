type Formatter = (date: Date) => string;

/**
 * @example var formatFunction = datefm`${dd}-${mm}-${YYY}`;
 * console.log(formatFunction(new Date()));
 */
export function datefm(strings : TemplateStringsArray, ...formatters : Array<Formatter>) : Formatter {
    return function(date: Date) : string {
        var result = '';
        for (var key in strings) {
            var formatter = formatters[key];
            result = result + strings[key] + (formatter ? formatter(date) : '');
        }

        return result;
    };
}

export { default as d } from './d';

export { default as dd } from './dd';

export { default as m } from './m';

export { default as mm } from './mm';

export { default as yy } from './yy';

export { default as yyyy } from './yyyy';

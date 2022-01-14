import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
import path from 'path';
import { indent } from '../funcs/indent.js';
import { pad2 } from '../funcs/pad2.js';

export class WeekDayTemplate {
    source(fileName, vars) {
        const { array, lang, desc } = vars;

        return `// auto-generated, DO NOT EDIT, see scripts/${path.basename(__filename)}
const DAYS_OF_WEEK = ${array.toJsArray()} as const;

/**
 * ${desc}
 * @lang ${lang.name}
 * @category week_day
 * @returns ${array.toExampleDoc()}
 * @example \`\`\`javascript
 * import { format } from 'udate';
 * import ${fileName.name} from 'udate/week_day/${lang}/${fileName.importName()}';
 *
 * console.log(format\`The day of the week is \$\{${fileName.name}\}!\`(new Date()));
 * \`\`\`
 * */
export default function ${fileName.name}(date: Date) : typeof DAYS_OF_WEEK[number] {
    return DAYS_OF_WEEK[date.getDay()];
}`;
    }

    test(fileName, vars) {
        const { array, lang, desc } = vars;
        const items = array
              .values()
              .map((value, key) => {
                  return indent(2,  `expect(formatter(new Date('10/${pad2(key + 3)}/2021 10:10:10'))).toEqual('${value}');`);
              })
              .join('\n');
        return `// auto-generated, DO NOT EDIT, see scripts/${path.basename(__filename)}
import { format } from 'udate';
import ${fileName.name} from 'udate/week_day/${lang}/${fileName.name}';

describe('${fileName.name} (${lang})', () => {
    test('format day of week', () => {
        const formatter = format\`\$\{${fileName.name}\}\`;
${items}
    });

});`;
    }
}

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
import path from 'path';
import { indent } from '../funcs/indent.js';
import { pad2 } from '../funcs/pad2.js';

export class WeekDayTemplate {
    source(fileName, vars) {
        const { array, lang, desc } = vars;

        return `// auto-generated, DO NOT EDIT, see tools/${path.basename(__filename)}
const DAYS_OF_WEEK = ${array.toJsArray()};

/**
 * ${desc}
 * @lang ${lang.name}
 * @example ${array.toExampleDoc()}
 * */
export default function ${fileName.name}(date: Date) : string {
    return DAYS_OF_WEEK[date.getDay()];
}
`;
    }

    test(fileName, vars) {
        const { array, lang, desc } = vars;
        const items = array
              .values()
              .map((value, key) => {
                  return indent(2,  `expect(formatter(new Date('10/${pad2(key + 3)}/2021 10:10:10 UTC'))).toEqual('${value}');`);
              })
              .join('\n');
        return `// auto-generated, DO NOT EDIT, see tools/${path.basename(__filename)}
import { datefm } from 'datefm';
import ${fileName.name} from 'datefm/week_day/${lang}/${fileName.name}';

describe('${fileName.name} (${lang})', () => {
    test('format day of week', () => {
        const formatter = datefm\`\$\{${fileName.name}\}\`;
${items}
    });

});`;
    }
}

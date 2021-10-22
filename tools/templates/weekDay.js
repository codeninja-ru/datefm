import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
import path from 'path';
import { indent } from '../funcs/indent.js';
import { pad2 } from '../funcs/pad2.js';

export class WeekDayTemplate {
    source(vars) {
        const { array, lang, fileName, desc } = vars;

        return `// auto-generated, DO NOT EDIT, see tools/${path.basename(__filename)}
const MONTHS = ${array.toJsArray()};

/**
 * ${desc}
 * @lang ${lang.name}
 * @example ${array.toExampleDoc()}
 * */
export default function ${fileName.name}(date: Date) : string {
    return MONTHS[date.getMonth()];
}
`;
    }

    test(vars) {
        console.log(vars);

        const { array, lang, name, desc, fileName } = vars;
        const items = array
              .values()
              .map((value, key) => {
                  return indent(2, `expect(formatter(new Date('${pad2(key + 1)}/10/2021 10:10:10 UTC'))).toEqual('${value}');`
);
              })
              .join('\n');
        return `// auto-generated, DO NOT EDIT, see tools/${path.basename(__filename)}
import { datefm } from 'datefm';
import ${name} from 'datefm/month/${lang}/${fileName.importName()}';

describe('${name} (${lang})', () => {
    test('format month', () => {
        const formatter = datefm\`\$\{${name}\}\`;
${items}
    });

});
`;
    }
}

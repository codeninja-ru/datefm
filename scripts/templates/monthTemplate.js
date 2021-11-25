import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
import path from 'path';
import { indent } from '../funcs/indent.js';
import { pad2 } from '../funcs/pad2.js';

export class MonthTemplate {
    source(fileName, vars) {
        const { array, lang, desc } = vars;

        return `// auto-generated, DO NOT EDIT, see scripts/${path.basename(__filename)}
const MONTHS = ${array.toJsArray()} as const;

/**
 * ${desc}
 * @lang ${lang.name}
 * @example ${array.toExampleDoc()}
 * */
export default function ${fileName.name}(date: Date) : typeof MONTHS[number] {
    return MONTHS[date.getMonth()];
}
`;
    }

    test(fileName, vars) {
        const { array, lang, desc } = vars;
        const items = array
              .values()
              .map((value, key) => {
                  return indent(2, `expect(formatter(new Date('${pad2(key + 1)}/10/2021 10:10:10'))).toEqual('${value}');`
);
              })
              .join('\n');
        return `// auto-generated, DO NOT EDIT, see scripts/${path.basename(__filename)}
import { datefm } from 'datefm';
import ${fileName.name} from 'datefm/month/${lang}/${fileName.importName()}';

describe('${fileName.name} (${lang})', () => {
    test('format month', () => {
        const formatter = datefm\`\$\{${fileName.name}\}\`;
${items}
    });

});
`;
    }
}

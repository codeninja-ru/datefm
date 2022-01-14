import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
import path from 'path';
import { indent } from '../funcs/indent.js';
import { pad2 } from '../funcs/pad2.js';

export class MonthTemplate {
    source(fileName, vars) {
        const { array, lang, desc } = vars;

        const arrayName = `${lang.const}_${fileName.name}_MONTHS`;
        return `// auto-generated, DO NOT EDIT, see scripts/${path.basename(__filename)}
const ${arrayName} = ${array.toJsArray()} as const;

/**
 * ${desc}
 * @lang ${lang.name}
 * @category month
 * @returns ${array.toExampleDoc()}
 * @example \`\`\`javascript
 * import { format } from 'udate';
 * import ${fileName.name} from 'udate/month/${lang}/${fileName.importName()}';
 *
 * console.log(format\`The current month is \$\{${fileName.name}\}!\`(new Date()));
 * \`\`\`
 * */
export default function ${fileName.name}(date: Date) : typeof ${arrayName}[number] {
    return ${arrayName}[date.getMonth()];
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
import { format } from 'udate';
import ${fileName.name} from 'udate/month/${lang}/${fileName.importName()}';

describe('${fileName.name} (${lang})', () => {
    test('format month', () => {
        const formatter = format\`\$\{${fileName.name}\}\`;
${items}
    });

});
`;
    }
}

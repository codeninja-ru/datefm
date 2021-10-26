import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
import path from 'path';

export class ExportIfEqual {
    constructor(fileName, array, template) {
        this.fileName = fileName;
        this.array = this.array;
        this.template = template;
    }

    source(fileName, vars) {
        if (vars.array.isEqual(this.array)) {
            return `// auto-generated, DO NOT EDIT, see tools/${path.basename(__filename)}
export { default } from './${fileName.importName()}';
`;
        } else {
            return this.template.source(fileName, vars);
        }
    }

    test(fileName, vars) {
        return this.template.test(fileName, vars);
    }
}

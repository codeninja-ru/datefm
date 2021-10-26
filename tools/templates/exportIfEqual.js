import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
import path from 'path';

export class ExportIfEqual {
    constructor(fileName, array, template) {
        this.fileName = fileName;
        this.array = array;
        this.template = template;
    }

    source(fileName, vars) {
        if (vars.array.isEqual(this.array)) {
            console.log(`copy detected, export from ./${this.fileName.sourceName()}`);

            return `// auto-generated, DO NOT EDIT, see tools/${path.basename(__filename)}
export { default } from './${this.fileName.importName()}';
`;
        } else {
            return this.template.source(fileName, vars);
        }
    }

    test(fileName, vars) {
        return this.template.test(fileName, vars);
    }
}

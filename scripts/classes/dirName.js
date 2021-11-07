import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SRC_DIR = path.join(__dirname, '../../src');

export class DirName {
    constructor(name, rootPath = SRC_DIR) {
        this.name = name;
        this.rootPath = rootPath;
    }

    path() {
        return path.join(this.rootPath, this.name);
    }

    filePath(fileName) {
        return path.join(this.rootPath, this.name, fileName);
    }

    join(name) {
        return new DirName(name, this.path());
    }

    joinLang(lang) {
        return this.join(lang.code);
    }

    shortDirPath() {
        const dir1 = path.basename(this.rootPath);
        const dir2 = this.name;
        return path.join(dir1, dir2);
    }

}

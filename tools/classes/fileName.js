function getFileName(name) {
    if (/[A-Z+]/.test(name)) {
        return name.toLowerCase() + '_';
    } else {
        return name;
    }
}

export class FileName {
    constructor(dirName, name) {
        this.name = name;
        this.dirName = dirName;
    }

    sourceName() {
        return getFileName(this.name) + '.ts';
    }

    sourcePath(lang) {
        return this.dirName.joinLang(lang).filePath(this.sourceName());
    }

    testName() {
        return getFileName(this.name) + '.test.ts';
    }

    testPath(lang) {
        return this.dirName.joinLang(lang).filePath(this.testName());
    }

    importName() {
        return getFileName(this.name);
    }
}

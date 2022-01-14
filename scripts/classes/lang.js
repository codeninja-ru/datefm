const LANGS = {
    en: 'English',
    ru: 'Russian',
};

export class Lang {
    constructor(code) {
        this.code = code;
    }

    get name() {
        return LANGS[this.code];
    }

    get const() {
        return this.code.toUpperCase();
    }

    toString() {
        return this.code;
    }
}

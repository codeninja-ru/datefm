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

    toString() {
        return this.code;
    }
}

export class ConstArray {
    constructor(array) {
        this.array = array;
    }

    values() {
        return this.array;
    }

    toJsArray() {
        return `[${this.array.map(item => `'${item}'`).join(', ')}]`;
    }

    toExampleDoc() {
        return this.array.slice(0, 4).join(', ') + '...';
    }

    isEqual(array) {
        var a = this.array;
        var b = array;

        if (a === b) return true;
        if (a == null || b == null) return false;
        if (a.length !== b.length) return false;

        for (var i = 0; i < a.length; ++i) {
            if (a[i] !== b[i]) return false;
        }
        return true;
    }
}

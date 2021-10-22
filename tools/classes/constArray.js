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

}

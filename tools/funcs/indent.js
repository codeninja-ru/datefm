export function indent(tabCount, str) {
    return Array(tabCount).fill('    ').join('') + str;
}

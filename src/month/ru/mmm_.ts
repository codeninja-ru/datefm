const MONTHS_SHORT = [
    "янв.",
    "февр.",
    "мар.",
    "апр.",
    "мая",
    "июня",
    "июля",
    "авг.",
    "сент.",
    "окт.",
    "нояб.",
    "дек."
];

/**
 * Name of month, Abbreveated. Russian
 * Month number/name, format style (intended to be used in conjunction with ‘d’ for day number).
 * @example янв, февр, мая, июня ...
 * */
export default function MMM(date: Date) : string {
    return MONTHS_SHORT[date.getMonth()];
}

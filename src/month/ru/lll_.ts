const MONTHS_SHORT = [
    "янв.",
    "февр.",
    "март",
    "апр.",
    "май",
    "июнь",
    "июль",
    "авг.",
    "сент.",
    "окт.",
    "нояб.",
    "дек."
];

/**
 * Name of month, Abbreveated. Russian
 * Stand-Alone Month number/name (intended to be used without ‘d’ for day number).
 * @example янв, февр, май, июнь ...
 * */
export default function LLL(date: Date) : string {
    return MONTHS_SHORT[date.getMonth()];
}

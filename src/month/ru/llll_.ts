const MONTHS = [
    "январь",
    "февраль",
    "март",
    "апрель",
    "май",
    "июнь",
    "июль",
    "август",
    "сентябрь",
    "октябрь",
    "ноябрь",
    "декабрь"
];

/**
 * Full name of month, Russian,
 * Stand-Alone Month number/name (intended to be used without ‘d’ for day number).
 * @example января, февраля, марта...
 * */
export default function LLLL(date: Date) : string {
    return MONTHS[date.getMonth()];
}

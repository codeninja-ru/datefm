const MONTHS = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

/**
 * Full name of month, Russian,  (intended to be used in conjunction with ‘d’ for day number).
 * @example января, февраля, марта...
 * */
export default function MMMM(date: Date) : string {
    return MONTHS[date.getMonth()];
}

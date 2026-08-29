/**
 * Checks if the given date falls on a weekend (Saturday or Sunday).
 * Verifica se la data data cade in un fine settimana (sabato o domenica).
 * 
 * @param {Date} date - The Date to check / La data da verificare
 * @returns {boolean} True if weekend / True se fine settimana
 */
function isWeekend(date) {
    if (!(date instanceof Date) || isNaN(date.getTime())) {
        return false;
    }
    const day = date.getDay();
    return day === 0 || day === 6;
}

export { isWeekend };

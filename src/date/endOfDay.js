/**
 * Returns a new Date with the same date but time set to 23:59:59.999 (local time).
 * Restituisce un nuovo Date con la stessa data ma ora impostata a 23:59:59.999 (ora locale).
 * 
 * @param {Date} date - The Date object / L'oggetto Date
 * @returns {Date} New Date at end of day / Nuovo Date alla fine del giorno
 */
function endOfDay(date) {
    if (!(date instanceof Date) || isNaN(date.getTime())) {
        return new Date('Invalid Date');
    }
    const result = new Date(date.getTime());
    result.setHours(23, 59, 59, 999);
    return result;
}

export { endOfDay };

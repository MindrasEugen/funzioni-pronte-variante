/**
 * Returns a new Date with the same date but time set to 00:00:00.000 (local time).
 * Restituisce un nuovo Date con la stessa data ma ora impostata a 00:00:00.000 (ora locale).
 * 
 * @param {Date} date - The Date object / L'oggetto Date
 * @returns {Date} New Date at start of day / Nuovo Date all'inizio del giorno
 */
function startOfDay(date) {
    if (!(date instanceof Date) || isNaN(date.getTime())) {
        return new Date('Invalid Date');
    }
    const result = new Date(date.getTime());
    result.setHours(0, 0, 0, 0);
    return result;
}

export { startOfDay };

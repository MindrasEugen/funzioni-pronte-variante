/**
 * Returns a new Date with the specified number of days subtracted.
 * Restituisce un nuovo Date con i giorni sottratti specificati.
 * 
 * @param {Date} date - The Date object / L'oggetto Date
 * @param {number} days - Number of days to subtract / Numero di giorni da sottrarre
 * @returns {Date} New Date with days subtracted / Nuovo Date con i giorni sottratti
 */
function subDays(date, days) {
    return addDays(date, -days);
}

/**
 * Returns a new Date with the specified number of days added.
 * Restituisce un nuovo Date con i giorni aggiunti specificati.
 * 
 * @param {Date} date - The Date object
 * @param {number} days - Number of days to add
 * @returns {Date} New Date with days added
 */
function addDays(date, days) {
    if (!(date instanceof Date) || isNaN(date.getTime())) {
        return new Date('Invalid Date');
    }
    const result = new Date(date.getTime());
    result.setDate(result.getDate() + days);
    return result;
}

export { subDays };

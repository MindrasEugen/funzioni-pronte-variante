/**
 * Returns a new Date with the specified number of days added.
 * Restituisce un nuovo Date con i giorni aggiunti specificati.
 * 
 * @param {Date} date - The Date object / L'oggetto Date
 * @param {number} days - Number of days to add (can be negative) / Numero di giorni da aggiungere
 * @returns {Date} New Date with days added / Nuovo Date con i giorni aggiunti
 */
function addDays(date, days) {
    if (!(date instanceof Date) || isNaN(date.getTime())) {
        return new Date('Invalid Date');
    }
    const result = new Date(date.getTime());
    result.setDate(result.getDate() + days);
    return result;
}

export { addDays };

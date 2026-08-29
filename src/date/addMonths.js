/**
 * Returns a new Date with the specified number of months added.
 * Restituisce un nuovo Date con i mesi aggiunti specificati.
 * 
 * @param {Date} date - The Date object / L'oggetto Date
 * @param {number} months - Number of months to add (can be negative) / Numero di mesi da aggiungere
 * @returns {Date} New Date with months added / Nuovo Date con i mesi aggiunti
 */
function addMonths(date, months) {
    if (!(date instanceof Date) || isNaN(date.getTime())) {
        return new Date('Invalid Date');
    }
    const result = new Date(date.getTime());
    const originalDay = result.getDate();
    result.setDate(1);
    result.setMonth(result.getMonth() + months);
    const daysInTargetMonth = new Date(result.getFullYear(), result.getMonth() + 1, 0).getDate();
    result.setDate(Math.min(originalDay, daysInTargetMonth));
    return result;
}

export { addMonths };

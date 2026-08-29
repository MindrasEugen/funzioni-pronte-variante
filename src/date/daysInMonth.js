/**
 * Returns the number of days in the specified month and year.
 * Restituisce il numero di giorni nel mese e anno specificati.
 * Month is 1-indexed (1 = January).
 * Il mese è 1-indexed (1 = Gennaio).
 * 
 * @param {number} year - The year / L'anno
 * @param {number} month - The month (1-12) / Il mese (1-12)
 * @returns {number} Number of days in month / Numero di giorni nel mese
 */
function daysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

export { daysInMonth };

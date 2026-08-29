/**
 * Returns the number of days between two dates (date2 - date1).
 * Restituisce il numero di giorni tra due date (date2 - date1).
 * 
 * @param {Date} date1 - First date / Prima data
 * @param {Date} date2 - Second date / Seconda data
 * @returns {number} Number of days difference / Numero di giorni di differenza
 */
function diffInDays(date1, date2) {
    if (!(date1 instanceof Date) || !(date2 instanceof Date) || 
        isNaN(date1.getTime()) || isNaN(date2.getTime())) {
        return 0;
    }
    
    const utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
    const utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
    
    return Math.floor((utc2 - utc1) / 86400000);
}

export { diffInDays };

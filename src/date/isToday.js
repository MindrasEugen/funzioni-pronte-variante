/**
 * Checks if the given date has the same year, month, and day as today (local time).
 * Verifica se la data data ha lo stesso anno, mese e giorno di oggi (ora locale).
 * 
 * @param {Date} date - The Date to check / La data da verificare
 * @returns {boolean} True if date is today / True se la data è oggi
 */
function isToday(date) {
    if (!(date instanceof Date) || isNaN(date.getTime())) {
        return false;
    }
    const now = new Date();
    return date.getFullYear() === now.getFullYear() &&
           date.getMonth() === now.getMonth() &&
           date.getDate() === now.getDate();
}

export { isToday };

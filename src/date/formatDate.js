/**
 * Formats a Date object according to the specified format string.
 * Formatta un oggetto Date secondo la stringa di formato specificata.
 * Tokens: YYYY (year), MM (month), DD (day), HH (hours), mm (minutes), ss (seconds)
 * 
 * @param {Date} date - The Date object to format / L'oggetto Date da formattare
 * @param {string} format - Format string (default: 'YYYY-MM-DD') / Stringa di formato
 * @returns {string} Formatted date string / Stringa data formattata
 */
function formatDate(date, format = 'YYYY-MM-DD') {
    if (!(date instanceof Date) || isNaN(date.getTime())) {
        return 'Invalid Date';
    }
    
    const pad = (num) => num.toString().padStart(2, '0');
    
    const replacements = {
        YYYY: date.getFullYear(),
        MM: pad(date.getMonth() + 1),
        DD: pad(date.getDate()),
        HH: pad(date.getHours()),
        mm: pad(date.getMinutes()),
        ss: pad(date.getSeconds())
    };
    
    let result = format;
    for (const [token, value] of Object.entries(replacements)) {
        result = result.replace(new RegExp(token, 'g'), value);
    }
    
    return result;
}

export { formatDate };

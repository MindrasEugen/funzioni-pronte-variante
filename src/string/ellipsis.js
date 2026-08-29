/**
 * Truncates a string and adds ellipsis if it exceeds maxLength.
 * Tronca una stringa e aggiunge '...' se supera maxLength.
 * The total length will be exactly maxLength (including ellipsis).
 * La lunghezza totale sarà esattamente maxLength (inclusi i puntini).
 * 
 * @param {string} str - The string to truncate / La stringa da troncare
 * @param {number} maxLength - Maximum length of result / Lunghezza massima del risultato
 * @returns {string} Truncated string with ellipsis / Stringa tronca con puntini
 */
function ellipsis(str, maxLength) {
    if (typeof str !== 'string') return '';
    if (maxLength <= 0) return '';
    if (str.length <= maxLength) return str;
    
    const ellipsisStr = '...';
    if (maxLength < ellipsisStr.length) {
        return ellipsisStr.slice(0, maxLength);
    }
    
    return str.slice(0, maxLength - ellipsisStr.length) + ellipsisStr;
}

export { ellipsis };

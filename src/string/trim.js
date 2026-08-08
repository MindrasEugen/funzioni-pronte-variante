/**
 * Removes whitespace from both ends of a string.
 * Rimuove gli spazi da entrambe le estremità di una stringa.
 * 
 * @param {string} str - The string to trim / La stringa da trimmare
 * @returns {string} - The trimmed string / La stringa trimmata
 */
function trim(str) {
    if (typeof str !== 'string') return '';
    return str.trim();
}

export { trim };

/**
 * Removes whitespace from the beginning of a string.
 * Rimuove gli spazi all'inizio di una stringa.
 * 
 * @param {string} str - The string to trim / La stringa da trimmare
 * @returns {string} - The trimmed string / La stringa trimmata
 */
function trimStart(str) {
    if (typeof str !== 'string') return '';
    return str.trimStart();
}

export { trimStart };

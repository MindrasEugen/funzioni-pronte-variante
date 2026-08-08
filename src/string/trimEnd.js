/**
 * Removes whitespace from the end of a string.
 * Rimuove gli spazi alla fine di una stringa.
 * 
 * @param {string} str - The string to trim / La stringa da trimmare
 * @returns {string} - The trimmed string / La stringa trimmata
 */
function trimEnd(str) {
    if (typeof str !== 'string') return '';
    return str.trimEnd();
}

export { trimEnd };

/**
 * Converts a string to uppercase.
 * Converte una stringa in maiuscolo.
 * 
 * @param {string} str - The string to convert / La stringa da convertire
 * @returns {string} - The uppercase string / La stringa in maiuscolo
 */
function toUpper(str) {
    if (typeof str !== 'string') return '';
    return str.toUpperCase();
}

export { toUpper };

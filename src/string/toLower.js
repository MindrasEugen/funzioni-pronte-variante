/**
 * Converts a string to lowercase.
 * Converte una stringa in minuscolo.
 * 
 * @param {string} str - The string to convert / La stringa da convertire
 * @returns {string} - The lowercase string / La stringa in minuscolo
 */
function toLower(str) {
    if (typeof str !== 'string') return '';
    return str.toLowerCase();
}

export { toLower };

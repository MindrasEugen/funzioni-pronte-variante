/**
 * Truncates a string to a maximum number of characters.
 * Tronca una stringa a un numero massimo di caratteri.
 * 
 * @param {string} text - The string to truncate / La stringa da troncare
 * @param {number} max - The maximum number of characters / Il numero massimo di caratteri
 * @returns {string} The truncated string / La stringa tronca
 */
function truncate(text, max) {
    if (typeof text !== 'string') return '';
    if (max <= 0) return '';
    if (text.length <= max) return text;
    return text.slice(0, max);
}

export { truncate };

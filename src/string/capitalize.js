/**
 * Capitalizes the first letter of a string.
 * 
 * @param {string} text - The string to capitalize
 * @returns {string} The string with first letter uppercase and rest lowercase
 */
function capitalize(text) {
    if (typeof text !== 'string') return '';
    if (text.length === 0) return '';
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

export { capitalize };

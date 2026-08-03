/**
 * Truncates a string to a maximum number of characters.
 * 
 * @param {string} text - The string to truncate
 * @param {number} max - The maximum number of characters
 * @returns {string} The truncated string
 */
function truncate(text, max) {
    if (typeof text !== 'string') return '';
    if (max <= 0) return '';
    if (text.length <= max) return text;
    return text.slice(0, max);
}

export { truncate };

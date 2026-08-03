/**
 * Counts the number of characters in a string.
 * 
 * @param {string} text - The string to count characters of
 * @returns {number} The number of characters
 */
function countChars(text) {
    if (typeof text !== 'string') return 0;
    return text.length;
}

export { countChars };

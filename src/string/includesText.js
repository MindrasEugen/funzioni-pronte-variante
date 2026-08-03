/**
 * Checks if a string contains a substring.
 * 
 * @param {string} text - The string to search in
 * @param {string} substring - The substring to search for
 * @returns {boolean} True if the substring is contained in the text
 */
function includesText(text, substring) {
    if (typeof text !== 'string' || typeof substring !== 'string') return false;
    return text.includes(substring);
}

export { includesText };

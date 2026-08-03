/**
 * Replaces a substring with another in a string.
 * 
 * @param {string} text - The string to perform replacement in
 * @param {string} oldText - The substring to replace
 * @param {string} newText - The new text to insert
 * @returns {string} The string with replacements made
 */
function replaceText(text, oldText, newText) {
    if (typeof text !== 'string') return '';
    return text.split(oldText).join(newText);
}

export { replaceText };

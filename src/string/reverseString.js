/**
 * Reverses a string.
 * 
 * @param {string} text - The string to reverse
 * @returns {string} The reversed string
 */
function reverseString(text) {
    if (typeof text !== 'string') return '';
    return text.split('').reverse().join('');
}

export { reverseString };

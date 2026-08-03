/**
 * Reverses a string.
 * Inverte una stringa.
 * 
 * @param {string} text - The string to reverse / La stringa da invertire
 * @returns {string} The reversed string / La stringa invertita
 */
function reverseString(text) {
    if (typeof text !== 'string') return '';
    return text.split('').reverse().join('');
}

export { reverseString };

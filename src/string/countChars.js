/**
 * Counts the number of characters in a string.
 * Conta il numero di caratteri in una stringa.
 * 
 * @param {string} text - The string to count characters of / La stringa di cui contare i caratteri
 * @returns {number} The number of characters / Il numero di caratteri
 */
function countChars(text) {
    if (typeof text !== 'string') return 0;
    return text.length;
}

export { countChars };

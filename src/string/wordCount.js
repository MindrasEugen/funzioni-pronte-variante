/**
 * Returns the number of words in a string.
 * Restituisce il numero di parole in una stringa.
 * 
 * @param {string} str - The string to count / La stringa da contare
 * @returns {number} Number of words / Numero di parole
 */
function wordCount(str) {
    if (typeof str !== 'string') return 0;
    const trimmed = str.trim();
    if (trimmed === '') return 0;
    return trimmed.split(/\s+/).length;
}

export { wordCount };

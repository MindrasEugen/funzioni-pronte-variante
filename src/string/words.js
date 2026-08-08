/**
 * Splits a string into an array of words.
 * Divide una stringa in un array di parole.
 * 
 * @param {string} str - The string to split / La stringa da dividere
 * @param {string} [pattern] - The pattern to split by / Lo schema per dividere
 * @returns {Array} - The array of words / L'array di parole
 */
function words(str, pattern) {
    if (typeof str !== 'string') return [];
    
    const regex = pattern ? new RegExp(pattern, 'g') : /\s+/;
    return str.trim().split(regex).filter(word => word.length > 0);
}

export { words };

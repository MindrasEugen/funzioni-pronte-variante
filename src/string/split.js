/**
 * Splits a string into an array of substrings.
 * Divide una stringa in un array di sottostringhe.
 * 
 * @param {string} str - The string to split / La stringa da dividere
 * @param {string|RegExp} separator - The separator to split by / Il separatore per dividere
 * @param {number} [limit] - The limit on the number of splits / Il limite sul numero di divisioni
 * @returns {Array} - The array of substrings / L'array di sottostringhe
 */
function split(str, separator, limit) {
    if (typeof str !== 'string') return [];
    return str.split(separator, limit);
}

export { split };

/**
 * Removes duplicates from an array.
 * Rimuove i duplicati da un array.
 * 
 * @param {Array} array - The array to remove duplicates from / L'array da cui rimuovere i duplicati
 * @returns {Array} A new array without duplicates / Un nuovo array senza duplicati
 */
function unique(array) {
    if (!Array.isArray(array)) return [];
    return [...new Set(array)];
}

export { unique };

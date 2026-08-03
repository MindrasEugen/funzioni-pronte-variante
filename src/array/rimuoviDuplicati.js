/**
 * Rimuove i duplicati da un array.
 * 
 * @param {Array} array - L'array da cui rimuovere i duplicati
 * @returns {Array} Un nuovo array senza duplicati
 */
function rimuoviDuplicati(array) {
    if (!Array.isArray(array)) return [];
    return [...new Set(array)];
}

export { rimuoviDuplicati };

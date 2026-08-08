/**
 * Rimuove tutti gli elementi falsy da un array.
 * 
 * @param {Array} array - L'array di riferimento
 * @returns {Array} - Un array senza elementi falsy
 */
function compact(array) {
    if (!Array.isArray(array)) {
        return [];
    }
    return array.filter(Boolean);
}

export { compact };

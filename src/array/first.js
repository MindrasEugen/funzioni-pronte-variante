/**
 * Restituisce il primo elemento di un array.
 * 
 * @param {Array} array - L'array di riferimento
 * @returns {*} - Il primo elemento o undefined se l'array è vuoto
 */
function first(array) {
    if (!Array.isArray(array) || array.length === 0) {
        return undefined;
    }
    return array[0];
}

export { first };

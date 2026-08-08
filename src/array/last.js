/**
 * Restituisce l'ultimo elemento di un array.
 * 
 * @param {Array} array - L'array di riferimento
 * @returns {*} - L'ultimo elemento o undefined se l'array è vuoto
 */
function last(array) {
    if (!Array.isArray(array) || array.length === 0) {
        return undefined;
    }
    return array[array.length - 1];
}

export { last };

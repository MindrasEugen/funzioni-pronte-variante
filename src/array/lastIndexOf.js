/**
 * Restituisce l'indice dell'ultimo elemento che corrisponde al valore cercato.
 * 
 * @param {Array} array - L'array in cui cercare
 * @param {*} value - Il valore da cercare
 * @param {number} [fromIndex] - L'indice da cui iniziare la ricerca (dalla fine)
 * @returns {number} - L'indice del valore cercato, o -1 se non trovato
 */
function lastIndexOf(array, value, fromIndex) {
    if (!Array.isArray(array)) {
        return -1;
    }
    
    if (fromIndex === undefined) {
        fromIndex = array.length - 1;
    }
    
    // Handle negative fromIndex
    if (fromIndex < 0) {
        fromIndex = Math.max(-1, array.length + fromIndex);
    }
    
    for (let i = Math.min(fromIndex, array.length - 1); i >= 0; i--) {
        if (array[i] === value) {
            return i;
        }
    }
    
    return -1;
}

export { lastIndexOf };

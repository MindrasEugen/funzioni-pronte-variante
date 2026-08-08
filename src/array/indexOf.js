/**
 * Restituisce l'indice del primo elemento che corrisponde al valore cercato.
 * 
 * @param {Array} array - L'array in cui cercare
 * @param {*} value - Il valore da cercare
 * @param {number} [fromIndex=0] - L'indice da cui iniziare la ricerca
 * @returns {number} - L'indice del valore cercato, o -1 se non trovato
 */
function indexOf(array, value, fromIndex = 0) {
    if (!Array.isArray(array)) {
        return -1;
    }
    
    // Handle negative fromIndex
    let startIndex = fromIndex;
    if (fromIndex < 0) {
        startIndex = Math.max(0, array.length + fromIndex);
    }
    
    for (let i = startIndex; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }
    
    return -1;
}

export { indexOf };

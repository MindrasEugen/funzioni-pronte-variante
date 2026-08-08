/**
 * Riempie un array con un valore specificato.
 * 
 * @param {Array} array - L'array di riferimento
 * @param {*} value - Il valore con cui riempire
 * @param {number} [start=0] - Indice di inizio (inclusivo)
 * @param {number} [end] - Indice di fine (esclusivo)
 * @returns {Array} - L'array modificato
 */
function fill(array, value, start = 0, end) {
    if (!Array.isArray(array)) {
        return [];
    }
    
    if (end === undefined) {
        end = array.length;
    }
    
    // Handle negative indices
    if (start < 0) {
        start = Math.max(0, array.length + start);
    }
    if (end < 0) {
        end = Math.max(0, array.length + end);
    }
    
    for (let i = start; i < Math.min(end, array.length); i++) {
        array[i] = value;
    }
    
    return array;
}

export { fill };

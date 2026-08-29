/**
 * Returns an object with counts for each distinct value returned by the function.
 * Restituisce un oggetto con il conteggio per ogni valore distinto restituito dalla funzione.
 * 
 * @param {Array} array - The array to process / L'array da elaborare
 * @param {Function} fn - Function to transform each element / Funzione per trasformare ogni elemento
 * @returns {Object} Object with value counts / Oggetto con conteggi per valore
 */
function countBy(array, fn) {
    if (!Array.isArray(array) || typeof fn !== 'function') return {};
    
    const result = {};
    for (const element of array) {
        const key = fn(element);
        result[key] = (result[key] || 0) + 1;
    }
    
    return result;
}

export { countBy };

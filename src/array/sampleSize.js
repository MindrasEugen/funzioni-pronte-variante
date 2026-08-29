/**
 * Returns a new array with n unique random elements from the original array.
 * Restituisce un nuovo array con n elementi casuali univoci dall'array originale.
 * 
 * @param {Array} array - The source array / L'array sorgente
 * @param {number} n - Number of elements to sample / Numero di elementi da prelevare
 * @returns {Array} New array with sampled elements / Nuovo array con elementi prelevati
 */
function sampleSize(array, n) {
    if (!Array.isArray(array) || n <= 0) return [];
    n = Math.min(n, array.length);
    
    const copy = [...array];
    const result = [];
    
    for (let i = 0; i < n; i++) {
        const index = Math.floor(Math.random() * copy.length);
        result.push(copy.splice(index, 1)[0]);
    }
    
    return result;
}

export { sampleSize };

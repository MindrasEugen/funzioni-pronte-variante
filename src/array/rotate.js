/**
 * Returns a new array with elements rotated by n positions.
 * Restituisce un nuovo array con elementi ruotati di n posizioni.
 * Positive n rotates to the right, negative to the left.
 * n positivo ruota a destra, negativo a sinistra.
 * 
 * @param {Array} array - The array to rotate / L'array da ruotare
 * @param {number} n - Number of positions to rotate / Numero di posizioni da ruotare
 * @returns {Array} New rotated array / Nuovo array ruotato
 */
function rotate(array, n) {
    if (!Array.isArray(array) || array.length === 0) return [];
    
    n = n % array.length;
    if (n < 0) n += array.length;
    
    const splitIndex = array.length - n;
    return [...array.slice(splitIndex), ...array.slice(0, splitIndex)];
}

export { rotate };

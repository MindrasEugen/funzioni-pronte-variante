/**
 * Restituisce i primi n elementi di un array.
 * 
 * @param {Array} array - L'array di riferimento
 * @param {number} n - Il numero di elementi da prendere
 * @returns {Array} - Un array con i primi n elementi
 */
function take(array, n) {
    if (!Array.isArray(array) || n < 0) {
        return [];
    }
    return array.slice(0, n);
}

export { take };

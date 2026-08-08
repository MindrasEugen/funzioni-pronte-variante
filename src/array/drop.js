/**
 * Restituisce tutti gli elementi di un array tranne i primi n.
 * 
 * @param {Array} array - L'array di riferimento
 * @param {number} n - Il numero di elementi da escludere
 * @returns {Array} - Un array senza i primi n elementi
 */
function drop(array, n) {
    if (!Array.isArray(array) || n < 0) {
        return [];
    }
    return array.slice(n);
}

export { drop };

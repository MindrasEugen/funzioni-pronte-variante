/**
 * Limita un valore tra un minimo e un massimo.
 * 
 * @param {number} value - Il valore da limitare
 * @param {number} min - Il valore minimo
 * @param {number} max - Il valore massimo
 * @returns {number} - Il valore limitato tra min e max
 */
function clamp(value, min, max) {
    if (value < min) return min;
    if (value > max) return max;
    return value;
}

export { clamp };

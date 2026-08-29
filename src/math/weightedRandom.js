/**
 * Returns a random element from the array, weighted by the provided weights.
 * Restituisce un elemento casuale dall'array, ponderato dai pesi forniti.
 * 
 * @param {Array} items - Array of items / Array di elementi
 * @param {Array<number>} weights - Array of weights (must match items length) / Array di pesi
 * @returns {*} Random weighted element / Elemento casuale ponderato
 */
function weightedRandom(items, weights) {
    if (!Array.isArray(items) || !Array.isArray(weights) || items.length !== weights.length) {
        return undefined;
    }
    
    if (items.length === 0) return undefined;
    
    const totalWeight = weights.reduce((sum, w) => sum + (w || 0), 0);
    if (totalWeight === 0) return items[0];
    
    let random = Math.random() * totalWeight;
    
    for (let i = 0; i < items.length; i++) {
        random -= weights[i] || 0;
        if (random <= 0) {
            return items[i];
        }
    }
    
    return items[items.length - 1];
}

export { weightedRandom };

/**
 * Creates a memoized version of a function.
 * Crea una versione memoized di una funzione.
 * 
 * @param {Function} func - The function to memoize / La funzione da memoizzare
 * @returns {Function} - The memoized function / La funzione memoizzata
 */
function memoize(func) {
    const cache = new Map();
    
    return function(...args) {
        const key = JSON.stringify(args);
        
        if (cache.has(key)) {
            return cache.get(key);
        }
        
        const result = func.apply(this, args);
        cache.set(key, result);
        return result;
    };
}

export { memoize };

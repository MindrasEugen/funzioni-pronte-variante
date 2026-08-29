/**
 * Combines multiple arrays into an array of tuples.
 * Combina piu' array in un array di tuple.
 * 
 * @param {...Array} arrays - Arrays to zip together / Array da combinare
 * @returns {Array} Array of tuples / Array di tuple
 */
function zip(...arrays) {
    if (arrays.length === 0) return [];
    
    const maxLength = Math.max(...arrays.map(arr => arr.length));
    const result = [];
    
    for (let i = 0; i < maxLength; i++) {
        const tuple = arrays.map(arr => arr[i]);
        result.push(tuple);
    }
    
    return result;
}

export { zip };

/**
 * Divide un array in chunk di dimensione specificata.
 * 
 * @param {Array} array - L'array da dividere
 * @param {number} size - La dimensione di ogni chunk
 * @returns {Array} - Un array di chunk
 */
function chunk(array, size) {
    if (!Array.isArray(array) || size < 1) {
        return [];
    }
    
    const result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
}

export { chunk };

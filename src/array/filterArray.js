/**
 * Filters an array based on a condition.
 * 
 * @param {Array} array - The array to filter
 * @param {Function} callback - The filter function (must return true/false)
 * @returns {Array} A new array with elements that satisfy the condition
 */
function filterArray(array, callback) {
    if (!Array.isArray(array)) return [];
    return array.filter(callback);
}

export { filterArray };

/**
 * Sorts an array of numbers or objects.
 * 
 * @param {Array} array - The array to sort
 * @param {string} [key] - The property to use for sorting (for arrays of objects)
 * @returns {Array} A new sorted array
 */
function sortArray(array, key) {
    if (!Array.isArray(array)) return [];
    
    // If it's an array of objects and key is specified
    if (key && array.length > 0 && typeof array[0] === 'object') {
        return [...array].sort((a, b) => {
            if (a[key] < b[key]) return -1;
            if (a[key] > b[key]) return 1;
            return 0;
        });
    }
    
    // Primitive arrays
    if (typeof array[0] === 'string') {
        return [...array].sort();
    }
    return [...array].sort((a, b) => a - b);
}

export { sortArray };

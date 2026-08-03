/**
 * Removes duplicates from an array.
 * 
 * @param {Array} array - The array to remove duplicates from
 * @returns {Array} A new array without duplicates
 */
function unique(array) {
    if (!Array.isArray(array)) return [];
    return [...new Set(array)];
}

export { unique };

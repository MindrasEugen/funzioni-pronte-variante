/**
 * Sorts an array of numbers or objects.
 * Ordina un array di numeri o oggetti.
 * 
 * @param {Array} array - The array to sort / L'array da ordinare
 * @param {string} [key] - The property to use for sorting (for arrays of objects) / La proprietà da usare per l'ordinamento (per array di oggetti)
 * @returns {Array} A new sorted array / Un nuovo array ordinato
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

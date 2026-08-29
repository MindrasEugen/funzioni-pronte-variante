/**
 * Splits an array into two arrays: one with elements that pass the predicate, one with those that don't.
 * Divide un array in due array: uno con elementi che passano il predicato, uno con gli altri.
 * 
 * @param {Array} array - The array to partition / L'array da dividere
 * @param {Function} predicate - Function to test each element / Funzione per testare ogni elemento
 * @returns {Array} Array of two arrays: [matched, unmatched] / Array con due array: [corrispondenti, non corrispondenti]
 */
function partition(array, predicate) {
    if (!Array.isArray(array) || typeof predicate !== 'function') {
        return [[], []];
    }
    
    const matched = [];
    const unmatched = [];
    
    for (const element of array) {
        if (predicate(element)) {
            matched.push(element);
        } else {
            unmatched.push(element);
        }
    }
    
    return [matched, unmatched];
}

export { partition };

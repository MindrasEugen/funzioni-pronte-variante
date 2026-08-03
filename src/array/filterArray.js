/**
 * Filters an array based on a condition.
 * Filtra un array in base a una condizione.
 * 
 * @param {Array} array - The array to filter / L'array da filtrare
 * @param {Function} callback - The filter function (must return true/false) / La funzione di filtro (deve restituire true/false)
 * @returns {Array} A new array with elements that satisfy the condition / Un nuovo array con gli elementi che soddisfano la condizione
 */
function filterArray(array, callback) {
    if (!Array.isArray(array)) return [];
    return array.filter(callback);
}

export { filterArray };

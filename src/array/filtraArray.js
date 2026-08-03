/**
 * Filtra un array in base a una condizione.
 * 
 * @param {Array} array - L'array da filtrare
 * @param {Function} callback - La funzione di filtro (deve restituire true/false)
 * @returns {Array} Un nuovo array con gli elementi che soddisfano la condizione
 */
function filtraArray(array, callback) {
    if (!Array.isArray(array)) return [];
    return array.filter(callback);
}

export { filtraArray };

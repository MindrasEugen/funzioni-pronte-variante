/**
 * Returns a new array with the element moved from fromIndex to toIndex.
 * Restituisce un nuovo array con l'elemento spostato da fromIndex a toIndex.
 * 
 * @param {Array} array - The array / L'array
 * @param {number} fromIndex - Index of element to move / Indice dell'elemento da spostare
 * @param {number} toIndex - Target index / Indice di destinazione
 * @returns {Array} New array with element moved / Nuovo array con elemento spostato
 */
function move(array, fromIndex, toIndex) {
    if (!Array.isArray(array)) return [];
    
    const newArray = [...array];
    const [removed] = newArray.splice(fromIndex, 1);
    newArray.splice(toIndex, 0, removed);
    
    return newArray;
}

export { move };

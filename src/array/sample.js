/**
 * Returns a random element from the array.
 * Restituisce un elemento casuale dall'array.
 * 
 * @param {Array} array - The array to sample from / L'array da cui prelevare
 * @returns {*} Random element or undefined if array is empty / Elemento casuale o undefined
 */
function sample(array) {
    if (!Array.isArray(array) || array.length === 0) return undefined;
    const index = Math.floor(Math.random() * array.length);
    return array[index];
}

export { sample };

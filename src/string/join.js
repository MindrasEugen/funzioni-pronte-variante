/**
 * Joins all elements of an array into a string.
 * Unisce tutti gli elementi di un array in una stringa.
 * 
 * @param {Array} array - The array to join / L'array da unire
 * @param {string} [separator=','] - The separator to use / Il separatore da usare
 * @returns {string} - The joined string / La stringa unita
 */
function join(array, separator = ',') {
    if (!Array.isArray(array)) return '';
    return array.join(separator);
}

export { join };

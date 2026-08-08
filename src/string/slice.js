/**
 * Extracts a section of a string and returns it as a new string.
 * Estrae una parte di una stringa e la restituisce come nuova stringa.
 * 
 * @param {string} str - The string to slice / La stringa da tagliare
 * @param {number} [start=0] - The starting index / L'indice di inizio
 * @param {number} [end=str.length] - The ending index / L'indice di fine
 * @returns {string} - The sliced string / La stringa tagliata
 */
function slice(str, start = 0, end) {
    if (typeof str !== 'string') return '';
    return str.slice(start, end);
}

export { slice };

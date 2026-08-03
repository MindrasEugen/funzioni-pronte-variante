/**
 * Ordina un array di numeri o oggetti.
 * 
 * @param {Array} array - L'array da ordinare
 * @param {string} [chiave] - La proprietà da usare per ordinare (per array di oggetti)
 * @returns {Array} Un nuovo array ordinato
 */
function ordinaArray(array, chiave) {
    if (!Array.isArray(array)) return [];
    
    // Se è un array di oggetti e chiave è specificata
    if (chiave && array.length > 0 && typeof array[0] === 'object') {
        return [...array].sort((a, b) => {
            if (a[chiave] < b[chiave]) return -1;
            if (a[chiave] > b[chiave]) return 1;
            return 0;
        });
    }
    
    // Array di primitivi
    if (typeof array[0] === 'string') {
        return [...array].sort();
    }
    return [...array].sort((a, b) => a - b);
}

export { ordinaArray };

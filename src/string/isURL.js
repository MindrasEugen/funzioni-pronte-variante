/**
 * Validates if a string is a valid URL.
 * Verifica se una stringa è un URL valido.
 * 
 * @param {string} str - The string to validate / La stringa da validare
 * @returns {boolean} True if valid URL / True se URL valido
 */
function isURL(str) {
    if (typeof str !== 'string') return false;
    try {
        new URL(str);
        return true;
    } catch {
        return false;
    }
}

export { isURL };

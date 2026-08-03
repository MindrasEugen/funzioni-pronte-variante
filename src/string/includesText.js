/**
 * Checks if a string contains a substring.
 * Verifica se una stringa contiene una sottostringa.
 * 
 * @param {string} text - The string to search in / La stringa in cui cercare
 * @param {string} substring - The substring to search for / La sottostringa da cercare
 * @returns {boolean} True if the substring is contained in the text / True se la sottostringa è contenuta nel testo
 */
function includesText(text, substring) {
    if (typeof text !== 'string' || typeof substring !== 'string') return false;
    return text.includes(substring);
}

export { includesText };

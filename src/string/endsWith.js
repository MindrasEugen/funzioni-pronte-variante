/**
 * Checks if a string ends with a given substring.
 * Verifica se una stringa finisce con una sottostringa data.
 * 
 * @param {string} str - The string to check / La stringa da verificare
 * @param {string} substring - The substring to check for / La sottostringa da cercare
 * @param {number} [length=str.length] - The length to consider / La lunghezza da considerare
 * @returns {boolean} - True if the string ends with the substring / True se la stringa finisce con la sottostringa
 */
function endsWith(str, substring, length) {
    if (typeof str !== 'string' || typeof substring !== 'string') return false;
    return str.endsWith(substring, length);
}

export { endsWith };

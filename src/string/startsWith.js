/**
 * Checks if a string starts with a given substring.
 * Verifica se una stringa inizia con una sottostringa data.
 * 
 * @param {string} str - The string to check / La stringa da verificare
 * @param {string} substring - The substring to check for / La sottostringa da cercare
 * @param {number} [position=0] - The position to start checking from / La posizione da cui iniziare a verificare
 * @returns {boolean} - True if the string starts with the substring / True se la stringa inizia con la sottostringa
 */
function startsWith(str, substring, position = 0) {
    if (typeof str !== 'string' || typeof substring !== 'string') return false;
    return str.startsWith(substring, position);
}

export { startsWith };

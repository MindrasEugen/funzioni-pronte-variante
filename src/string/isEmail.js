/**
 * Validates if a string is a valid email address.
 * Verifica se una stringa è un indirizzo email valido.
 * 
 * @param {string} str - The string to validate / La stringa da validare
 * @returns {boolean} True if valid email / True se email valido
 */
function isEmail(str) {
    if (typeof str !== 'string') return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(str);
}

export { isEmail };

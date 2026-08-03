/**
 * Capitalizes the first letter of a string.
 * rende maiuscola la prima lettera di una stringa.
 * 
 * @param {string} text - The string to capitalize / La stringa da rendere maiuscola
 * @returns {string} The string with first letter uppercase and rest lowercase / La stringa con la prima lettera maiuscola e il resto minuscola
 */
function capitalize(text) {
    if (typeof text !== 'string') return '';
    if (text.length === 0) return '';
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

export { capitalize };

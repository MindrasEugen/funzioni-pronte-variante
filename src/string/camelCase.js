/**
 * Converts a string to camelCase.
 * Converte una stringa in camelCase.
 * 
 * @param {string} str - The string to convert / La stringa da convertire
 * @returns {string} - The camelCase string / La stringa in camelCase
 */
function camelCase(str) {
    if (typeof str !== 'string') return '';
    
    return str
        .replace(/^[^a-zA-Z]+/, '')
        .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())
        .replace(/^(.)/, (m, chr) => chr.toLowerCase());
}

export { camelCase };

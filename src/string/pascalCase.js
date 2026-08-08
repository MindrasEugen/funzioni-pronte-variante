/**
 * Converts a string to PascalCase.
 * Converte una stringa in PascalCase.
 * 
 * @param {string} str - The string to convert / La stringa da convertire
 * @returns {string} - The PascalCase string / La stringa in PascalCase
 */
function pascalCase(str) {
    if (typeof str !== 'string') return '';
    
    return str
        .replace(/^[^a-zA-Z]+/, '')
        .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())
        .replace(/^(.)/, (m, chr) => chr.toUpperCase());
}

export { pascalCase };

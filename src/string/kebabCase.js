/**
 * Converts a string to kebab-case.
 * Converte una stringa in kebab-case.
 * 
 * @param {string} str - The string to convert / La stringa da convertire
 * @returns {string} - The kebab-case string / La stringa in kebab-case
 */
function kebabCase(str) {
    if (typeof str !== 'string') return '';
    
    return str
        .replace(/([A-Z])/g, '-$1')
        .replace(/[^a-zA-Z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
        .toLowerCase();
}

export { kebabCase };

/**
 * Removes all HTML tags from a string.
 * Rimuove tutti i tag HTML da una stringa.
 * 
 * @param {string} str - The string to strip / La stringa da pulire
 * @returns {string} String without HTML tags / Stringa senza tag HTML
 */
function stripHtml(str) {
    if (typeof str !== 'string') return '';
    return str.replace(/<[^>]*>/g, '');
}

export { stripHtml };

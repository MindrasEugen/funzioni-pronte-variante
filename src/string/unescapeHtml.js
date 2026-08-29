/**
 * Unescapes HTML entities back to their character equivalents.
 * Converte entità HTML nei loro caratteri originali.
 * 
 * @param {string} str - The string to unescape / La stringa da convertire
 * @returns {string} Unescaped string / Stringa convertita
 */
function unescapeHtml(str) {
    if (typeof str !== 'string') return '';
    return str
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#x27;/g, "'")
        .replace(/&#39;/g, "'");
}

export { unescapeHtml };

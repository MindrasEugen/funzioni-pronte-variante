/**
 * Replaces a substring with another in a string.
 * Sostituisce una sottostringa con un'altra in una stringa.
 * 
 * @param {string} text - The string to perform replacement in / La stringa in cui eseguire la sostituzione
 * @param {string} oldText - The substring to replace / La sottostringa da sostituire
 * @param {string} newText - The new text to insert / Il nuovo testo da inserire
 * @returns {string} The string with replacements made / La stringa con le sostituzioni effettuate
 */
function replaceText(text, oldText, newText) {
    if (typeof text !== 'string') return '';
    return text.split(oldText).join(newText);
}

export { replaceText };

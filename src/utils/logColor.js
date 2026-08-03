/**
 * Logs a colored message to the browser console.
 * Registra un messaggio colorato nella console del browser.
 * 
 * @param {string} message - The message to log / Il messaggio da registrare
 * @param {string} [color='cyan'] - The text color (CSS name or hex code) / Il colore del testo (nome CSS o codice esadecimale)
 * @returns {void}
 */
function logColor(message, color = 'cyan') {
    console.log(`%c${message}`, `color: ${color}; font-weight: bold;`);
}

export { logColor };

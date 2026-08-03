/**
 * Logs a colored message to the browser console.
 * 
 * @param {string} message - The message to log
 * @param {string} [color='cyan'] - The text color (CSS name or hex code)
 * @returns {void}
 */
function logColor(message, color = 'cyan') {
    console.log(`%c${message}`, `color: ${color}; font-weight: bold;`);
}

export { logColor };

/**
 * Stampa un messaggio colorato nella console del browser.
 * 
 * @param {string} msg - Il messaggio da stampare in console
 * @param {string} [colore='cyan'] - Il colore del testo (nome CSS o codice esadecimale)
 * @returns {void}
 */
function logColor(msg, colore = 'cyan') {
    console.log(`%c${msg}`, `color: ${colore}; font-weight: bold;`);
}

export { logColor };

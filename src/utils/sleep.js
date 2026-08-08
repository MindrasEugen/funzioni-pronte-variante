/**
 * Returns a promise that resolves after a specified delay.
 * Restituisce una promise che si risolve dopo un ritardo specificato.
 * 
 * @param {number} ms - The number of milliseconds to delay / Il numero di millisecondi di attesa
 * @returns {Promise} - A promise that resolves after the delay / Una promise che si risolve dopo il ritardo
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export { sleep };

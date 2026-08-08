/**
 * Arrotonda un numero a un certo numero di decimali.
 * 
 * @param {number} num - Il numero da arrotondare
 * @param {number} [decimals=0] - Il numero di decimali
 * @returns {number} - Il numero arrotondato
 */
function toFixed(num, decimals = 0) {
    const factor = Math.pow(10, decimals);
    return Math.round(num * factor) / factor;
}

export { toFixed };

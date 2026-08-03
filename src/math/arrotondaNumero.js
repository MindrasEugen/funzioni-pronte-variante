/**
 * Arrotonda un numero a N decimali.
 * 
 * @param {number} numero - Il numero da arrotondare
 * @param {number} [decimali=0] - Il numero di decimali (default: 0)
 * @returns {number} Il numero arrotondato
 */
function arrotondaNumero(numero, decimali = 0) {
    const fattore = Math.pow(10, decimali);
    return Math.round(numero * fattore) / fattore;
}

export { arrotondaNumero };

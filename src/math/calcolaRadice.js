/**
 * Calcola la radice di un numero.
 * 
 * @param {number} numero - Il numero di cui calcolare la radice
 * @param {number} [indice=2] - L'indice della radice (default: 2 per radice quadrata)
 * @returns {number} Il risultato della radice
 */
function calcolaRadice(numero, indice = 2) {
    return Math.pow(numero, 1 / indice);
}

export { calcolaRadice };

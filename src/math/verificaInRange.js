/**
 * Verifica se un numero è compreso in un range (inclusivo).
 * 
 * @param {number} numero - Il numero da verificare
 * @param {number} min - Il valore minimo del range (inclusivo)
 * @param {number} max - Il valore massimo del range (inclusivo)
 * @returns {boolean} True se il numero è nel range, false altrimenti
 */
function verificaInRange(numero, min, max) {
    return numero >= min && numero <= max;
}

export { verificaInRange };

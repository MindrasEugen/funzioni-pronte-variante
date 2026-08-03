/**
 * Genera un numero intero casuale compreso tra due valori (inclusi).
 * 
 * @param {number} [min=0] - Il valore minimo (inclusivo)
 * @param {number} [max=100] - Il valore massimo (inclusivo)
 * @returns {number} Un numero intero casuale tra min e max
 */
function numeroCasuale(min = 0, max = 100) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export { numeroCasuale };

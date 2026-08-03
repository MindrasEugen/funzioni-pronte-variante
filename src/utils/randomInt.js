/**
 * Generates a random integer between two values (inclusive).
 * Genera un numero intero casuale tra due valori (inclusivi).
 * 
 * @param {number} [min=0] - The minimum value (inclusive) / Il valore minimo (inclusivo)
 * @param {number} [max=100] - The maximum value (inclusive) / Il valore massimo (inclusivo)
 * @returns {number} A random integer between min and max / Un numero intero casuale tra min e max
 */
function randomInt(min = 0, max = 100) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export { randomInt };

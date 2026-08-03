/**
 * Calculates the nth root of a number.
 * Calcola la radice n-esima di un numero.
 * 
 * @param {number} number - The number to calculate the root of / Il numero di cui calcolare la radice
 * @param {number} [index=2] - The root index (default: 2 for square root) / L'indice della radice (predefinito: 2 per radice quadrata)
 * @returns {number} The result of the root operation / Il risultato dell'operazione di radice
 */
function nthRoot(number, index = 2) {
    return Math.pow(number, 1 / index);
}

export { nthRoot };

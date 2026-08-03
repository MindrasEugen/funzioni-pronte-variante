/**
 * Trova il valore minimo in un array di numeri.
 * 
 * @param {number[]} numeri - Array di numeri
 * @returns {number|undefined} Il valore minimo, oppure undefined se l'array è vuoto
 */
function trovaMinimo(numeri) {
    if (!Array.isArray(numeri) || numeri.length === 0) return undefined;
    return Math.min(...numeri);
}

export { trovaMinimo };

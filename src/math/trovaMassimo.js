/**
 * Trova il valore massimo in un array di numeri.
 * 
 * @param {number[]} numeri - Array di numeri
 * @returns {number|undefined} Il valore massimo, oppure undefined se l'array è vuoto
 */
function trovaMassimo(numeri) {
    if (!Array.isArray(numeri) || numeri.length === 0) return undefined;
    return Math.max(...numeri);
}

export { trovaMassimo };

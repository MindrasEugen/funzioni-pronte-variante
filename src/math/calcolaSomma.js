/**
 * Calcola la somma di un array di numeri.
 * 
 * @param {number[]} numeri - Array di numeri
 * @returns {number} La somma dei numeri, oppure 0 se non è un array
 */
function calcolaSomma(numeri) {
    if (!Array.isArray(numeri)) return 0;
    return numeri.reduce((acc, num) => acc + num, 0);
}

export { calcolaSomma };

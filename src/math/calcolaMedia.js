/**
 * Calcola la media aritmetica di un array di numeri.
 * 
 * @param {number[]} numeri - Array di numeri
 * @returns {number} La media aritmetica, oppure 0 se l'array è vuoto
 */
function calcolaMedia(numeri) {
    if (!Array.isArray(numeri) || numeri.length === 0) return 0;
    const somma = numeri.reduce((acc, num) => acc + num, 0);
    return somma / numeri.length;
}

export { calcolaMedia };

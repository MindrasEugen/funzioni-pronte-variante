/**
 * Calcola il fattoriale di un numero (n!).
 * 
 * @param {number} numero - Il numero di cui calcolare il fattoriale
 * @returns {number|undefined} Il fattoriale, oppure undefined per numeri negativi
 */
function calcolaFattoriale(numero) {
    if (numero < 0) return undefined;
    if (numero === 0 || numero === 1) return 1;
    let risultato = 1;
    for (let i = 2; i <= numero; i++) {
        risultato *= i;
    }
    return risultato;
}

export { calcolaFattoriale };

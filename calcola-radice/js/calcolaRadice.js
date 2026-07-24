/**
 * Calcola la radice di un numero.
 * 
 * Questa funzione è utile per:
 * - Calcoli geometrici (lati di quadrati, cubi, ecc.)
 * - Algoritmi matematici
 * - Fisica e ingegneria
 * - Conversione di unità di misura
 */

function calcolaRadice(numero, indice = 2) {
    return Math.pow(numero, 1 / indice);
}

// Demo: calcola una radice con valori casuali ogni secondo
setInterval(() => {
    const numero = Math.floor(Math.random() * 100) + 1;
    const indice = Math.floor(Math.random() * 4) + 2;
    const risultato = calcolaRadice(numero, indice);
    
    const container = document.getElementById('demo-result');
    if (container) {
        container.innerHTML = `
            Radice <strong>${indice}°</strong> di <strong>${numero}</strong> = 
            <strong>${risultato.toFixed(4)}</strong>
        `;
    }
}, 1000);


/**
 * Dettagli implementativi:
 * - Usa Math.pow() con esponente frazionario (1/indice)
 * - Radice quadrata (indice=2) è la più comune
 * - Può calcolare radici cubiche (indice=3), quarte (indice=4), ecc.
 * - Restituisce NaN per numeri negativi con indice pari
 * 
 * Esempi:
 *   calcolaRadice(16, 2)  → 4 (radice quadrata)
 *   calcolaRadice(27, 3)  → 3 (radice cubica)
 *   calcolaRadice(16, 4)  → 2 (radice quarta)
 *   calcolaRadice(9)      → 3 (radice quadrata, indice predefinito)
 */

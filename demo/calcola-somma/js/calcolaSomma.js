/**
 * Calcola la somma di un array di numeri.
 * 
 * Questa funzione è utile per:
 * - Calcoli finanziari (totali, subtotali)
 * - Analisi dati aggregati
 * - Sommare valori in tabelle e report
 * - Operazioni matematiche di base
 */

function calcolaSomma(numeri) {
    if (!Array.isArray(numeri)) return 0;
    return numeri.reduce((acc, num) => acc + num, 0);
}

// Demo: calcola la somma di un array casuale ogni secondo
setInterval(() => {
    const array = Array.from({length: 5}, () => Math.floor(Math.random() * 100));
    const somma = calcolaSomma(array);
    
    const container = document.getElementById('demo-result');
    if (container) {
        container.innerHTML = `
            Somma di [<strong>${array.join(', ')}</strong>] = 
            <strong>${somma}</strong>
        `;
    }
}, 1000);


/**
 * Dettagli implementativi:
 * - reduce() accumula la somma di tutti gli elementi
 * - Il valore iniziale 0 gestisce anche array vuoti
 * - Accetta numeri interi e decimali
 * 
 * Esempi:
 *   calcolaSomma([10, 20, 30])    → 60
 *   calcolaSomma([1, 2, 3])       → 6
 *   calcolaSomma([-5, 5])         → 0
 *   calcolaSomma([])              → 0
 */

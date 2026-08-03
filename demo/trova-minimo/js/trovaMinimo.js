/**
 * Trova il valore minimo in un array di numeri.
 * 
 * Questa funzione è utile per:
 * - Trovare il valore più basso in un dataset
 * - Analisi dati (temperatura minima, punteggio più basso, ecc.)
 * - Confronto tra valori
 * - Operazioni di ottimizzazione
 */

function trovaMinimo(numeri) {
    if (!Array.isArray(numeri) || numeri.length === 0) return undefined;
    return Math.min(...numeri);
}

// Demo: trova il minimo in un array casuale ogni secondo
setInterval(() => {
    const array = Array.from({length: 5}, () => Math.floor(Math.random() * 100));
    const minimo = trovaMinimo(array);
    
    const container = document.getElementById('demo-result');
    if (container) {
        container.innerHTML = `
            Minimo di [<strong>${array.join(', ')}</strong>] = 
            <strong>${minimo}</strong>
        `;
    }
}, 1000);


/**
 * Dettagli implementativi:
 * - Math.min() con spread operator (...) trova il valore minimo
 * - Restituisce undefined per array vuoti
 * - L'array può contenere numeri interi e decimali
 * 
 * Esempi:
 *   trovaMinimo([10, 20, 5])   → 5
 *   trovaMinimo([-1, -5, -3]) → -5
 *   trovaMinimo([5])           → 5
 *   trovaMinimo([])            → undefined
 */

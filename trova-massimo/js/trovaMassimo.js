/**
 * Trova il valore massimo in un array di numeri.
 * 
 * Questa funzione è utile per:
 * - Trovare il valore più alto in un dataset
 * - Analisi dati (temperatura massima, punteggio più alto, ecc.)
 * - Confronto tra valori
 * - Operazioni di ottimizzazione
 */

function trovaMassimo(numeri) {
    if (!Array.isArray(numeri) || numeri.length === 0) return undefined;
    return Math.max(...numeri);
}

// Demo: trova il massimo in un array casuale ogni secondo
setInterval(() => {
    const array = Array.from({length: 5}, () => Math.floor(Math.random() * 100));
    const massimo = trovaMassimo(array);
    
    const container = document.getElementById('demo-result');
    if (container) {
        container.innerHTML = `
            Massimo di [<strong>${array.join(', ')}</strong>] = 
            <strong>${massimo}</strong>
        `;
    }
}, 1000);


/**
 * Dettagli implementativi:
 * - Math.max() con spread operator (...) trova il valore massimo
 * - Restituisce undefined per array vuoti
 * - L'array può contenere numeri interi e decimali
 * 
 * Esempi:
 *   trovaMassimo([10, 20, 5])   → 20
 *   trovaMassimo([-1, -5, -3]) → -1
 *   trovaMassimo([5])           → 5
 *   trovaMassimo([])            → undefined
 */

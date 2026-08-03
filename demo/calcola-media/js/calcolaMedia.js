/**
 * Calcola la media aritmetica di un array di numeri.
 * 
 * Questa funzione è utile per:
 * - Analisi statistiche di base
 * - Calcolare medie di votazioni, temperature, ecc.
 * - Elaborazione dati in array
 * - Report e dashboard
 */

function calcolaMedia(numeri) {
    if (!Array.isArray(numeri) || numeri.length === 0) return 0;
    const somma = numeri.reduce((acc, num) => acc + num, 0);
    return somma / numeri.length;
}

// Demo: calcola la media di un array casuale ogni secondo
setInterval(() => {
    const array = Array.from({length: 5}, () => Math.floor(Math.random() * 100));
    const media = calcolaMedia(array);
    
    const container = document.getElementById('demo-result');
    if (container) {
        container.innerHTML = `
            Media di [<strong>${array.join(', ')}</strong>] = 
            <strong>${media.toFixed(2)}</strong>
        `;
    }
}, 1000);


/**
 * Dettagli implementativi:
 * - reduce() somma tutti gli elementi dell'array
 * - La divisione per numeri.length calcola la media
 * - Gestisce array vuoti restituendo 0
 * 
 * Esempi:
 *   calcolaMedia([10, 20, 30])       → 20
 *   calcolaMedia([1, 2, 3, 4, 5])    → 3
 *   calcolaMedia([5])                → 5
 *   calcolaMedia([])                 → 0
 */

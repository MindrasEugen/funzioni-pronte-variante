/**
 * Filtra un array in base a una condizione.
 * 
 * Questa funzione è utile per:
 * - Selezionare elementi che soddisfano una condizione
 * - Filtrare dati in tabelle o liste
 * - Ricerche e filtri dinamici
 * - Elaborazione di dataset
 */

function filtraArray(array, callback) {
    if (!Array.isArray(array)) return [];
    return array.filter(callback);
}

// Demo: filtra un array di numeri casuali ogni secondo
setInterval(() => {
    const array = Array.from({length: 10}, () => Math.floor(Math.random() * 100));
    const filtrato = filtraArray(array, num => num > 50);
    
    const container = document.getElementById('demo-result');
    if (container) {
        container.innerHTML = `
            Array originale: [<strong>${array.join(', ')}</strong>]<br>
            Numeri > 50: [<strong>${filtrato.join(', ')}</strong>]
        `;
    }
}, 1000);


/**
 * Dettagli implementativi:
 * - Usa Array.filter() per creare un nuovo array con gli elementi che soddisfano la condizione
 * - Il callback riceve ogni elemento e deve restituire true/false
 * - Restituisce un array vuoto se l'input non è un array
 * 
 * Esempi:
 *   filtraArray([1, 2, 3, 4], x => x > 2) → [3, 4]
 *   filtraArray(['a', 'b', 'c'], x => x !== 'b') → ['a', 'c']
 *   filtraArray([], x => x) → []
 */

/**
 * Ordina un array di numeri o oggetti.
 * 
 * Questa funzione è utile per:
 * - Organizzare dati in ordine crescente/decrescente
 * - Ordinare tabelle e liste
 * - Preparare dati per visualizzazioni
 * - Algoritmi di ordinamento
 */

function ordinaArray(array, chiave) {
    if (!Array.isArray(array)) return [];
    
    // Se è un array di oggetti e chiave è specificata
    if (chiave && array.length > 0 && typeof array[0] === 'object') {
        return [...array].sort((a, b) => {
            if (a[chiave] < b[chiave]) return -1;
            if (a[chiave] > b[chiave]) return 1;
            return 0;
        });
    }
    
    // Array di primitivi
    return [...array].sort((a, b) => a - b);
}

// Demo: ordina un array casuale ogni secondo
setInterval(() => {
    const array = Array.from({length: 8}, () => Math.floor(Math.random() * 100));
    const ordinato = ordinaArray(array);
    
    const container = document.getElementById('demo-result');
    if (container) {
        container.innerHTML = `
            Array originale: [<strong>${array.join(', ')}</strong>]<br>
            Array ordinato: [<strong>${ordinato.join(', ')}</strong>]
        `;
    }
}, 1000);


/**
 * Dettagli implementativi:
 * - Crea una copia dell'array originale con [...array] per evitare mutazioni
 * - Per array di oggetti, ordina in base alla proprietà specificata da chiave
 * - Per array di primitivi, ordina numericamente (a - b)
 * - Restituisce un array vuoto se l'input non è un array
 * 
 * Esempi:
 *   ordinaArray([3, 1, 2]) → [1, 2, 3]
 *   ordinaArray([{id: 2}, {id: 1}], 'id') → [{id: 1}, {id: 2}]
 *   ordinaArray(['c', 'a', 'b']) → ['a', 'b', 'c']
 */

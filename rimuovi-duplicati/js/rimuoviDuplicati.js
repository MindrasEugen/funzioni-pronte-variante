/**
 * Rimuove i duplicati da un array.
 * 
 * Questa funzione è utile per:
 * - Pulire dataset con valori ridondanti
 * - Creare liste univoche
 * - Ottimizzare elaborazioni su array
 * - Preparare dati per visualizzazioni
 */

function rimuoviDuplicati(array) {
    if (!Array.isArray(array)) return [];
    return [...new Set(array)];
}

// Demo: rimuove duplicati da un array casuale ogni secondo
setInterval(() => {
    // Genera un array con alcuni duplicati
    const base = Array.from({length: 5}, () => Math.floor(Math.random() * 10));
    const conDuplicati = [...base, ...base.slice(0, 2)]; // Aggiungi duplicati
    const senzaDuplicati = rimuoviDuplicati(conDuplicati);
    
    const container = document.getElementById('demo-result');
    if (container) {
        container.innerHTML = `
            Array con duplicati: [<strong>${conDuplicati.join(', ')}</strong>]<br>
            Senza duplicati: [<strong>${senzaDuplicati.join(', ')}</strong>]
        `;
    }
}, 1000);


/**
 * Dettagli implementativi:
 * - Usa Set per rimuovere automaticamente i duplicati
 * - Spread operator [...] converte Set in array
 * - Preserva l'ordine dei primi occorrenze
 * - Restituisce un array vuoto se l'input non è un array
 * 
 * Esempi:
 *   rimuoviDuplicati([1, 2, 2, 3, 3, 3]) → [1, 2, 3]
 *   rimuoviDuplicati(['a', 'b', 'a', 'c']) → ['a', 'b', 'c']
 *   rimuoviDuplicati([]) → []
 */

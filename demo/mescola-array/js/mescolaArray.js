/**
 * Mescola casualmente gli elementi di un array (Algoritmo Fisher-Yates).
 * 
 * Questa funzione è utile per:
 * - Randomizzare liste (giochi, quiz, ecc.)
 * - Algoritmi che richiedono casualità
 * - Test e simulazioni
 * - Distribuzione casuale di elementi
 */

function mescolaArray(array) {
    if (!Array.isArray(array)) return [];
    const mescolato = [...array];
    for (let i = mescolato.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [mescolato[i], mescolato[j]] = [mescolato[j], mescolato[i]];
    }
    return mescolato;
}

// Demo: mescola un array ogni secondo
setInterval(() => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const mescolato = mescolaArray(array);
    
    const container = document.getElementById('demo-result');
    if (container) {
        container.innerHTML = `
            Array originale: [<strong>${array.join(', ')}</strong>]<br>
            Array mescolato: [<strong>${mescolato.join(', ')}</strong>]
        `;
    }
}, 1000);


/**
 * Dettagli implementativi:
 * - Algoritmo Fisher-Yates: O(n) tempo, O(1) spazio
 * - Crea una copia dell'array originale per evitare mutazioni
 * - Scambia ogni elemento con un elemento casuale prima di esso
 * - Restituisce un array vuoto se l'input non è un array
 * 
 * Esempi:
 *   mescolaArray([1, 2, 3, 4]) → [3, 1, 4, 2] (casuale)
 *   mescolaArray(['a', 'b', 'c']) → ['b', 'a', 'c'] (casuale)
 *   mescolaArray([]) → []
 */

/**
 * Sostituisce un sottotesto con un altro in una stringa.
 * 
 * Questa funzione è utile per:
 * - Modifica di contenuti testuali
 * - Formattazione dinamica
 * - Pulizia di stringhe
 * - Sostituzioni multiple
 */

function sostituisciTestuale(testo, vecchio, nuovo) {
    if (typeof testo !== 'string') return '';
    return testo.split(vecchio).join(nuovo);
}

// Demo: sostituisce un sottotesto ogni secondo
setInterval(() => {
    const testo = 'Ciao Gino, come va Gino?';
    const vecchio = 'Gino';
    const nuovo = 'Cipolla';
    const sostituito = sostituisciTestuale(testo, vecchio, nuovo);
    
    const container = document.getElementById('demo-result');
    if (container) {
        container.innerHTML = `
            Originale: <strong>${testo}</strong><br>
            Sostituito "<strong>${vecchio}</strong>" con "<strong>${nuovo}</strong>":<br>
            <strong>${sostituito}</strong>
        `;
    }
}, 1000);


/**
 * Dettagli implementativi:
 * - split(vecchio) divide la stringa usando vecchio come separatore
 * - join(nuovo) unisce le parti con nuovo
 * - Sostituisce TUTTE le occorrenze (non solo la prima)
 * - Restituisce stringa vuota se testo non è una stringa
 * 
 * Esempi:
 *   sostituisciTestuale('ciao ciao', 'ciao', 'addio') → 'addio addio'
 *   sostituisciTestuale('JavaScript', 'Script', '') → 'Java'
 *   sostituisciTestuale('testo', 'x', 'y') → 'testo' (nessuna sostituzione)
 */

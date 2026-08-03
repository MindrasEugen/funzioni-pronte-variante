/**
 * Capitalizza la prima lettera di una stringa.
 * 
 * Questa funzione è utile per:
 * - Formattare nomi e cognomi
 * - Titoli e intestazioni
 * - Formattazione di testo per UI
 * - Normalizzazione di dati
 */

function capitalizzaParola(testo) {
    if (typeof testo !== 'string') return '';
    if (testo.length === 0) return '';
    return testo.charAt(0).toUpperCase() + testo.slice(1).toLowerCase();
}

// Demo: capitalizza una parola casuale ogni secondo
setInterval(() => {
    const parole = ['gino', 'ciao', 'MONDO', 'jAvAsCrIpT', 'funzione'];
    const testo = parole[Math.floor(Math.random() * parole.length)];
    const capitalizzato = capitalizzaParola(testo);
    
    const container = document.getElementById('demo-result');
    if (container) {
        container.innerHTML = `
            Originale: <strong>${testo}</strong><br>
            Capitalizzato: <strong>${capitalizzato}</strong>
        `;
    }
}, 1000);


/**
 * Dettagli implementativi:
 * - charAt(0) ottiene il primo carattere
 * - toUpperCase() capitalizza il primo carattere
 * - slice(1) ottiene il resto della stringa
 * - toLowerCase() trasforma il resto in minuscolo
 * - Restituisce stringa vuota se l'input non è una stringa
 * 
 * Esempi:
 *   capitalizzaParola('gino') → 'Gino'
 *   capitalizzaParola('CIAO') → 'Ciao'
 *   capitalizzaParola('jAvAsCrIpT') → 'Javascript'
 */

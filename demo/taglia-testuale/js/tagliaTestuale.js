/**
 * Taglia una stringa a un numero massimo di caratteri.
 * 
 * Questa funzione è utile per:
 * - Truncare testo per visualizzazioni
 * - Anteprime di contenuti lunghi
 * - Gestire overflow di testo
 * - Formattare stringhe per UI
 */

function tagliaTestuale(testo, max) {
    if (typeof testo !== 'string') return '';
    if (max <= 0) return '';
    if (testo.length <= max) return testo;
    return testo.slice(0, max);
}

// Demo: taglia una stringa ogni secondo
setInterval(() => {
    const testo = 'Questa è una frase molto lunga che verra tagliata';
    const max = Math.floor(Math.random() * 40) + 10;
    const tagliato = tagliaTestuale(testo, max);
    
    const container = document.getElementById('demo-result');
    if (container) {
        container.innerHTML = `
            Testo originale: <strong>${testo}</strong><br>
            Tagliato a <strong>${max}</strong> caratteri: <strong>${tagliato}</strong>
        `;
    }
}, 1000);


/**
 * Dettagli implementativi:
 * - slice(0, max) estrae i primi max caratteri
 * - Restituisce la stringa originale se è già più corta di max
 * - Restituisce stringa vuota se max <= 0 o input non è una stringa
 * 
 * Esempi:
 *   tagliaTestuale('ciao mondo', 5) → 'ciao'
 *   tagliaTestuale('ciao', 10) → 'ciao'
 *   tagliaTestuale('ciao mondo', 0) → ''
 */

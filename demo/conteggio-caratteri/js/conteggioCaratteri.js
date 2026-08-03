/**
 * Conta il numero di caratteri in una stringa.
 * 
 * Questa funzione è utile per:
 * - Validazione di input (es: limite caratteri)
 * - Analisi di testo
 * - Contatori di caratteri in form
 * - Statistiche su stringhe
 */

function conteggioCaratteri(testo) {
    if (typeof testo !== 'string') return 0;
    return testo.length;
}

// Demo: conta caratteri di una stringa casuale ogni secondo
setInterval(() => {
    const frasi = [
        'Ciao mondo!',
        'JavaScript è fantastic!',
        'Funzione utilissima',
        'Gino',
        'Questa è una frase più lunga per testare il conteggio'
    ];
    const testo = frasi[Math.floor(Math.random() * frasi.length)];
    const conteggio = conteggioCaratteri(testo);
    
    const container = document.getElementById('demo-result');
    if (container) {
        container.innerHTML = `
            Testo: <strong>${testo}</strong><br>
            Caratteri: <strong>${conteggio}</strong>
        `;
    }
}, 1000);


/**
 * Dettagli implementativi:
 * - La proprietà length di una stringa restituisce il numero di caratteri
 * - Conta anche spazi e punteggiatura
 * - Restituisce 0 se l'input non è una stringa
 * 
 * Esempi:
 *   conteggioCaratteri('ciao') → 4
 *   conteggioCaratteri('Ciao mondo!') → 11
 *   conteggioCaratteri('') → 0
 */

/**
 * Verifica se una stringa contiene un sottotesto.
 * 
 * Questa funzione è utile per:
 * - Ricerche in stringhe
 * - Filtri di testo
 * - Validazione di contenuti
 * - Analisi di dati testuali
 */

function contieneTestuale(testo, sottotesto) {
    if (typeof testo !== 'string' || typeof sottotesto !== 'string') return false;
    return testo.includes(sottotesto);
}

// Demo: verifica se una stringa contiene un sottotesto ogni secondo
setInterval(() => {
    const frasi = ['Ciao Gino', 'JavaScript è potentissimo', 'Funzione utilissima', 'Progetto completato'];
    const testo = frasi[Math.floor(Math.random() * frasi.length)];
    const sottotesto = ['Gino', 'JavaScript', 'utile', 'completato'][Math.floor(Math.random() * 4)];
    const contiene = contieneTestuale(testo, sottotesto);
    
    const container = document.getElementById('demo-result');
    if (container) {
        container.innerHTML = `
            Testo: <strong>${testo}</strong><br>
            Contiene "<strong>${sottotesto}</strong>"? 
            <strong style="color: ${contiene ? 'green' : 'red'}">${contiene ? 'SÌ' : 'NO'}</strong>
        `;
    }
}, 1000);


/**
 * Dettagli implementativi:
 * - String.includes() verifica se sottotesto è presente in testo
 * - Case-sensitive (maiuscole/minuscole contano)
 * - Restituisce false se uno dei parametri non è una stringa
 * 
 * Esempi:
 *   contieneTestuale('Ciao mondo', 'Ciao') → true
 *   contieneTestuale('Ciao mondo', 'Mondo') → false (case-sensitive)
 *   contieneTestuale('Ciao mondo', '') → true
 */

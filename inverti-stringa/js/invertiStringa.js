/**
 * Inverte una stringa.
 * 
 * Questa funzione è utile per:
 * - Manipolazione di testo
 * - Algoritmi su stringhe
 * - Formattazione di output
 * - Giochi con le parole
 */

function invertiStringa(testo) {
    if (typeof testo !== 'string') return '';
    return testo.split('').reverse().join('');
}

// Demo: inverte una stringa casuale ogni secondo
setInterval(() => {
    const parole = ['Ciao', 'Gino', 'JavaScript', 'Funzione', 'Progetto'];
    const testo = parole[Math.floor(Math.random() * parole.length)];
    const invertito = invertiStringa(testo);
    
    const container = document.getElementById('demo-result');
    if (container) {
        container.innerHTML = `
            Originale: <strong>${testo}</strong><br>
            Invertito: <strong>${invertito}</strong>
        `;
    }
}, 1000);


/**
 * Dettagli implementativi:
 * - split('') divide la stringa in un array di caratteri
 * - reverse() inverte l'array
 * - join('') unisce l'array di nuovo in una stringa
 * - Restituisce stringa vuota se l'input non è una stringa
 * 
 * Esempi:
 *   invertiStringa('ciao') → 'oaic'
 *   invertiStringa('123') → '321'
 *   invertiStringa('') → ''
 */

/**
 * Genera un ID casuale alfanumerico.
 * 
 * Questa funzione è utile per:
 * - Creare identificatori univoci
 * - Generare chiavi temporanee
 * - Aggiungere ID a elementi DOM
 * - Sistemi di tracciamento
 */

function generaId(lunghezza = 8) {
    const caratteri = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    for (let i = 0; i < lunghezza; i++) {
        id += caratteri.charAt(Math.floor(Math.random() * caratteri.length));
    }
    return id;
}

// Demo: genera un ID casuale ogni secondo
setInterval(() => {
    const lunghezza = Math.floor(Math.random() * 10) + 5;
    const id = generaId(lunghezza);
    
    const container = document.getElementById('demo-result');
    if (container) {
        container.innerHTML = `
            ID generato (lunghezza: <strong>${lunghezza}</strong>):<br>
            <strong style="font-family: monospace; font-size: 1.2em;">${id}</strong>
        `;
    }
}, 1000);


/**
 * Dettagli implementativi:
 * - Usa caratteri alfanumerici (A-Z, a-z, 0-9)
 * - Math.random() genera un indice casuale per ogni carattere
 * - La lunghezza predefinita è 8 caratteri
 * - Non garantisce univocità assoluta (solo probabilistica)
 * 
 * Esempi:
 *   generaId() → 'aB3x9YpQ'
 *   generaId(4) → 'xY7z'
 *   generaId(16) → 'aB3x9YpQkL2mN4oP'
 */

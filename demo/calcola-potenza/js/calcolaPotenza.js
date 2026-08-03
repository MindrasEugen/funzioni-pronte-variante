/**
 * Calcola la potenza di un numero (base^esponente).
 * 
 * Questa funzione è utile per:
 * - Calcoli matematici avanzati
 * - Algoritmi esponenziali
 * - Grafici e visualizzazioni
 * - Fisica e ingegneria
 */

function calcolaPotenza(base, esponente) {
    return Math.pow(base, esponente);
}

// Demo: calcola una potenza con valori casuali ogni secondo
setInterval(() => {
    const base = Math.floor(Math.random() * 10) + 1;
    const esponente = Math.floor(Math.random() * 5) + 1;
    const risultato = calcolaPotenza(base, esponente);
    
    const container = document.getElementById('demo-result');
    if (container) {
        container.innerHTML = `
            <strong>${base}</strong><sup><strong>${esponente}</strong></sup> = 
            <strong>${risultato}</strong>
        `;
    }
}, 1000);


/**
 * Dettagli implementativi:
 * - Usa Math.pow() per calcoli efficienti
 * - Accetta numeri interi e decimali
 * - Accetta esponenti negativi (risultato sarà 1/base^|esponente|)
 * - Accetta esponenti frazionari (radici)
 * 
 * Esempi:
 *   calcolaPotenza(2, 3)  → 8
 *   calcolaPotenza(5, 2)  → 25
 *   calcolaPotenza(4, 0.5) → 2 (radice quadrata)
 *   calcolaPotenza(2, -1) → 0.5
 */

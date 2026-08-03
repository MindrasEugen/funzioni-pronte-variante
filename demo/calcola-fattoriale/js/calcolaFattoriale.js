/**
 * Calcola il fattoriale di un numero (n!).
 * 
 * Questa funzione è utile per:
 * - Calcoli combinatori
 * - Probabilità e statistica
 * - Algoritmi matematici
 * - Problemi di ottimizzazione
 */

function calcolaFattoriale(numero) {
    if (numero < 0) return undefined;
    if (numero === 0 || numero === 1) return 1;
    let risultato = 1;
    for (let i = 2; i <= numero; i++) {
        risultato *= i;
    }
    return risultato;
}

// Demo: calcola il fattoriale di un numero casuale ogni secondo
setInterval(() => {
    const numero = Math.floor(Math.random() * 10);
    const fattoriale = calcolaFattoriale(numero);
    
    const container = document.getElementById('demo-result');
    if (container) {
        container.innerHTML = `
            Fattoriale di <strong>${numero}</strong> = 
            <strong>${fattoriale}</strong>
        `;
    }
}, 1000);


/**
 * Dettagli implementativi:
 * - 0! = 1 e 1! = 1 per definizione
 * - n! = n × (n-1) × ... × 2 × 1
 * - Restituisce undefined per numeri negativi
 * - Per numeri > 17, il risultato supera Number.MAX_SAFE_INTEGER
 * 
 * Esempi:
 *   calcolaFattoriale(5)  → 120
 *   calcolaFattoriale(0)  → 1
 *   calcolaFattoriale(1)  → 1
 *   calcolaFattoriale(10) → 3628800
 */

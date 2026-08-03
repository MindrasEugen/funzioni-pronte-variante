/**
 * Verifica se un numero è compreso in un range (inclusivo).
 * 
 * Questa funzione è utile per:
 * - Validazione di input numerici
 * - Filtri e condizioni
 * - Algoritmi con limiti
 * - Calcoli con intervalli
 */

function verificaInRange(numero, min, max) {
    return numero >= min && numero <= max;
}

// Demo: verifica se un numero casuale è in un range ogni secondo
setInterval(() => {
    const min = Math.floor(Math.random() * 50);
    const max = min + Math.floor(Math.random() * 50);
    const numero = Math.floor(Math.random() * 100);
    const inRange = verificaInRange(numero, min, max);
    
    const container = document.getElementById('demo-result');
    if (container) {
        container.innerHTML = `
            <strong>${numero}</strong> è tra <strong>${min}</strong> e <strong>${max}</strong>? 
            <strong style="color: ${inRange ? 'green' : 'red'}">${inRange ? 'SÌ' : 'NO'}</strong>
        `;
    }
}, 1000);


/**
 * Dettagli implementativi:
 * - Verifica se min ≤ numero ≤ max
 * - Il range è inclusivo (min e max sono compresi)
 * - Accetta numeri interi e decimali
 * - Restituisce true/false
 * 
 * Esempi:
 *   verificaInRange(5, 1, 10)   → true
 *   verificaInRange(15, 1, 10)  → false
 *   verificaInRange(10, 1, 10)  → true (inclusivo)
 *   verificaInRange(1, 1, 10)   → true (inclusivo)
 */

/**
 * Calcola la percentuale di un valore.
 * 
 * Questa funzione è utile per:
 * - Calcolare sconti e aumenti percentuali
 * - Visualizzare progressi in percentuale
 * - Analisi dati e statistiche
 * - Calcoli finanziari e commerciali
 */

function calcolaPercentuale(valore, percentuale) {
    return (valore * percentuale) / 100;
}

// Demo: aggiorna il risultato ogni secondo con valori casuali
setInterval(() => {
    const valore = Math.floor(Math.random() * 1000) + 1;
    const percentuale = Math.floor(Math.random() * 50) + 1;
    const risultato = calcolaPercentuale(valore, percentuale);
    
    const container = document.getElementById('demo-result');
    if (container) {
        container.innerHTML = `
            <strong>${valore}</strong> con il <strong>${percentuale}%</strong> = 
            <strong>${risultato.toFixed(2)}</strong>
        `;
    }
}, 1000);


/**
 * Dettagli implementativi:
 * - La formula (valore * percentuale) / 100 è lo standard per calcolare percentuali
 * - Accetta numeri interi e decimali
 * - Restituisce un numero che può essere arrotondato con toFixed()
 * 
 * Esempi:
 *   calcolaPercentuale(200, 10)  → 20
 *   calcolaPercentuale(150, 25)  → 37.5
 *   calcolaPercentuale(1000, 50) → 500
 */

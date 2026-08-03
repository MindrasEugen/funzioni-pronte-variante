/**
 * Arrotonda un numero a un numero specificato di decimali.
 * 
 * Questa funzione è utile per:
 * - Formattare numeri per la visualizzazione
 * - Calcoli finanziari con precisione controllata
 * - Preparare dati per grafici e report
 * - Evitare errori di floating point
 */

function arrotondaNumero(numero, decimali = 2) {
    const fattore = Math.pow(10, decimali);
    return Math.round(numero * fattore) / fattore;
}

// Demo: arrotonda un numero casuale ogni secondo
setInterval(() => {
    const numero = Math.random() * 1000;
    const decimali = Math.floor(Math.random() * 5);
    const risultato = arrotondaNumero(numero, decimali);
    
    const container = document.getElementById('demo-result');
    if (container) {
        container.innerHTML = `
            <strong>${numero.toFixed(10)}</strong> arrotondato a <strong>${decimali}</strong> decimali = 
            <strong>${risultato}</strong>
        `;
    }
}, 1000);


/**
 * Dettagli implementativi:
 * - Math.pow(10, decimali) crea il fattore di moltiplicazione (es: 100 per 2 decimali)
 * - Math.round() arrotonda all'intero più vicino
 * - La divisione per fattore riporta al valore originale con decimali desiderati
 * 
 * Esempi:
 *   arrotondaNumero(3.14159, 2) → 3.14
 *   arrotondaNumero(2.71828, 3) → 2.718
 *   arrotondaNumero(5.5, 0)     → 6
 */

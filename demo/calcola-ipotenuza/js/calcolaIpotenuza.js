/**
 * Calcola l'ipotenusa di un triangolo rettangolo (Teorema di Pitagora).
 * 
 * Questa funzione è utile per:
 * - Calcoli geometrici
 * - Grafica computerizzata
 * - Fisica e ingegneria
 * - Progettazione 2D/3D
 */

function calcolaIpotenuza(a, b) {
    return Math.sqrt(a * a + b * b);
}

// Demo: calcola l'ipotenusa con cateti casuali ogni secondo
setInterval(() => {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    const ipotenusa = calcolaIpotenuza(a, b);
    
    const container = document.getElementById('demo-result');
    if (container) {
        container.innerHTML = `
            Cateto a = <strong>${a}</strong>, Cateto b = <strong>${b}</strong><br>
            Ipotenuza = <strong>${ipotenusa.toFixed(2)}</strong>
        `;
    }
}, 1000);


/**
 * Dettagli implementativi:
 * - Formula: √(a² + b²)
 * - Math.sqrt() calcola la radice quadrata
 * - a e b possono essere numeri interi o decimali
 * 
 * Esempi:
 *   calcolaIpotenuza(3, 4)   → 5
 *   calcolaIpotenuza(5, 12)  → 13
 *   calcolaIpotenuza(1, 1)   → 1.4142...
 */

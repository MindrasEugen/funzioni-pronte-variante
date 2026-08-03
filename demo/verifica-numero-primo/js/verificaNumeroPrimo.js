/**
 * Verifica se un numero è primo.
 * 
 * Questa funzione è utile per:
 * - Algoritmi matematici
 * - Crittografia di base
 * - Verifica di proprietà numeriche
 * - Problemi di matematica discreta
 */

function verificaNumeroPrimo(numero) {
    if (numero <= 1) return false;
    if (numero <= 3) return true;
    if (numero % 2 === 0 || numero % 3 === 0) return false;
    
    for (let i = 5; i * i <= numero; i += 6) {
        if (numero % i === 0 || numero % (i + 2) === 0) return false;
    }
    return true;
}

// Demo: verifica se un numero casuale è primo ogni secondo
setInterval(() => {
    const numero = Math.floor(Math.random() * 100) + 1;
    const ePrimo = verificaNumeroPrimo(numero);
    
    const container = document.getElementById('demo-result');
    if (container) {
        container.innerHTML = `
            <strong>${numero}</strong> è un numero primo? 
            <strong style="color: ${ePrimo ? 'green' : 'red'}">${ePrimo ? 'SÌ' : 'NO'}</strong>
        `;
    }
}, 1000);


/**
 * Dettagli implementativi:
 * - Un numero primo è divisibile solo per 1 e per se stesso
 * - Ottimizzazione: controlla solo fino alla radice quadrata del numero
 * - Skip di multipli di 2 e 3 per efficienza
 * 
 * Esempi:
 *   verificaNumeroPrimo(7)   → true
 *   verificaNumeroPrimo(10)  → false
 *   verificaNumeroPrimo(2)   → true
 *   verificaNumeroPrimo(1)   → false
 */

/**
 * Verifica e restituisce il tipo di una variabile.
 * 
 * Questa funzione è utile per:
 * - Debug e validazione dati
 * - Condizioni basate sul tipo
 * - Gestione dinamica dei tipi
 * - Sistemi di type checking
 */

function verificaTipo(valore) {
    if (valore === null) return 'null';
    if (Array.isArray(valore)) return 'array';
    return typeof valore;
}

// Demo: verifica il tipo di un valore casuale ogni secondo
setInterval(() => {
    const tipi = [
        { val: 42, name: 'numero' },
        { val: 'Ciao', name: 'stringa' },
        { val: [1, 2, 3], name: 'array' },
        { val: { a: 1 }, name: 'oggetto' },
        { val: true, name: 'booleano' },
        { val: null, name: 'null' },
        { val: undefined, name: 'undefined' }
    ];
    const casuale = tipi[Math.floor(Math.random() * tipi.length)];
    const tipo = verificaTipo(casuale.val);
    
    const container = document.getElementById('demo-result');
    if (container) {
        container.innerHTML = `
            Valore: <strong>${JSON.stringify(casuale.val)}</strong><br>
            Tipo: <strong>${tipo}</strong>
        `;
    }
}, 1000);


/**
 * Dettagli implementativi:
 * - typeof operatore nativo per la maggior parte dei tipi
 * - Verifica speciale per null (typeof null === 'object')
 * - Verifica speciale per array (typeof [] === 'object')
 * - Restituisce stringa con il nome del tipo
 * 
 * Esempi:
 *   verificaTipo(42) → 'number'
 *   verificaTipo('ciao') → 'string'
 *   verificaTipo([1, 2]) → 'array'
 *   verificaTipo(null) → 'null'
 *   verificaTipo({}) → 'object'
 */

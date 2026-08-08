/**
 * Calcola il massimo comune divisore (GCD) di due numeri.
 * 
 * @param {number} a - Primo numero
 * @param {number} b - Secondo numero
 * @returns {number} - Il GCD
 */
function gcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    
    return a;
}

export { gcd };

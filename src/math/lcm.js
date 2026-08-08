/**
 * Calcola il minimo comune multiplo (LCM) di due numeri.
 * 
 * @param {number} a - Primo numero
 * @param {number} b - Secondo numero
 * @returns {number} - Il LCM
 */
function lcm(a, b) {
    if (a === 0 || b === 0) return 0;
    
    const gcdValue = (x, y) => {
        x = Math.abs(x);
        y = Math.abs(y);
        while (y !== 0) {
            const temp = y;
            y = x % y;
            x = temp;
        }
        return x;
    };
    
    return Math.abs((a * b) / gcdValue(a, b));
}

export { lcm };

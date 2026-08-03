/**
 * Calculates the factorial of a number (n!).
 * 
 * @param {number} number - The number to calculate factorial of
 * @returns {number|undefined} The factorial, or undefined for negative numbers
 */
function factorial(number) {
    if (number < 0) return undefined;
    if (number === 0 || number === 1) return 1;
    let result = 1;
    for (let i = 2; i <= number; i++) {
        result *= i;
    }
    return result;
}

export { factorial };

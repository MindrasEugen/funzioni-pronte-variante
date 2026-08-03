/**
 * Checks if a number is prime.
 * 
 * @param {number} number - The number to check
 * @returns {boolean} True if the number is prime, false otherwise
 */
function isPrime(number) {
    if (number <= 1) return false;
    if (number <= 3) return true;
    if (number % 2 === 0 || number % 3 === 0) return false;
    
    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) return false;
    }
    return true;
}

export { isPrime };

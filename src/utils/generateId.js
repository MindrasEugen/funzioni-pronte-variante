/**
 * Generates a random alphanumeric ID.
 * 
 * @param {number} [length=8] - The length of the ID to generate
 * @returns {string} The generated random ID
 */
function generateId(length = 8) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    for (let i = 0; i < length; i++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
}

export { generateId };

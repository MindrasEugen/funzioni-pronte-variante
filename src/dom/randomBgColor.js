/**
 * Randomly changes the background color of an HTML element.
 * Generates a random RGB color and applies it to the specified element.
 * Cambia casualmente il colore di sfondo di un elemento HTML.
 * Genera un colore RGB casuale e lo applica all'elemento specificato.
 * 
 * @param {HTMLElement} element - The HTML element to change background color of / L'elemento HTML di cui cambiare il colore di sfondo
 * @returns {void}
 */
function randomBgColor(element) {
    const color = `rgb(
        ${Math.floor(Math.random() * 256)},
        ${Math.floor(Math.random() * 256)},
        ${Math.floor(Math.random() * 256)}
    )`;
    element.style.backgroundColor = color;
}

export { randomBgColor };

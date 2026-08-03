/**
 * Cambia il colore di sfondo di un elemento HTML in modo casuale.
 * Genera un colore RGB randomico e lo applica all'elemento specificato.
 * 
 * @param {HTMLElement} elemento - L'elemento HTML di cui cambiare il colore di sfondo
 * @returns {void}
 */
function cambiaColore(elemento) {
    const colore = `rgb(
        ${Math.floor(Math.random() * 256)},
        ${Math.floor(Math.random() * 256)},
        ${Math.floor(Math.random() * 256)}
    )`;
    elemento.style.backgroundColor = colore;
}

export { cambiaColore };

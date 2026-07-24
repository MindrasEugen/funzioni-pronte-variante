// Esporta tutte le funzioni esistenti
export * from "./cambia-colore/js/colorChanger.js";
export * from "./numero-casuale/js/randomNumber.js";
export * from "./selettore-rapido/js/shortcut.js";
export * from "./crea-elemento/js/createElement.js";
export * from "./on-listener/js/eventListener.js";
export * from "./log-color/js/colorLogger.js";
export * from "./fade-in/js/animations.js";

// Esporta le nuove funzioni matematiche
export * from "./calcola-percentuale/js/calcolaPercentuale.js";
export * from "./arrotonda-numero/js/arrotondaNumero.js";
export * from "./calcola-media/js/calcolaMedia.js";
export * from "./calcola-somma/js/calcolaSomma.js";
export * from "./trova-massimo/js/trovaMassimo.js";
export * from "./trova-minimo/js/trovaMinimo.js";
export * from "./verifica-numero-primo/js/verificaNumeroPrimo.js";
export * from "./calcola-ipotenuza/js/calcolaIpotenuza.js";
export * from "./calcola-fattoriale/js/calcolaFattoriale.js";
export * from "./calcola-potenza/js/calcolaPotenza.js";
export * from "./calcola-radice/js/calcolaRadice.js";
export * from "./verifica-in-range/js/verificaInRange.js";

// Esporta le nuove funzioni generiche
export * from "./filtra-array/js/filtraArray.js";
export * from "./ordina-array/js/ordinaArray.js";
export * from "./inverti-stringa/js/invertiStringa.js";
export * from "./rimuovi-duplicati/js/rimuoviDuplicati.js";
export * from "./mescola-array/js/mescolaArray.js";
export * from "./verifica-tipo/js/verificaTipo.js";
export * from "./genera-id/js/generaId.js";
export * from "./conteggio-caratteri/js/conteggioCaratteri.js";
export * from "./capitalizza-parola/js/capitalizzaParola.js";
export * from "./taglia-testuale/js/tagliaTestuale.js";
export * from "./contiene-testuale/js/contieneTestuale.js";
export * from "./sostituisci-testuale/js/sostituisciTestuale.js";

/*
 * Questo file serve come punto di ingresso principale e serve per exportare tutte le funzioni del progetto in un'unica "libreria"
 * 
 * funzionamento:
 * - importa tutti i moduli dalle varie cartelle
 * - li riesporta tutti insieme
 * 
 * Questo serve per poter usare tutte le funzioni del progetto con un solo import:
 * 
 * import * as utils from "./index.js";
 * utils.cambiaColore(document.body);
 * 
 * Oppure con import specifici:
 * 
 * import { cambiaColore, calcolaMedia, filtraArray } from "./index.js";
 */
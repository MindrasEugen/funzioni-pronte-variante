/**
 * Funzioni Salvate - Entry Point
 * Mini libreria di funzioni utility JavaScript per sviluppo web
 * 
 * @version 1.0.0
 * @author MindrasEugen
 * @license MIT
 */

// Esporta tutto dalle categorie
export * from './dom/index.js';
export * from './math/index.js';
export * from './array/index.js';
export * from './string/index.js';
export * from './utility/index.js';
export * from './shortcuts/index.js';

// Esporta anche singolarmente per tree-shaking ottimale
// DOM
export { cambiaColore } from './dom/cambiaColore.js';
export { crea } from './dom/crea.js';
export { on } from './dom/on.js';
export { fadeIn } from './dom/fadeIn.js';

// Math
export { calcolaMedia } from './math/calcolaMedia.js';
export { calcolaPercentuale } from './math/calcolaPercentuale.js';
export { arrotondaNumero } from './math/arrotondaNumero.js';
export { calcolaSomma } from './math/calcolaSomma.js';
export { trovaMassimo } from './math/trovaMassimo.js';
export { trovaMinimo } from './math/trovaMinimo.js';
export { verificaNumeroPrimo } from './math/verificaNumeroPrimo.js';
export { calcolaIpotenuza } from './math/calcolaIpotenuza.js';
export { calcolaFattoriale } from './math/calcolaFattoriale.js';
export { calcolaPotenza } from './math/calcolaPotenza.js';
export { calcolaRadice } from './math/calcolaRadice.js';
export { verificaInRange } from './math/verificaInRange.js';

// Array
export { filtraArray } from './array/filtraArray.js';
export { ordinaArray } from './array/ordinaArray.js';
export { rimuoviDuplicati } from './array/rimuoviDuplicati.js';
export { mescolaArray } from './array/mescolaArray.js';

// String
export { invertiStringa } from './string/invertiStringa.js';
export { conteggioCaratteri } from './string/conteggioCaratteri.js';
export { capitalizzaParola } from './string/capitalizzaParola.js';
export { tagliaTestuale } from './string/tagliaTestuale.js';
export { contieneTestuale } from './string/contieneTestuale.js';
export { sostituisciTestuale } from './string/sostituisciTestuale.js';

// Utility
export { logColor } from './utility/logColor.js';
export { verificaTipo } from './utility/verificaTipo.js';
export { generaId } from './utility/generaId.js';
export { numeroCasuale } from './utility/numeroCasuale.js';

// Shortcuts
export { query } from './shortcuts/query.js';

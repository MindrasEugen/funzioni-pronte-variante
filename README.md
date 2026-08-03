# Funzioni Salvate

[![npm version](https://img.shields.io/badge/npm-v1.0.0-blue.svg)](https://www.npmjs.com/package/funzioni-salvate)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Tests: 110 passed](https://img.shields.io/badge/Tests-110%20passed-brightgreen.svg)](https://github.com/MindrasEugen/funzioni-salvate/actions)
[![TypeScript](https://img.shields.io/badge/TypeScript-Supported-3178c6.svg)](https://www.typescriptlang.org/)

**Mini libreria di funzioni utility JavaScript per sviluppo web moderno.**

Una raccolta di 28+ funzioni pronte all'uso, categorizzate e ben testate, per accelerare lo sviluppo di applicazioni web.

## 🚀 Installazione

```bash
npm install funzioni-salvate
# o
yarn add funzioni-salvate
# o
pnpm add funzioni-salvate
```

## 📦 Import

### Import completo
```javascript
import * as fs from 'funzioni-salvate';
fs.cambiaColore(document.body);
fs.calcolaMedia([10, 20, 30]);
```

### Import categorizzato (tree-shaking ottimizzato)
```javascript
import { cambiaColore, fadeIn } from 'funzioni-salvate/dom';
import { calcolaMedia, calcolaSomma } from 'funzioni-salvate/math';
import { filtraArray, ordinaArray } from 'funzioni-salvate/array';
import { invertiStringa, capitalizzaParola } from 'funzioni-salvate/string';
import { generaId, numeroCasuale } from 'funzioni-salvate/utility';
```

### CDN (per browser)
```html
<script src="https://unpkg.com/funzioni-salvate@1.0.0/dist/funzioni-salvate.min.js"></script>
<script>
  FunzioniSalvate.cambiaColore(document.body);
</script>
```

## 📁 Categorizzazione

| Categoria | Funzioni | Descrizione |
|-----------|----------|-------------|
| **DOM** | `cambiaColore`, `crea`, `fadeIn`, `on`, `query` | Manipolazione DOM e animazioni |
| **Math** | `calcolaMedia`, `calcolaSomma`, `trovaMassimo`, `trovaMinimo`, `arrotondaNumero`, `calcolaPercentuale`, `verificaNumeroPrimo`, `calcolaIpotenuza`, `calcolaFattoriale`, `calcolaPotenza`, `calcolaRadice`, `verificaInRange` | Operazioni matematiche |
| **Array** | `filtraArray`, `ordinaArray`, `rimuoviDuplicati`, `mescolaArray` | Manipolazione array |
| **String** | `invertiStringa`, `conteggioCaratteri`, `capitalizzaParola`, `tagliaTestuale`, `contieneTestuale`, `sostituisciTestuale` | Manipolazione stringhe |
| **Utility** | `logColor`, `verificaTipo`, `generaId`, `numeroCasuale` | Utility generiche |

## 🎯 Esempi d'Uso

### React
```jsx
import { cambiaColore } from 'funzioni-salvate';

function MyComponent() {
  return <div onClick={() => cambiaColore(document.body)}>Click me!</div>;
}
```

### Vue
```vue
<script setup>
import { calcolaMedia } from 'funzioni-salvate';
const average = calcolaMedia([25, 30, 28]);
</script>
<template><p>Media: {{ average }}</p></template>
```

### Vanilla JavaScript
```javascript
import { generaId, numeroCasuale } from 'funzioni-salvate';
const userId = generaId(16);
const randomNum = numeroCasuale(1, 100);
```

## 🔧 Scripts

| Script | Descrizione |
|--------|-------------|
| `npm run build` | Crea i bundle in `/dist/` |
| `npm test` | Esegue tutti i test |
| `npm run test:coverage` | Esegue test con coverage |
| `npm run dev` | Build in watch mode |

## 📁 Struttura del Progetto

```
funzioni-salvate/
├── src/                          # Codice sorgente
│   ├── dom/                      # Funzioni DOM
│   ├── math/                     # Funzioni matematiche
│   ├── array/                    # Funzioni array
│   ├── string/                   # Funzioni stringhe
│   ├── utility/                  # Utility generiche
│   ├── shortcuts/                # Shortcuts
│   └── index.js                  # Entry point
├── dist/                         # Build output
├── types/                       # TypeScript definitions
├── tests/                        # Test unitari
├── demo/                         # Demo interattive
├── package.json
├── rollup.config.js
├── tsconfig.json
└── README.md
```

## 🤝 Contribuire

1. Forka il repository
2. Crea un branch (`git checkout -b feature/nuova-funzione`)
3. Aggiungi la funzione in `src/` seguendo le convenzioni
4. Aggiungi i test in `tests/`
5. Esegui `npm run build && npm test`
6. Fai una pull request

## 📜 Licenza

MIT License - vedi [LICENSE](LICENSE) per dettagli.

---

**Autore:** MindrasEugen  
**Versione:** 1.0.0  
**Ultimo aggiornamento:** 2026-08-03

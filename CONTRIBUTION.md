# Contributing to Utility Kit
# Contribuire a Utility Kit

Thank you for considering contributing to Utility Kit! This document explains how to add new functions to the library.
Grazie per aver considerato di contribuire a Utility Kit! Questo documento spiega come aggiungere nuove funzioni alla libreria.

---

## Project Structure
## Struttura del Progetto

```
utility-kit/
├── src/                          # Source code / Codice sorgente
│   ├── dom/                      # DOM Functions / Funzioni DOM
│   ├── math/                     # Math Functions / Funzioni Matematiche
│   ├── array/                    # Array Functions / Funzioni Array
│   ├── string/                   # String Functions / Funzioni Stringhe
│   ├── utils/                    # Utility Functions / Funzioni di Utilità
│   ├── shortcuts/               # Shortcuts / Scorciatoie
│   └── index.js                  # Entry point / Punto di ingresso
├── tests/                       # Unit tests / Test unitari
│   ├── dom.test.js
│   ├── math.test.js
│   ├── array.test.js
│   ├── string.test.js
│   └── utility.test.js
├── package.json
├── README.md
└── CONTRIBUTION.md
```

Each category has its own folder in `src/` with individual function files.
Ogni categoria ha la sua cartella in `src/` con file di funzioni individuali.

---

## Adding a New Function to an Existing Category
## Aggiungere una Nuova Funzione a una Categoria Esistente

### Step 1: Create the Function File
### Passo 1: Crea il File della Funzione

1. Create a new `.js` file in the appropriate category folder (e.g., `src/array/newFunction.js`)
1. Crea un nuovo file `.js` nella cartella della categoria appropriata (es. `src/array/novaFunzione.js`)

2. Use the following template for your function:
2. Usa il seguente template per la tua funzione:

```javascript
/**
 * Function description in English.
 * Descrizione della funzione in italiano.
 * 
 * @param {type} paramName - Parameter description in English / Descrizione del parametro in italiano
 * @returns {type} - Return value description in English / Descrizione del valore di ritorno in italiano
 */
function functionName(params) {
    // Function implementation
    // Implementazione della funzione
}

export { functionName };
```

### Step 2: Update the Category Index File
### Passo 2: Aggiorna il File Index della Categoria

Add the export to the appropriate index file (e.g., `src/array/index.js`):
Aggiungi l'export al file index appropriato (es. `src/array/index.js`):

```javascript
export { functionName } from './functionName.js';
```

### Step 3: Update the Main Index File
### Passo 3: Aggiorna il File Index Principale

Add the export to `src/index.js`:
Aggiungi l'export a `src/index.js`:

```javascript
export { functionName } from './array/functionName.js';
```

### Step 4: Add Tests
### Passo 4: Aggiungi i Test

Add comprehensive tests to the appropriate test file (e.g., `tests/array.test.js`):
Aggiungi test completi al file di test appropriato (es. `tests/array.test.js`):

```javascript
import { describe, it, expect } from 'vitest';
import { functionName } from '../src/array/index.js';

describe('Array Functions', () => {
  describe('functionName', () => {
    it('should do something', () => {
      expect(functionName(input)).toBe(expected);
    });

    it('should handle edge cases', () => {
      expect(functionName(null)).toBe('');
    });
  });
});
```

### Step 5: Run Tests
### Passo 5: Esegui i Test

Run all tests to ensure everything works:
Esegui tutti i test per assicurarti che tutto funzioni:

```bash
npm test
```

---

## Creating a New Category
## Creare una Nuova Categoria

If you believe a new category would better organize related functions, you can create one.
Se ritieni che una nuova categoria possa organizzare meglio funzioni correlate, puoi crearla.

### Step 1: Create the Category Folder
### Passo 1: Crea la Cartella della Categoria

Create a new folder in `src/` (e.g., `src/newCategory/`)
Crea una nuova cartella in `src/` (es. `src/nuovaCategorie/`)

### Step 2: Create the Category Index File
### Passo 2: Crea il File Index della Categoria

Create `src/newCategory/index.js` with exports:
Crea `src/newCategory/index.js` con gli export:

```javascript
/**
 * New Category Functions - Description
 * Funzioni Nuova Categoria - Descrizione
 */

export { function1 } from './function1.js';
export { function2 } from './function2.js';
```

### Step 3: Update the Main Index File
### Passo 3: Aggiorna il File Index Principale

Add the category exports to `src/index.js`:
Aggiungi gli export della categoria a `src/index.js`:

```javascript
// New Category
// Nuova Categoria
export { function1 } from './newCategory/function1.js';
export { function2 } from './newCategory/function2.js';
```

### Step 4: Create the Test File
### Passo 4: Crea il File di Test

Create `tests/newCategory.test.js` with comprehensive tests:
Crea `tests/nuovaCategorie.test.js` con test completi:

```javascript
import { describe, it, expect } from 'vitest';
import { function1, function2 } from '../src/newCategory/index.js';

describe('New Category Functions', () => {
  describe('function1', () => {
    // Test cases
    // Casi di test
  });
});
```

### Step 5: Update package.json Exports (Optional)
### Passo 5: Aggiorna gli Export in package.json (Opzionale)

If you want the category to be importable separately (e.g., `@mindraseugen/utility-kit/newCategory`), add it to `package.json` exports:
Se vuoi che la categoria sia importabile separatamente (es. `@mindraseugen/utility-kit/nuovaCategorie`), aggiungila agli export in `package.json`:

```json
"exports": {
  "": { "require": "./dist/utility-kit.js", "import": "./dist/utility-kit.esm.js" },
  "./dom": { ... },
  "./math": { ... },
  "./array": { ... },
  "./string": { ... },
  "./utils": { ... },
  "./shortcuts": { ... },
  "./newCategory": {
    "require": "./dist/newCategory/index.js",
    "import": "./dist/newCategory/index.esm.js"
  }
}
```

---

## Function Requirements
## Requisiti delle Funzioni

### Naming
### Nome
- Use **camelCase** for function names
- Usa **camelCase** per i nomi delle funzioni
- Be descriptive and concise
- Sii descrittivo e conciso

### JSDoc Comments
### Commenti JSDoc
- **Mandatory** for all functions
- **Obbligatori** per tutte le funzioni
- Must be **bilingual** (English + Italian)
- Devono essere **bilingue** (Inglese + Italiano)

```javascript
/**
 * Function description in English.
 * Descrizione della funzione in italiano.
 * 
 * @param {type} paramName - Parameter description / Descrizione parametro
 * @returns {type} - Return description / Descrizione ritorno
 */
```

### Error Handling
### Gestione degli Errori
- Handle invalid inputs gracefully
- Gestisci input non validi in modo elegante
- Return sensible defaults (empty array, empty string, NaN, etc.)
- Restituisci valori predefiniti sensati (array vuoto, stringa vuota, NaN, ecc.)

### Browser Compatibility
### Compatibilità Browser
- Use polyfills or fallbacks when needed
- Usa polyfill o fallback quando necessario
- Avoid modern APIs without proper fallbacks
- Evita API moderne senza fallback appropriati

---

## Testing Requirements
## Requisiti dei Test

### Framework
### Framework
- Use **Vitest** for all tests
- Usa **Vitest** per tutti i test

### Coverage
### Copertura
- Test **all** functionality
- Testa **tutta** la funzionalità
- Test edge cases (null, undefined, empty inputs, etc.)
- Testa casi limite (null, undefined, input vuoti, ecc.)
- Test invalid inputs
- Testa input non validi

### Test Structure
### Struttura dei Test
```javascript
describe('Category Name', () => {
  describe('functionName', () => {
    it('should do something', () => {
      expect(result).toBe(expected);
    });
  });
});
```

---

## Pull Request Process
## Processo di Pull Request

1. Fork the repository
1. Fai fork del repository
2. Create a feature branch (`git checkout -b feature/new-function`)
2. Crea un branch per la feature (`git checkout -b feature/nova-funzione`)
3. Add your function following these guidelines
3. Aggiungi la tua funzione seguendo queste linee guida
4. Add comprehensive tests
4. Aggiungi test completi
5. Run `npm test` to ensure all tests pass
5. Esegui `npm test` per assicurarti che tutti i test passino
6. Make a pull request
6. Fai una pull request

---

## Example: Adding a New Function
## Esempio: Aggiungere una Nuova Funzione

Let's say we want to add a `sumBy` function to the Array category.
Supponiamo di voler aggiungere una funzione `sumBy` alla categoria Array.

1. **Create the function file:**
1. **Crea il file della funzione:**
   - File: `src/array/sumBy.js`
   ```javascript
   /**
    * Sums the values in an array by a property or function.
    * Somma i valori in un array per una proprietà o funzione.
    * 
    * @param {Array} array - The array to sum / L'array da sommare
    * @param {string|Function} iteratee - The property or function / La proprietà o funzione
    * @returns {number} - The sum / La somma
    */
   function sumBy(array, iteratee) {
       if (!Array.isArray(array)) return 0;
       
       const getValue = typeof iteratee === 'function' 
           ? iteratee 
           : (item) => item[iteratee];
       
       return array.reduce((sum, item) => sum + Number(getValue(item)), 0);
   }
   
   export { sumBy };
   ```

2. **Update category index:**
2. **Aggiorna l'index della categoria:**
   - File: `src/array/index.js`
   ```javascript
   export { sumBy } from './sumBy.js';
   ```

3. **Update main index:**
3. **Aggiorna l'index principale:**
   - File: `src/index.js`
   ```javascript
   export { sumBy } from './array/sumBy.js';
   ```

4. **Add tests:**
4. **Aggiungi i test:**
   - File: `tests/array.test.js`
   ```javascript
   describe('sumBy', () => {
     it('should sum by property', () => {
       const arr = [{ n: 1 }, { n: 2 }, { n: 3 }];
       expect(sumBy(arr, 'n')).toBe(6);
     });
     
     it('should sum by function', () => {
       const arr = [1, 2, 3];
       expect(sumBy(arr, x => x * 2)).toBe(12);
     });
     
     it('should return 0 for non-array input', () => {
       expect(sumBy(null, 'n')).toBe(0);
     });
   });
   ```

5. **Run tests:**
5. **Esegui i test:**
   ```bash
   npm test
   ```

---

## Notes
## Note

- Always maintain **backward compatibility** when modifying existing functions
- Mantieni sempre la **compatibilità all'indietro** quando modifichi funzioni esistenti
- Keep functions **pure** when possible (no side effects)
- Mantieni le funzioni **pure** quando possibile (nessun effetto collaterale)
- Follow the existing code style and conventions
- Segui lo stile e le convenzioni del codice esistente
- Document all parameters and return values in JSDoc
- Documenta tutti i parametri e i valori di ritorno in JSDoc

---

## Need Help?
## Hai bisogno di aiuto?

If you have questions about contributing, please open an issue.
Se hai domande sul contribuire, per favore apri una issue.

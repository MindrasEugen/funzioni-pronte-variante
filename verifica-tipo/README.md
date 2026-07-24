# Verifica Tipo

Funzione JavaScript che verifica il tipo di una variabile.

## Struttura del progetto

```
verifica-tipo/
├── js/
│   └── verificaTipo.js    # Funzione principale
├── css/
│   └── styles.css         # Stili di base per la demo
├── index.html             # Pagina demo
└── README.md              # Questo file
```

## Funzione `verificaTipo(valore)`

### Descrizione
Verifica e restituisce il tipo di una variabile, con supporto speciale per array e null.

### Parametri
- **valore** (Any): Il valore di cui verificare il tipo

### Valore di ritorno
- **String**: Il nome del tipo ('number', 'string', 'array', 'object', 'null', 'undefined', 'boolean', 'function')

### Dettagli tecnici
- Usa typeof operatore nativo
- Verifica speciale per null (typeof null === 'object')
- Verifica speciale per array (typeof [] === 'object')

### Utilizzo
```javascript
verificaTipo(42); // → 'number'
verificaTipo('ciao'); // → 'string'
verificaTipo([1, 2]); // → 'array'
verificaTipo(null); // → 'null'

// In React
const tipo = verificaTipo(valore);
```

## Demo
Apri `index.html` in un browser. La verifica del tipo viene eseguita automaticamente ogni secondo.

## Personalizzazione
- Modifica `styles.css` per l'aspetto della demo
- Modifica `verificaTipo.js` per i parametri della demo

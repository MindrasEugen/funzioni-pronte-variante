# Inverti Stringa

Funzione JavaScript che inverte una stringa.

## Struttura del progetto

```
inverti-stringa/
├── js/
│   └── invertiStringa.js    # Funzione principale
├── css/
│   └── styles.css         # Stili di base per la demo
├── index.html             # Pagina demo
└── README.md              # Questo file
```

## Funzione `invertiStringa(testo)`

### Descrizione
Inverte l'ordine dei caratteri in una stringa.

### Parametri
- **testo** (String): La stringa da invertire

### Valore di ritorno
- **String**: La stringa invertita (stringa vuota se l'input non è valido)

### Dettagli tecnici
- split('') divide la stringa in un array di caratteri
- reverse() inverte l'array
- join('') unisce l'array in una stringa

### Utilizzo
```javascript
invertiStringa('ciao'); // → 'oaic'
invertiStringa('123'); // → '321'

// In React
const invertito = invertiStringa(testo);
```

## Demo
Apri `index.html` in un browser. L'inversione viene eseguita automaticamente ogni secondo.

## Personalizzazione
- Modifica `styles.css` per l'aspetto della demo
- Modifica `invertiStringa.js` per i parametri della demo

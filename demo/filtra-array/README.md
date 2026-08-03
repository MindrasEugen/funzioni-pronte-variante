# Filtra Array

Funzione JavaScript che filtra un array in base a una condizione.

## Struttura del progetto

```
filtra-array/
├── js/
│   └── filtraArray.js    # Funzione principale
├── css/
│   └── styles.css        # Stili di base per la demo
├── index.html            # Pagina demo
└── README.md             # Questo file
```

## Funzione `filtraArray(array, callback)`

### Descrizione
Filtra un array restituendo solo gli elementi che soddisfano la condizione specificata dal callback.

### Parametri
- **array** (Array): L'array da filtrare
- **callback** (Function): Funzione che riceve ogni elemento e deve restituire true/false

### Valore di ritorno
- **Array**: Un nuovo array con solo gli elementi che soddisfano la condizione (array vuoto se l'input non è valido)

### Dettagli tecnici
- Usa Array.filter() per creare un nuovo array
- Il callback riceve ogni elemento dell'array
- Non muta l'array originale

### Utilizzo
```javascript
// Filtra numeri > 10
filtraArray([5, 12, 8, 130, 44], x => x > 10); // → [12, 130, 44]

// Filtra stringhe
filtraArray(['a', 'b', 'c'], x => x !== 'b'); // → ['a', 'c']

// In React
const filtrati = filtraArray(dati, item => item.attivo);
```

## Demo
Apri `index.html` in un browser. Il filtraggio viene eseguito automaticamente ogni secondo.

## Personalizzazione
- Modifica `styles.css` per l'aspetto della demo
- Modifica `filtraArray.js` per i parametri della demo

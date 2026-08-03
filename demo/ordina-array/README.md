# Ordina Array

Funzione JavaScript che ordina un array di numeri o oggetti.

## Struttura del progetto

```
ordina-array/
├── js/
│   └── ordinaArray.js    # Funzione principale
├── css/
│   └── styles.css        # Stili di base per la demo
├── index.html            # Pagina demo
└── README.md             # Questo file
```

## Funzione `ordinaArray(array, chiave)`

### Descrizione
Ordina un array di numeri o oggetti in ordine crescente.

### Parametri
- **array** (Array): L'array da ordinare
- **chiave** (String, opzionale): La proprietà da usare per ordinare array di oggetti

### Valore di ritorno
- **Array**: Un nuovo array ordinato (array vuoto se l'input non è valido)

### Dettagli tecnici
- Crea una copia dell'array originale per evitare mutazioni
- Per array di oggetti, ordina in base alla proprietà specificata
- Per array di primitivi, ordina numericamente

### Utilizzo
```javascript
// Ordina numeri
ordinaArray([3, 1, 2]); // → [1, 2, 3]

// Ordina oggetti per proprietà
ordinaArray([{id: 2}, {id: 1}], 'id'); // → [{id: 1}, {id: 2}]

// In React
const ordinati = ordinaArray(dati, 'nome');
```

## Demo
Apri `index.html` in un browser. L'ordinamento viene eseguito automaticamente ogni secondo.

## Personalizzazione
- Modifica `styles.css` per l'aspetto della demo
- Modifica `ordinaArray.js` per i parametri della demo

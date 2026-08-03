# Rimuovi Duplicati

Funzione JavaScript che rimuove i duplicati da un array.

## Struttura del progetto

```
rimuovi-duplicati/
├── js/
│   └── rimuoviDuplicati.js    # Funzione principale
├── css/
│   └── styles.css         # Stili di base per la demo
├── index.html             # Pagina demo
└── README.md              # Questo file
```

## Funzione `rimuoviDuplicati(array)`

### Descrizione
Rimuove i duplicati da un array, restituendo solo le prime occorrenze di ogni elemento.

### Parametri
- **array** (Array): L'array da cui rimuovere i duplicati

### Valore di ritorno
- **Array**: Un nuovo array senza duplicati (array vuoto se l'input non è valido)

### Dettagli tecnici
- Usa Set per rimuovere automaticamente i duplicati
- Spread operator [...] converte Set in array
- Preserva l'ordine dei primi occorrenze

### Utilizzo
```javascript
rimuoviDuplicati([1, 2, 2, 3, 3, 3]); // → [1, 2, 3]
rimuoviDuplicati(['a', 'b', 'a', 'c']); // → ['a', 'b', 'c']

// In React
const unici = rimuoviDuplicati(dati);
```

## Demo
Apri `index.html` in un browser. La rimozione dei duplicati viene eseguita automaticamente ogni secondo.

## Personalizzazione
- Modifica `styles.css` per l'aspetto della demo
- Modifica `rimuoviDuplicati.js` per i parametri della demo

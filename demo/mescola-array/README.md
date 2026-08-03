# Mescola Array

Funzione JavaScript che mescola casualmente gli elementi di un array.

## Struttura del progetto

```
mescola-array/
├── js/
│   └── mescolaArray.js    # Funzione principale
├── css/
│   └── styles.css         # Stili di base per la demo
├── index.html             # Pagina demo
└── README.md              # Questo file
```

## Funzione `mescolaArray(array)`

### Descrizione
Mescola casualmente gli elementi di un array usando l'algoritmo Fisher-Yates.

### Parametri
- **array** (Array): L'array da mescolare

### Valore di ritorno
- **Array**: Un nuovo array con elementi mescolati (array vuoto se l'input non è valido)

### Dettagli tecnici
- Algoritmo Fisher-Yates: O(n) tempo, O(1) spazio
- Crea una copia dell'array originale
- Scambia ogni elemento con un elemento casuale prima di esso

### Utilizzo
```javascript
mescolaArray([1, 2, 3, 4]); // → [3, 1, 4, 2] (casuale)
mescolaArray(['a', 'b', 'c']); // → ['b', 'a', 'c'] (casuale)

// In React
const mescolati = mescolaArray(dati);
```

## Demo
Apri `index.html` in un browser. Il mescolamento viene eseguito automaticamente ogni secondo.

## Personalizzazione
- Modifica `styles.css` per l'aspetto della demo
- Modifica `mescolaArray.js` per i parametri della demo

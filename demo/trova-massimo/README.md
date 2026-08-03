# Trova Massimo

Funzione JavaScript che trova il valore massimo in un array di numeri.

## Struttura del progetto

```
trova-massimo/
├── js/
│   └── trovaMassimo.js    # Funzione principale
├── css/
│   └── styles.css        # Stili di base per la demo
├── index.html            # Pagina demo
└── README.md             # Questo file
```

## Funzione `trovaMassimo(numeri)`

### Descrizione
La funzione trova e restituisce il valore massimo in un array di numeri. Utile per trovare il valore più alto in un dataset, analisi dati e operazioni di ottimizzazione.

### Parametri
- **numeri** (Array): Un array di numeri

### Valore di ritorno
- **Number/Undefined**: Il valore massimo nell'array, o undefined se l'array è vuoto o non valido

### Dettagli tecnici
- Usa Math.max() con spread operator per trovare il valore massimo
- Restituisce undefined per array vuoti
- Funziona con numeri interi e decimali

### Utilizzo
```javascript
// Trova il massimo in un array
trovaMassimo([10, 20, 5]); // → 20

// Trova la temperatura massima
trovaMassimo([23.5, 18.2, 25.1, 19.8]); // → 25.1

// In React
const max = trovaMassimo(dati);
```

## Demo
Apri `index.html` in un browser per vedere la demo in azione. Il valore massimo viene trovato automaticamente ogni secondo con valori casuali.

## Personalizzazione
- Modifica `styles.css` per adattare l'aspetto della pagina demo
- Modifica `trovaMassimo.js` per cambiare i parametri della demo automatica

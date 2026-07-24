# Trova Minimo

Funzione JavaScript che trova il valore minimo in un array di numeri.

## Struttura del progetto

```
trova-minimo/
├── js/
│   └── trovaMinimo.js    # Funzione principale
├── css/
│   └── styles.css        # Stili di base per la demo
├── index.html            # Pagina demo
└── README.md             # Questo file
```

## Funzione `trovaMinimo(numeri)`

### Descrizione
La funzione trova e restituisce il valore minimo in un array di numeri. Utile per trovare il valore più basso in un dataset, analisi dati e operazioni di ottimizzazione.

### Parametri
- **numeri** (Array): Un array di numeri

### Valore di ritorno
- **Number/Undefined**: Il valore minimo nell'array, o undefined se l'array è vuoto o non valido

### Dettagli tecnici
- Usa Math.min() con spread operator per trovare il valore minimo
- Restituisce undefined per array vuoti
- Funziona con numeri interi e decimali

### Utilizzo
```javascript
// Trova il minimo in un array
trovaMinimo([10, 20, 5]); // → 5

// Trova la temperatura minima
trovaMinimo([23.5, 18.2, 25.1, 19.8]); // → 18.2

// In React
const min = trovaMinimo(dati);
```

## Demo
Apri `index.html` in un browser per vedere la demo in azione. Il valore minimo viene trovato automaticamente ogni secondo con valori casuali.

## Personalizzazione
- Modifica `styles.css` per adattare l'aspetto della pagina demo
- Modifica `trovaMinimo.js` per cambiare i parametri della demo automatica

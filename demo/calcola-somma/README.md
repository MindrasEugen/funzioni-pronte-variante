# Calcola Somma

Funzione JavaScript che calcola la somma di un array di numeri.

## Struttura del progetto

```
calcola-somma/
├── js/
│   └── calcolaSomma.js    # Funzione principale
├── css/
│   └── styles.css         # Stili di base per la demo
├── index.html             # Pagina demo
└── README.md              # Questo file
```

## Funzione `calcolaSomma(numeri)`

### Descrizione
La funzione calcola la somma di tutti i numeri in un array. Particolarmente utile per calcoli finanziari, aggregazione dati e operazioni matematiche di base.

### Parametri
- **numeri** (Array): Un array di numeri

### Valore di ritorno
- **Number**: La somma di tutti i numeri (0 se l'input non è un array)

### Dettagli tecnici
- Usa Array.reduce() per accumulare la somma
- Il valore iniziale 0 gestisce anche array vuoti
- Accetta numeri interi e decimali

### Utilizzo
```javascript
// Calcola la somma di un array
calcolaSomma([10, 20, 30]); // → 60

// Calcola il totale di una lista
calcolaSomma([1.5, 2.5, 3]); // → 7

// In React
const totale = calcolaSomma(prezzi);
```

## Demo
Apri `index.html` in un browser per vedere la demo in azione. La somma viene calcolata automaticamente ogni secondo con valori casuali.

## Personalizzazione
- Modifica `styles.css` per adattare l'aspetto della pagina demo
- Modifica `calcolaSomma.js` per cambiare i parametri della demo automatica

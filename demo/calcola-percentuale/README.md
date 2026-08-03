# Calcola Percentuale

Funzione JavaScript che calcola la percentuale di un valore.

## Struttura del progetto

```
calcola-percentuale/
├── js/
│   └── calcolaPercentuale.js    # Funzione principale
├── css/
│   └── styles.css         # Stili di base per la demo
├── index.html             # Pagina demo
└── README.md              # Questo file
```

## Funzione `calcolaPercentuale(valore, percentuale)`

### Descrizione
La funzione calcola il valore percentuale di un numero. Molto utile per calcoli finanziari, sconti, statistiche e visualizzazioni.

### Parametri
- **valore** (Number): Il valore numerico di base
- **percentuale** (Number): La percentuale da calcolare (es: 10 per 10%)

### Valore di ritorno
- **Number**: Il risultato del calcolo percentuale

### Dettagli tecnici
- Usa la formula standard: (valore * percentuale) / 100
- Accetta numeri interi e decimali
- Restituisce un numero che può essere arrotondato con toFixed()

### Utilizzo
```javascript
// Calcolare il 20% di 100
const risultato = calcolaPercentuale(100, 20); // → 20

// Calcolare il 15% di 250
const risultato = calcolaPercentuale(250, 15); // → 37.5

// In React
const sconti = prezzi.map(p => calcolaPercentuale(p, 10));
```

## Demo
Apri `index.html` in un browser per vedere la demo in azione. La percentuale viene calcolata automaticamente ogni secondo con valori casuali.

## Personalizzazione
- Modifica `styles.css` per adattare l'aspetto della pagina demo
- Modifica `calcolaPercentuale.js` per cambiare i parametri della demo automatica

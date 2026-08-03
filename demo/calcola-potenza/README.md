# Calcola Potenza

Funzione JavaScript che calcola la potenza di un numero.

## Struttura del progetto

```
calcola-potenza/
├── js/
│   └── calcolaPotenza.js    # Funzione principale
├── css/
│   └── styles.css         # Stili di base per la demo
├── index.html             # Pagina demo
└── README.md              # Questo file
```

## Funzione `calcolaPotenza(base, esponente)`

### Descrizione
Calcola la potenza di un numero (base^esponente).

### Parametri
- **base** (Number): Il numero base
- **esponente** (Number): L'esponente

### Valore di ritorno
- **Number**: Il risultato della potenza

### Dettagli tecnici
- Usa Math.pow(base, esponente)
- Accetta numeri interi e decimali
- Accetta esponenti negativi e frazionari

### Utilizzo
```javascript
calcolaPotenza(2, 3); // → 8
calcolaPotenza(5, 2); // → 25
calcolaPotenza(4, 0.5); // → 2 (radice quadrata)

// In React
const risultato = calcolaPotenza(base, esp);
```

## Demo
Apri `index.html` in un browser. La potenza viene calcolata automaticamente ogni secondo.

## Personalizzazione
- Modifica `styles.css` per l'aspetto della demo
- Modifica `calcolaPotenza.js` per i parametri della demo

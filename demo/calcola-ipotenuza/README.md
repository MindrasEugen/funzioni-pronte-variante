# Calcola Ipotenuza

Funzione JavaScript che calcola l'ipotenusa di un triangolo rettangolo usando il teorema di Pitagora.

## Struttura del progetto

```
calcola-ipotenuza/
├── js/
│   └── calcolaIpotenuza.js    # Funzione principale
├── css/
│   └── styles.css         # Stili di base per la demo
├── index.html             # Pagina demo
└── README.md              # Questo file
```

## Funzione `calcolaIpotenuza(a, b)`

### Descrizione
Calcola l'ipotenusa di un triangolo rettangolo dati i due cateti (teorema di Pitagora: √(a² + b²)).

### Parametri
- **a** (Number): Lunghezza del primo cateto
- **b** (Number): Lunghezza del secondo cateto

### Valore di ritorno
- **Number**: La lunghezza dell'ipotenusa

### Dettagli tecnici
- Formula: Math.sqrt(a * a + b * b)
- Usa Math.sqrt() per calcolare la radice quadrata
- Accetta numeri interi e decimali

### Utilizzo
```javascript
// Triangolo 3-4-5
calcolaIpotenuza(3, 4); // → 5

// Triangolo 5-12-13
calcolaIpotenuza(5, 12); // → 13

// In React
const ipotenusa = calcolaIpotenuza(latoA, latoB);
```

## Demo
Apri `index.html` in un browser. L'ipotenusa viene calcolata automaticamente ogni secondo con cateti casuali.

## Personalizzazione
- Modifica `styles.css` per l'aspetto della demo
- Modifica `calcolaIpotenuza.js` per i parametri della demo

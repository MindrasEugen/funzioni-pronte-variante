# Verifica In Range

Funzione JavaScript che verifica se un numero è compreso in un range.

## Struttura del progetto

```
verifica-in-range/
├── js/
│   └── verificaInRange.js    # Funzione principale
├── css/
│   └── styles.css         # Stili di base per la demo
├── index.html             # Pagina demo
└── README.md              # Questo file
```

## Funzione `verificaInRange(numero, min, max)`

### Descrizione
Verifica se un numero è compreso in un range (inclusivo).

### Parametri
- **numero** (Number): Il numero da verificare
- **min** (Number): Il limite inferiore del range
- **max** (Number): Il limite superiore del range

### Valore di ritorno
- **Boolean**: true se min ≤ numero ≤ max, false altrimenti

### Dettagli tecnici
- Il range è inclusivo (min e max sono compresi)
- Accetta numeri interi e decimali

### Utilizzo
```javascript
verificaInRange(5, 1, 10); // → true
verificaInRange(15, 1, 10); // → false
verificaInRange(10, 1, 10); // → true (inclusivo)

// In React
const eValido = verificaInRange(valore, min, max);
```

## Demo
Apri `index.html` in un browser. La verifica viene eseguita automaticamente ogni secondo.

## Personalizzazione
- Modifica `styles.css` per l'aspetto della demo
- Modifica `verificaInRange.js` per i parametri della demo

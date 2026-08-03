# Calcola Fattoriale

Funzione JavaScript che calcola il fattoriale di un numero (n!).

## Struttura del progetto

```
calcola-fattoriale/
├── js/
│   └── calcolaFattoriale.js    # Funzione principale
├── css/
│   └── styles.css         # Stili di base per la demo
├── index.html             # Pagina demo
└── README.md              # Questo file
```

## Funzione `calcolaFattoriale(numero)`

### Descrizione
Calcola il fattoriale di un numero (n! = n × (n-1) × ... × 2 × 1).

### Parametri
- **numero** (Number): Il numero di cui calcolare il fattoriale

### Valore di ritorno
- **Number/Undefined**: Il fattoriale del numero, o undefined se il numero è negativo

### Dettagli tecnici
- 0! = 1 e 1! = 1 per definizione
- Usa un ciclo for per calcolare il prodotto
- Restituisce undefined per numeri negativi
- Per n > 17, il risultato supera Number.MAX_SAFE_INTEGER

### Utilizzo
```javascript
calcolaFattoriale(5); // → 120
calcolaFattoriale(0); // → 1
calcolaFattoriale(1); // → 1

// In React
const risultato = calcolaFattoriale(n);
```

## Demo
Apri `index.html` in un browser. Il fattoriale viene calcolato automaticamente ogni secondo.

## Personalizzazione
- Modifica `styles.css` per l'aspetto della demo
- Modifica `calcolaFattoriale.js` per i parametri della demo

# Calcola Radice

Funzione JavaScript che calcola la radice di un numero.

## Struttura del progetto

```
calcola-radice/
├── js/
│   └── calcolaRadice.js    # Funzione principale
├── css/
│   └── styles.css         # Stili di base per la demo
├── index.html             # Pagina demo
└── README.md              # Questo file
```

## Funzione `calcolaRadice(numero, indice)`

### Descrizione
Calcola la radice di un numero (quadrata, cubica, ecc.).

### Parametri
- **numero** (Number): Il numero di cui calcolare la radice
- **indice** (Number, default: 2): L'indice della radice (2 = quadrata, 3 = cubica, ecc.)

### Valore di ritorno
- **Number**: Il risultato della radice

### Dettagli tecnici
- Usa Math.pow(numero, 1/indice)
- Radice quadrata (indice=2) è la predefinita
- Restituisce NaN per numeri negativi con indice pari

### Utilizzo
```javascript
calcolaRadice(16, 2); // → 4 (radice quadrata)
calcolaRadice(27, 3); // → 3 (radice cubica)
calcolaRadice(16); // → 4 (radice quadrata predefinita)

// In React
const risultato = calcolaRadice(num, indice);
```

## Demo
Apri `index.html` in un browser. La radice viene calcolata automaticamente ogni secondo.

## Personalizzazione
- Modifica `styles.css` per l'aspetto della demo
- Modifica `calcolaRadice.js` per i parametri della demo

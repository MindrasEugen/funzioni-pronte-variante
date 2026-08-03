# Verifica Numero Primo

Funzione JavaScript che verifica se un numero è primo.

## Struttura del progetto

```
verifica-numero-primo/
├── js/
│   └── verificaNumeroPrimo.js    # Funzione principale
├── css/
│   └── styles.css         # Stili di base per la demo
├── index.html              # Pagina demo
└── README.md               # Questo file
```

## Funzione `verificaNumeroPrimo(numero)`

### Descrizione
La funzione verifica se un numero è primo (divisibile solo per 1 e per se stesso). Utile per algoritmi matematici, crittografia di base e problemi di matematica discreta.

### Parametri
- **numero** (Number): Il numero da verificare

### Valore di ritorno
- **Boolean**: true se il numero è primo, false altrimenti

### Dettagli tecnici
- Un numero primo è divisibile solo per 1 e per se stesso
- Ottimizzazione: controlla solo fino alla radice quadrata del numero
- Skip di multipli di 2 e 3 per efficienza
- Restituisce false per numeri <= 1

### Utilizzo
```javascript
// Verifica se un numero è primo
verificaNumeroPrimo(7); // → true
verificaNumeroPrimo(10); // → false

// Verifica un numero da input
const num = parseInt(prompt('Inserisci un numero:'));
if (verificaNumeroPrimo(num)) {
    console.log(`${num} è primo`);
}

// In React
const ePrimo = verificaNumeroPrimo(numero);
```

## Demo
Apri `index.html` in un browser per vedere la demo in azione. La verifica viene eseguita automaticamente ogni secondo con valori casuali.

## Personalizzazione
- Modifica `styles.css` per adattare l'aspetto della pagina demo
- Modifica `verificaNumeroPrimo.js` per cambiare i parametri della demo automatica

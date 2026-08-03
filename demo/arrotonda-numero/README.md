# Arrotonda Numero

Funzione JavaScript che arrotonda un numero a un numero specificato di decimali.

## Struttura del progetto

```
arrotonda-numero/
├── js/
│   └── arrotondaNumero.js    # Funzione principale
├── css/
│   └── styles.css         # Stili di base per la demo
├── index.html             # Pagina demo
└── README.md              # Questo file
```

## Funzione `arrotondaNumero(numero, decimali)`

### Descrizione
La funzione arrotonda un numero al numero specificato di decimali. Particolarmente utile per formattare numeri per la visualizzazione, calcoli finanziari e evitare errori di floating point.

### Parametri
- **numero** (Number): Il numero da arrotondare
- **decimali** (Number, default: 2): Il numero di decimali a cui arrotondare

### Valore di ritorno
- **Number**: Il numero arrotondato

### Dettagli tecnici
- Usa Math.pow() per creare il fattore di moltiplicazione
- Math.round() arrotonda all'intero più vicino
- La divisione per il fattore riporta al valore originale con decimali desiderati

### Utilizzo
```javascript
// Arrotonda a 2 decimali (default)
arrotondaNumero(3.14159); // → 3.14

// Arrotonda a 3 decimali
arrotondaNumero(2.71828, 3); // → 2.718

// Arrotonda a 0 decimali (intero)
arrotondaNumero(5.7, 0); // → 6

// In React
const prezzo = arrotondaNumero(19.999, 2); // → 20.00
```

## Demo
Apri `index.html` in un browser per vedere la demo in azione. Un numero viene arrotondato automaticamente ogni secondo con valori casuali.

## Personalizzazione
- Modifica `styles.css` per adattare l'aspetto della pagina demo
- Modifica `arrotondaNumero.js` per cambiare i parametri della demo automatica

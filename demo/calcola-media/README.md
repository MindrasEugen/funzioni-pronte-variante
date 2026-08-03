# Calcola Media

Funzione JavaScript che calcola la media aritmetica di un array di numeri.

## Struttura del progetto

```
calcola-media/
├── js/
│   └── calcolaMedia.js    # Funzione principale
├── css/
│   └── styles.css         # Stili di base per la demo
├── index.html             # Pagina demo
└── README.md              # Questo file
```

## Funzione `calcolaMedia(numeri)`

### Descrizione
La funzione calcola la media aritmetica di un array di numeri. Utile per analisi statistiche, calcolare medie di votazioni, temperature, e molto altro.

### Parametri
- **numeri** (Array): Un array di numeri

### Valore di ritorno
- **Number**: La media aritmetica dei numeri (0 se l'array è vuoto)

### Dettagli tecnici
- Usa Array.reduce() per sommare tutti gli elementi
- La divisione per numeri.length calcola la media
- Gestisce array vuoti restituendo 0

### Utilizzo
```javascript
// Calcola la media di un array
calcolaMedia([10, 20, 30]); // → 20

// Calcola la media di votazioni
calcolaMedia([5, 4, 3, 5, 4]); // → 4.2

// In React
const mediaVoti = calcolaMedia(voti);
```

## Demo
Apri `index.html` in un browser per vedere la demo in azione. La media viene calcolata automaticamente ogni secondo con valori casuali.

## Personalizzazione
- Modifica `styles.css` per adattare l'aspetto della pagina demo
- Modifica `calcolaMedia.js` per cambiare i parametri della demo automatica

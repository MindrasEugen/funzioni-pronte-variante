# Genera ID

Funzione JavaScript che genera un ID casuale alfanumerico.

## Struttura del progetto

```
genera-id/
├── js/
│   └── generaId.js    # Funzione principale
├── css/
│   └── styles.css     # Stili di base per la demo
├── index.html         # Pagina demo
└── README.md          # Questo file
```

## Funzione `generaId(lunghezza)`

### Descrizione
Genera un ID casuale alfanumerico di lunghezza specificata.

### Parametri
- **lunghezza** (Number, default: 8): La lunghezza dell'ID da generare

### Valore di ritorno
- **String**: Un ID casuale alfanumerico

### Dettagli tecnici
- Usa caratteri alfanumerici (A-Z, a-z, 0-9)
- Math.random() genera un indice casuale per ogni carattere
- Non garantisce univocità assoluta (solo probabilistica)

### Utilizzo
```javascript
generaId(); // → 'aB3x9YpQ'
generaId(4); // → 'xY7z'
generaId(16); // → 'aB3x9YpQkL2mN4oP'

// In React
const id = generaId(10);
```

## Demo
Apri `index.html` in un browser. L'ID viene generato automaticamente ogni secondo.

## Personalizzazione
- Modifica `styles.css` per l'aspetto della demo
- Modifica `generaId.js` per i parametri della demo

# Capitalizza Parola

Funzione JavaScript che capitalizza la prima lettera di una stringa.

## Struttura del progetto

```
capitalizza-parola/
├── js/
│   └── capitalizzaParola.js    # Funzione principale
├── css/
│   └── styles.css             # Stili di base per la demo
├── index.html                 # Pagina demo
└── README.md                  # Questo file
```

## Funzione `capitalizzaParola(testo)`

### Descrizione
Capitalizza la prima lettera di una stringa e trasforma il resto in minuscolo.

### Parametri
- **testo** (String): La stringa da capitalizzare

### Valore di ritorno
- **String**: La stringa con la prima lettera maiuscola (stringa vuota se l'input non è valido)

### Dettagli tecnici
- charAt(0) ottiene il primo carattere
- toUpperCase() capitalizza il primo carattere
- slice(1) ottiene il resto della stringa
- toLowerCase() trasforma il resto in minuscolo

### Utilizzo
```javascript
capitalizzaParola('gino'); // → 'Gino'
capitalizzaParola('CIAO'); // → 'Ciao'
capitalizzaParola('jAvAsCrIpT'); // → 'Javascript'

// In React
const nome = capitalizzaParola(cognome);
```

## Demo
Apri `index.html` in un browser. La capitalizzazione viene eseguita automaticamente ogni secondo.

## Personalizzazione
- Modifica `styles.css` per l'aspetto della demo
- Modifica `capitalizzaParola.js` per i parametri della demo

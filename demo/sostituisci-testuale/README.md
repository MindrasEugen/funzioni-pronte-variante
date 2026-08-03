# Sostituisci Testuale

Funzione JavaScript che sostituisce un sottotesto con un altro in una stringa.

## Struttura del progetto

```
sostituisci-testuale/
├── js/
│   └── sostituisciTestuale.js    # Funzione principale
├── css/
│   └── styles.css              # Stili di base per la demo
├── index.html                  # Pagina demo
└── README.md                   # Questo file
```

## Funzione `sostituisciTestuale(testo, vecchio, nuovo)`

### Descrizione
Sostituisce tutte le occorrenze di un sottotesto con un altro sottotesto in una stringa.

### Parametri
- **testo** (String): La stringa originale
- **vecchio** (String): Il sottotesto da sostituire
- **nuovo** (String): Il sottotesto con cui sostituire

### Valore di ritorno
- **String**: La stringa con le sostituzioni effettuate (stringa vuota se testo non è valido)

### Dettagli tecnici
- split(vecchio) divide la stringa usando vecchio come separatore
- join(nuovo) unisce le parti con nuovo
- Sostituisce TUTTE le occorrenze (non solo la prima)

### Utilizzo
```javascript
sostituisciTestuale('ciao ciao', 'ciao', 'addio'); // → 'addio addio'
sostituisciTestuale('JavaScript', 'Script', ''); // → 'Java'

// In React
const nuovoTesto = sostituisciTestuale(testo, 'vecchio', 'nuovo');
```

## Demo
Apri `index.html` in un browser. La sostituzione viene eseguita automaticamente ogni secondo.

## Personalizzazione
- Modifica `styles.css` per l'aspetto della demo
- Modifica `sostituisciTestuale.js` per i parametri della demo

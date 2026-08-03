# Taglia Testuale

Funzione JavaScript che taglia una stringa a un numero massimo di caratteri.

## Struttura del progetto

```
taglia-testuale/
├── js/
│   └── tagliaTestuale.js    # Funzione principale
├── css/
│   └── styles.css          # Stili di base per la demo
├── index.html              # Pagina demo
└── README.md               # Questo file
```

## Funzione `tagliaTestuale(testo, max)`

### Descrizione
Taglia una stringa al numero massimo di caratteri specificato.

### Parametri
- **testo** (String): La stringa da tagliare
- **max** (Number): Il numero massimo di caratteri

### Valore di ritorno
- **String**: La stringa tagliata (stringa vuota se l'input non è valido o max <= 0)

### Dettagli tecnici
- slice(0, max) estrae i primi max caratteri
- Restituisce la stringa originale se è già più corta di max

### Utilizzo
```javascript
tagliaTestuale('ciao mondo', 5); // → 'ciao'
tagliaTestuale('ciao', 10); // → 'ciao'
tagliaTestuale('ciao mondo', 0); // → ''

// In React
const anteprima = tagliaTestuale(testo, 50);
```

## Demo
Apri `index.html` in un browser. Il taglio viene eseguito automaticamente ogni secondo.

## Personalizzazione
- Modifica `styles.css` per l'aspetto della demo
- Modifica `tagliaTestuale.js` per i parametri della demo

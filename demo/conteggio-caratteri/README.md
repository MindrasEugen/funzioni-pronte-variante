# Conteggio Caratteri

Funzione JavaScript che conta il numero di caratteri in una stringa.

## Struttura del progetto

```
conteggio-caratteri/
├── js/
│   └── conteggioCaratteri.js    # Funzione principale
├── css/
│   └── styles.css              # Stili di base per la demo
├── index.html                  # Pagina demo
└── README.md                   # Questo file
```

## Funzione `conteggioCaratteri(testo)`

### Descrizione
Conta il numero di caratteri in una stringa, inclusi spazi e punteggiatura.

### Parametri
- **testo** (String): La stringa di cui contare i caratteri

### Valore di ritorno
- **Number**: Il numero di caratteri (0 se l'input non è una stringa)

### Dettagli tecnici
- Usa la proprietà length della stringa
- Conta anche spazi e caratteri speciali

### Utilizzo
```javascript
conteggioCaratteri('ciao'); // → 4
conteggioCaratteri('Ciao mondo!'); // → 11

// In React
const lunghezza = conteggioCaratteri(testo);
```

## Demo
Apri `index.html` in un browser. Il conteggio viene eseguito automaticamente ogni secondo.

## Personalizzazione
- Modifica `styles.css` per l'aspetto della demo
- Modifica `conteggioCaratteri.js` per i parametri della demo

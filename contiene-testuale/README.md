# Contiene Testuale

Funzione JavaScript che verifica se una stringa contiene un sottotesto.

## Struttura del progetto

```
contiene-testuale/
├── js/
│   └── contieneTestuale.js    # Funzione principale
├── css/
│   └── styles.css           # Stili di base per la demo
├── index.html               # Pagina demo
└── README.md                # Questo file
```

## Funzione `contieneTestuale(testo, sottotesto)`

### Descrizione
Verifica se una stringa contiene un sottotesto specificato.

### Parametri
- **testo** (String): La stringa in cui cercare
- **sottotesto** (String): Il sottotesto da cercare

### Valore di ritorno
- **Boolean**: true se il sottotesto è contenuto, false altrimenti

### Dettagli tecnici
- Usa String.includes() per la verifica
- Case-sensitive (maiuscole/minuscole contano)
- Restituisce false se uno dei parametri non è una stringa

### Utilizzo
```javascript
contieneTestuale('Ciao mondo', 'Ciao'); // → true
contieneTestuale('Ciao mondo', 'Mondo'); // → false (case-sensitive)
contieneTestuale('Ciao mondo', ''); // → true

// In React
const contiene = contieneTestuale(testo, 'cerca');
```

## Demo
Apri `index.html` in un browser. La verifica viene eseguita automaticamente ogni secondo.

## Personalizzazione
- Modifica `styles.css` per l'aspetto della demo
- Modifica `contieneTestuale.js` per i parametri della demo

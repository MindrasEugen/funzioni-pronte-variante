# Funzioni Salvate

> Una raccolta di funzioni JavaScript utili per lo sviluppo web, ognuna con la propria struttura completa: codice, demo interattiva e documentazione dettagliata.

## 📁 Struttura della Repository

```
funzioni salvate/
├── README.md                  # Questo file - panoramica generale
├── index.js                 # Entry point - esporta tutte le funzioni
├── cambia-colore/
│   ├── js/
│   │   └── colorChanger.js   # Cambia colore sfondo elementi
│   ├── css/
│   │   └── styles.css        # Stili per la demo
│   ├── index.html            # Demo interattiva
│   └── README.md             # Documentazione dettagliata
│
├── numero-casuale/
│   ├── js/
│   │   └── randomNumber.js   # Genera numeri casuali in un intervallo
│   ├── css/
│   │   └── styles.css        # Stili per la demo
│   ├── index.html            # Demo interattiva
│   └── README.md             # Documentazione dettagliata
│
├── selettore-rapido/
│   ├── js/
│   │   └── shortcut.js       # Shortcut per querySelector ($)
│   ├── css/
│   │   └── styles.css        # Stili per la demo
│   ├── index.html            # Demo interattiva
│   └── README.md             # Documentazione dettagliata
│
├── crea-elemento/
│   ├── js/
│   │   └── createElement.js  # Crea elementi DOM con parametri
│   ├── css/
│   │   └── styles.css        # Stili per la demo
│   ├── index.html            # Demo interattiva
│   └── README.md             # Documentazione dettagliata
│
├── on-listener/
│   ├── js/
│   │   └── eventListener.js  # Shortcut per addEventListener
│   ├── css/
│   │   └── styles.css        # Stili per la demo
│   ├── index.html            # Demo interattiva
│   └── README.md             # Documentazione dettagliata
│
├── log-color/
│   ├── js/
│   │   └── colorLogger.js    # Stampa messaggi colorati in console
│   ├── css/
│   │   └── styles.css        # Stili per la demo
│   ├── index.html            # Demo interattiva
│   └── README.md             # Documentazione dettagliata
│
├── fade-in/
│   ├── js/
│   │   └── animations.js      # Effetto fade-in su elementi
│   ├── css/
│   │   └── styles.css        # Stili per la demo
│   ├── index.html            # Demo interattiva
│   └── README.md             # Documentazione dettagliata
│
├── calcola-percentuale/
│   ├── js/
│   │   └── calcolaPercentuale.js  # Calcola la percentuale di un valore
│   ├── css/
│   │   └── styles.css        # Stili per la demo
│   ├── index.html            # Demo interattiva
│   └── README.md             # Documentazione dettagliata
│
├── arrotonda-numero/
│   ├── js/
│   │   └── arrotondaNumero.js  # Arrotonda un numero a N decimali
│   ├── css/
│   │   └── styles.css        # Stili per la demo
│   ├── index.html            # Demo interattiva
│   └── README.md             # Documentazione dettagliata
│
├── calcola-media/
│   ├── js/
│   │   └── calcolaMedia.js  # Calcola la media di un array di numeri
│   ├── css/
│   │   └── styles.css        # Stili per la demo
│   ├── index.html            # Demo interattiva
│   └── README.md             # Documentazione dettagliata
│
├── calcola-somma/
│   ├── js/
│   │   └── calcolaSomma.js  # Calcola la somma di un array di numeri
│   ├── css/
│   │   └── styles.css        # Stili per la demo
│   ├── index.html            # Demo interattiva
│   └── README.md             # Documentazione dettagliata
│
├── trova-massimo/
│   ├── js/
│   │   └── trovaMassimo.js  # Trova il valore massimo in un array
│   ├── css/
│   │   └── styles.css        # Stili per la demo
│   ├── index.html            # Demo interattiva
│   └── README.md             # Documentazione dettagliata
│
├── trova-minimo/
│   ├── js/
│   │   └── trovaMinimo.js  # Trova il valore minimo in un array
│   ├── css/
│   │   └── styles.css        # Stili per la demo
│   ├── index.html            # Demo interattiva
│   └── README.md             # Documentazione dettagliata
│
├── verifica-numero-primo/
│   ├── js/
│   │   └── verificaNumeroPrimo.js  # Verifica se un numero è primo
│   ├── css/
│   │   └── styles.css        # Stili per la demo
│   ├── index.html            # Demo interattiva
│   └── README.md             # Documentazione dettagliata
│
├── calcola-ipotenuza/
│   ├── js/
│   │   └── calcolaIpotenuza.js  # Calcola l'ipotenusa (teorema di Pitagora)
│   ├── css/
│   │   └── styles.css        # Stili per la demo
│   ├── index.html            # Demo interattiva
│   └── README.md             # Documentazione dettagliata
│
├── calcola-fattoriale/
│   ├── js/
│   │   └── calcolaFattoriale.js  # Calcola il fattoriale di un numero
│   ├── css/
│   │   └── styles.css        # Stili per la demo
│   ├── index.html            # Demo interattiva
│   └── README.md             # Documentazione dettagliata
│
├── calcola-potenza/
│   ├── js/
│   │   └── calcolaPotenza.js  # Calcola la potenza (base^esponente)
│   ├── css/
│   │   └── styles.css        # Stili per la demo
│   ├── index.html            # Demo interattiva
│   └── README.md             # Documentazione dettagliata
│
├── calcola-radice/
│   ├── js/
│   │   └── calcolaRadice.js  # Calcola la radice (quadrata, cubica, ecc.)
│   ├── css/
│   │   └── styles.css        # Stili per la demo
│   ├── index.html            # Demo interattiva
│   └── README.md             # Documentazione dettagliata
│
├── verifica-in-range/
│   ├── js/
│   │   └── verificaInRange.js  # Verifica se un numero è in un range
│   ├── css/
│   │   └── styles.css        # Stili per la demo
│   ├── index.html            # Demo interattiva
│   └── README.md             # Documentazione dettagliata
│
├── filtra-array/
│   ├── js/
│   │   └── filtraArray.js  # Filtra un array in base a una condizione
│   ├── css/
│   │   └── styles.css        # Stili per la demo
│   ├── index.html            # Demo interattiva
│   └── README.md             # Documentazione dettagliata
│
├── ordina-array/
│   ├── js/
│   │   └── ordinaArray.js  # Ordina un array di numeri o oggetti
│   ├── css/
│   │   └── styles.css        # Stili per la demo
│   ├── index.html            # Demo interattiva
│   └── README.md             # Documentazione dettagliata
│
├── inverti-stringa/
│   ├── js/
│   │   └── invertiStringa.js  # Inverte una stringa
│   ├── css/
│   │   └── styles.css        # Stili per la demo
│   ├── index.html            # Demo interattiva
│   └── README.md             # Documentazione dettagliata
│
├── rimuovi-duplicati/
│   ├── js/
│   │   └── rimuoviDuplicati.js  # Rimuove duplicati da un array
│   ├── css/
│   │   └── styles.css        # Stili per la demo
│   ├── index.html            # Demo interattiva
│   └── README.md             # Documentazione dettagliata
│
├── mescola-array/
│   ├── js/
│   │   └── mescolaArray.js  # Mescola casualmente un array
│   ├── css/
│   │   └── styles.css        # Stili per la demo
│   ├── index.html            # Demo interattiva
│   └── README.md             # Documentazione dettagliata
│
├── verifica-tipo/
│   ├── js/
│   │   └── verificaTipo.js  # Verifica il tipo di una variabile
│   ├── css/
│   │   └── styles.css        # Stili per la demo
│   ├── index.html            # Demo interattiva
│   └── README.md             # Documentazione dettagliata
│
├── genera-id/
│   ├── js/
│   │   └── generaId.js  # Genera un ID casuale alfanumerico
│   ├── css/
│   │   └── styles.css        # Stili per la demo
│   ├── index.html            # Demo interattiva
│   └── README.md             # Documentazione dettagliata
│
├── conteggio-caratteri/
│   ├── js/
│   │   └── conteggioCaratteri.js  # Conta i caratteri in una stringa
│   ├── css/
│   │   └── styles.css        # Stili per la demo
│   ├── index.html            # Demo interattiva
│   └── README.md             # Documentazione dettagliata
│
├── capitalizza-parola/
│   ├── js/
│   │   └── capitalizzaParola.js  # Capitalizza la prima lettera
│   ├── css/
│   │   └── styles.css        # Stili per la demo
│   ├── index.html            # Demo interattiva
│   └── README.md             # Documentazione dettagliata
│
├── taglia-testuale/
│   ├── js/
│   │   └── tagliaTestuale.js  # Taglia una stringa a N caratteri
│   ├── css/
│   │   └── styles.css        # Stili per la demo
│   ├── index.html            # Demo interattiva
│   └── README.md             # Documentazione dettagliata
│
├── contiene-testuale/
│   ├── js/
│   │   └── contieneTestuale.js  # Verifica se una stringa contiene un sottotesto
│   ├── css/
│   │   └── styles.css        # Stili per la demo
│   ├── index.html            # Demo interattiva
│   └── README.md             # Documentazione dettagliata
│
└── sostituisci-testuale/
    ├── js/
    │   └── sostituisciTestuale.js  # Sostituisce un sottotesto in una stringa
    ├── css/
    │   └── styles.css        # Stili per la demo
    ├── index.html            # Demo interattiva
    └── README.md             # Documentazione dettagliata
```

## 🎯 Elenco Funzioni

### 🎨 Manipolazione Visiva e Animazioni
- **🌈 [`cambiaColore(elemento)`](cambia-colore/README.md)** — Cambia il colore di sfondo di un elemento HTML in modo casuale
  [👉 Demo](cambia-colore/index.html) · [📖 Doc](cambia-colore/README.md)

- **🎭 [`fadeIn(elemento, durata)`](fade-in/README.md)** — Applica un effetto fade-in (dissolvenza in entrata) a un elemento
  [👉 Demo](fade-in/index.html) · [📖 Doc](fade-in/README.md)

---

### 🧮 Operazioni Matematiche
- **📊 [`calcolaPercentuale(valore, percentuale)`](calcola-percentuale/README.md)** — Calcola la percentuale di un valore
  [👉 Demo](calcola-percentuale/index.html) · [📖 Doc](calcola-percentuale/README.md)

- **🔢 [`arrotondaNumero(numero, decimali)`](arrotonda-numero/README.md)** — Arrotonda un numero a N decimali
  [👉 Demo](arrotonda-numero/index.html) · [📖 Doc](arrotonda-numero/README.md)

- **📈 [`calcolaMedia(numeri)`](calcola-media/README.md)** — Calcola la media aritmetica di un array di numeri
  [👉 Demo](calcola-media/index.html) · [📖 Doc](calcola-media/README.md)

- **➕ [`calcolaSomma(numeri)`](calcola-somma/README.md)** — Calcola la somma di un array di numeri
  [👉 Demo](calcola-somma/index.html) · [📖 Doc](calcola-somma/README.md)

- **↗️ [`trovaMassimo(numeri)`](trova-massimo/README.md)** — Trova il valore massimo in un array
  [👉 Demo](trova-massimo/index.html) · [📖 Doc](trova-massimo/README.md)

- **↘️ [`trovaMinimo(numeri)`](trova-minimo/README.md)** — Trova il valore minimo in un array
  [👉 Demo](trova-minimo/index.html) · [📖 Doc](trova-minimo/README.md)

- **✅ [`verificaNumeroPrimo(numero)`](verifica-numero-primo/README.md)** — Verifica se un numero è primo
  [👉 Demo](verifica-numero-primo/index.html) · [📖 Doc](verifica-numero-primo/README.md)

- **🔺 [`calcolaIpotenuza(a, b)`](calcola-ipotenuza/README.md)** — Calcola l'ipotenusa di un triangolo rettangolo
  [👉 Demo](calcola-ipotenuza/index.html) · [📖 Doc](calcola-ipotenuza/README.md)

- **✖️ [`calcolaFattoriale(numero)`](calcola-fattoriale/README.md)** — Calcola il fattoriale di un numero (n!)
  [👉 Demo](calcola-fattoriale/index.html) · [📖 Doc](calcola-fattoriale/README.md)

- **↗️ [`calcolaPotenza(base, esponente)`](calcola-potenza/README.md)** — Calcola la potenza di un numero
  [👉 Demo](calcola-potenza/index.html) · [📖 Doc](calcola-potenza/README.md)

- **√ [`calcolaRadice(numero, indice)`](calcola-radice/README.md)** — Calcola la radice di un numero
  [👉 Demo](calcola-radice/index.html) · [📖 Doc](calcola-radice/README.md)

- **🎯 [`verificaInRange(numero, min, max)`](verifica-in-range/README.md)** — Verifica se un numero è in un range
  [👉 Demo](verifica-in-range/index.html) · [📖 Doc](verifica-in-range/README.md)

---

### 🔢 Utility e Generatori
- **🎲 [`numeroCasuale(min, max)`](numero-casuale/README.md)** — Genera un numero intero casuale compreso tra min e max (inclusi)
  [👉 Demo](numero-casuale/index.html) · [📖 Doc](numero-casuale/README.md)

- **🖨️ [`logColor(msg, colore)`](log-color/README.md)** — Stampa un messaggio colorato nella console del browser
  [👉 Demo](log-color/index.html) · [📖 Doc](log-color/README.md)

- **🔤 [`filtraArray(array, callback)`](filtra-array/README.md)** — Filtra un array in base a una condizione
  [👉 Demo](filtra-array/index.html) · [📖 Doc](filtra-array/README.md)

- **🔄 [`ordinaArray(array, chiave)`](ordina-array/README.md)** — Ordina un array di numeri o oggetti
  [👉 Demo](ordina-array/index.html) · [📖 Doc](ordina-array/README.md)

- **🔀 [`invertiStringa(testo)`](inverti-stringa/README.md)** — Inverte una stringa
  [👉 Demo](inverti-stringa/index.html) · [📖 Doc](inverti-stringa/README.md)

- **🗑️ [`rimuoviDuplicati(array)`](rimuovi-duplicati/README.md)** — Rimuove i duplicati da un array
  [👉 Demo](rimuovi-duplicati/index.html) · [📖 Doc](rimuovi-duplicati/README.md)

- **🎲 [`mescolaArray(array)`](mescola-array/README.md)** — Mescola casualmente gli elementi di un array
  [👉 Demo](mescola-array/index.html) · [📖 Doc](mescola-array/README.md)

- **🔍 [`verificaTipo(valore)`](verifica-tipo/README.md)** — Verifica il tipo di una variabile
  [👉 Demo](verifica-tipo/index.html) · [📖 Doc](verifica-tipo/README.md)

- **🆔 [`generaId(lunghezza)`](genera-id/README.md)** — Genera un ID casuale alfanumerico
  [👉 Demo](genera-id/index.html) · [📖 Doc](genera-id/README.md)

- **📝 [`conteggioCaratteri(testo)`](conteggio-caratteri/README.md)** — Conta il numero di caratteri in una stringa
  [👉 Demo](conteggio-caratteri/index.html) · [📖 Doc](conteggio-caratteri/README.md)

- **📛 [`capitalizzaParola(testo)`](capitalizza-parola/README.md)** — Capitalizza la prima lettera di una stringa
  [👉 Demo](capitalizza-parola/index.html) · [📖 Doc](capitalizza-parola/README.md)

- **✂️ [`tagliaTestuale(testo, max)`](taglia-testuale/README.md)** — Taglia una stringa a N caratteri
  [👉 Demo](taglia-testuale/index.html) · [📖 Doc](taglia-testuale/README.md)

- **🔎 [`contieneTestuale(testo, sottotesto)`](contiene-testuale/README.md)** — Verifica se una stringa contiene un sottotesto
  [👉 Demo](contiene-testuale/index.html) · [📖 Doc](contiene-testuale/README.md)

- **🔄 [`sostituisciTestuale(testo, vecchio, nuovo)`](sostituisci-testuale/README.md)** — Sostituisce un sottotesto in una stringa
  [👉 Demo](sostituisci-testuale/index.html) · [📖 Doc](sostituisci-testuale/README.md)

---

### ⚡ Shortcut DOM e Gestione Eventi
- **🔍 [`$ (selettore)`](selettore-rapido/README.md)** — Shortcut per `document.querySelector()`
  [👉 Demo](selettore-rapido/index.html) · [📖 Doc](selettore-rapido/README.md)

- **➕ [`crea(tag, classe, testo)`](crea-elemento/README.md)** — Crea un nuovo elemento HTML con parametri opzionali
  [👉 Demo](crea-elemento/index.html) · [📖 Doc](crea-elemento/README.md)

- **📡 [`on(elemento, evento, callback)`](on-listener/README.md)** — Shortcut per `addEventListener()`
  [👉 Demo](on-listener/index.html) · [📖 Doc](on-listener/README.md)

## 🚀 Come Usare

### 1. Esplorare le funzioni
Ogni cartella contiene:
- **`js/`**: File JavaScript con la funzione implementata
- **`css/`**: Stili CSS per la pagina demo
- **`index.html`**: Pagina HTML di dimostrazione interattiva
- **`README.md`**: Documentazione dettagliata con esempi, parametri e casi d'uso

### 2. Testare una funzione
Apri semplicemente il file `index.html` della funzione che ti interessa in un browser:
```bash
# Esempio per testare la funzione cambiaColore
start cambia-colore/index.html
```

### 3. Integrare una funzione nel tuo progetto
Copia il file JavaScript dalla cartella `js/` della funzione desiderata nel tuo progetto e includilo:
```html
<script src="path/to/colorChanger.js"></script>
```

### 🌐 Usare la libreria completa via CDN

Al momento il CDN non è disponibile. Per utilizzare le funzioni, segui le istruzioni di integrazione individuale descritte sopra.

## 📋 Panoramica Funzioni

### 🎨 Manipolazione DOM e Stili

#### `cambiaColore(elemento)`
Cambia il colore di sfondo di qualsiasi elemento HTML con un colore RGB casuale.
- **Parametri**: `elemento` (HTMLElement)
- **Demo**: Colori che cambiano automaticamente ogni secondo
- **Uso tipico**: Effetti visivi dinamici, background animati

#### `crea(tag, classe, testo)`
Crea un nuovo elemento HTML con parametri opzionali.
- **Parametri**: `tag` (obbligatorio), `classe` (default: ""), `testo` (default: "")
- **Demo**: Creazione dinamica di elementi
- **Uso tipico**: Generazione dinamica di interfacce, liste, tabelle

#### `fadeIn(elemento, durata)`
Applica un effetto fade-in (dissolvenza in entrata) a un elemento.
- **Parametri**: `elemento` (HTMLElement), `durata` (default: 500ms)
- **Demo**: Elementi che appaiono con effetto a cascata
- **Uso tipico**: Animazioni di entrata, transizioni fluide

### 🔢 Utility Generali

#### `numeroCasuale(min, max)`
Genera un numero intero casuale compreso tra due valori (inclusi).
- **Parametri**: `min` (default: 0), `max` (default: 100)
- **Demo**: Numero che cambia ogni secondo
- **Uso tipico**: Simulazioni, giochi, selezione casuale da array

#### `logColor(msg, colore)`
Stampa un messaggio colorato nella console del browser.
- **Parametri**: `msg` (String), `colore` (default: "cyan")
- **Demo**: Messaggi colorati nella console
- **Uso tipico**: Debug più leggibile, logging professionale

### ⚡ Shortcut e Utility DOM

#### `$ (selettore)`
Shortcut per `document.querySelector()`.
- **Parametri**: `selettore` (String)
- **Demo**: Selezione elementi con sintassi abbreviata
- **Uso tipico**: Codice più conciso, prototipazione rapida
- **⚠️ Attenzione**: Può confliggere con jQuery

#### `on(elemento, evento, callback)`
Shortcut per `addEventListener()`.
- **Parametri**: `elemento` (HTMLElement), `evento` (String), `callback` (Function)
- **Demo**: Bottone interattivo che cambia colore
- **Uso tipico**: Gestione eventi più leggibile

## 💡 Combinare le Funzioni

Le funzioni sono progettate per lavorare insieme. Alcuni esempi:

### Esempio 1: Creazione e animazione
```javascript
// Usa crea() e fadeIn() insieme
const newDiv = crea("div", "notification", "Nuova notifica!");
document.body.appendChild(newDiv);
fadeIn(newDiv, 400);
```

### Esempio 2: Selezione e gestione eventi
```javascript
// Usa $() e on() insieme
on($("#myButton"), "click", () => {
    logColor("Bottone cliccato!", "green");
});
```

### Esempio 3: Generazione casuale
```javascript
// Usa numeroCasuale() e cambiaColore()
const elementi = document.querySelectorAll(".box");
elementi.forEach(el => {
    on(el, "mouseover", () => {
        cambiaColore(el);
    });
});
```

## 🎓 Struttura Standard

Ogni funzione segue la stessa struttura per garantire coerenza:

```
nomi-funzione/
├── js/
│   └── nomeFile.js          # Implementazione della funzione
│                           # - Commenti all'inizio (descrizione, uso)
│                           # - Codice della funzione
│                           # - Demo automatica o interattiva
│                           # - Commenti finali (dettagli implementativi)
│
├── css/
│   └── styles.css          # Stili per la demo
│                           # - Design pulito e responsivo
│                           # - Animazioni e transizioni
│
├── index.html              # Pagina demo
│                           # - Titolo descrittivo
│                           # - Descrizione della funzione
│                           # - Demo interattiva
│                           # - Istruzioni chiare
│
└── README.md               # Documentazione
                            # - Descrizione dettagliata
                            # - Parametri e valori di ritorno
                            # - Esempi di utilizzo
                            # - Dettagli tecnici
                            # - Casi d'uso avanzati
```

## 📝 Convenzioni

- **Nomi cartelle**: In italiano, con trattino (kebab-case)
- **Nomi file JS**: In inglese, camelCase
- **Commenti**: Solo all'inizio e alla fine dei file, non invasivi
- **Demo**: Automatiche o interattive, sempre chiare
- **Documentazione**: Completa ma concisa

## 🛠️ Requisiti

- Browser moderno che supporta:
  - ES6+ (per template literals, arrow functions, ecc.)
  - CSS Transitions (per animazioni)
  - `requestAnimationFrame` (per animazioni fluide)
- Nessuna dipendenza esterna

## 📜 Licenza

Questa raccolta è fornita come risorsa di apprendimento. Sentiti libero di:
- Usare le funzioni nei tuoi progetti
- Modificarle secondo le tue esigenze
- Condividerle con altri

## 🙏 Contribuire

Se hai suggerimenti per nuove funzioni o miglioramenti, puoi:
1. Aggiungere una nuova cartella con la stessa struttura
2. Seguire le convenzioni esistenti
3. Assicurarti che la demo funzioni correttamente

## 📞 Supporto

Per domande su una funzione specifica, consulta il relativo file `README.md` all'interno della cartella della funzione.

---

> **Nota**: Tutte le funzioni sono state testate e verificano in ambienti browser moderni.
> Per l'ottimale esperienza, usa Chrome, Firefox, Edge o Safari aggiornati.

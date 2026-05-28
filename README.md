# Calendario Webinar Genya — Widget Docebo

## Architettura (4 file)

```
📁 cartella sul server
├── diretta.html      ← iframe homepage Genya DIRETTA  (mostra Webinar + Q&A + Talks)
├── indiretta.html    ← iframe homepage Genya INDIRETTA (mostra Webinar + Talks, NO Q&A)
├── events.js         ← 🔴 UNICO FILE DA MODIFICARE — contiene tutti gli eventi
└── calendario.js     ← motore del widget — NON toccare
```

## Setup su Docebo

1. Caricare i 4 file nella **stessa cartella** sul server web
2. Homepage Genya Diretta → widget iframe → URL di `diretta.html` → altezza **440px**
3. Homepage Genya Indiretta → widget iframe → URL di `indiretta.html` → altezza **440px**

## Come aggiornare gli eventi

Aprire `events.js` e modificare le tre sezioni:

### WEBINAR — visibili su entrambi gli iframe
```javascript
var WEBINAR = [
  { data:"GG/MM/AAAA", ora_inizio:"HH:MM", ora_fine:"HH:MM", titolo:"Nome", link:"https://..." },
];
```

### QA — visibili SOLO su iframe diretta
```javascript
var QA = [
  { data:"GG/MM/AAAA", ora_inizio:"HH:MM", ora_fine:"HH:MM", titolo:"Nome", link:"https://..." },
];
```

### TALKS — visibili su entrambi, in evidenza in fondo al calendario
```javascript
var TALKS = [
  { data:"GG/MM/AAAA", ora_inizio:"HH:MM", ora_fine:"HH:MM", titolo:"Nome", link:"https://..." },
];
```

## Regole importanti

- Gli eventi passati vengono **ignorati automaticamente**. Puoi lasciarli nel file.
- Pulisci quando vuoi per tenere il file ordinato.
- Ogni riga DEVE finire con una **virgola**
- Usare solo **doppi apici** " (non apici singoli ')
- Formato data: **GG/MM/AAAA** — Formato ora: **HH:MM** (24h, orario Roma)

## Logica automatica

| Tipo | Dove appare | Posizione | N. slot |
|---|---|---|---|
| Webinar | Diretta + Indiretta | Lista rolling | 5 (con Talk) o 6 (senza) |
| Q&A | Solo Diretta | Lista rolling (sfondo azzurro + badge) | Conta come slot rolling |
| Academy Talk | Diretta + Indiretta | Fisso in fondo (verde) | 1 (il prossimo non terminato) |

| Stato | Badge |
|---|---|
| Evento futuro | Nessuno |
| < 30 min all'inizio | **Tra poco live** (arancione) |
| In corso | **● LIVE** (rosso lampeggiante) |
| Terminato | Scompare dalla lista |

I badge LIVE / Tra poco live funzionano anche sull'Academy Talk.

## Cache

Il widget carica `events.js` e `calendario.js` con un timestamp (`?v=1716912345678`).
Ogni apertura della pagina scarica i file freschi. Zero problemi di cache.

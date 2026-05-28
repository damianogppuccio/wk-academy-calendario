# Calendario Webinar Genya — Widget per Docebo

## Architettura (2 file)

```
📁 cartella sul server
├── index.html    ← NON toccare mai. Contiene grafica e logica.
└── events.js     ← UNICO file da modificare. Contiene gli eventi.
```

**Perché due file?**
`index.html` carica `events.js` aggiungendo `?v=1716912345678` (timestamp) all'URL.
Ogni volta che un utente apre la pagina, il browser vede un URL diverso e scarica
gli eventi freschi dal server. Zero problemi di cache.

---

## Aggiornare gli eventi

1. Aprire `events.js` sul server
2. Modificare le righe dentro `var EVENTS = [ ... ]`
3. Salvare

Formato di ogni riga:
```javascript
{ data:"GG/MM/AAAA", ora_inizio:"HH:MM", ora_fine:"HH:MM", titolo:"Nome", link:"https://..." },
```

- **data** → formato italiano GG/MM/AAAA
- **ora_inizio / ora_fine** → formato 24h, orario Roma
- **titolo** → nome del webinar
- **link** → URL iscrizione o accesso

---

## Deploy

1. Caricare `index.html` e `events.js` nella **stessa cartella** sul server
2. In Docebo → widget **iframe** → incollare URL di `index.html`
3. Altezza iframe: **~430 px**

---

## Logica automatica

| Stato | Dot timeline | Badge |
|---|---|---|
| Evento futuro | 🟢 Verde | — |
| < 30 min all'inizio | 🟠 Arancione | **Tra poco live** |
| In corso | 🔴 Rosso | **● LIVE** lampeggiante |
| Terminato | Scompare | — |

Mostra sempre i prossimi 6 eventi. Si aggiorna ogni 30 secondi.

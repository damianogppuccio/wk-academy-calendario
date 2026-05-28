/*  ╔══════════════════════════════════════════════════════════════════╗
    ║           📅  TABELLA EVENTI — COMPILARE QUI  📅               ║
    ║                                                                 ║
    ║  Inserire fino a 20 eventi. Il widget mostra automaticamente   ║
    ║  i prossimi 6 non ancora terminati, in ordine cronologico.     ║
    ║  Gli eventi passati vengono scartati da soli.                  ║
    ║                                                                 ║
    ║  ● 30 min prima dell'inizio → badge arancione "Tra poco live" ║
    ║  ● Durante l'evento         → badge rosso lampeggiante "LIVE" ║
    ║                                                                 ║
    ║  Formato:                                                       ║
    ║    data        "GG/MM/AAAA"                                    ║
    ║    ora_inizio  "HH:MM"        (formato 24h, orario Roma)      ║
    ║    ora_fine    "HH:MM"        (formato 24h, orario Roma)      ║
    ║    titolo      "Nome del webinar"                              ║
    ║    link        "https://..."  (URL iscrizione/accesso)         ║
    ║                                                                 ║
    ║  ⚠️  NON modificare la riga "var EVENTS" né la struttura.     ║
    ║      Copiare una riga esistente e cambiare i valori.           ║
    ╚══════════════════════════════════════════════════════════════════╝ */

var EVENTS = [
  { data:"28/05/2026", ora_inizio:"08:00", ora_fine:"22:00", titolo:"Overview",                   link:"https://google.com.au" },
  { data:"28/05/2026", ora_inizio:"22:30", ora_fine:"23:30", titolo:"Contabilità IVA base",       link:"https://google.com.au" },
  { data:"30/05/2026", ora_inizio:"10:00", ora_fine:"12:00", titolo:"Contabilità generale",       link:"https://google.com.au" },
  { data:"02/06/2026", ora_inizio:"10:00", ora_fine:"11:30", titolo:"Gestione cespiti",           link:"https://google.com.au" },
  { data:"06/06/2026", ora_inizio:"14:00", ora_fine:"15:30", titolo:"Bilancio e chiusure",        link:"https://google.com.au" },
  { data:"09/06/2026", ora_inizio:"10:00", ora_fine:"11:00", titolo:"Dichiarazioni fiscali",      link:"https://google.com.au" },
  { data:"13/06/2026", ora_inizio:"10:00", ora_fine:"11:30", titolo:"Fatturazione elettronica",   link:"https://google.com.au" },
  { data:"16/06/2026", ora_inizio:"14:00", ora_fine:"15:00", titolo:"F24 e versamenti",           link:"https://google.com.au" },
  { data:"20/06/2026", ora_inizio:"10:00", ora_fine:"11:00", titolo:"Ratei e risconti",           link:"https://google.com.au" },
  { data:"23/06/2026", ora_inizio:"10:00", ora_fine:"11:30", titolo:"Note di credito e debito",   link:"https://google.com.au" },
  { data:"27/06/2026", ora_inizio:"14:00", ora_fine:"15:30", titolo:"Liquidazione IVA",           link:"https://google.com.au" },
  { data:"30/06/2026", ora_inizio:"10:00", ora_fine:"11:00", titolo:"Registri contabili",         link:"https://google.com.au" },
  { data:"04/07/2026", ora_inizio:"10:00", ora_fine:"12:00", titolo:"Piano dei conti",            link:"https://google.com.au" },
  { data:"07/07/2026", ora_inizio:"14:00", ora_fine:"15:30", titolo:"Scadenzario e pagamenti",    link:"https://google.com.au" },
  { data:"11/07/2026", ora_inizio:"10:00", ora_fine:"11:00", titolo:"Ritenute d'acconto",         link:"https://google.com.au" },
  { data:"14/07/2026", ora_inizio:"10:00", ora_fine:"11:30", titolo:"Comunicazioni periodiche",   link:"https://google.com.au" },
  { data:"18/07/2026", ora_inizio:"14:00", ora_fine:"15:00", titolo:"Gestione clienti/fornitori", link:"https://google.com.au" },
  { data:"21/07/2026", ora_inizio:"10:00", ora_fine:"11:00", titolo:"Ammortamenti",               link:"https://google.com.au" },
  { data:"25/07/2026", ora_inizio:"10:00", ora_fine:"12:00", titolo:"Chiusura trimestrale",       link:"https://google.com.au" },
  { data:"28/07/2026", ora_inizio:"14:00", ora_fine:"15:30", titolo:"Report personalizzati",      link:"https://google.com.au" },
];

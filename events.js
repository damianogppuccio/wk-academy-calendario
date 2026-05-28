/*  ╔══════════════════════════════════════════════════════════════════════╗
    ║                                                                      ║
    ║   📅  EVENTI ACADEMY — UNICO FILE DA MODIFICARE  📅                ║
    ║                                                                      ║
    ║   Tre sezioni separate: WEBINAR, QA, TALKS                          ║
    ║   Compilare solo i campi indicati, non toccare altro.               ║
    ║                                                                      ║
    ║   ⚙️  Il widget filtra automaticamente gli eventi passati.          ║
    ║       Puoi lasciare eventi vecchi nella lista: verranno ignorati.   ║
    ║       Pulisci quando vuoi per tenere il file ordinato.              ║
    ║                                                                      ║
    ║   Formato per ogni riga:                                            ║
    ║     data        →  "GG/MM/AAAA"       (es. "03/06/2026")           ║
    ║     ora_inizio  →  "HH:MM"            (es. "10:00")                ║
    ║     ora_fine    →  "HH:MM"            (es. "11:30")                ║
    ║     titolo      →  "Nome evento"                                    ║
    ║     link        →  "https://..."       (URL iscrizione)             ║
    ║                                                                      ║
    ║   ⚠️  Ogni riga DEVE finire con una virgola                         ║
    ║   ⚠️  L'ultima riga di ogni sezione PUÒ avere la virgola           ║
    ║   ⚠️  NON usare apici singoli ' — solo doppi apici "               ║
    ║                                                                      ║
    ╚══════════════════════════════════════════════════════════════════════╝ */


/* ═══════════════════════════════════════
   SEZIONE 1 — WEBINAR
   Visibili su ENTRAMBI gli iframe
   (diretta e indiretta)
   ═══════════════════════════════════════ */

var WEBINAR = [
  { data:"28/05/2026", ora_inizio:"08:00", ora_fine:"22:00", titolo:"Overview",                   link:"https://google.com.au" },
  { data:"28/05/2026", ora_inizio:"14:00", ora_fine:"15:30", titolo:"Contabilità IVA base",       link:"https://google.com.au" },
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
];


/* ═══════════════════════════════════════
   SEZIONE 2 — Q&A
   Visibili SOLO su iframe DIRETTA
   (nascosti su indiretta)
   ═══════════════════════════════════════ */

var QA = [
  { data:"29/05/2026", ora_inizio:"10:00", ora_fine:"12:00", titolo:"Sessione domande Contabilità",  link:"https://google.com.au" },
  { data:"05/06/2026", ora_inizio:"14:00", ora_fine:"16:00", titolo:"Sessione domande IVA",          link:"https://google.com.au" },
  { data:"12/06/2026", ora_inizio:"10:00", ora_fine:"12:00", titolo:"Sessione domande Bilancio",     link:"https://google.com.au" },
  { data:"19/06/2026", ora_inizio:"14:00", ora_fine:"16:00", titolo:"Sessione domande Fiscale",      link:"https://google.com.au" },
  { data:"26/06/2026", ora_inizio:"10:00", ora_fine:"12:00", titolo:"Sessione domande Cespiti",      link:"https://google.com.au" },
];


/* ═══════════════════════════════════════
   SEZIONE 3 — ACADEMY TALKS
   Visibili su ENTRAMBI gli iframe
   Il widget mostra il prossimo Talk
   non ancora terminato, in fondo
   al calendario in evidenza.
   ═══════════════════════════════════════ */

var TALKS = [
  { data:"28/05/2026", ora_inizio:"21:00", ora_fine:"23:59", titolo:"AI e Automazione nello Studio",          link:"https://google.com.au" },
  { data:"09/07/2026", ora_inizio:"18:00", ora_fine:"19:30", titolo:"Compliance Digitale: sfide e soluzioni", link:"https://google.com.au" },
];

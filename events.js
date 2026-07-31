/*  ╔══════════════════════════════════════════════════════════════════════╗
    ║                                                                      ║
    ║   📅  EVENTI ACADEMY — UNICO FILE DA MODIFICARE  📅                ║
    ║                                                                      ║
    ║   Quattro sezioni: VACANZE, WEBINAR, QA, TALKS                      ║
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
    ║   ⚠️  Ogni riga DEVE finire con una virgola  },                     ║
    ║       Se ne manca UNA SOLA, tutto il calendario smette di           ║
    ║       funzionare e mostra "Nessun webinar in programma".            ║
    ║   ⚠️  NON usare apici singoli ' — solo doppi apici "               ║
    ║   ⚠️  NON usare il tasto TAB — solo spazi                          ║
    ║                                                                      ║
    ║   ✅  PRIMA DI CARICARE: incolla il file su jshint.com              ║
    ║       per verificare che non ci siano errori di sintassi.           ║
    ║                                                                      ║
    ╚══════════════════════════════════════════════════════════════════════╝ */


/* ═══════════════════════════════════════
   SEZIONE 0 — PAUSA ESTIVA (VACANZE)
   Durante la finestra qui sotto, ENTRAMBI
   gli iframe mostrano il banner "Buone
   vacanze" al posto degli eventi
   (Talk inclusi: sparisce tutto).

   La finestra scade da sola: dopo la
   data "fine" il calendario torna
   automaticamente a mostrare gli eventi.

   Per DISATTIVARE le vacanze:
   lasciare le date vuote → inizio:"", fine:""
   ═══════════════════════════════════════ */

var VACANZE = {
  inizio: "01/08/2026",     /* primo giorno di pausa  (GG/MM/AAAA) */
  fine:   "31/08/2026",     /* ultimo giorno di pausa (GG/MM/AAAA) */
};


/* ═══════════════════════════════════════
   SEZIONE 1 — WEBINAR
   Visibili su ENTRAMBI gli iframe
   (diretta e indiretta)

   ⚠️  I link sono ancora VUOTI ("").
       Vanno compilati con gli URL veri.
   ═══════════════════════════════════════ */

var WEBINAR = [
  { data:"01/09/2026", ora_inizio:"10:00", ora_fine:"11:00", titolo:"Overview",                                         link:"" },
  { data:"01/09/2026", ora_inizio:"11:15", ora_fine:"12:15", titolo:"Contabilità IVA base",                             link:"" },
  { data:"02/09/2026", ora_inizio:"10:00", ora_fine:"11:00", titolo:"Contabilità IVA avanzato",                         link:"" },
  { data:"02/09/2026", ora_inizio:"11:15", ora_fine:"12:15", titolo:"Liquidazione IVA/Ritenute acconto/F24",            link:"" },
  { data:"03/09/2026", ora_inizio:"10:00", ora_fine:"11:00", titolo:"Adempimenti periodici Lipe/Intrastat/Autofatture", link:"" },
  { data:"03/09/2026", ora_inizio:"11:15", ora_fine:"12:15", titolo:"Telematici & Dichiarazioni Integrative",           link:"" },
  { data:"08/09/2026", ora_inizio:"10:00", ora_fine:"11:00", titolo:"Contabilità Generale Base ed Estratto Conto",      link:"" },
  { data:"08/09/2026", ora_inizio:"11:15", ora_fine:"12:15", titolo:"Contabilità Generale Avanzata",                    link:"" },
  { data:"09/09/2026", ora_inizio:"14:30", ora_fine:"15:30", titolo:"Modello 770",                                      link:"" },
  { data:"10/09/2026", ora_inizio:"10:00", ora_fine:"11:00", titolo:"Overview",                                         link:"" },
  { data:"10/09/2026", ora_inizio:"11:15", ora_fine:"12:15", titolo:"Contabilità IVA base",                             link:"" },
  { data:"15/09/2026", ora_inizio:"10:00", ora_fine:"11:00", titolo:"Contabilità IVA avanzato",                         link:"" },
  { data:"15/09/2026", ora_inizio:"11:15", ora_fine:"12:15", titolo:"Liquidazione IVA/Ritenute acconto/F24",            link:"" },
  { data:"22/09/2026", ora_inizio:"10:00", ora_fine:"11:00", titolo:"Overview",                                         link:"" },
  { data:"22/09/2026", ora_inizio:"11:15", ora_fine:"12:15", titolo:"Contabilità IVA base",                             link:"" },
  { data:"23/09/2026", ora_inizio:"14:30", ora_fine:"15:30", titolo:"Contabilità Generale Base ed Estratto Conto",      link:"" },
  { data:"24/09/2026", ora_inizio:"10:00", ora_fine:"11:00", titolo:"Adempimenti periodici Lipe/Intrastat/Autofatture", link:"" },
  { data:"24/09/2026", ora_inizio:"11:15", ora_fine:"12:15", titolo:"Telematici & Dichiarazioni Integrative",           link:"" },
  { data:"29/09/2026", ora_inizio:"10:00", ora_fine:"11:00", titolo:"Genya News - Novità e rilasci",                    link:"" },
  { data:"30/09/2026", ora_inizio:"10:00", ora_fine:"11:00", titolo:"Modello 770",                                      link:"" },
  { data:"30/09/2026", ora_inizio:"11:15", ora_fine:"12:15", titolo:"Contabilità Generale Avanzata",                    link:"" },
];


/* ═══════════════════════════════════════
   SEZIONE 2 — Q&A
   Visibili SOLO su iframe DIRETTA
   (nascosti su indiretta)
   ═══════════════════════════════════════ */

var QA = [
  { data:"04/09/2026", ora_inizio:"10:00", ora_fine:"11:00", titolo:"Sessione di Q&A",      link:"" },
  { data:"11/09/2026", ora_inizio:"10:00", ora_fine:"11:00", titolo:"Sessione di Q&A",      link:"" },
  { data:"18/09/2026", ora_inizio:"10:00", ora_fine:"11:00", titolo:"Sessione di Q&A",      link:"" },
  { data:"25/09/2026", ora_inizio:"10:00", ora_fine:"11:00", titolo:"Sessione di Q&A",      link:"" },
];


/* ═══════════════════════════════════════
   SEZIONE 3 — ACADEMY TALKS
   Visibili su ENTRAMBI gli iframe
   Il widget mostra il prossimo Talk
   non ancora terminato, in fondo
   al calendario in evidenza.

   ⚠️  Il Talk qui sotto non ha ancora una DATA.
       Appena la conosci, inserisci la data
       (formato "GG/MM/AAAA") e il link, e
       togli le due barre // davanti alla riga.
   ═══════════════════════════════════════ */

var TALKS = [
  // { data:"25/09/2026", ora_inizio:"11:00", ora_fine:"12:00", titolo:"Costruire una strategia AI in studio: dalla scelta degli strumenti alla governance dei dati", link:"" },
];

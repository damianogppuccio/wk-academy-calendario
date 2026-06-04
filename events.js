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
  { data:"09/06/2026", ora_inizio:"10:00", ora_fine:"11:00", titolo:"Gestione Modello 730 e RPF",       link:"https://academy.wolterskluwer.it/learn/learning-plans/80/gestione-modello-730-e-rpf/courses/658/gestione-modello-730-e-rpf-del-25062026" },
  { data:"09/06/2026", ora_inizio:"11:15", ora_fine:"12:15", titolo:"Immobili e IMU",       link:"https://academy.wolterskluwer.it/learn/learning-plans/49/immobiliimu/courses/659/immobili-e-imu-del-09062026" },
  { data:"10/06/2026", ora_inizio:"10:00", ora_fine:"11:00", titolo:"Bilancio Base",           link:"https://academy.wolterskluwer.it/learn/learning-plans/39/bilancio-base/courses/664/bilancio-base-del-10062026" },
  { data:"10/06/2026", ora_inizio:"11:15", ora_fine:"12:15", titolo:"Bilancio Avanzato",        link:"https://academy.wolterskluwer.it/learn/learning-plans/38/bilancio-avanzato/courses/666/bilancio-avanzato-del-10062026" },
  { data:"11/06/2026", ora_inizio:"10:00", ora_fine:"11:00", titolo:"Immobili e IMU",      link:"https://academy.wolterskluwer.it/learn/learning-plans/49/immobiliimu/courses/660/immobili-e-imu-del-11062026" },
  { data:"11/06/2026", ora_inizio:"11:15", ora_fine:"12:15", titolo:"Modello Redditi Società",   link:"https://academy.wolterskluwer.it/learn/learning-plans/54/modello-redditi-societa/courses/668/modello-redditi-societa-del-11062026" },
  { data:"15/06/2026", ora_inizio:"10:00", ora_fine:"11:00", titolo:"Contabilità Generale Base ed Estratto Conto",           link:"https://academy.wolterskluwer.it/learn/learning-plans/79/contabilita-generale-base-ed-estratto-conto/courses/672/contabilita-generale-base-ed-estratto-conto-del-15062026" },
  { data:"15/06/2026", ora_inizio:"11:15", ora_fine:"12:15", titolo:"Modello Redditi Società",           link:"https://academy.wolterskluwer.it/learn/learning-plans/54/modello-redditi-societa/courses/669/modello-redditi-societa-del-15062026" },
  { data:"17/06/2026", ora_inizio:"10:00", ora_fine:"11:00", titolo:"Parcellazione Base - Gestione Studio",   link:"https://academy.wolterskluwer.it/learn/learning-plans/56/parcellazione-e-gestione-studio/courses/670/parcellazione-base-gestione-studio-del-17062026" },
  { data:"17/06/2026", ora_inizio:"11:15", ora_fine:"12:15", titolo:"Contabilità gen. avanzata e chiusure annuali",           link:"https://academy.wolterskluwer.it/learn/learning-plans/78/contabilita-gen-avanzata-e-chiusure-annuali/courses/671/contabilita-gen-avanzata-e-chiusure-annuali-del-17062026" },
  { data:"23/06/2026", ora_inizio:"10:00", ora_fine:"11:00", titolo:"Cespiti e leasing",         link:"https://academy.wolterskluwer.it/learn/learning-plans/41/cespiti-e-leasing/courses/673/cespiti-e-leasing-del-23062026" },
  { data:"23/06/2026", ora_inizio:"11:15", ora_fine:"12:15", titolo:"Adempimenti periodici Lipe/Intra/Aut",         link:"https://academy.wolterskluwer.it/learn/learning-plans/37/adempimperiodici-lipeintraaut/courses/674/adempimenti-periodici-lipeintraaut-del-23062026" },
  { data:"24/06/2026", ora_inizio:"10:00", ora_fine:"11:00", titolo:"Bilancio Base",         link:"https://academy.wolterskluwer.it/learn/learning-plans/39/bilancio-base/courses/665/bilancio-base-del-24062026" },
  { data:"24/06/2026", ora_inizio:"11:15", ora_fine:"12:15", titolo:"Bilancio Avanzato",         link:"https://academy.wolterskluwer.it/learn/learning-plans/38/bilancio-avanzato/courses/667/bilancio-avanzato-del-24062026" },
  { data:"25/06/2026", ora_inizio:"10:00", ora_fine:"11:00", titolo:"Gestione Modello 730 e RPF",         link:"https://academy.wolterskluwer.it/learn/learning-plans/80/gestione-modello-730-e-rpf/courses/658/gestione-modello-730-e-rpf-del-25062026" },
  { data:"25/06/2026", ora_inizio:"11:15", ora_fine:"12:15", titolo:"Modello Redditi Società",         link:"https://academy.wolterskluwer.it/learn/learning-plans/54/modello-redditi-societa/courses/675/modello-redditi-societa-del-25062026" },
  { data:"30/06/2026", ora_inizio:"10:00", ora_fine:"11:00", titolo:"Contabilità IVA base",         link:"https://academy.wolterskluwer.it/learn/learning-plans/46/contabilita-iva-base/courses/649/contabilita-iva-base-del-30062026" },
  { data:"30/06/2026", ora_inizio:"11:15", ora_fine:"12:15", titolo:"Contabilità IVA avanzato",         link:"https://academy.wolterskluwer.it/learn/learning-plans/45/contabilita-iva-avanzata/courses/651/contabilita-iva-avanzato-del-30062026" },
];


/* ═══════════════════════════════════════
   SEZIONE 2 — Q&A
   Visibili SOLO su iframe DIRETTA
   (nascosti su indiretta)
   ═══════════════════════════════════════ */

var QA = [
  { data:"12/06/2026", ora_inizio:"10:00", ora_fine:"11:00", titolo:"Sessione di Q&A",      link:"https://academy.wolterskluwer.it/learn/learning-plans/76/sessione-di-qa/courses/654/sessione-di-qa-del-12062026" },
  { data:"19/06/2026", ora_inizio:"10:00", ora_fine:"11:00", titolo:"Sessione di Q&A",      link:"https://academy.wolterskluwer.it/learn/learning-plans/76/sessione-di-qa/courses/655/sessione-di-qa-del-19062026" },
  { data:"26/06/2026", ora_inizio:"10:00", ora_fine:"11:00", titolo:"Sessione di Q&A",      link:"https://academy.wolterskluwer.it/learn/learning-plans/76/sessione-di-qa/courses/656/sessione-di-qa-del-26062026" },
];


/* ═══════════════════════════════════════
   SEZIONE 3 — ACADEMY TALKS
   Visibili su ENTRAMBI gli iframe
   Il widget mostra il prossimo Talk
   non ancora terminato, in fondo
   al calendario in evidenza.
   ═══════════════════════════════════════ */

var TALKS = [
  { data:"26/06/2026", ora_inizio:"10:00", ora_fine:"11:00", titolo:"Come attrarre talenti nello studio professionale",          link:"https://academy.wolterskluwer.it/learn/courses/705/giugno-2026-come-attrarre-talenti-nello-studio-professionale" },
  ];

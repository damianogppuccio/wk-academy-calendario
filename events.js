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
  { data:"01/09/2026", ora_inizio:"10:00", ora_fine:"11:00", titolo:"Overview",                                         link:"https://academy.wolterskluwer.it/learn/learning-plans/55/overview/courses/769/overview-del-01092026?utm_source=calendario_eventi&utm_medium=link&utm_campaign=ita_academy_genya_webinar_calendario_q1_202609" },
  { data:"01/09/2026", ora_inizio:"11:15", ora_fine:"12:15", titolo:"Contabilità IVA base",                             link:"https://academy.wolterskluwer.it/learn/learning-plans/46/contabilita-iva-base/courses/772/contabilita-iva-base-del-01092026?utm_source=calendario_eventi&utm_medium=link&utm_campaign=ita_academy_genya_webinar_calendario_q1_202609" },
  { data:"02/09/2026", ora_inizio:"10:00", ora_fine:"11:00", titolo:"Contabilità IVA avanzato",                         link:"https://academy.wolterskluwer.it/learn/learning-plans/45/contabilita-iva-avanzata/courses/775/contabilita-iva-avanzato-del-02092026?utm_source=calendario_eventi&utm_medium=link&utm_campaign=ita_academy_genya_webinar_calendario_q1_202609" },
  { data:"02/09/2026", ora_inizio:"11:15", ora_fine:"12:15", titolo:"Liquidazione IVA/Ritenute acconto/F24",            link:"https://academy.wolterskluwer.it/learn/learning-plans/50/liquidazione-iva-ritenute-acconto-f24/courses/778/liquidaz-ivaritenute-accf24-del-02092026?utm_source=calendario_eventi&utm_medium=link&utm_campaign=ita_academy_genya_webinar_calendario_q1_202609" },
  { data:"03/09/2026", ora_inizio:"10:00", ora_fine:"11:00", titolo:"Adempimenti periodici Lipe/Intrastat/Autofatture", link:"https://academy.wolterskluwer.it/learn/learning-plans/37/adempimenti-periodici-lipeintrastatautofatture/courses/781/adempimenti-periodici-lipeintrastatautofatture-del-03092026?utm_source=calendario_eventi&utm_medium=link&utm_campaign=ita_academy_genya_webinar_calendario_q1_202609" },
  { data:"03/09/2026", ora_inizio:"11:15", ora_fine:"12:15", titolo:"Telematici & Dichiarazioni Integrative",           link:"https://academy.wolterskluwer.it/learn/learning-plans/59/telematici-dichiarazioni-integrative/courses/783/telematici-dichiarazioni-integrative-del-03092026?utm_source=calendario_eventi&utm_medium=link&utm_campaign=ita_academy_genya_webinar_calendario_q1_202609" },
  { data:"08/09/2026", ora_inizio:"10:00", ora_fine:"11:00", titolo:"Contabilità Generale Base ed Estratto Conto",      link:"https://academy.wolterskluwer.it/learn/learning-plans/79/contabilita-generale-base-ed-estratto-conto/courses/796/contabilita-generale-base-ed-estratto-conto-del-08092026?utm_source=calendario_eventi&utm_medium=link&utm_campaign=ita_academy_genya_webinar_calendario_q1_202609" },
  { data:"08/09/2026", ora_inizio:"11:15", ora_fine:"12:15", titolo:"Contabilità Generale Avanzata",                    link:"https://academy.wolterskluwer.it/learn/learning-plans/43/contabilita-generale-avanzata/courses/798/contabilita-generale-avanzata-del-08092026?utm_source=calendario_eventi&utm_medium=link&utm_campaign=ita_academy_genya_webinar_calendario_q1_202609" },
  { data:"09/09/2026", ora_inizio:"14:30", ora_fine:"15:30", titolo:"Modello 770",                                      link:"https://academy.wolterskluwer.it/learn/learning-plans/51/modello-770/courses/791/modello-770-del-09092026?utm_source=calendario_eventi&utm_medium=link&utm_campaign=ita_academy_genya_webinar_calendario_q1_202609" },
  { data:"10/09/2026", ora_inizio:"10:00", ora_fine:"11:00", titolo:"Overview",                                         link:"https://academy.wolterskluwer.it/learn/learning-plans/55/overview/courses/770/overview-del-10092026?utm_source=calendario_eventi&utm_medium=link&utm_campaign=ita_academy_genya_webinar_calendario_q1_202609" },
  { data:"10/09/2026", ora_inizio:"11:15", ora_fine:"12:15", titolo:"Contabilità IVA base",                             link:"https://academy.wolterskluwer.it/learn/learning-plans/46/contabilita-iva-base/courses/773/contabilita-iva-base-del-10092026?utm_source=calendario_eventi&utm_medium=link&utm_campaign=ita_academy_genya_webinar_calendario_q1_202609" },
  { data:"15/09/2026", ora_inizio:"10:00", ora_fine:"11:00", titolo:"Contabilità IVA avanzato",                         link:"https://academy.wolterskluwer.it/learn/learning-plans/45/contabilita-iva-avanzata/courses/776/contabilita-iva-avanzato-del-15092026?utm_source=calendario_eventi&utm_medium=link&utm_campaign=ita_academy_genya_webinar_calendario_q1_202609" },
  { data:"15/09/2026", ora_inizio:"11:15", ora_fine:"12:15", titolo:"Liquidazione IVA/Ritenute acconto/F24",            link:"https://academy.wolterskluwer.it/learn/learning-plans/50/liquidazione-iva-ritenute-acconto-f24/courses/780/liquidazione-ivaritenute-accontof24-del-15092026?utm_source=calendario_eventi&utm_medium=link&utm_campaign=ita_academy_genya_webinar_calendario_q1_202609" },
  { data:"22/09/2026", ora_inizio:"10:00", ora_fine:"11:00", titolo:"Overview",                                         link:"https://academy.wolterskluwer.it/learn/learning-plans/55/overview/courses/771/overview-del-22092026?utm_source=calendario_eventi&utm_medium=link&utm_campaign=ita_academy_genya_webinar_calendario_q1_202609" },
  { data:"22/09/2026", ora_inizio:"11:15", ora_fine:"12:15", titolo:"Contabilità IVA base",                             link:"https://academy.wolterskluwer.it/learn/learning-plans/46/contabilita-iva-base/courses/774/contabilita-iva-base-del-22092026?utm_source=calendario_eventi&utm_medium=link&utm_campaign=ita_academy_genya_webinar_calendario_q1_202609" },
  { data:"23/09/2026", ora_inizio:"14:30", ora_fine:"15:30", titolo:"Contabilità Generale Base ed Estratto Conto",      link:"https://academy.wolterskluwer.it/learn/learning-plans/79/contabilita-generale-base-ed-estratto-conto/courses/797/contabilita-generale-base-ed-estratto-conto-del-23092026?utm_source=calendario_eventi&utm_medium=link&utm_campaign=ita_academy_genya_webinar_calendario_q1_202609" },
  { data:"24/09/2026", ora_inizio:"10:00", ora_fine:"11:00", titolo:"Adempimenti periodici Lipe/Intrastat/Autofatture", link:"https://academy.wolterskluwer.it/learn/learning-plans/37/adempimenti-periodici-lipeintrastatautofatture/courses/782/adempimenti-periodici-lipeintrastatautofatture-del-24092026?utm_source=calendario_eventi&utm_medium=link&utm_campaign=ita_academy_genya_webinar_calendario_q1_202609" },
  { data:"24/09/2026", ora_inizio:"11:15", ora_fine:"12:15", titolo:"Telematici & Dichiarazioni Integrative",           link:"https://academy.wolterskluwer.it/learn/learning-plans/59/telematici-dichiarazioni-integrative/courses/784/telematici-dichiarazioni-integrative-del-24092026?utm_source=calendario_eventi&utm_medium=link&utm_campaign=ita_academy_genya_webinar_calendario_q1_202609" },
  { data:"29/09/2026", ora_inizio:"10:00", ora_fine:"11:00", titolo:"Genya News - Novità e rilasci",                    link:"https://academy.wolterskluwer.it/learn/learning-plans/96/genya-news-novita-e-rilasci?utm_source=calendario_eventi&utm_medium=link&utm_campaign=ita_academy_genya_webinar_calendario_q1_202609" },
  { data:"30/09/2026", ora_inizio:"11:30", ora_fine:"12:30", titolo:"Contabilità Generale Avanzata",                    link:"https://academy.wolterskluwer.it/learn/learning-plans/43/contabilita-generale-avanzata/courses/800/contabilita-generale-avanzata-del-30092026?utm_source=calendario_eventi&utm_medium=link&utm_campaign=ita_academy_genya_webinar_calendario_q1_202609" },
  { data:"30/09/2026", ora_inizio:"14:30", ora_fine:"15:30", titolo:"Modello 770",                    					link:"https://academy.wolterskluwer.it/learn/learning-plans/51/modello-770/courses/792/modello-770-del-30092026?utm_source=calendario_eventi&utm_medium=link&utm_campaign=ita_academy_genya_webinar_calendario_q1_202609" },
];


/* ═══════════════════════════════════════
   SEZIONE 2 — Q&A
   Visibili SOLO su iframe DIRETTA
   (nascosti su indiretta)
   ═══════════════════════════════════════ */

var QA = [
  { data:"04/09/2026", ora_inizio:"10:00", ora_fine:"11:00", titolo:"Sessione di Q&A",      link:"https://academy.wolterskluwer.it/learn/learning-plans/76/sessione-di-qa/courses/787/sessione-di-qa-del-04092026?utm_source=calendario_eventi&utm_medium=link&utm_campaign=ita_academy_genya_webinar_calendario_q1_202609" },
  { data:"11/09/2026", ora_inizio:"10:00", ora_fine:"11:00", titolo:"Sessione di Q&A",      link:"https://academy.wolterskluwer.it/learn/learning-plans/76/sessione-di-qa/courses/788/sessione-di-qa-del-11092026?utm_source=calendario_eventi&utm_medium=link&utm_campaign=ita_academy_genya_webinar_calendario_q1_202609" },
  { data:"18/09/2026", ora_inizio:"10:00", ora_fine:"11:00", titolo:"Sessione di Q&A",      link:"https://academy.wolterskluwer.it/learn/learning-plans/76/sessione-di-qa/courses/789/sessione-di-qa-del-18092026?utm_source=calendario_eventi&utm_medium=link&utm_campaign=ita_academy_genya_webinar_calendario_q1_202609" },
  { data:"25/09/2026", ora_inizio:"10:00", ora_fine:"11:00", titolo:"Sessione di Q&A",      link:"https://academy.wolterskluwer.it/learn/learning-plans/76/sessione-di-qa/courses/790/sessione-di-qa-del-25092026?utm_source=calendario_eventi&utm_medium=link&utm_campaign=ita_academy_genya_webinar_calendario_q1_202609" },
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

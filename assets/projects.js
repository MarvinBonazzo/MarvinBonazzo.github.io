// Contenuti dei progetti: usati da progetto.html (case study) e progetti.html (lista).
window.CATEGORIES = {
  civic: { name: 'Civic tech', text: 'Strumenti che rendono comprensibili i soldi tra cittadini e Stato: busta paga, tasse, spesa pubblica.' },
  utility: { name: 'Utility personali', text: 'Nati per un mio bisogno quotidiano e usati ogni giorno.' },
  vertical: { name: 'Vertical software', text: 'Software costruito su misura per una professione specifica.' },
  studi: { name: 'Studi e riassunti', text: 'Quello che imparo dai corsi, riassunto in pagine interattive.' }
};

window.PROJECTS = [
  {
    slug: 'scontrino-stipendio',
    category: 'civic',
    name: 'Scontrino dello Stipendio',
    short: 'Il tuo stipendio raccontato a storie: dove finisce ogni euro e cosa paghi con le tasse.',
    tagline: 'Le tasse spiegate in modo diretto, una storia alla volta.',
    cover: 'img/scontrino-stipendio.png',
    gallery: ['img/scontrino-stipendio-m1.png', 'img/scontrino-stipendio-m2.png', 'img/scontrino-stipendio-m3.png'],
    links: { live: 'https://marvinbonazzo.github.io/scontrino-stipendio/', code: 'https://github.com/MarvinBonazzo/scontrino-stipendio' },
    facts: { Anno: '2026', Tipo: 'Storie web per ragazzi', Stack: 'Un solo file HTML', Regole: 'IRPEF e INPS 2026' },
    problem: 'A scuola nessuno spiega cosa succede ai soldi di uno stipendio. Le parole sono difficili (lordo, IRPEF, detrazioni) e i numeri sembrano lontani, così le tasse restano una cosa noiosa da adulti. Volevo renderle pop senza addolcirle: brevi, colorate, da sfogliare con il dito come le storie di Instagram, dando del tu a chi legge.',
    audience: [
      'Ragazzi delle medie e delle superiori che non hanno mai visto una busta paga.',
      'Insegnanti che cercano uno spunto per educazione civica ed economia.',
      'Chi inizia a lavorare e vuole capire il proprio stipendio in un minuto.'
    ],
    principles: [
      ['Una schermata, un\'idea', 'Numeri giganti, colori pieni e frasi brevi: si capisce anche senza leggere tutto.'],
      ['Ogni parola si spiega', 'Le parole tecniche sono sottolineate: toccandole si apre una spiegazione di una o due frasi.'],
      ['Dati ufficiali, nessuna stima', 'Regole fiscali 2026 e spesa pubblica 2024 di Eurostat, con fonti e calcoli consultabili in fondo.'],
      ['Dire cosa non torna', 'I contributi che non bastano per le pensioni, il deficit, le tasse che non si vedono in busta paga.']
    ],
    how: [
      ['Scegli un lavoro', 'Barista, infermiera, programmatrice, oppure scrivi il tuo lordo.'],
      ['Dal costo al netto', 'Quanto spende l\'azienda per te, quanto arriva sul tuo conto e dove va il resto.'],
      ['Cosa pagano i tuoi soldi', 'Contributi e IRPEF divisi tra pensioni, sanità, scuola e le altre voci della spesa pubblica, più la parte presa in prestito.'],
      ['Scontrino, fonti e calcoli', 'La busta paga stampata come uno scontrino. Sotto, il conto di un anno intero con regole, numeri interi e fonti.']
    ],
    tech: 'Un solo index.html, senza dipendenze. Il calcolo segue le regole 2026: contributi, scaglioni IRPEF, detrazioni, taglio del cuneo, trattamento integrativo. Navigazione a tocchi come le storie, numeri animati e un glossario a cartoncino che funziona anche da tastiera. Nessun dato salvato, nessun tracciamento.',
    story: 'All\'inizio era una calcolatrice per adulti: scrivevi il lordo e leggevi una lunga pagina di conti. Con Claude l\'ho trasformata in storie per ragazzi, con il tu e senza parole addolcite, e l\'ho resa complementare allo Scontrino dello Stato: stessi dati, stesse 13 voci di spesa, e ognuno porta all\'altro. Uno mostra cosa paghi tu, l\'altro quanti soldi arrivano allo Stato e dove vanno.',
    next: 'Un pulsante per condividere lo scontrino finale come immagine.'
  },
  {
    slug: 'scontrino-stato',
    category: 'civic',
    name: 'Scontrino dello Stato',
    short: 'Un anno di soldi pubblici in un minuto: quanto spende lo Stato per ognuno di noi, da dove arrivano i soldi e perché non bastano.',
    tagline: 'La spesa pubblica italiana, raccontata a storie.',
    cover: 'img/scontrino-stato.png',
    gallery: ['img/scontrino-stato-m1.png', 'img/scontrino-stato-m2.png', 'img/scontrino-stato-m3.png'],
    links: { live: 'https://marvinbonazzo.github.io/scontrino-pubblico/', code: 'https://github.com/MarvinBonazzo/scontrino-pubblico' },
    facts: { Anno: '2026', Tipo: 'Storie web per ragazzi', Fonti: 'Eurostat · ISTAT · Banca d\'Italia', Dati: 'Italia, 2024' },
    problem: 'Di spesa pubblica si parla con cifre in miliardi che non dicono niente a nessuno, tanto meno a un ragazzo. Mancava un modo per capire in un minuto quanto si spende per ognuno di noi, per cosa, da dove arrivano i soldi e perché lo Stato si indebita.',
    audience: [
      'Ragazzi delle medie e delle superiori, per scoprire cosa paga lo Stato anche per loro.',
      'Insegnanti che vogliono parlare di tasse e debito pubblico senza grafici noiosi.',
      'Chiunque voglia un punto di partenza chiaro, con numeri verificabili.'
    ],
    principles: [
      ['Euro al giorno, a testa', 'Ogni cifra è la spesa divisa per i residenti e per 365: 51,56 € al giorno si capisce meglio di 1.109 miliardi.'],
      ['Solo dati ufficiali', 'Eurostat per spesa ed entrate 2024, Banca d\'Italia per il debito, ISTAT per i residenti. Tutti i numeri interi sono in fondo, con le fonti.'],
      ['Ogni parola si spiega', 'Deficit, BTP, accise: si toccano e si apre una spiegazione semplice.'],
      ['Tono neutro', 'Fatti e confronti, nessun giudizio politico. E si ricorda sempre che è una media, non quanto paghi tu.']
    ],
    how: [
      ['Quanto spende per te', '51,56 € al giorno, 18.820 € l\'anno per ogni persona che vive in Italia.'],
      ['Le voci più grandi', 'Pensioni, sanità, sussidi, scuola e interessi sul debito, con confronti che fanno pensare.'],
      ['Da dove arrivano', 'Contributi, IRPEF, IVA e accise: anche chi non lavora ancora paga qualcosa a ogni acquisto.'],
      ['I conti non tornano', '3,40 € al giorno presi in prestito, un debito di 50.343 € a testa, poi lo scontrino di un giorno con fonti e calcoli.']
    ],
    tech: 'Un solo index.html. Le 100 monetine, lo scontrino finale e il pannello delle fonti sono generati da un elenco con le 13 voci di spesa, e i centesimi sono sistemati perché la somma torni sempre con il totale.',
    story: 'All\'inizio era una pagina lunga per adulti, con la spesa per residente dell\'Italia e di ogni Comune. Con Claude l\'ho trasformata in storie per ragazzi e l\'ho resa complementare allo Scontrino dello Stipendio: ho aggiunto da dove arrivano i soldi, il debito spiegato come una carta di credito, un glossario per ogni parola tecnica e, in fondo, tutti i numeri interi con le fonti.',
    next: 'Una versione per il proprio Comune, con i dati SIOPE dei pagamenti comunali.'
  },
  {
    slug: 'bustachiara',
    category: 'civic',
    name: 'BustaChiara',
    short: 'Legge la busta paga e la spiega voce per voce, con i conti in chiaro. Tutto resta sul tuo dispositivo.',
    tagline: 'La busta paga dovrebbe essere semplice: parla dei nostri soldi.',
    cover: 'img/bustachiara.png',
    gallery: ['img/bustachiara-01-home.jpg', 'img/bustachiara-04-controlla.jpg', 'img/bustachiara-02-riassunto.jpg', 'img/bustachiara-03-voci.jpg'],
    links: { live: 'https://marvinbonazzo.github.io/bustachiara/', code: 'https://github.com/MarvinBonazzo/bustachiara' },
    facts: { Anno: '2026', Tipo: 'PWA, open source', Stack: 'JavaScript · pdf.js · Tesseract · ONNX', Stato: 'Alpha' },
    problem: 'Il cedolino italiano è pieno di sigle, codici e numeri che quasi nessuno sa leggere. Chi vuole capirlo spesso finisce per caricarlo su ChatGPT o su un altro servizio online: un documento con nome, codice fiscale e stipendio che finisce sui server di qualcun altro.',
    audience: [
      'Lavoratori dipendenti che vogliono capire cosa c\'è davvero nella propria busta paga.',
      'Chi ha appena cambiato lavoro o contratto e vuole controllare che i conti tornino.',
      'Chi non vuole consegnare i propri dati economici a un servizio di intelligenza artificiale.'
    ],
    principles: [
      ['Tutto sul dispositivo', 'PDF, foto e testo letti nel browser. Nessun server, nessuna API di AI, nessun analytics.'],
      ['Spiegare, non giudicare', 'Ogni voce ha una frase semplice e il conto fatto, per esempio 160 ore × 11,63 €.'],
      ['Onestà sui limiti', 'L\'app dice quando può sbagliare e chiede di confrontare sempre i dati con il documento.'],
      ['Verificabile', 'Codice aperto e Content Security Policy che blocca ogni connessione verso terze parti.']
    ],
    how: [
      ['Carica', 'PDF, scansione o foto: il file resta sul telefono o sul computer.'],
      ['Controlla', 'Documento e campi letti affiancati, con i numeri principali in vista.'],
      ['Leggi il riassunto', 'Netto, passaggio dal lordo al netto, ferie, permessi e TFR in una pagina.'],
      ['Capisci ogni voce', 'Ogni sezione si apre e spiega in parole semplici cosa significa.']
    ],
    tech: 'Una pipeline di lettura locale: pdf.js per i PDF nativi, Tesseract e PP-OCRv5 su ONNX Runtime Web per scansioni e foto. Riconosce tabelle su più pagine, voci spezzate su più righe e la terminologia di molti contratti (privato, NoiPA, lavoro domestico, edilizia, sanità…). È una PWA: si installa da un link, funziona offline e si aggiorna da sola.',
    story: 'È nata per evitare di caricare le buste paga su un\'intelligenza artificiale online. A ottobre 2026 l\'ho ripresa con Claude per un redesign completo dell\'interfaccia, seguito da una revisione degli errori di lettura e da piccoli miglioramenti emersi strada facendo.',
    next: 'Stabilizzare la lettura su più layout di cedolino e pubblicare l\'APK per Android.'
  },
  {
    slug: 'budjet',
    category: 'utility',
    name: 'BudJet',
    short: 'Budget minimale in tre gruppi: essenziali, extra e risparmio. Niente account, niente pubblicità.',
    tagline: 'Capire in un colpo d\'occhio dove vanno i soldi ogni mese.',
    cover: 'img/budjet.png',
    gallery: ['img/budjet-m1.png'],
    links: { live: 'https://marvinbonazzo.github.io/budjet/' },
    facts: { Anno: '2026', Tipo: 'App per Mac + web app', Stack: 'TypeScript · Deno', Uso: 'Personale, ogni giorno' },
    problem: 'Le app di budget sono piene di funzioni, categorie e grafici, e alla fine si smette di usarle. Io tenevo i conti in un foglio di calcolo: volevo qualcosa di altrettanto veloce da compilare, ma che mi mostrasse subito dove vanno i soldi.',
    audience: [
      'Chi vuole tenere il budget mese per mese senza perdere tempo.',
      'Chi preferisce che i propri dati economici restino sul proprio dispositivo.',
      'Chi ragiona con la regola 50/30/20 ma senza sentirsi giudicato.'
    ],
    principles: [
      ['Tre gruppi, non trenta', 'Essenziali, extra e risparmio. Conta la necessità di una spesa, non la frequenza.'],
      ['Veloce come un foglio', 'Descrizione, importo, Invio. La categoria si compila da sola e il cursore torna all\'inizio.'],
      ['Quanto ti rimane', 'In cima al mese la liquidità: entrate − spese − risparmio, aggiornata a ogni voce.'],
      ['I dati sono tuoi', 'Nessun account e nessun cloud. Il repository contiene solo il codice.']
    ],
    how: [
      ['Panoramica', 'L\'anno in una pagina: entrate, spese, risparmio e la torta in tre fette.'],
      ['Scegli il mese', 'Aggiungi le voci da tastiera, con Tab e Invio; i costi fissi in un clic.'],
      ['Tocca una fetta', 'Si apre il catalogo delle spese di quel gruppo, diviso per categoria.'],
      ['Chiedi all\'AI', 'Un riassunto da copiare in un\'AI per un commento. BudJet non lo invia da nessuna parte.']
    ],
    tech: 'Nata come app desktop con il nuovo "deno desktop" (webview nativa), poi portata a web app installabile per usarla anche da telefono. I dati stanno in un file locale sul Mac o nel browser. Le spese vengono classificate da sole in fissi, imprevisti, sfizi e variabili ricorrenti, e il tipo scelto a mano ha sempre la precedenza.',
    story: 'È partita a giugno 2026 dal mio foglio di calcolo del budget. Con Claude l\'ho rifatta più volte, sempre verso il più semplice: via il giorno della spesa, categorie ridotte, inserimento tutto da tastiera, torte con solo tre fette e riquadri chiusi di default. A novembre si è aggiunto il "quanto ti rimane" del mese.',
  },
  {
    slug: 'loya',
    category: 'utility',
    name: 'Loya',
    short: 'Il portafoglio digitale per carte fedeltà, biglietti e codici. Tutto sul telefono, senza cloud.',
    tagline: 'Il portafoglio digitale che può contenere tutto.',
    cover: 'img/loya.png',
    gallery: ['img/loya-wallet.png', 'img/loya-add-item.png', 'img/loya-card-detail.png', 'img/loya-backup.png'],
    links: { live: 'https://marvinbonazzo.github.io/Loya/', code: 'https://github.com/MarvinBonazzo/Loya' },
    facts: { Anno: '2026', Tipo: 'App Android + PWA', Stack: 'Kotlin · ZXing · OpenCV · ML Kit', Versione: '3.2' },
    problem: 'Il portafoglio si riempie di carte fedeltà, e le app che le raccolgono chiedono un account, mostrano pubblicità e salvano tutto su un cloud. Su un telefono senza servizi Google, come GrapheneOS, spesso non funzionano proprio.',
    audience: [
      'Chi vuole tutte le carte fedeltà, i biglietti e i QR code in un posto solo.',
      'Utenti di GrapheneOS o di telefoni senza Google.',
      'Chi non vuole un account né un cloud per le proprie carte e i propri documenti.'
    ],
    principles: [
      ['Niente da impostare', 'Scansioni il codice e Loya riconosce da solo il formato. Zero scelte manuali.'],
      ['Nessun account, nessun cloud', 'Tutto sul dispositivo. Il backup è un file che decidi tu dove tenere.'],
      ['Una versione per ogni telefono', 'APK con Google, APK offline senza permesso Internet, oppure PWA per iPhone e computer.'],
      ['Spiegato a tutti', 'Le istruzioni di installazione sono scritte un tocco alla volta, per chi non è esperto.']
    ],
    how: [
      ['Scansiona', 'Carta fedeltà, biglietto del treno o QR code: il formato viene riconosciuto da solo.'],
      ['Aggiungi documenti', 'Più foto per documento, fronte e retro, ingrandibili.'],
      ['Mostra alla cassa', 'Il codice si apre grande e leggibile, pronto da scansionare.'],
      ['Backup', 'Esporti tutto e lo sposti su un altro telefono quando vuoi.']
    ],
    tech: 'App nativa Kotlin in due edizioni: una con Google ML Kit per la migliore scansione dei documenti, una completamente offline con ZXing e OpenCV, compilata senza il permesso Internet di Android. Accanto, una PWA per iPhone, iPad e computer. Le tre versioni condividono lo stesso formato di backup.',
    story: 'Nata a giugno 2026 come "Carta Wallet", un\'app per il mio telefono GrapheneOS. Con Claude l\'ho portata avanti un bug alla volta: la fotocamera che si bloccava, le carte che non si salvavano, l\'avvio lento. Poi sono arrivati il riconoscimento automatico del formato, i biglietti, i QR code e la versione per tutti.',
  },
  {
    slug: 'gelatonutriente',
    category: 'vertical',
    name: 'GelatoNutriente',
    short: 'Web app per organizzare piani alimentari, con le formule del fabbisogno mostrate passo per passo.',
    tagline: 'Piani alimentari, pazienti e fabbisogno energetico in un\'unica web app.',
    cover: 'img/gelatonutriente.png',
    gallery: ['img/gelato-m1.png'],
    links: { live: 'https://marvinbonazzo.github.io/GelatoNutriente/', code: 'https://github.com/MarvinBonazzo/GelatoNutriente' },
    facts: { Anno: '2026', Tipo: 'Web app statica', Stack: 'React 19 · TypeScript · Vite · Dexie', Versione: '0.7' },
    problem: 'Chi segue persone con un piano alimentare spesso lavora tra fogli di calcolo, documenti Word e calcolatrici online. I calcoli del fabbisogno sono una scatola nera e i dati dei pazienti finiscono sparsi tra mille servizi.',
    audience: [
      'Nutrizionisti e dietisti che preparano piani settimanali per i propri pazienti.',
      'Professionisti che vogliono vedere e controllare ogni passaggio del calcolo.',
      'I pazienti, che consultano il proprio piano e la lista della spesa.'
    ],
    principles: [
      ['Il calcolo si vede', 'Nove metodi energetici a confronto, ognuno con algoritmo, dati necessari e fonte.'],
      ['Il professionista decide', 'Ogni correzione automatica si può sovrascrivere; l\'obiettivo manuale ha sempre la priorità.'],
      ['Niente backend', 'Archivio locale nel browser, esportazione cifrata, nessun account.'],
      ['Nessun dato inventato', 'Il primo avvio carica solo gli alimenti. L\'esempio dimostrativo si chiede a mano.']
    ],
    how: [
      ['Paziente', 'Anagrafica, obiettivi, questionario, misurazioni e appuntamenti.'],
      ['Fabbisogno', 'Mifflin–St Jeor, Harris–Benedict, Schofield, Katch–McArdle e altri, con correzione per l\'obiettivo.'],
      ['Settimana', 'Sette giorni, pasti modificabili, varianti e alternative per ingrediente da un catalogo di 249 alimenti.'],
      ['Consegna', 'PDF della dieta con il logo dello studio, vista paziente e lista della spesa.']
    ],
    research: {
      intro: 'Prima di disegnare una schermata ho studiato come lavora oggi un nutrizionista e quali regole deve rispettare un calcolo del fabbisogno. Ogni fase ha prodotto una scelta di design precisa.',
      steps: [
        ['Mappare il lavoro di oggi', 'Ho ricostruito il percorso tipico di una visita: anamnesi, misure, calcolo del fabbisogno, stesura della settimana, consegna al paziente. Ogni passaggio vive in uno strumento diverso: fogli di calcolo, documenti Word, calcolatrici online.', 'Un solo flusso in quattro tappe (Paziente, Fabbisogno, Settimana, Consegna), nello stesso ordine della visita.'],
        ['Studiare le formule', 'Ho raccolto le equazioni del metabolismo basale usate in letteratura (Mifflin–St Jeor, Harris–Benedict, Schofield, Katch–McArdle e altre), con i dati che richiede ciascuna e la fonte originale.', 'Nove metodi affiancati, ognuno con algoritmo, dati necessari e fonte. Il professionista sceglie, l\'app non decide al posto suo.'],
        ['Analizzare gli strumenti esistenti', 'Le calcolatrici online danno un numero senza spiegarlo; i gestionali completi chiedono account, abbonamento e caricano i dati sanitari dei pazienti su un server.', 'Il calcolo resta sempre visibile e ogni correzione automatica si può sovrascrivere a mano.'],
        ['Definire i vincoli sui dati', 'Anamnesi, peso e abitudini alimentari sono dati sanitari: chi li gestisce ne risponde in prima persona.', 'Nessun backend e nessun account. Archivio locale nel browser ed esportazione cifrata per il backup.'],
        ['Pensare all\'uso ripetuto', 'Un nutrizionista prepara molti piani alla settimana e ripete gli stessi gesti decine di volte: sostituire un alimento, duplicare un pasto, generare il PDF.', 'Varianti e alternative per ingrediente da un catalogo di 249 alimenti, pasti modificabili e PDF con il logo dello studio in un clic.'],
        ['Iterare per versioni', 'Ogni versione ha aggiunto un pezzo del flusso e rivisto i precedenti: editor della settimana, schede paziente, metodi energetici, questionario, PDF, esportazione cifrata.', 'Arrivata alla 0.7, la prossima fase è il test con nutrizionisti e dietisti su casi reali.']
      ]
    },
    tech: 'React 19, TypeScript e Vite 8 per una build interamente statica su GitHub Pages. Zustand per lo stato, Dexie su IndexedDB per l\'archivio con transazioni e migrazioni, dietro contratti asincroni sostituibili un giorno con un\'API REST. Grafici con Recharts caricati su richiesta, nessuna CDN e nessun font remoto.',
    story: 'Un progetto cresciuto per versioni: dall\'editor della settimana alla gestione dei pazienti, poi i metodi energetici, il questionario, i PDF e l\'esportazione cifrata. Ogni funzione è stata pensata per far vedere al professionista il perché di ogni numero.',
  },
  {
    // Pagina interattiva esterna: le liste aprono direttamente il link, senza case study.
    slug: 'happiness-in-leadership',
    category: 'studi',
    name: 'Happiness in Leadership',
    short: 'Cosa ho imparato da Managing Happiness di Arthur C. Brooks (HarvardX): sei moduli con schemi, esempi e cursori interattivi, in inglese e italiano.',
    cover: 'img/happiness-in-leadership.png',
    url: 'https://marvinbonazzo.github.io/happiness-in-leadership/#it',
    links: { live: 'https://marvinbonazzo.github.io/happiness-in-leadership/#it', code: 'https://github.com/MarvinBonazzo/happiness-in-leadership' }
  },
  {
    slug: 'lean-six-sigma-black-belt',
    category: 'studi',
    name: 'Lean Six Sigma Black Belt',
    short: 'Processi e persone visti dall\'hospitality: sette moduli dove ogni strumento è applicato due volte, con esempi e parti interattive, in inglese e italiano.',
    cover: 'img/lean-six-sigma-black-belt.png',
    url: 'https://marvinbonazzo.github.io/lean-six-sigma-black-belt/#it',
    links: { live: 'https://marvinbonazzo.github.io/lean-six-sigma-black-belt/#it', code: 'https://github.com/MarvinBonazzo/lean-six-sigma-black-belt' }
  }
];

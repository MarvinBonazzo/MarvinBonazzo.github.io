// Contenuti dei progetti: usati da progetto.html (case study) e progetti.html (lista).
window.PROJECTS = [
  {
    slug: 'bustachiara',
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
    slug: 'scontrino-stipendio',
    name: 'Scontrino delle tasse',
    short: 'Dal tuo lordo a quanto vai a pagare di INPS e IRPEF, stampato come uno scontrino.',
    tagline: 'Quanto costa davvero il tuo lavoro, e dove vanno le tue tasse.',
    cover: 'img/scontrino-stipendio.png',
    gallery: ['img/stipendio-m1.png', 'img/stipendio-m2.png', 'img/stipendio-m3.png'],
    links: { live: 'https://marvinbonazzo.github.io/scontrino-stipendio/', code: 'https://github.com/MarvinBonazzo/scontrino-stipendio' },
    facts: { Anno: '2026', Tipo: 'Pagina web', Stack: 'Un solo file HTML', Regole: 'IRPEF e INPS 2026' },
    problem: 'Il lordo in busta paga non racconta tutta la storia: l\'azienda spende molto di più, e tra contributi, IRPEF, detrazioni e taglio del cuneo è difficile capire dove finisce ogni euro. Ancora più difficile è capire cosa ci fa lo Stato con le tue imposte.',
    audience: [
      'Dipendenti curiosi di sapere quanto costano davvero alla propria azienda.',
      'Chi deve valutare un\'offerta di lavoro e vuole capire il netto a partire dal lordo.',
      'Chiunque voglia vedere in modo concreto dove va la propria IRPEF.'
    ],
    principles: [
      ['Regole pubbliche, non opinioni', 'Aliquote, scaglioni e detrazioni sono quelli della legge di bilancio 2026.'],
      ['Ogni numero si spiega', '"Voce per voce" mostra quale percentuale è stata applicata a quale importo.'],
      ['Semplificazioni dichiarate', 'Contributi aziendali al 30% medio, niente addizionali: la pagina lo dice apertamente.'],
      ['Nessun dato raccolto', 'Lo stipendio non viene salvato né inviato. Nessun account, nessun tracciamento.']
    ],
    how: [
      ['Scrivi il lordo', 'Lordo mensile e numero di mensilità, 13 o 14.'],
      ['Lo scontrino si stampa', 'Un\'animazione mostra i passaggi del calcolo uno alla volta.'],
      ['Ogni euro in una barra', 'Contributi azienda, TFR, contributi tuoi, IRPEF e netto.'],
      ['Dove vanno le imposte', 'La tua IRPEF divisa come la spesa pubblica italiana 2024 (Eurostat, COFOG).']
    ],
    tech: 'Tutto in un solo index.html: stile, testi, calcoli e dati della spesa pubblica. Si apre con un doppio clic, senza dipendenze né build. Il calcolo copre contributi INPS con la soglia dell\'1% aggiuntivo, scaglioni IRPEF, detrazioni per lavoro dipendente, ulteriore detrazione, taglio del cuneo e trattamento integrativo.',
    story: 'È il primo dei due "scontrini". L\'idea è prendere qualcosa di astratto come le tasse e mostrarlo in una forma che tutti conoscono: lo scontrino, con una riga per voce e il totale in fondo. Da qui è nato il progetto gemello, Scontrino pubblico.',
  },
  {
    slug: 'scontrino-pubblico',
    name: 'Scontrino pubblico',
    short: 'Quanto spende lo Stato per ogni residente, per l\'Italia e per circa 7.900 Comuni. Solo dati ufficiali.',
    tagline: 'La spesa pubblica di un anno, divisa per ogni persona che vive in Italia.',
    cover: 'img/scontrino-pubblico.png',
    gallery: ['img/pubblico-m1.png', 'img/pubblico-m2.png', 'img/pubblico-m3.png'],
    links: { live: 'https://marvinbonazzo.github.io/scontrino-pubblico/', code: 'https://github.com/MarvinBonazzo/scontrino-pubblico' },
    facts: { Anno: '2026', Tipo: 'Pagina web', Fonti: 'Eurostat · ISTAT · SIOPE', Copertura: 'Italia + ~7.900 Comuni' },
    problem: 'Si parla spesso di spesa pubblica con cifre in miliardi che non dicono niente a nessuno. Mancava un modo semplice per vedere quanto si spende per ogni residente, per cosa, e da dove arrivano i soldi, senza stime e senza opinioni.',
    audience: [
      'Cittadini che vogliono capire come vengono spesi i soldi pubblici.',
      'Chi vuole confrontare il proprio Comune con la media italiana.',
      'Giornalisti, studenti e insegnanti che cercano un punto di partenza chiaro e verificabile.'
    ],
    principles: [
      ['Solo dati ufficiali', 'Eurostat, ISTAT e SIOPE: pagamenti reali usciti dalla banca, non previsioni di bilancio.'],
      ['Quello che si toglie è dichiarato', 'Partite di giro e movimenti finanziari esclusi, con il loro valore in chiaro.'],
      ['Si può rifare da soli', 'Uno script pubblico riscarica i dati SIOPE e ricostruisce da zero i numeri dei Comuni.'],
      ['Dire cosa non dice', 'Non è quanto paghi tu: per quello c\'è lo Scontrino delle tasse.']
    ],
    how: [
      ['Inizio', 'Si parte dall\'Italia intera: "Stampa lo scontrino".'],
      ['Stampa', 'Un\'animazione mostra il calcolo: leggo i dati, tolgo ciò che non è spesa, divido per i residenti.'],
      ['Lo scontrino', '"Dove vanno" e "Da dove arrivano", con ogni voce che si apre e spiega da cosa è fatta.'],
      ['Il tuo Comune', 'Ricerca tra circa 7.900 Comuni, voce per voce, confrontata con la media.']
    ],
    tech: 'Una pagina statica che fa tutto nel browser, ricerca del Comune compresa. I codici contabili SIOPE vengono raggruppati in voci riconoscibili ("Rifiuti", "Strade"), senza ritoccare i numeri. Uno script Python (aggiorna_comuni.py) scarica i file open data e rigenera il dataset.',
    story: 'Gemello dello Scontrino delle tasse: uno parte dal tuo stipendio, l\'altro dalla spesa dello Stato. Con Claude l\'ho pubblicato su GitHub, ho scritto i README dei due progetti spiegando perché sono trasparenti e verificabili, e ho corretto la ricerca dei Comuni perché li mostri anche prima di scrivere.',
    next: 'Aggiornare l\'Italia al 2025 quando Eurostat pubblicherà i dati, a inizio 2027.'
  },
  {
    slug: 'budjet',
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
    slug: 'gelatonutriente',
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
    tech: 'React 19, TypeScript e Vite 8 per una build interamente statica su GitHub Pages. Zustand per lo stato, Dexie su IndexedDB per l\'archivio con transazioni e migrazioni, dietro contratti asincroni sostituibili un giorno con un\'API REST. Grafici con Recharts caricati su richiesta, nessuna CDN e nessun font remoto.',
    story: 'Un progetto cresciuto per versioni: dall\'editor della settimana alla gestione dei pazienti, poi i metodi energetici, il questionario, i PDF e l\'esportazione cifrata. Ogni funzione è stata pensata per far vedere al professionista il perché di ogni numero.',
  },
  {
    slug: 'loya',
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
  }
];

# Verbeterplan voor urenregistreren.com

Onderzocht op 9 september 2026. Doel: meer relevante bezoekers en App Store-doorklikken voor Uurwerk, plus beter onderbouwde vindbaarheid in antwoordmachines en generatieve zoekdiensten. Dit is een onderzoeks- en uitvoeringsplan; de website is niet aangepast.

## Hoofdadvies

Investeer eerst in de urenstaatpagina en de kiesgids voor urenregistratie-apps. Maak de urenstaat direct bruikbaar en laat op de apppagina met echte schermen zien hoe uren factuurregels worden. Versterk daarnaast de zichtbare informatie over maker, product, prijs en ondersteuning. De technische basis is grotendeels aanwezig; de grootste inhoudelijke ruimte zit in eigen voorbeelden, praktische hulpmiddelen en controleerbare productfeiten.

Een hogere score in de aangeleverde GEO-tool is geen zelfstandig bedrijfsdoel. Een deel van de meldingen klopt niet met de huidige live site. Andere meldingen zijn geen aangetoonde belemmering voor vindbaarheid.

## Wat daadwerkelijk is onderzocht

- Beide aangeleverde screenshots. De zoekprestaties tonen slechts vier geselecteerde query-paginacombinaties over de laatste 28 dagen, alle landen en apparaten.
- Alle tien URL's uit de live sitemap: HTTP-status, H1, canonical en JSON-LD-parsing. Homepage en twee kanspagina's ook als ruwe HTML onderzocht. Homepage en urenstaatpagina in Chrome bekeken.
- Alle paginabestanden, gedeelde layouts, metadata, schemafuncties, navigatie en assets in deze repository.
- Actuele Nederlandse App Store-gegevens via Apples Lookup API; enkele actuele zoekresultaten en twee relevante aanbiederspagina's.
- Officiële Google-, OpenAI- en andere crawlerdocumentatie; zie [bronnennotitie](seo-aeo-geo-bronnen-2026-09-09.md).

Niet beschikbaar: volledige Search Console-export, daadwerkelijke indexdekking, backlinkprofiel, conversiegegevens, serverlogs of representatieve Core Web Vitals. Er zijn geen zoekvolumes, concurrentieposities of trafficprognoses geschat. Een gewone browserfetch bewijst niet dat alle echte crawler-IP's door de hostingbeveiliging komen.

## De audit naast de werkelijkheid

| Screenshot / aandachtspunt | Gecontroleerde werkelijkheid | Besluit |
| --- | --- | --- |
| Geen geldige JSON-LD | Alle tien sitemap-pagina's bevatten drie syntactisch parseerbare JSON-LD-blokken. | Geen sitebrede ontbrekende markup. Vraag bij hercontrole om de exacte audit-URL en foutmelding. Schema.org-validatie en rich-result-geschiktheid nog afzonderlijk testen. |
| WebSite ontbreekt | Staat op de live homepage naast SoftwareApplication en FAQPage. | Behouden en verfijnen. WebSite hoeft niet op elke gids herhaald te worden. |
| Organization ontbreekt | Parivee bestaat al als geneste publisher. Een uitgebreid, herbruikbaar organisatieobject met identiteit en contact ontbreekt. | Entiteiten verbinden via vaste @id's, met zichtbare onderbouwing. |
| FAQ structured data ontbreekt | Homepage heeft FAQPage; alle negen gidsen hebben Article, BreadcrumbList en FAQPage. | Zichtbare antwoorden onderhouden. Google heeft FAQ-rich-results sinds 7 mei 2026 beëindigd. [Google-changelog](https://developers.google.com/search/updates) |
| llms.txt ontbreekt | /llms.txt geeft 404. | Optioneel klein experiment. Google gebruikt dit niet voor ranking of AI-zichtbaarheid. [Google AI-gids](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) |
| Geen crawl-delay | robots.txt staat crawling toe en verwijst naar een werkende sitemap. | Geen verbetering voor Google: deze regel wordt niet ondersteund. [Robots-specificatie](https://developers.google.com/crawling/docs/robots-txt/robots-txt-spec) |
| Geen AI-bestand / summary.json / RSS | Niet aanwezig in de repository. Geen gedocumenteerde Google-vereiste voor AI-vertoningen. | Lage prioriteit; pas toevoegen voor een concreet gebruiksdoel. |
| Weinig inhoud / geen lijsten | De negen gidsen hebben circa 526–635 woorden hoofdinhoud, inclusief antwoorden; er zijn lijsten en tabellen. | Geen woordenaantal najagen. Meer eigen voorbeelden en hulpmiddelen leveren een concretere verbetering. |
| Merk en contact zwak | Geen over-, contact- of privacypagina in de routes; maker vooral in schema. App Store verwijst naar vejoapps.com, site noemt Parivee. | Relatie tussen Uurwerk, maker, uitgever en ontwikkelaarswebsite expliciet maken. |

De live homepage heeft een H1, Nederlandse taalinstelling, metadata en canonical. Alle tien sitemap-URL's geven HTTP 200 en één H1. Een verzonnen URL geeft correct HTTP 404. Deze punten zijn geen gevonden blokkades. De score “citability 0/100” is geen meting dat Uurwerk nergens door AI wordt genoemd.

## De concrete zoekkansen uit screenshot 2

| Zoekvraag | Pagina | Vertoningen | Klikken | Gemiddelde positie | Aanpak |
| --- | --- | ---: | ---: | ---: | --- |
| wat is een urenstaat | /urenstaat-maken/ | 29 | 0 | 13,9 | Definitie direct bovenaan; meteen gevolgd door ingevuld voorbeeld. |
| hoe kies je een tool die uren direct omzet in facturen | /urenregistratie-app/ | 7 | 0 | 5,6 | Gerichte sectie met selectiecriteria, prijsgrenzen en echte factuurflow. |
| urenstaat voorbeeld | /urenstaat-maken/ | 5 | 0 | 9,6 | Downloadbaar voorbeeld en leeg sjabloon aanbieden. |
| voorbeeld urenstaat | /urenstaat-maken/ | 1 | 0 | 10,0 | Dezelfde pagina versterken; geen vrijwel identieke nieuwe URL. |

De urenstaatgroep vertegenwoordigt 35 van de 42 getoonde vertoningen. Dit maakt haar de beste eerste kandidaat binnen deze uitsnede. Nul klikken bij zo weinig vertoningen bewijst nog geen slechte snippet. Zelfs bij een hypothetische CTR van 5% leveren 42 vertoningen slechts ongeveer twee klikken op. Aanzienlijke groei vraagt daarom ook een groter bereik binnen relevante zoekvragen; alleen CTR optimaliseren is onvoldoende.

## Prioriteiten en oplevercriteria

Inspanningen zijn planningsramingen in werkdagen, geen verkeersverwachtingen. Onderdelen kunnen binnen dezelfde werkdag worden gecombineerd.

| Prioriteit | Werk | Waarom nu | Raming | Klaar wanneer |
| --- | --- | --- | --- | --- |
| P0 | Nulmeting en feitelijke controles | Resultaat kunnen beoordelen; onjuiste productclaims voorkomen. | 0,5–1 dag | GSC-data, productfeiten en meetdefinities vastgelegd; indexering en AI-inclusie gecontroleerd. |
| P1 | /urenstaat-maken/ uitbreiden | Drie concrete queries, ontbrekend bruikbaar sjabloon. | 1–2 dagen | Compleet voorbeeld plus getest XLSX- en printbaar PDF-sjabloon, zonder e-maildrempel. |
| P1 | /urenregistratie-app/ verbeteren | Query op positie 5,6 sluit aan op kernfunctie van Uurwerk. | 1–1,5 dag | Kiescriteria en 3 stappen van uren naar factuur met echte appbeelden. |
| P1 | Maker, contact, productfeiten en schema | Meer controleerbaarheid bij productkeuze en brongebruik. | 1–2 dagen | Over/contact/privacy vindbaar; identiteit correct verbonden; gratis/Pro ondubbelzinnig. |
| P1 | Interne links per onderwerp | Gerelateerde gidsen zijn nu de eerste vier uit een vaste lijst. | 0,5 dag | Elke gids verwijst inhoudelijk naar passende voorbeelden en productvervolgstappen. |
| P2 | Gratis/Pro-informatie en factuurhandleiding | Beantwoordt koopvragen die nu algemeen blijven. | 1–2 dagen | Verifieerbare prijstabel en praktische handleiding, met eigen zoekintentie. |
| P2 | Eén hulpmiddel en fiscale kwaliteitsronde | Meer eigen waarde; bruikbaar voor bezoekers en verwijzende sites. | 2–3 dagen | Hulpmiddel werkt, berekeningen kloppen; fiscale pagina's hebben gerichte bronnen en echte controledatum. |
| P2 | Externe herkenbaarheid en praktijkbewijs | Ontbrekend backlinkprofiel is nog onbekend; echte distributie vergroot ontdekking. | 1–2 dagen voorbereiding | Officiële profielen afgestemd, demo gepubliceerd na akkoord, relevante prospectlijst en één echte gebruikerscasus voorbereid. |
| P3 | llms.txt | Aanvullende publicatievorm voor concrete consumers. | Maximaal 1–2 uur | Feitelijk overzicht met canonieke links, onderhoud bij productwijzigingen; geen scoredoel. |

## Pagina 1: urenstaat maken

Behoud `/urenstaat-maken/`. Voorgestelde title na toevoeging van downloads: **Urenstaat maken: voorbeeld + gratis sjabloon | Uurwerk**. H1: **Urenstaat maken: voorbeeld en gratis sjabloon**.

De huidige pagina bevat al een definitie, tabel en checklist. Breid die als volgt uit:

1. Kort antwoord: wat een urenstaat is, voor wie en wat erop staat. Maak het antwoord zelfstandig begrijpelijk.
2. Een compleet ingevuld voorbeeld direct daarna, met opdrachtnemer, opdrachtgever, periode, project, datum, werkzaamheden, uren, expliciet tarief en totaal.
3. Een leeg én ingevuld XLSX-bestand plus printbaar PDF-sjabloon. Zonder account of e-mailadres; laat bezoekers het eerst gebruiken.
4. Een korte invulinstructie, uitleg over pauzes en decimale uren en het verschil tussen een urenstaat en een factuur.
5. Pas daarna een relevante productstap: hetzelfde werk doorlopend bijhouden in Uurwerk, met een echte schermafbeelding en App Store-link.

Concreet probleem in het huidige voorbeeld: de checklist vraagt de eigen bedrijfsnaam, maar die is in de tabel niet afzonderlijk zichtbaar. Het uurtarief is alleen afleidbaar uit bedragen. Het voorbeeld combineert “Acme Bouw” met websiteonderhoud. Kies één herkenbare situatie, bijvoorbeeld een freelance webdesigner die voor een bouwbedrijf werkt, en benoem beide partijen.

Controleer sjablonen op correcte totalen, 1 uur 30 minuten = 1,5 uur, lege invoer, pauzes en afdruk op A4. Beloof geen aparte urenstaat-export uit de app zolang die functie niet bevestigd is; een website-PDF en een appfactuur zijn verschillende producten.

Marktsignaal: [EasyHours biedt meerdere direct bruikbare Excel-sjablonen](https://easyhours.nl/urenregistratie-excel). Dat bewijst dat dit aanbod bestaat, niet dat het hun ranking veroorzaakt. Onze aanbeveling volgt uit dit aanbod én de concrete voorbeeldvragen in je screenshot.

## Pagina 2: urenregistratie-app kiezen

Behoud `/urenregistratie-app/` als kiesgids. Voeg **“Hoe kies je een tool die uren direct omzet in facturen?”** toe als herkenbare sectie; schrijf geen aparte pagina voor deze ene lange query.

Maak de criteria toetsbaar: uren aan klanten koppelen, tarieven en btw, openstaande uren selecteren, concept controleren, PDF/export/verzenden, kosten en toegang tot gegevens na stoppen. Benoem per criterium wat voor Uurwerk bevestigd is en wat een gebruiker in een andere app moet controleren.

Toon de echte flow **uren kiezen → factuur controleren → versturen**, met de bestaande officiële screenshots 01 en 06 en een passend urenoverzicht. Gebruik bijschriften die uitleggen wat je ziet. Vermeld op de verstuurstap duidelijk dat Pro nodig is.

Voeg een eerlijke keuze toe tussen spreadsheet, lichte iPhone-app en volledig boekhoudpakket. Teams, Android en boekhoudkoppelingen zijn geen bewezen Uurwerk-mogelijkheden. De site kan juist duidelijker zeggen voor welke gebruiker de app geschikt is. [Gekko demonstreert bijvoorbeeld uren doorfactureren met productbeelden](https://www.getgekko.com/nl/tijdregistratie-app/); Uurwerk kan zijn eigen compacte werkwijze even concreet laten zien.

## Websitebrede inhoud en identiteit

- Voeg een overpagina toe met Patrick als maker, relevante ervaring en de feitelijke verhouding tussen Uurwerk, Parivee en de ontwikkelaarswebsite. Voeg vindbare support/contact en het toepasselijke privacybeleid toe. Geen verzonnen bedrijfsgegevens.
- Verbind `Organization`, `Person`, `WebSite` en `SoftwareApplication` met vaste `@id`-referenties. Koppel de auteur aan de zichtbare biografie. Neem alleen gecontroleerde officiële profielen op als `sameAs`.
- Maak auteursnaam en echte wijzigingsdatum zichtbaar op gidsen. De gedeelde layout geeft alle gidsen standaard 12 juli 2026 als datum; verander die alleen bij een inhoudelijke wijziging.
- Centraliseer gratis/Pro-feiten. De huidige site noemt bewust geen Pro-bedrag; verifieer eerst de actuele abonnementen en publiceer daarna prijs, periode, valuta en wat inbegrepen is. Apples Lookup API bevestigt gratis downloaden, maar levert in deze respons geen Pro-prijs.
- Verifieer bestaande claims over offline werken, geen account en langdurig terugvinden van gegevens in de app. Een iPhone-app of digitale opslag bewijst op zichzelf geen offlinewerking of gegarandeerde bewaring.
- Corrigeer kleine zichtbare tekstproblemen, zoals letterlijk weergegeven `zzp&rsquo;er` in een FAQ-vraag. Dit is een leesbaarheidsverbetering, geen grote rankinghefboom.

De App Store noemt op de controledatum versie 1.0.0, minimaal iOS 18.6, nul Nederlandse beoordelingen en vejoapps.com als ontwikkelaarswebsite. [Apple Lookup API](https://itunes.apple.com/lookup?id=6781654951&country=nl). Een andere domeinnaam is niet automatisch fout; de onderlinge relatie moet begrijpelijk zijn. Zonder geschikte echte review/rating niet proberen app-rich-results af te dwingen. [Google SoftwareApplication](https://developers.google.com/search/docs/appearance/structured-data/software-app).

## Inhoudsstructuur zonder onnodige overlap

| Bestemming | Eigen taak | Verbetering / volgende stap |
| --- | --- | --- |
| / | Uurwerk als product kiezen | Duidelijke iPhone-positionering, bewijs, gratis/Pro-samenvatting, belangrijkste hulpmiddel. |
| /urenregistratie-app/ | Oplossingen en functies afwegen | Criteria en demonstratie; link naar gratis/Pro en handleiding. |
| /urenregistratie-app-gratis/ | Begrijpen wat gratis en betaald is | Centrale prijstabel en gebruiksgrenzen; geen tweede losse prijzenpagina nodig bij deze omvang. |
| /urenstaat-maken/ | Een urenstaat begrijpen en maken | Voorbeeld, sjablonen; mogelijke invultool later op dezelfde pagina. |
| /urenregistratie-zzp/ | Werkproces van een zelfstandige | Voorbeeldweek met declarabele en indirecte activiteiten. |
| /urencriterium/ | Voorwaarden begrijpen en voortgang berekenen | Gerichte officiële bronnen; kleine rekenhulp na inhoudelijke controle. |
| /urenregistratie-belastingdienst/ | Onderbouwing en administratie organiseren | Checklist met bewijsstukken, opslag/export en concrete bronverwijzingen. |
| /urenregistratie-bouw/ | Uren per klus bijhouden | Eén echte bouwsituatie; reis-/pauzetijd en werk zonder goede verbinding alleen feitelijk beschrijven. |
| /uren-bijhouden-zonder-excel/ | Overstappen of vergelijken | Eerlijk Excel-voorbeeld, beperkingen en handmatige overstap als import niet bestaat. |
| /online-urenregistratie/ | Browserdienst versus geïnstalleerde app begrijpen | Benoem dat Uurwerk een iPhone-app is; een webapp wordt hier niet aangeboden. |
| Nieuw: /uren-factureren/ | Zelf van uren een factuur maken | Eigen stapsgewijze handleiding; andere taak dan een app kiezen. Eerst zoekdata toetsen, dan publiceren. |

Werk gerelateerde gidsen met expliciete relaties uit. Bijvoorbeeld: urenstaat → factureren, Excel, zzp; urencriterium → Belastingdienst, zzp; app → gratis/Pro, factureren. Footerlinks bestaan al, maar vervangen geen relevante links bij de uitleg zelf. Controleer in GSC of homepage en kiesgids op dezelfde queries concurreren voordat je samenvoegt. Behoud bestaande URL's; eventuele latere consolidatie vereist redirects en bijgewerkte links.

## AEO en GEO praktisch uitvoeren

Voor AEO staan definitie, invulvoorbeeld en antwoord op een beslisvraag centraal. Voor GEO vergroten we de bruikbaarheid als bron met eigen screenshots, controleerbare productinformatie, gerichte bronverwijzingen en echte praktijkervaring. Speciale tekstlengtes of schema's garanderen geen citaties. [Google AI-gids](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide).

Controleer bij de hosting dat zoekcrawlers echte toegang krijgen. robots.txt staat ze nu in beginsel toe. Test CDN/WAF en logs voor de relevante zoekbots; het nadoen van een user-agent is onvoldoende bewijs. `OAI-SearchBot` gaat over ChatGPT Search, terwijl `GPTBot` een aparte trainingskeuze betreft. [OpenAI bots](https://developers.openai.com/api/docs/bots).

Maak vervolgens materiaal waar anderen naar kunnen verwijzen: de urenstaatdownload, één goede factuurdemonstratie en een gedocumenteerde gebruikerscasus met toestemming. Stem de officiële app- en makersprofielen af. Zoek relevante boekhouders, zzp-publicaties en softwareoverzichten die dit materiaal werkelijk kunnen gebruiken. Het huidige backlinkprofiel is niet onderzocht, dus “te weinig autoriteit” blijft een te toetsen hypothese. Publicaties en outreach zijn vervolgwerk; in dit onderzoek worden geen berichten verstuurd.

Voor fiscale gidsen: controleer elke uitleg bij de specifieke Belastingdienst-bron en laat relevante nuances deskundig beoordelen. Ook rekenvoorbeelden moeten kloppen: 1.225 / 52 ≈ 23,6 uur per week; bij 48 werkweken ≈ 25,5 uur. De bestaande formulering “ongeveer 24 uur, uitgaande van enkele weken vakantie” moet dus nauwkeuriger. Gebruik in een eventuele rekenhulp het gekozen aantal werkweken en presenteer de uitkomst niet als fiscale goedkeuring.

## Uitvoering in zes weken

**Week 1:** nulmeting, productfeiten, urenstaatpagina met downloads en interne links. Leg de publicatiedatum als meetannotatie vast.

**Week 2:** appkiesgids met demo, over/contact/privacy, gratis/Pro-informatie en verbonden entiteiten. Syntaxvalidatie, passende Google-validatie en controle van de zichtbare inhoud.

**Week 3–4:** publiceer de factuurhandleiding na intentiecontrole; verbeter fiscale gidsen en bouw één hulpmiddel. Voeg geen reeks vergelijkbare zoekwoordpagina's toe. Documenteer privacy en opslaggedrag van hulpmiddelen; begin waar mogelijk zonder serveropslag.

**Week 5–6:** echte praktijkcasus en distributie voorbereiden, officiële profielen afstemmen, eerste prestaties evalueren. Verplaats inzet naar pagina's die aantoonbaar relevante nieuwe querygroepen bereiken. Doorlooptijd voor externe reacties en indexering staat los van de geschatte productiedagen.

Dit is circa 8–12 werkdagen productie, verspreid over zes weken, afhankelijk van appverificatie en de gekozen rekenhulp. Plan evaluaties na 28, 56 en 90 dagen; inhoud publiceren is geen garantie op directe herindexering of groei.

## Meetplan en beslisregels

| Meting | Nulmeting / uitvoering | Beslisregel |
| --- | --- | --- |
| Organische vraag | Volledige GSC-export: 3 maanden en beschikbare historie, pagina/query/land/apparaat; merkvragen apart. | Meet nieuwe relevante queries en vertoningen naast klikken. Vergelijk gelijke perioden en segmenten. |
| Twee eerste pagina's | Vier screenshotregels bewaren, volledige paginadata toevoegen. | Bij meer vertoningen zonder klikken: snippet, positie en intentie onderzoeken. Geen CTR-conclusie uit enkele vertoningen. |
| Indexering | GSC URL-inspectie, geselecteerde canonical, sitemapdekking, eventuele uitsluitingen. | Eerst indexeerproblemen oplossen wanneer die aantoonbaar bestaan. |
| Google AI | Search generative AI-instelling controleren; AI-impressierapport bekijken. | Ontbrekende data is niet automatisch uitsluiting. AI-impressies zijn geen aparte AI-clicks. [GSC AI-rapport](https://support.google.com/webmasters/answer/16984139), [inclusie-instelling](https://support.google.com/webmasters/answer/16908024). |
| Andere antwoorddiensten | Waar beschikbaar Bing AI Performance; vaste set van 10–15 zoekvragen in ChatGPT/Perplexity/Copilot met webzoeken. | Leg datum, dienst, vraag, bron-URL en antwoord vast. Kleine steekproef, geen universele zichtbaarheidsscore. |
| Conversie | Events voor App Store-doorklik, sjabloondownload en voltooid hulpmiddel, met bronpagina en plaatsing. | Vergelijk aantallen én verhouding per landingspagina; App Store-klik is nog geen installatie. |
| Downloads | App Store Connect-webreferrals/campagnelinks waar beschikbaar. | Reconcileer met webdoorklikken zonder volledige individuele attributie te veronderstellen. |
| Techniek | Mobiele controle, 404's, downloads en Core Web Vitals uit beschikbare velddata. | Optimaliseer gevonden bottlenecks; de huidige audit bewijst geen snelheidsprobleem. |

Maak na de nulmeting een numeriek groeidoel. Met alleen 42 geselecteerde vertoningen is “10× meer verkeer” nu geen verdedigbare prognose. Het eerste uitvoeringsdoel is wel concreet: twee aantoonbaar betere instappagina's, bruikbare downloads, controleerbare productinformatie en meting van de stap naar de app.

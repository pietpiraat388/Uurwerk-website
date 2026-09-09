# SEO, AEO en GEO: uitvoering en meting

Status op 9 september 2026: wijzigingen lokaal uitgevoerd en gecontroleerd. Nog niet gepubliceerd. Het oorspronkelijke [plan](seo-aeo-geo-plan-2026-09-09.md) en de [broncontrole](seo-aeo-geo-bronnen-2026-09-09.md) beschrijven de onderbouwing.

## Uitgevoerd

- `/urenstaat-maken/`: direct antwoord, ingevuld voorbeeld, drie echte downloads, decimale uren en screenshot van de app.
- `/urenregistratie-app/`: selectiecriteria voor uren direct factureren en drie echte appbeelden. Nieuwe verdiepingspagina `/uren-factureren/` met stappen en controlelijst.
- `/urencriterium/`: lokale rekenhulp en preciezere fiscale voorwaarden met officiële bron. Overige bestaande gidsen hebben concretere voorbeelden, beperkingen of werkwijzen.
- `/urenregistratie-app-gratis/`: centrale vergelijking van gratis functies en Pro. De exacte Pro-prijs wacht op verificatie.
- `/over-uurwerk/`, `/contact/` en `/privacy/`: maker, openbare supportgegevens en toelichting op hulpmiddelen en appbeleid.
- Gidsen tonen auteur en wijzigingsdatum; gerelateerde links zijn per onderwerp gekozen. De homepage verwijst naar de hulpmiddelen.
- JSON-LD koppelt organisatie, maker, website en app met vaste identifiers. FAQ-tekst heeft geen zichtbare HTML-entiteiten meer. Geen verzonnen ratings.
- `/llms.txt` gebruikt dezelfde sitegegevens en gidsenlijst. Dit is een extra tekstingang, geen bewezen Google-rankingmaatregel.
- Toegankelijk mobiel menu en lokale conversie-events toegevoegd.
- [Distributiekandidaten en conceptteksten](seo-distributie-voorbereiding.md) voorbereid. Niets verstuurd.

## Nulmeting uit de aangeleverde screenshot

Periode: laatste 28 dagen; alle apparaten en landen. Begin- en einddatum zijn niet zichtbaar. Dit is alleen het gefilterde overzicht met posities 5–20, geen volledige Search Console-export.

| Zoekopdracht | Pagina | Vertoningen | Klikken | Positie |
| --- | --- | ---: | ---: | ---: |
| wat is een urenstaat | /urenstaat-maken/ | 29 | 0 | 13,9 |
| hoe kies je een tool die uren direct omzet in facturen | /urenregistratie-app/ | 7 | 0 | 5,6 |
| urenstaat voorbeeld | /urenstaat-maken/ | 5 | 0 | 9,6 |
| voorbeeld urenstaat | /urenstaat-maken/ | 1 | 0 | 10,0 |

De vier regels tellen op tot 42 vertoningen; 35 gaan naar de urenstaatpagina. Deze aantallen ondersteunen prioritering, geen betrouwbare verkeersprognose.

## Conversiemeting aansluiten

`ConversionTracking.astro` en `HoursCalculator.astro` dispatchen op `document` een `CustomEvent` met naam `uurwerk:conversion`. Zonder aangesloten analyticsdienst verlaat dit de browser niet en wordt het niet bewaard.

| `detail.name` | Moment | Overige velden |
| --- | --- | --- |
| `app_store_click` | Klik op een App Store-link | `page`, `placement` |
| `template_download` | Klik op een lokale downloadlink | `page`, `placement`, `file` |
| `hours_calculator_complete` | Geldige berekening | `page`, `placement` |

Een downloadklik bewijst niet dat een bestand is opgeslagen; een App Store-klik is geen installatie of aankoop. De rekenhulp geeft geen ingevulde uren of weken door. URL-querystrings worden niet meegestuurd.

Na keuze van de analyticsdienst: voeg één adapter toe die deze events doorzet, sluit paginabezoeken aan, controleer de verwerking en pas de privacyinformatie aan op de daadwerkelijke inrichting. Eventontvangst is lokaal getest; er is nog geen dashboard of productiekoppeling. Er staan geen credentials in de broncode.

## Nog nodig buiten de lokale website

1. Controleer de actuele Pro-prijzen en betaalperioden in de app of met geauthenticeerde App Store Connect-toegang. Werk daarna `site.ts`, de prijstabel en de prijsantwoorden bij.
2. Bevestig de verhouding tussen Parivee en VeJo Apps. De ontwikkelaar en openbare contactroute zijn geverifieerd; een juridische verhouding is niet ingevuld.
3. Kies of bevestig de analyticsdienst en geef toegang tot de relevante Search Console-property of lever een volledige export aan.
4. Publiceer de gecontroleerde build. Controleer daarna de productie-URL's, downloads, canonical, sitemap, redirects en daadwerkelijke toegang voor zoekcrawlers door eventuele WAF-regels heen.
5. Controleer in Search Console indexering en de geldende instelling voor generatieve AI. Gebruik het generatieve-AI-rapport als het voor deze property beschikbaar is. Trek uit afwezigheid bij weinig data geen conclusie dat niemand de site citeert.
6. Publiceer een echte gebruikerscase na interview, bewijs en toestemming. Benader relevante publicaties alleen na expliciete verzendopdracht.

## Controle na publicatie

Leg publicatiedatum en wijzigingen vast. Exporteer vooraf en vervolgens wekelijks pagina- en querydata. Vergelijk op dag 28 en 56 met een even lange voorafgaande periode en, wanneer beschikbaar, dezelfde periode vorig jaar. Segmenteer de urenstaatpagina, appkeuzepagina en nieuwe factuurpagina.

Volg vertoningen, klikken, CTR, gemiddelde positie en conversies per landingspagina. Beoordeel relevante querygroepen in samenhang; voorkom conclusies uit één of twee vertoningen. Houd wijzigingen in zoekresultaten, seizoenen en indexering bij. Voer handmatige AI-antwoordenchecks met vaste vragen als steekproef uit, noteer bronlinks en datum, en behandel ze niet als representatieve marktaandelen.

Streef naar meer relevante bezoekers en gebruik van de hulpmiddelen. De externe GEO-score uit de screenshot is geen bewezen maat voor vindbaarheid of omzet.

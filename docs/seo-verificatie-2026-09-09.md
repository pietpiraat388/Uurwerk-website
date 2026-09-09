# Verificatie van de lokale SEO-wijzigingen

Gecontroleerd op 9 september 2026. Dit is bewijs voor de lokale werkversie; productie is nog niet gewijzigd.

| Controle | Resultaat |
| --- | --- |
| `npm run build` | Geslaagd; 15 HTML-pagina's inclusief 404, plus `llms.txt` |
| `npm test` | 3 tests geslaagd: normale berekening, nul resterende weken/target bereikt, ongeldige invoer |
| `git diff --check` | Geen whitespacefouten |
| HTML en interne verwijzingen | Alle 15 pagina's één H1; geen ontbrekende interne paden of ankers |
| Canonicals | Alle indexeerbare pagina's verwijzen naar hun eigen productie-URL |
| Sitemap | 14 pagina-URL's; alle komen voor in de build, 404 uitgesloten |
| JSON-LD | Alle 50 blokken kunnen als JSON worden gelezen; geen verklaring van rich-result-geschiktheid |
| Mobiel | Urenstaat, calculator, appkeuze en vier nieuwe informatie-/factuurpagina's gecontroleerd op 390px; geen horizontale overloop van het document |
| Appbeelden | De drie afbeeldingen in de factuurstappen laden; alt-teksten aanwezig |
| Browserconsole | Geen JavaScript-fouten tijdens de gecontroleerde appkeuze-flow |
| Mobiel menu | Openen werkt, `aria-expanded` volgt de toestand, Escape sluit en geeft focus terug |
| Calculator | 800/17 → 425 uur en 25/week; 1200/0 geeft geen oneindig resultaat; 1225/0 geeft geen fiscale garantie; 0/48 → 25,5/week. Nieuwe invoer verbergt het oude resultaat |
| Conversievoorbereiding | Downloadklik en berekening leveren het bedoelde lokale event zonder ingevulde uren/weken. Geen analytics-backend aangesloten |
| Downloads | Drie lokale download-URL's geven HTTP 200. Excel-formules en opgeslagen voorbeeldtotalen gecontroleerd; beide spreadsheetpreviews en de A4-PDF visueel bekeken |

De brede appkeuzetabel heeft een horizontaal schuifbare container, een aanwijzing voor mobiele gebruikers en toetsenbordfocus. Dit is bewust een tabel met alle selectiecriteria; de pagina zelf loopt niet over.

De 404-route wordt door Astro als `404.html` opgeslagen maar heeft de canonical `/404/`; canonicals zijn getoetst voor de indexeerbare pagina's.

Er is geen native Excel-test, Google Rich Results Test, productie-crawl na publicatie, GSC-indexeringscontrole of daadwerkelijke conversieontvangst door een analyticsdienst uitgevoerd. Zie [uitvoeringsstatus](seo-meting-en-uitvoering.md) voor de resterende stappen.

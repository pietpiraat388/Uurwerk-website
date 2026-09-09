# SEO, AEO en GEO: toetsing aan primaire bronnen

Onderzocht op 9 september 2026 voor het verbeterplan van urenregistreren.com. Dit document toetst de aanbevelingen uit de aangeleverde audit aan officiële documentatie; het bevat geen nieuwe meting van de website. Websitebestanden zijn niet aangepast.

## De audit gebruiken zonder de score als doel te nemen

De screenshot is een checklist van een externe aanbieder, geen rechtstreeks meetinstrument van Google of de genoemde AI-diensten. Google waarschuwt dat externe SEO-tools geen toegang hebben tot interne rankinggegevens en geen prestaties kunnen garanderen. **Aanbeveling:** gebruik meldingen als onderzoeksvragen en beoordeel wijzigingen op vindbaarheid, bruikbaarheid, citaties en conversie. [Google over externe SEO-tools](https://developers.google.com/search/docs/fundamentals/third-party-seo).

| Melding uit screenshot | Wat de primaire bronnen aantonen | Betekenis voor het plan |
| --- | --- | --- |
| Geen llms.txt; 0/18 | Google gebruikt llms.txt niet voor Search, inclusief generatieve functies; het beïnvloedt daar zichtbaarheid/rankings niet. | Optioneel onderhoudbaar overzicht voor andere agents; geen urgente SEO-blokkade of reden voor een monitoringabonnement. |
| Geen crawl-delay | Google ondersteunt deze regel niet. | Niet toevoegen om de auditscore te verhogen. |
| Geen .well-known AI-bestand / summary.json | Geen vereiste in de geraadpleegde Google- en OpenAI-documentatie. Google zegt expliciet dat bijzondere AI-bestanden niet nodig zijn. | Geen bewezen blokkade; alleen realiseren bij een concrete consumer/integratie. |
| Geen FAQ structured data | Google heeft FAQ rich results per 7 mei 2026 uitgefaseerd. | Goede zichtbare antwoorden blijven nuttig; FAQ-schema heeft geen prioriteit voor Google-rich-results. |
| Geen JSON-LD / Organization / WebSite | Markup kan entiteiten en presentatie verduidelijken; aanwezigheid is geen algemene vereiste voor AI-citaties. | Wel technisch verifiëren en waar zinvol herstellen, zonder rangschikkings- of citatiegarantie. |

Onderbouwing per onderwerp staat hieronder. De inschatting dat niet-gedocumenteerde bestanden lage prioriteit hebben is een praktische gevolgtrekking, geen bewijs dat geen enkele agent ze ooit gebruikt.

## AI-bestanden, antwoordstructuur en echte inhoudelijke waarde

Google legt in zijn actuele AI-optimalisatiegids de nadruk op eigen ervaring, originele inzichten en technische SEO. Speciale AI-bestanden en speciale schema.org-markup zijn niet vereist. Google adviseert evenmin een vaste paginalengte, kunstmatig kleine tekstbrokken of aparte pagina's voor iedere queryvariant. Korte definities, tabellen en voorbeelden moeten dus vooral de bezoeker helpen. [Google AI-optimalisatiegids, bijgewerkt 10 juli 2026](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide).

`llms.txt` is een voorstel voor een beknopte ingang voor agents, vaak gebruikt bij softwaredocumentatie; het vervangt geen robots.txt of sitemap. De officiële voorstelpagina noemt versie 2, bijgewerkt 10 augustus 2026. Als Uurwerk dit toevoegt: houd productfeiten en links actueel en behandel het als aanvullende publicatievorm. De aanwezigheid op documentatiesites is geen bewijs van een rankingvoordeel. [Het llms.txt-voorstel](https://llmstxt.org/).

## Crawling: echte toegang controleren

Google ondersteunt in robots.txt `user-agent`, `allow`, `disallow` en `sitemap`; `crawl-delay` wordt niet ondersteund. Controleer daadwerkelijke blokkades, HTTP-responses, canonical/noindex en bereikbaarheid van inhoud. Het ontbreken van crawl-delay is geen Google-fout. [Officiële robots.txt-specificatie](https://developers.google.com/crawling/docs/robots-txt/robots-txt-spec).

Voor ChatGPT Search is `OAI-SearchBot` relevant; `GPTBot` betreft mogelijke modeltraining. OpenAI adviseert de zoekcrawler toe te staan in robots.txt én verzoeken uit de gepubliceerde IP-reeksen door te laten. Deze keuzes staan los van elkaar. `ChatGPT-User` voert door gebruikers gestarte bezoeken uit en bepaalt niet de automatische zoekinclusie. **Controlepunt:** test robotsregels en hosting/CDN/WAF; een nagebootste user-agent alleen bewijst niet dat echte crawler-IP's toegang hebben. [OpenAI-crawlers](https://developers.openai.com/api/docs/bots).

Perplexity maakt hetzelfde onderscheid tussen `PerplexityBot` voor zoekresultaten en `Perplexity-User` voor gebruikersacties. De documentatie adviseert bij WAF-regels zowel agentnaam als officiële IP-reeksen te controleren. [Perplexity-crawlers](https://docs.perplexity.ai/docs/resources/perplexity-crawlers).

## Structured data: waar het wel voor dient

- `Organization` op homepage of een geschikte organisatiepagina helpt Google de organisatie te onderscheiden. Gebruik alleen echte contact- en bedrijfsgegevens en eigen officiële profielen. [Organization-documentatie](https://developers.google.com/search/docs/appearance/structured-data/organization).
- `WebSite` op de homepage is de belangrijkste manier om een sitenaamvoorkeur aan te geven. Google adviseert een consistente naam in zichtbare tekst en andere metadatavelden; `alternateName` kan een werkelijk gebruikte alternatieve naam opnemen. [Sitenaamdocumentatie](https://developers.google.com/search/docs/appearance/site-names).
- `SoftwareApplication`/`MobileApplication` kan bij het product passen. Googles app-rich-result vereist onder meer naam, prijsaanbod en een beoordeling of review. Geen echte geschikte review beschikbaar? Niet verzinnen om de validatie groen te krijgen. Schema.org-geldigheid en Google-rich-result-geschiktheid zijn verschillende controles. [Software-appdocumentatie](https://developers.google.com/search/docs/appearance/structured-data/software-app).
- JSON-LD moet representatief zijn voor de zichtbare inhoud. Een geslaagde Rich Results Test garandeert geen vertoning; misleidende/verborgen gegevens en verzonnen reviews zijn niet toegestaan. [Algemene structured-data-richtlijnen](https://developers.google.com/search/docs/appearance/structured-data/sd-policies).

**Actuele correctie:** het vroegere advies dat FAQ-rich-results alleen voor gezaghebbende overheids- en gezondheidssites beschikbaar zijn, is inmiddels achterhaald. Google stopte de weergave op 7 mei 2026 en verwijderde de documentatie in juni. Dit verbiedt zichtbare FAQ-secties of geldig FAQPage-schema niet; het vervalt als beloofd zoekresultaatvoordeel. [Officiële changelog, 8 mei en 15 juni 2026](https://developers.google.com/search/updates).

## Meten in september 2026

1. **Google Search Console: klassieke zoekprestaties.** Leg een nulmeting vast van pagina × zoekvraag × land/apparaat; scheid merkvragen van algemene vragen. Gebruik de vier rijen uit de screenshot als concrete aanwijzingen, niet als volledige marktomvang. Dit is een analyseaanbeveling op basis van de beperkte aangeleverde uitsnede.
2. **Google: generatieve AI-inclusie.** Sinds 31 augustus 2026 is de Search generative AI control volgens Google wereldwijd uitgerold. Controleer Settings → Search generative AI. `Include` is standaard; onderliggende properties kunnen een bovenliggende instelling erven. Een uitsluiting voorkomt verschijning in betrokken AI-functies zonder de overige Search-ranking te sturen. [Search generative AI control](https://support.google.com/webmasters/answer/16908024).
3. **Google: generatieve AI-impressies.** Het afzonderlijke Generative AI performance report is volgens de actuele documentatie eveneens wereldwijd uitgerold sinds 31 augustus 2026. Het rapporteert impressies in AI Overviews en AI Mode, met onder meer pagina-, land- en apparaatdimensies. Afwezigheid kan samenhangen met te weinig impressies; behandel dit niet automatisch als blokkade. De beschreven meetwaarde is impressies, niet een afzonderlijke AI-click- of conversiemetriek. [Generative AI performance report](https://support.google.com/webmasters/answer/16984139).
4. **Bing/Copilot: citaties.** Bing Webmaster Tools heeft AI Performance met citatieaantallen, geciteerde pagina's en grounding queries voor ondersteunde Microsoft- en partnerervaringen. Dit is geaggregeerde, deels bemonsterde informatie; het zijn geen clicks, individuele prompts of causale bewijzen voor het effect van een wijziging. [Bing AI Performance-documentatie](https://www.bing.com/webmasters/help/ai-performance-9f8e7d6c).
5. **Eigen analytics en zakelijke uitkomst.** Aanbeveling: meet downloads/App Store-doorklikken of andere primaire conversies per landingspagina en verwijzende bron; vergelijk met de nulmeting en noteer publicatiedata. Een crawlerbezoek of citatie is nog geen klant.

Bing adviseert bij citatieverbetering onder meer duidelijke koppen, tabellen en FAQ-secties, plus eigen voorbeelden, onderbouwing en actuele inhoud. Dat ondersteunt een plan met concrete urenstaatvoorbeelden en productdemonstraties, mits passend bij de echte zoekvraag. [Introductie AI Performance, 10 februari 2026](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview).

## Volgorde voor het websiteplan

Praktische gevolgtrekking uit bovenstaande bronnen, te combineren met de feitelijke website-audit:

1. Los aantoonbare fouten in toegankelijkheid/indexering en productfeiten op.
2. Verbeter pagina's die al relevante vertoningen hebben met een direct antwoord, origineel voorbeeld, bruikbaar hulpmiddel en passende vervolgstap.
3. Maak merk, maker, appfunctionaliteit en contactgegevens duidelijk; laat relevante markup daarop aansluiten.
4. Bouw onderscheidende inhoud en echte externe verwijzingen rond de vragen van zzp'ers; vermijd massaproductie van vrijwel gelijke zoekwoordpagina's.
5. Meet gewone zoekprestaties, AI-impressies/citaties en conversies afzonderlijk. Behandel llms.txt als klein optioneel experiment, niet als voorwaarde om de rest te starten.

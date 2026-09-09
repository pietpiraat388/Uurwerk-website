# Uurwerk - marketing website

Nederlandstalige SEO- en GEO-geoptimaliseerde website voor de iOS-app **Uurwerk - Uren Registratie**.
Domein: [urenregistreren.com](https://urenregistreren.com).
App Store: <https://apps.apple.com/app/id6781654951>.

## Stack

- [Astro](https://astro.build) (statische output, kleine scripts voor het mobiele menu, de rekenhulp en conversie-events)
- Ingebouwde beeldoptimalisatie via `astro:assets` (WebP, responsive `srcset`)
- `@astrojs/sitemap` voor `sitemap-index.xml`
- Geen frameworks, geen webfonts (systeemfontstack), CSS wordt inline gebouwd

## Commando's

| Commando | Actie |
| --- | --- |
| `npm install` | Dependencies installeren |
| `npm run dev -- --background` | Dev-server op `http://localhost:4321` in de achtergrond |
| `npm run astro -- dev status` | Status van de achtergrondserver |
| `npm run astro -- dev logs` | Logs van de achtergrondserver |
| `npm run astro -- dev stop` | Achtergrondserver stoppen |
| `npm test` | Rekenregels en grensgevallen van de urencriteriumcalculator controleren |
| `npm run build` | Productie-build naar `./dist/` |
| `npm run preview` | Build lokaal bekijken |

## Structuur

```text
src/
  assets/            App-icoon en App Store-screenshots (bron, hoge resolutie)
  components/        Navigatie, CTA's, FAQ, prijstabel, factuurstappen, rekenhulp
  layouts/           Base.astro (SEO/head), Guide.astro (gidspagina's)
  lib/site.ts        Sitegegevens, navigatie en gidsenlijst
  lib/schema.ts      JSON-LD helpers (SoftwareApplication, Article, FAQPage, BreadcrumbList)
  pages/             index + 10 gidsen + over/contact/privacy + 404 + llms.txt
  styles/global.css  Design tokens en basisstijlen
public/              favicons, og-default.png, robots.txt en downloads
scripts/             Downloads genereren en rekenregels testen
docs/                SEO-plan, bronnen, meetplan en distributievoorbereiding
app.md               App Store-analyse (bron voor alle feitelijke claims)
```

## Inhoud en claims

- Alle feitelijke uitspraken over de app komen uit `app.md` (App Store-vermelding).
- Geen verzonnen reviews, aantallen, prijzen of functies.
- Belastinginformatie is uitleg, geen advies, en verwijst naar Belastingdienst/KVK.
- Kilometerregistratie wordt bewust niet genoemd (app ondersteunt dit niet).

## Downloads en meting

De Excel- en PDF-bestanden zijn statische bestanden in `public/downloads/`. Generatie en controle staan in [docs/downloads.md](docs/downloads.md).

De site verstuurt lokale DOM-events voor App Store-klikken, downloadklikken en afgeronde berekeningen. Er is nog geen analyticsdienst aangesloten: deze events worden dus niet duurzaam gemeten. Zie [docs/seo-meting-en-uitvoering.md](docs/seo-meting-en-uitvoering.md) voor aansluiting, nulmeting en controles na publicatie.

## Deploy

Statische site: de map `dist/` kan naar elke host (Vercel, Netlify, Cloudflare Pages).
Het domein `urenregistreren.com` staat geconfigureerd in `astro.config.mjs` (`site`) en `src/lib/site.ts` (`SITE.url`) en wordt gebruikt voor canonicals, Open Graph, JSON-LD, sitemap en robots.txt.

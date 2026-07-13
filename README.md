# Uurwerk - marketing website

Nederlandstalige SEO- en GEO-geoptimaliseerde website voor de iOS-app **Uurwerk - Uren Registratie**.
Domein: [urenregistreren.com](https://urenregistreren.com).
App Store: <https://apps.apple.com/app/id6781654951>.

## Stack

- [Astro](https://astro.build) (statische output, nul JavaScript op de pagina's)
- Ingebouwde beeldoptimalisatie via `astro:assets` (WebP, responsive `srcset`)
- `@astrojs/sitemap` voor `sitemap-index.xml`
- Geen frameworks, geen webfonts (systeemfontstack), CSS wordt inline gebouwd

## Commando's

| Commando | Actie |
| --- | --- |
| `npm install` | Dependencies installeren |
| `npm run dev` | Dev-server op `http://localhost:4321` |
| `npm run build` | Productie-build naar `./dist/` |
| `npm run preview` | Build lokaal bekijken |

## Structuur

```text
src/
  assets/            App-icoon en App Store-screenshots (bron, hoge resolutie)
  components/        Header, Footer, AppStoreButton, Faq, CtaBanner
  layouts/           Base.astro (SEO/head), Guide.astro (gidspagina's)
  lib/site.ts        Sitegegevens, navigatie en gidsenlijst
  lib/schema.ts      JSON-LD helpers (SoftwareApplication, Article, FAQPage, BreadcrumbList)
  pages/             index + 9 SEO-gidspagina's + 404
  styles/global.css  Design tokens en basisstijlen
public/              favicons, og-default.png, robots.txt
app.md               App Store-analyse (bron voor alle feitelijke claims)
```

## Inhoud en claims

- Alle feitelijke uitspraken over de app komen uit `app.md` (App Store-vermelding).
- Geen verzonnen reviews, aantallen, prijzen of functies.
- Belastinginformatie is uitleg, geen advies, en verwijst naar Belastingdienst/KVK.
- Kilometerregistratie wordt bewust niet genoemd (app ondersteunt dit niet).

## Deploy

Statische site: de map `dist/` kan naar elke host (Vercel, Netlify, Cloudflare Pages).
Het domein `urenregistreren.com` staat geconfigureerd in `astro.config.mjs` (`site`) en `src/lib/site.ts` (`SITE.url`) en wordt gebruikt voor canonicals, Open Graph, JSON-LD, sitemap en robots.txt.

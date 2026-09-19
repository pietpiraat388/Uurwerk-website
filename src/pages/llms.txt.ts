import { SITE, GUIDES, PRO_PRICE_ANSWER, guideUrl } from '../lib/site';
export const prerender = true;

export function GET() {
  const content = `# ${SITE.fullName}

> Nederlandstalige urenregistratie-app voor iPhone, gemaakt door ${SITE.developer}.

Urenregistreren.com is de officiële website van Uurwerk. Uurwerk ondersteunt een timer, handmatige ureninvoer, klanten, projecten, tarieven en conceptfacturen. ${PRO_PRICE_ANSWER} Uurwerk heeft geen medewerkersaccounts of goedkeuring van uren. Vereist iOS ${SITE.minimumIOS} of nieuwer; controleer de App Store voor actuele vereisten.

## Product en contact

- [Uurwerk](${SITE.url}/): officiële productwebsite
- [App Store](${SITE.appStoreUrl}): download en actuele appgegevens
- [Over de maker](${SITE.url}/over-uurwerk/)
- [Contact](${SITE.url}/contact/)
- [Privacy](${SITE.url}/privacy/)

## Productgegevens als JSON

- [Samenvatting](${SITE.url}/ai/summary.json): product, platform, maker en contactgegevens
- [Functies en prijzen](${SITE.url}/ai/service.json): gratis functies, Pro-abonnementen en beperkingen
- [Veelgestelde vragen](${SITE.url}/ai/faq.json): dezelfde vragen en antwoorden als op de homepage

## Gidsen en hulpmiddelen

${GUIDES.map((guide) => `- [${guide.title}](${SITE.url}${guideUrl(guide.slug)}): ${guide.description}`).join('\n')}

Voorbeelden en sjablonen bevatten fictieve gegevens. Fiscale gidsen verwijzen naar officiële bronnen; ze vervangen geen advies over een individuele situatie.
`;
  return new Response(content, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}

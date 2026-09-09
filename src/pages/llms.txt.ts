import { SITE, GUIDES, guideUrl } from '../lib/site';
export const prerender = true;

export function GET() {
  const content = `# ${SITE.fullName}

> Nederlandstalige urenregistratie-app voor iPhone, gemaakt door ${SITE.developer}.

Uurwerk ondersteunt een timer, handmatige ureninvoer, klanten, projecten, tarieven en conceptfacturen. Urenregistratie, klanten, projecten en conceptfacturen zijn gratis. Voor facturen versturen is Uurwerk Pro nodig. Controleer de actuele prijs in de app. Vereist iOS ${SITE.minimumIOS} of nieuwer; controleer de App Store voor actuele vereisten.

## Product en contact

- [Uurwerk](${SITE.url}/): officiële productwebsite
- [App Store](${SITE.appStoreUrl}): download en actuele appgegevens
- [Over de maker](${SITE.url}/over-uurwerk/)
- [Contact](${SITE.url}/contact/)
- [Privacy](${SITE.url}/privacy/)

## Gidsen en hulpmiddelen

${GUIDES.map((guide) => `- [${guide.title}](${SITE.url}${guideUrl(guide.slug)}): ${guide.description}`).join('\n')}

Voorbeelden en sjablonen bevatten fictieve gegevens. Fiscale gidsen verwijzen naar officiële bronnen; ze vervangen geen advies over een individuele situatie.
`;
  return new Response(content, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}

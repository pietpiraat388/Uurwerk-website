export const SITE = {
  name: 'Uurwerk',
  fullName: 'Uurwerk - Uren Registratie',
  url: 'https://urenregistreren.com',
  appStoreUrl: 'https://apps.apple.com/app/id6781654951',
  developer: 'Patrick van der Ploeg',
  publisher: 'Parivee',
  supportEmail: 'info@vejoapps.com',
  developerUrl: 'https://www.vejoapps.com',
  appPrivacyUrl: 'https://www.vejoapps.com/privacy',
  minimumIOS: '18.6',
  factsChecked: '2026-09-19',
  locale: 'nl_NL',
  description:
    "Uurwerk is een eenvoudige urenregistratie app voor zzp'ers, freelancers en kleine ondernemers. Registreer uren met timer of handmatig, beheer klanten en projecten en maak facturen van je uren.",
} as const;

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Urenregistratie', href: '/urenregistratie/' },
  { label: 'Functies', href: '/#functies' },
  { label: 'Urenstaat', href: '/urenstaat-maken/' },
  { label: 'Gidsen', href: '/#gidsen' },
  { label: 'Gratis & Pro', href: '/urenregistratie-app-gratis/' },
];

export interface Guide {
  slug: string;
  title: string;
  navTitle: string;
  description: string;
  hook: string;
}

export const GUIDES: Guide[] = [
  {
    slug: 'urenregistratie',
    title: 'Urenregistratie: uitleg, voorbeelden en hulpmiddelen',
    navTitle: 'Urenregistratie',
    description: 'Wat is urenregistratie en hoe begin je? Kies een werkwijze, bekijk voorbeelden en vind de juiste gids voor jouw situatie.',
    hook: 'Begin hier: kies je werkwijze en vind de juiste gids.',
  },
  {
    slug: 'urenregistratie-software',
    title: 'Urenregistratie software kiezen: functies en kosten',
    navTitle: 'Urenregistratie software',
    description: 'Vergelijk een spreadsheet, urenapp en uitgebreider softwarepakket op invoer, facturen, teamgebruik en kosten.',
    hook: 'Vergelijk functies en kosten voor zelfstandig werk of een team.',
  },
  {
    slug: 'uren-bijhouden',
    title: 'Uren bijhouden: stappenplan met dagvoorbeeld',
    navTitle: 'Uren bijhouden',
    description: 'Houd je werkuren dagelijks bij met een timer of handmatig. Met een voorbeeld voor pauzes, klantwerk en administratie.',
    hook: 'Een vaste routine voor je werkuren, pauzes en weekcontrole.',
  },
  {
    slug: 'urenregistratie-excel',
    title: 'Urenregistratie Excel: gratis template en formules',
    navTitle: 'Urenregistratie Excel',
    description: 'Download een gratis Excel-template voor urenregistratie. Met ingevuld voorbeeld, formules, pauzes en uitleg over decimale uren.',
    hook: 'Download een template en controleer je uren met rekenvoorbeelden.',
  },
  {
    slug: 'urenregistratie-personeel',
    title: 'Urenregistratie personeel: werkwijze en eisen',
    navTitle: 'Urenregistratie personeel',
    description: 'Richt urenregistratie voor medewerkers in: werk- en rusttijden, controle en softwarekeuze. Met voorbeeld en officiële bronnen.',
    hook: 'Wat je voor medewerkers vastlegt en welke teamfuncties je nodig hebt.',
  },
  {
    slug: 'tijdregistratie',
    title: 'Tijdregistratie: tijdschrijven per taak en project',
    navTitle: 'Tijdregistratie',
    description: 'Ontdek waar je werktijd naartoe gaat. Met een voorbeeld van tijdschrijven, projectnacalculatie en declarabele uren.',
    hook: 'Gebruik je geregistreerde tijd om projecten beter te begroten.',
  },
  {
    slug: 'uren-factureren',
    title: 'Uren factureren: van urenstaat naar factuur',
    navTitle: 'Uren factureren',
    description: 'Maak van geregistreerde uren een factuur. Met rekenvoorbeeld, controlelijst en de stappen in Uurwerk voor iPhone.',
    hook: 'Van klant en uren kiezen naar een gecontroleerde factuur.',
  },
  {
    slug: 'urenregistratie-app',
    title: 'Urenregistratie app: zo kies je de juiste',
    navTitle: 'Urenregistratie app',
    description:
      'Wat is een urenregistratie app, welke functies heb je echt nodig en waar let je op bij het kiezen? Een praktische gids voor zzp’ers en kleine ondernemers.',
    hook: 'Welke functies heb je echt nodig en waar let je op?',
  },
  {
    slug: 'urenregistratie-zzp',
    title: 'Urenregistratie voor zzp’ers: zo houd je je uren bij',
    navTitle: 'Urenregistratie zzp',
    description:
      'Hoe houd je als zzp’er je uren bij? Waarom het belangrijk is, welke uren je registreert en hoe een app dit eenvoudiger maakt dan Excel.',
    hook: 'Praktische gids voor het bijhouden van je uren als zelfstandige.',
  },
  {
    slug: 'urencriterium',
    title: 'Urencriterium zzp: 1.225 uur en je onderbouwing',
    navTitle: 'Urencriterium zzp',
    description:
      'Welke uren tellen mee voor het urencriterium van 1.225 uur en hoe toon je ze aan? Uitleg met verwijzing naar de Belastingdienst.',
    hook: 'Welke uren tellen mee voor de 1.225 uur en hoe toon je dat aan?',
  },
  {
    slug: 'urenregistratie-belastingdienst',
    title: 'Urenregistratie voor de Belastingdienst',
    navTitle: 'Urenregistratie Belastingdienst',
    description:
      'Wat verwacht de Belastingdienst van je urenregistratie als ondernemer? Wat leg je vast, hoe lang bewaar je het en hoe pak je het praktisch aan?',
    hook: 'Wat leg je vast en hoe lang bewaar je je administratie?',
  },
  {
    slug: 'uren-bijhouden-zonder-excel',
    title: 'Uren bijhouden zonder Excel',
    navTitle: 'Uren bijhouden zonder Excel',
    description:
      'Excel is een veelgebruikt startpunt voor urenregistratie, maar kent nadelen. Zo stap je over op een eenvoudiger manier van uren bijhouden.',
    hook: 'Waarom een urenlijst in Excel vaak misgaat en wat het alternatief is.',
  },
  {
    slug: 'urenregistratie-bouw',
    title: 'Urenregistratie in de bouw',
    navTitle: 'Urenregistratie bouw',
    description:
      'Uren bijhouden als zzp’er in de bouw: per klus, per opdrachtgever en klaar voor facturatie. Praktische tips voor op de bouwplaats.',
    hook: 'Uren per klus en opdrachtgever bijhouden, direct vanaf de bouwplaats.',
  },
  {
    slug: 'online-urenregistratie',
    title: 'Online urenregistratie: digitaal uren bijhouden',
    navTitle: 'Online urenregistratie',
    description:
      'Wat is online urenregistratie en wat zijn de voordelen ten opzichte van papier en spreadsheets? Zo kies je een digitale oplossing die bij je past.',
    hook: 'De voordelen van digitaal uren bijhouden ten opzichte van papier en Excel.',
  },
  {
    slug: 'urenstaat-maken',
    title: 'Urenstaat maken: voorbeeld en gratis sjabloon',
    navTitle: 'Urenstaat maken',
    description:
      'Maak een urenstaat met een ingevuld voorbeeld en gratis Excel- en PDF-sjablonen. Met uitleg over uren, pauzes en bedragen.',
    hook: 'Download een gratis Excel- of PDF-sjabloon en bekijk het ingevulde voorbeeld.',
  },
  {
    slug: 'urenregistratie-app-gratis',
    title: 'Gratis urenregistratie app: wat krijg je bij Uurwerk?',
    navTitle: 'Gratis urenregistratie app',
    description:
      'Eerlijke uitleg over wat gratis is in Uurwerk: urenregistratie, klanten, projecten en conceptfacturen. Alleen voor het versturen van facturen is Uurwerk Pro nodig.',
    hook: 'Eerlijk overzicht van wat gratis is en waarvoor je Pro nodig hebt.',
  },
];

export const RELATED_GUIDES: Record<string, string[]> = {
  'urenregistratie': ['urenregistratie-zzp', 'urenregistratie-app', 'urenregistratie-excel', 'urencriterium'],
  'urenregistratie-software': ['urenregistratie-app', 'urenregistratie-app-gratis', 'urenregistratie-personeel'],
  'uren-bijhouden': ['urenregistratie-zzp', 'urenregistratie-excel', 'tijdregistratie'],
  'urenregistratie-excel': ['urenstaat-maken', 'uren-bijhouden-zonder-excel', 'urenregistratie-app'],
  'urenregistratie-personeel': ['urenregistratie-software', 'tijdregistratie', 'urenregistratie-bouw'],
  'tijdregistratie': ['uren-bijhouden', 'uren-factureren', 'urenregistratie-software'],
  'urenstaat-maken': ['uren-factureren', 'uren-bijhouden-zonder-excel', 'urenregistratie-zzp'],
  'uren-factureren': ['urenstaat-maken', 'urenregistratie-app-gratis', 'urenregistratie-app'],
  'urenregistratie-app': ['uren-factureren', 'urenregistratie-app-gratis', 'urenregistratie-software'],
  'urenregistratie-app-gratis': ['urenregistratie-app', 'uren-factureren', 'urenstaat-maken'],
  'urenregistratie-zzp': ['urencriterium', 'urenstaat-maken', 'uren-factureren'],
  'urencriterium': ['urenregistratie-belastingdienst', 'urenregistratie-zzp', 'urenstaat-maken'],
  'urenregistratie-belastingdienst': ['urencriterium', 'urenregistratie-zzp', 'urenstaat-maken'],
  'urenregistratie-bouw': ['urenstaat-maken', 'uren-factureren', 'urenregistratie-zzp'],
  'uren-bijhouden-zonder-excel': ['urenstaat-maken', 'urenregistratie-app', 'uren-factureren'],
  'online-urenregistratie': ['urenregistratie-app', 'urenregistratie-app-gratis', 'uren-bijhouden-zonder-excel'],
};

export const PRODUCT_FEATURES = [
  { label: 'Timer en handmatige ureninvoer', free: true },
  { label: 'Klanten, projecten en tarieven', free: true },
  { label: 'Urenoverzichten per periode', free: true },
  { label: 'Conceptfacturen maken', free: true },
  { label: 'Facturen versturen vanuit de app', free: false },
] as const;

// Prijzen en betaalperioden bevestigd door de maker op 19 september 2026.
export const PRO_PRICING = {
  monthly: 6.99,
  yearly: 59.99,
  monthlyLabel: '€ 6,99',
  yearlyLabel: '€ 59,99',
  yearlyMonthlyLabel: '€ 5',
  yearlySavingPercent: 28,
  checked: '2026-09-19',
} as const;

export const PRO_PRICE_ANSWER = `Uurwerk Pro kost ${PRO_PRICING.monthlyLabel} per maand of ${PRO_PRICING.yearlyLabel} per jaar. Het jaarabonnement komt neer op ongeveer ${PRO_PRICING.yearlyMonthlyLabel} per maand en is ${PRO_PRICING.yearlySavingPercent}% goedkoper dan twaalf maandbetalingen. Je betaalt het jaarbedrag in één keer. Urenregistratie, klanten, projecten en conceptfacturen zijn gratis; Pro is nodig om facturen te versturen.`;

export function guideUrl(slug: string): string {
  return `/${slug}/`;
}

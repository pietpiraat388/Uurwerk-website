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
  factsChecked: '2026-09-09',
  locale: 'nl_NL',
  description:
    "Uurwerk is een eenvoudige urenregistratie app voor zzp'ers, freelancers en kleine ondernemers. Registreer uren met timer of handmatig, beheer klanten en projecten en maak facturen van je uren.",
} as const;

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Functies', href: '/#functies' },
  { label: 'Hoe het werkt', href: '/#hoe-het-werkt' },
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
    title: 'Urenregistratie en het urencriterium (1.225 uur)',
    navTitle: 'Urencriterium',
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
  'urenstaat-maken': ['uren-factureren', 'uren-bijhouden-zonder-excel', 'urenregistratie-zzp'],
  'uren-factureren': ['urenstaat-maken', 'urenregistratie-app-gratis', 'urenregistratie-app'],
  'urenregistratie-app': ['uren-factureren', 'urenregistratie-app-gratis', 'online-urenregistratie'],
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

export function guideUrl(slug: string): string {
  return `/${slug}/`;
}

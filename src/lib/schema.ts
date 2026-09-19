import { PRO_PRICING, SITE } from './site';

export interface FaqEntry {
  question: string;
  answer: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export const ENTITY_IDS = {
  organization: `${SITE.url}/#organization`,
  person: `${SITE.url}/over-uurwerk/#patrick`,
  website: `${SITE.url}/#website`,
  app: `${SITE.url}/#app`,
};

export function organizationSchema() {
  return {
    '@context': 'https://schema.org', '@type': 'Organization',
    '@id': ENTITY_IDS.organization, name: SITE.publisher, url: SITE.url,
    logo: `${SITE.url}/icon-512.png`, email: SITE.supportEmail,
    contactPoint: { '@type': 'ContactPoint', email: SITE.supportEmail, contactType: 'customer support', availableLanguage: ['nl', 'en'] },
  };
}

export function personSchema() {
  return {
    '@context': 'https://schema.org', '@type': 'Person', '@id': ENTITY_IDS.person,
    name: SITE.developer, url: `${SITE.url}/over-uurwerk/`,
  };
}

// All strings originate in our content, not visitor input.
export function plainText(value: string) {
  const entities: Record<string, string> = { '&rsquo;': '’', '&lsquo;': '‘', '&rdquo;': '”', '&ldquo;': '“', '&amp;': '&', '&nbsp;': ' ', '&euro;': '€', '&euml;': 'ë', '&eacute;': 'é', '&quot;': '"', '&#39;': "'" };
  return value.replace(/<[^>]*>/g, '').replace(/&(?:#\d+|#x[\da-f]+|[a-z]+);/gi, (entity) => {
    if (entities[entity]) return entities[entity];
    if (entity.startsWith('&#x')) return String.fromCodePoint(parseInt(entity.slice(3), 16));
    if (entity.startsWith('&#')) return String.fromCodePoint(parseInt(entity.slice(2), 10));
    return entity;
  });
}

export function serializeSchema(schema: object) {
  return JSON.stringify(schema).replace(/</g, '\\u003c');
}

export function softwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': ENTITY_IDS.app,
    name: SITE.fullName,
    operatingSystem: `iOS ${SITE.minimumIOS} of nieuwer`,
    applicationCategory: 'BusinessApplication',
    description: SITE.description,
    url: SITE.url,
    downloadUrl: SITE.appStoreUrl,
    installUrl: SITE.appStoreUrl,
    offers: [{
      '@type': 'Offer',
      name: 'Gratis urenregistratie',
      price: '0',
      priceCurrency: 'EUR',
      description:
        'Gratis te gebruiken voor urenregistratie, klanten, projecten en conceptfacturen. Uurwerk Pro is nodig om facturen te versturen.',
    }, ...[
      { name: 'Uurwerk Pro per maand', price: PRO_PRICING.monthly, duration: 'P1M' },
      { name: 'Uurwerk Pro per jaar', price: PRO_PRICING.yearly, duration: 'P1Y' },
    ].map((plan) => ({
      '@type': 'Offer',
      name: plan.name,
      url: `${SITE.url}/urenregistratie-app-gratis/`,
      price: plan.price.toFixed(2),
      priceCurrency: 'EUR',
      description: 'Betaald abonnement voor facturen versturen vanuit Uurwerk.',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: plan.price.toFixed(2),
        priceCurrency: 'EUR',
        billingDuration: plan.duration,
      },
    }))],
    author: {
      '@type': 'Person',
      '@id': ENTITY_IDS.person,
      name: SITE.developer,
    },
    publisher: {
      '@type': 'Organization',
      '@id': ENTITY_IDS.organization,
      name: SITE.publisher,
    },
    inLanguage: 'nl',
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': ENTITY_IDS.website,
    name: SITE.name,
    alternateName: 'Urenregistreren.com',
    url: SITE.url,
    inLanguage: 'nl',
    publisher: {
      '@type': 'Organization',
      '@id': ENTITY_IDS.organization,
      name: SITE.publisher,
    },
  };
}

export function faqSchema(entries: FaqEntry[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: entries.map((entry) => ({
      '@type': 'Question',
      name: plainText(entry.question),
      acceptedAnswer: {
        '@type': 'Answer',
        text: plainText(entry.answer),
      },
    })),
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: plainText(item.name),
      item: new URL(item.url, SITE.url).href,
    })),
  };
}

export function articleSchema(options: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${new URL(options.path, SITE.url).href}#article`,
    headline: plainText(options.title),
    description: options.description,
    inLanguage: 'nl',
    mainEntityOfPage: new URL(options.path, SITE.url).href,
    datePublished: options.datePublished,
    dateModified: options.dateModified,
    author: {
      '@type': 'Person',
      '@id': ENTITY_IDS.person,
      url: `${SITE.url}/over-uurwerk/`,
      name: SITE.developer,
    },
    publisher: {
      '@type': 'Organization',
      '@id': ENTITY_IDS.organization,
      name: SITE.publisher,
    },
    about: {
      '@type': 'SoftwareApplication',
      '@id': ENTITY_IDS.app,
      name: SITE.fullName,
      operatingSystem: 'iOS',
      applicationCategory: 'BusinessApplication',
      url: SITE.url,
    },
  };
}

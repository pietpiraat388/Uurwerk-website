import { SITE } from './site';

export interface FaqEntry {
  question: string;
  answer: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function softwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: SITE.fullName,
    operatingSystem: 'iOS',
    applicationCategory: 'BusinessApplication',
    description: SITE.description,
    url: SITE.url,
    downloadUrl: SITE.appStoreUrl,
    installUrl: SITE.appStoreUrl,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
      description:
        'Gratis te gebruiken voor urenregistratie, klanten, projecten en conceptfacturen. Uurwerk Pro is nodig om facturen te versturen.',
    },
    author: {
      '@type': 'Person',
      name: SITE.developer,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.publisher,
    },
    inLanguage: 'nl',
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.url,
    inLanguage: 'nl',
    publisher: {
      '@type': 'Organization',
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
      name: entry.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: entry.answer,
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
      name: item.name,
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
    headline: options.title,
    description: options.description,
    inLanguage: 'nl',
    mainEntityOfPage: new URL(options.path, SITE.url).href,
    datePublished: options.datePublished,
    dateModified: options.dateModified,
    author: {
      '@type': 'Person',
      name: SITE.developer,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.publisher,
    },
    about: {
      '@type': 'SoftwareApplication',
      name: SITE.fullName,
      operatingSystem: 'iOS',
      applicationCategory: 'BusinessApplication',
      url: SITE.appStoreUrl,
    },
  };
}

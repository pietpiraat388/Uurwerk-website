import { SITE } from '../../lib/site';

export const prerender = true;

export function GET() {
  return Response.json({
    name: SITE.name,
    full_name: SITE.fullName,
    description: SITE.description,
    url: `${SITE.url}/`,
    language: 'nl',
    platform: 'iPhone',
    minimum_ios: SITE.minimumIOS,
    developer: SITE.developer,
    app_store_url: SITE.appStoreUrl,
    support_email: SITE.supportEmail,
    facts_verified_on: SITE.factsChecked,
    about_url: `${SITE.url}/over-uurwerk/`,
    contact_url: `${SITE.url}/contact/`,
    service_url: `${SITE.url}/ai/service.json`,
    faq_url: `${SITE.url}/ai/faq.json`,
    guides_url: `${SITE.url}/llms.txt`,
  });
}

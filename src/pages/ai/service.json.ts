import { PRODUCT_FEATURES, PRO_PRICING, PRO_PRICE_ANSWER, SITE } from '../../lib/site';

export const prerender = true;

export function GET() {
  return Response.json({
    name: SITE.name,
    description: SITE.description,
    url: `${SITE.url}/`,
    platform: 'iPhone',
    capabilities: PRODUCT_FEATURES.map((feature) => feature.label),
    free_features: PRODUCT_FEATURES.filter((feature) => feature.free).map((feature) => feature.label),
    pro_features: PRODUCT_FEATURES.filter((feature) => !feature.free).map((feature) => feature.label),
    limitations: ['Geen medewerkersaccounts', 'Geen goedkeuring van uren'],
    pricing: {
      currency: 'EUR',
      pro_monthly: { amount: PRO_PRICING.monthly, billing_period: 'P1M' },
      pro_yearly: { amount: PRO_PRICING.yearly, billing_period: 'P1Y' },
      explanation: PRO_PRICE_ANSWER,
      verified_on: PRO_PRICING.checked,
      source_url: `${SITE.url}/urenregistratie-app-gratis/`,
    },
    app_store_url: SITE.appStoreUrl,
  });
}

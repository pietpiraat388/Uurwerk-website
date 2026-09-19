import { HOME_FAQ } from '../../lib/product-faq';
import { plainText } from '../../lib/schema';
import { SITE } from '../../lib/site';

export const prerender = true;

export function GET() {
  return Response.json({
    name: `${SITE.name}: veelgestelde vragen`,
    language: 'nl',
    source_url: `${SITE.url}/#faq`,
    faqs: HOME_FAQ.map((entry) => ({
      question: plainText(entry.question),
      answer: plainText(entry.answer),
    })),
  });
}

import type { FaqEntry } from './schema';
import { PRO_PRICE_ANSWER } from './site';

export const HOME_FAQ: FaqEntry[] = [
  { question: 'Wat kost Uurwerk Pro?', answer: PRO_PRICE_ANSWER },
  {
    question: 'Wat is Uurwerk?',
    answer:
      'Uurwerk is een Nederlandstalige urenregistratie app voor iPhone, gemaakt voor zzp&rsquo;ers, freelancers en kleine ondernemers. Je registreert uren met een timer of handmatig, koppelt ze aan klanten en projecten en maakt er facturen van.',
  },
  {
    question: 'Is Uurwerk gratis?',
    answer:
      'Ja. Urenregistratie, klanten, projecten en conceptfacturen zijn gratis te gebruiken. Alleen voor het versturen van facturen heb je Uurwerk Pro nodig. Lees meer op de pagina <a href="/urenregistratie-app-gratis/">gratis urenregistratie app</a>.',
  },
  {
    question: 'Hoe houd ik mijn uren bij als zzp&rsquo;er?',
    answer:
      'Registreer per werkdag welke uren je aan welke klant of welk project besteedt, inclusief een korte omschrijving. Dat kan met een timer terwijl je werkt, of achteraf met handmatige invoer. In de gids <a href="/urenregistratie-zzp/">urenregistratie voor zzp&rsquo;ers</a> lees je precies hoe je dit aanpakt.',
  },
  {
    question: 'Welke uren tellen mee voor het urencriterium?',
    answer:
      'Voor het urencriterium tellen alle uren mee die je aan je onderneming besteedt: declarabele uren, maar ook acquisitie, administratie en reistijd. De Belastingdienst bepaalt de exacte regels. In de gids over <a href="/urencriterium/">het urencriterium</a> leggen we het uit, met verwijzing naar de offici&euml;le bron.',
  },
  {
    question: 'Kan ik uren per klant en project bijhouden?',
    answer:
      'Ja. Je legt klanten en projecten vast met een eigen uurtarief en btw-tarief. Elke urenregel koppel je aan een klant en project, zodat je overzichten en facturen per klant kunt maken.',
  },
  {
    question: 'Kan ik facturen maken van mijn geregistreerde uren?',
    answer:
      'Ja. Je zet openstaande uren om in een conceptfactuur, controleert het voorbeeld en exporteert de factuur als PDF. Voor het versturen van facturen is Uurwerk Pro nodig.',
  },
  {
    question: 'Is Uurwerk geschikt voor mijn administratie richting de Belastingdienst?',
    answer:
      'Je legt per urenregel datum, klant, project, omschrijving en duur vast en bekijkt totalen per week of maand. Dat is een goede basis voor je administratie. Wat de Belastingdienst precies verwacht lees je in de gids <a href="/urenregistratie-belastingdienst/">urenregistratie voor de Belastingdienst</a>.',
  },
  {
    question: 'Op welke apparaten werkt Uurwerk?',
    answer:
      'Uurwerk is een iOS-app voor iPhone en vereist iOS 18.6 of nieuwer. De actuele vereisten vind je op de <a href="https://apps.apple.com/app/id6781654951" rel="noopener">App Store-pagina</a>.',
  },
];

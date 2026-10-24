import type { APIRoute } from 'astro';
import { loadProviders } from '../../lib/providers';
import { facetFields } from '../../lib/fields';
import { shareCard } from '../../lib/og';

/**
 * The card every page falls back to. It describes the register rather than any
 * one record, and it counts rather than claims — a number that grows with the
 * dataset says more about the work than an adjective would. The count is the
 * homepage's: the register, without the records beside it.
 */
export const GET: APIRoute = async () => {
  const providers = await loadProviders();

  const png = await shareCard({
    name: 'Find software',
    description: 'A directory of software to build websites and web apps. No scores, no rankings, no affiliate links.',
    facts: [`${providers.length} projects`, `${facetFields.length} filters`, 'Openly licensed'],
  });

  return new Response(png, { headers: { 'Content-Type': 'image/png' } });
};

import type { APIRoute } from 'astro';
import { credit, licenceUrl } from '../lib/seo';

/**
 * The published files described as a read-only API, so a tool-calling agent
 * can find them without scraping. Every path is a static file; nothing here
 * takes a query, and nothing ranks.
 */
export const GET: APIRoute = async ({ site }) => {
  const origin = site?.origin ?? '';
  const file = (summary: string, type: string, description: string) => ({
    get: {
      summary,
      description,
      responses: { '200': { description: summary, content: { [type]: {} } } },
    },
  });
  const id = {
    name: 'id',
    in: 'path',
    required: true,
    description: 'The record id, as in the record page address: /kirby/ is kirby.',
    schema: { type: 'string' },
  };
  const spec = {
    openapi: '3.1.0',
    info: {
      title: 'FindSoftware',
      version: '1',
      description: `A ratings-free dataset of software to build websites with. Attributes are recorded, never scored; an absent field means unknown. Credit: ${credit}.`,
      license: { name: 'CC BY 4.0', url: licenceUrl },
    },
    servers: [{ url: origin }],
    paths: {
      '/software.json': file(
        'Every record',
        'application/json',
        'Every facet definition and every record with its facet fields, in one file.',
      ),
      '/software.csv': file('Every record as one table', 'text/csv', 'The records of software.json as CSV.'),
      '/{id}.json': {
        ...file(
          'One record',
          'application/json',
          'Every field of one record, each source with the date it was read, and the prose.',
        ),
        parameters: [id],
      },
      '/{id}.md': {
        ...file(
          'One record as markdown',
          'text/markdown',
          'The record page as markdown, absent fields printed as unknown.',
        ),
        parameters: [id],
      },
      '/llms.txt': file('Index for language models', 'text/plain', 'Where everything is, one line each.'),
      '/llms-full.txt': file('The whole register as one document', 'text/plain', 'Every record as markdown.'),
      '/feed.xml': file(
        'Recently checked records',
        'application/atom+xml',
        'Records ordered by the date they were last checked.',
      ),
    },
  };
  return new Response(JSON.stringify(spec, null, 2), {
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });
};

import type { APIRoute } from 'astro';
import { loadGraph } from '../lib/graph-data';

/* One file every record page shares, so a reader's browser fetches the graph once and keeps it. */
export const GET: APIRoute = async () => {
  const { nodes, edges } = await loadGraph();
  return new Response(JSON.stringify({ nodes, edges }), { headers: { 'Content-Type': 'application/json' } });
};

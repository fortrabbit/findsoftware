/**
 * The usage band and usage place of every register record, once per build.
 * Only the register takes part: a record beside it, or a stub, is not measured.
 */
import { loadProviders } from './providers';
import { figuresOf, usageBands, usagePlaces } from './usage';
import { cached } from './dev-cache';

const records = async () =>
  (await loadProviders()).map((provider) => ({ id: provider.id, figures: figuresOf(provider.data) }));

/** Counted once until a record changes (see dev-cache.ts). */
export const loadBands: () => Promise<Map<string, number>> = cached(() => records().then(usageBands));

/** Each record's place among the scored records, 0 to just under 1, for momentum. */
export const loadUsagePlaces: () => Promise<Map<string, number>> = cached(() => records().then(usagePlaces));

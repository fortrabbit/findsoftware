/**
 * The usage band and usage place of every register record, once per build.
 * Only the register takes part: a record beside it, or a stub, is not measured.
 */
import { loadProviders } from './providers';
import { figuresOf, usageBands, usagePlaces } from './usage';

let builtBands: Promise<Map<string, number>> | undefined;
let builtPlaces: Promise<Map<string, number>> | undefined;

const records = async () =>
  (await loadProviders()).map((provider) => ({ id: provider.id, figures: figuresOf(provider.data) }));

/** `astro dev` reads afresh, so an edited record shows on the next request. */
export const loadBands = (): Promise<Map<string, number>> => {
  if (!import.meta.env.PROD) return records().then(usageBands);
  builtBands ??= records().then(usageBands);
  return builtBands;
};

/** Each record's place among the scored records, 0 to just under 1, for momentum. */
export const loadUsagePlaces = (): Promise<Map<string, number>> => {
  if (!import.meta.env.PROD) return records().then(usagePlaces);
  builtPlaces ??= records().then(usagePlaces);
  return builtPlaces;
};

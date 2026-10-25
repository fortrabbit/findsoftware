/**
 * The usage band of every register record, once per build. Only the register
 * takes part: a record beside it, or a stub, is not measured.
 */
import { loadProviders } from './providers';
import { figuresOf, usageBands } from './usage';

let built: Promise<Map<string, number>> | undefined;

const make = async (): Promise<Map<string, number>> => {
  const providers = await loadProviders();
  return usageBands(providers.map((provider) => ({ id: provider.id, figures: figuresOf(provider.data) })));
};

/** `astro dev` reads afresh, so an edited record shows on the next request. */
export const loadBands = (): Promise<Map<string, number>> => {
  if (!import.meta.env.PROD) return make();
  built ??= make();
  return built;
};

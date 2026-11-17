/**
 * A value computed from the whole collection, held until its inputs change.
 *
 * A build holds it for the whole run. `astro dev` holds it too, keyed on the
 * modification times of the content store and the momentum files: recomputing
 * the facet table, the graph and momentum on every request made each click take
 * two seconds, and keying on the files still shows an edited record on the next
 * request once Astro has written its store.
 */
import { statSync } from 'node:fs';

const inputs = [
  'node_modules/.astro/data-store.json',
  '.astro/data-store.json',
  'src/data/momentum.json',
  'src/data/momentum.yml',
];

const mtime = (file: string) => {
  try {
    return statSync(file).mtimeMs;
  } catch {
    return 0;
  }
};

/** Changes whenever a record, the momentum figures or the thresholds change. */
const version = () => inputs.map(mtime).join(':');

export const cached = <T>(make: () => Promise<T>): (() => Promise<T>) => {
  let held: Promise<T> | undefined;
  let heldFor = '';
  return () => {
    if (import.meta.env.PROD) return (held ??= make());
    const now = version();
    if (!held || heldFor !== now) {
      held = make();
      heldFor = now;
    }
    return held;
  };
};

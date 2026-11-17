/**
 * A value computed from the whole collection, held for a build, and in
 * `astro dev` until the content store or the momentum files change, so an
 * edited record shows on the next request. A failed computation is not held.
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
    const now = import.meta.env.PROD ? '' : version();
    if (!held || heldFor !== now) {
      const attempt = make().catch((error) => {
        if (held === attempt) held = undefined;
        throw error;
      });
      held = attempt;
      heldFor = now;
    }
    return held;
  };
};

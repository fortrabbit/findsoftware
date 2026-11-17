/**
 * The momentum verdict of every listed record, held until its inputs change (see dev-cache.ts): the measured
 * figures from src/data/momentum.json cut by the thresholds in
 * src/data/momentum.yml. A record that is out of the default view keeps its
 * page, stays in search and is on the full list at /all/.
 */
import { existsSync, readFileSync } from 'node:fs';
import { parse as parseYaml } from 'yaml';
import { isListed, loadSoftware } from './providers';
import { loadUsagePlaces } from './usage-data';
import { measurable, momentumOf, type MomentumFigures, type Thresholds, type Verdict } from './momentum';
import { cached } from './dev-cache';

const figuresFile = 'src/data/momentum.json';
const thresholdsFile = 'src/data/momentum.yml';

const make = async (): Promise<Map<string, Verdict>> => {
  const figures = (existsSync(figuresFile) ? JSON.parse(readFileSync(figuresFile, 'utf8')) : {}) as Record<
    string,
    MomentumFigures
  >;
  const thresholds = parseYaml(readFileSync(thresholdsFile, 'utf8')) as Thresholds;
  const places = await loadUsagePlaces();
  const verdicts = new Map<string, Verdict>();
  /*
   * A record with nothing to measure (no GitHub repository, npm or Packagist
   * package) is judged on what it has: a release within the window, then wide
   * use. Dated as of the newest measurement, so the cut does not move with the
   * build date.
   */
  const today = Object.values(figures).reduce((newest, entry) => (entry.checkedAt > newest ? entry.checkedAt : newest), '');
  for (const entry of (await loadSoftware()).filter(isListed)) {
    const held = Object.hasOwn(figures, entry.id) ? figures[entry.id] : undefined;
    const own = held ?? (today && !measurable(entry.data as never) ? { checkedAt: today } : undefined);
    verdicts.set(entry.id, momentumOf(own, entry.data, places.get(entry.id), thresholds));
  }
  return verdicts;
};

/** Cut once until a record, a figure or a threshold changes (see dev-cache.ts). */
export const loadMomentum: () => Promise<Map<string, Verdict>> = cached(make);

/** Whether a record is in the default view. A record the map does not hold is not listed, so it is not shown either. */
export const inDefaultView = (verdicts: Map<string, Verdict>, id: string) => verdicts.get(id)?.shown ?? false;

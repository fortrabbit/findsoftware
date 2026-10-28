/**
 * The momentum verdict of every listed record, once per build: the measured
 * figures from src/data/momentum.json cut by the thresholds in
 * src/data/momentum.yml. A record that is out of the default view keeps its
 * page, stays in search and shows under "Show all".
 */
import { existsSync, readFileSync } from 'node:fs';
import { parse as parseYaml } from 'yaml';
import { isListed, loadSoftware } from './providers';
import { loadBands } from './usage-data';
import { momentumOf, type MomentumFigures, type Thresholds, type Verdict } from './momentum';

const figuresFile = 'src/data/momentum.json';
const thresholdsFile = 'src/data/momentum.yml';

let built: Promise<Map<string, Verdict>> | undefined;

const make = async (): Promise<Map<string, Verdict>> => {
  const figures = (existsSync(figuresFile) ? JSON.parse(readFileSync(figuresFile, 'utf8')) : {}) as Record<
    string,
    MomentumFigures
  >;
  const thresholds = parseYaml(readFileSync(thresholdsFile, 'utf8')) as Thresholds;
  const bands = await loadBands();
  const verdicts = new Map<string, Verdict>();
  for (const entry of (await loadSoftware()).filter(isListed)) {
    verdicts.set(entry.id, momentumOf(figures[entry.id], entry.data, bands.get(entry.id), thresholds));
  }
  return verdicts;
};

/** `astro dev` reads afresh, so a moved threshold shows on the next request. */
export const loadMomentum = (): Promise<Map<string, Verdict>> => {
  if (!import.meta.env.PROD) return make();
  built ??= make();
  return built;
};

/** Whether a record is in the default view. A record the map does not hold is not listed, so it is not shown either. */
export const inDefaultView = (verdicts: Map<string, Verdict>, id: string) => verdicts.get(id)?.shown ?? false;

/**
 * Momentum: whether a record is in the default view. Relevance today decides;
 * long-term use (the usage band) keeps a record in when its activity is flat.
 * A yes or a no, never a score and never an order: lists stay alphabetical.
 *
 * The figures are measured by scripts/momentum.mjs into src/data/momentum.json;
 * the thresholds are numbers in src/data/momentum.yml, so moving them re-cuts
 * the view without measuring again.
 *
 * Pure, so `node --test` can hold it.
 */

/** What scripts/momentum.mjs measured for one record, each figure absent when its source had no answer. */
export interface MomentumFigures {
  checkedAt: string;
  /** Last push to the default branch, as GitHub reports it. */
  pushedAt?: string;
  /** Commits to the default branch in the last 13 weeks, the last 26, and the 26 before those. */
  commits13?: number;
  commits26?: number;
  commitsPrior26?: number;
  /** npm downloads in the same 28 days, this year and a year before. */
  npm28?: number;
  npm28YearAgo?: number;
  /** Packagist's daily average over the last full month, and over the same month a year before. */
  packagistDaily?: number;
  packagistDailyYearAgo?: number;
}

export interface Thresholds {
  /** A release, pre-release or push within this many months, or nothing else counts. */
  activeMonths: number;
  /** Commits in the last 13 weeks, and the last 26 weeks against the 26 before, as a ratio. */
  commits: { last13Weeks: number; trend: number };
  /** Growth against a year ago, as a fraction. Today's figure must reach the floor, so 10 to 20 downloads is no growth; a year ago may be anything, so a young tool counts. */
  downloads: { growth: number; npm28Floor: number; packagistDailyFloor: number };
  /** A usage band at or above this keeps an active record in on its own. Absent turns it off. */
  popularityBand?: number;
}

export type Verdict =
  | { shown: true; by: 'unmeasured' | 'activity' | 'downloads' | 'popularity' }
  | { shown: false; why: 'inactive' | 'flat' };

const monthsBefore = (day: string, months: number) => {
  const date = new Date(`${day}T00:00:00Z`);
  date.setUTCMonth(date.getUTCMonth() - months);
  return date.toISOString().slice(0, 10);
};

const isoDay = (value: unknown) =>
  value instanceof Date ? value.toISOString().slice(0, 10) : typeof value === 'string' ? value.slice(0, 10) : undefined;

const grew = (now: number | undefined, then: number | undefined, floor: number, growth: number) =>
  now !== undefined && now >= floor && now >= (then ?? 0) * (1 + growth);

/**
 * The verdict for one record. A record nobody has measured yet is shown: a new
 * record is not hidden before it is measured.
 */
export function momentumOf(
  figures: MomentumFigures | undefined,
  record: { latestReleaseDate?: unknown; latestPrereleaseDate?: unknown },
  band: number | undefined,
  t: Thresholds,
): Verdict {
  if (!figures) return { shown: true, by: 'unmeasured' };

  const since = monthsBefore(figures.checkedAt, t.activeMonths);
  const active = [record.latestReleaseDate, record.latestPrereleaseDate, figures.pushedAt]
    .map(isoDay)
    .some((day) => day !== undefined && day >= since);
  if (!active) return { shown: false, why: 'inactive' };

  const { commits13, commits26, commitsPrior26 } = figures;
  if (commits13 !== undefined && commits26 !== undefined && commitsPrior26 !== undefined) {
    const rising = commitsPrior26 === 0 ? commits26 > 0 : commits26 / commitsPrior26 >= t.commits.trend;
    if (commits13 >= t.commits.last13Weeks && rising) return { shown: true, by: 'activity' };
  }

  const d = t.downloads;
  if (
    grew(figures.npm28, figures.npm28YearAgo, d.npm28Floor, d.growth) ||
    grew(figures.packagistDaily, figures.packagistDailyYearAgo, d.packagistDailyFloor, d.growth)
  )
    return { shown: true, by: 'downloads' };

  if (t.popularityBand !== undefined && band !== undefined && band >= t.popularityBand)
    return { shown: true, by: 'popularity' };

  return { shown: false, why: 'flat' };
}

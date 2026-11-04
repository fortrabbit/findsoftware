/**
 * The usage band: 1 to 5 for how much a software is used, from the adoption
 * figures it holds. It measures use, not quality, so it is the one measure
 * the site orders by, and it appears only on /usage/ and as the size of a
 * graph dot.
 *
 * Pure, so `node --test` can hold it: the caller hands in each record's
 * figures and gets a band back for every record that holds one.
 */

/** The record fields a band is built from. Dependents and downloads count use; pluginCount does not. */
export const usageFields = [
  'githubStargazers',
  'contributors',
  'npmWeeklyDownloads',
  'packagistDownloads',
  'ecosystemsMonthlyDownloads',
  'httpArchiveSites',
  'wordpressActiveInstalls',
  'dependentRepos',
  'dependentPackages',
] as const;

export type Figures = Partial<Record<(typeof usageFields)[number], number>>;

/**
 * A record's figures as the band reads them. Packagist's monthly count stands
 * in for the total wherever a record has one, so both are one figure.
 */
export function figuresOf(data: Record<string, unknown>): Figures {
  const figures: Figures = {};
  const value = (field: string) => {
    const held = data[field];
    return typeof held === 'number' && Number.isFinite(held) && held >= 0 ? held : undefined;
  };
  for (const field of usageFields) {
    if (field === 'packagistDownloads') {
      const held = value('packagistMonthlyDownloads') ?? value('packagistDownloads');
      if (held !== undefined) figures[field] = held;
      continue;
    }
    const held = value(field);
    if (held !== undefined) figures[field] = held;
  }
  return figures;
}

/** Share of the values below `value`, a tie counting half: a figure's place among the records that hold it. */
function percentile(sorted: number[], value: number): number {
  const below = indexAfter(sorted, (held) => held < value);
  const upTo = indexAfter(sorted, (held) => held <= value);
  return (below + (upTo - below) / 2) / sorted.length;
}

/** The first index whose value fails `before`, in an ascending array. */
function indexAfter(sorted: number[], before: (held: number) => boolean): number {
  let low = 0;
  let high = sorted.length;
  while (low < high) {
    const mid = (low + high) >> 1;
    if (before(sorted[mid]!)) low = mid + 1;
    else high = mid;
  }
  return low;
}

/**
 * The band of every record that holds at least one figure, keyed by id. Each
 * figure places a record at its percentile among the records holding that
 * figure; a record's score is the mean of those places; the scores cut into
 * five bands of equal size. Records holding no figure get no band, and a
 * record never counts a figure it lacks.
 */
export function usageBands(records: { id: string; figures: Figures }[]): Map<string, number> {
  return new Map(
    [...usagePlaces(records)].map(([id, place]) => [id, Math.min(5, Math.floor(place * 5) + 1)] as const),
  );
}

/**
 * Each record's place among the scored records, 0 for the least used and just
 * under 1 for the most used: the share of records scoring below it. The bands
 * are this place cut into fifths; momentum reads it directly.
 */
export function usagePlaces(records: { id: string; figures: Figures }[]): Map<string, number> {
  const held = new Map<string, number[]>();
  for (const { figures } of records)
    for (const [field, value] of Object.entries(figures)) held.set(field, [...(held.get(field) ?? []), value!]);
  for (const values of held.values()) values.sort((a, b) => a - b);

  const scored: { id: string; score: number }[] = [];
  for (const { id, figures } of records) {
    const places = Object.entries(figures).map(([field, value]) => percentile(held.get(field)!, value!));
    if (places.length) scored.push({ id, score: places.reduce((sum, place) => sum + place, 0) / places.length });
  }

  const scores = scored.map((entry) => entry.score).sort((a, b) => a - b);
  return new Map(scored.map(({ id, score }) => [id, percentile(scores, score)] as const));
}

/**
 * The radius multiplier for a graph dot: a band of 3 is the default size,
 * band 1 is smaller and band 5 larger. A record without a band keeps the
 * default, so an unmeasured record never reads as a small one.
 */
export function dotScale(band?: number): number {
  return band === undefined ? 1 : 0.6 + 0.2 * (band - 1);
}

import { soften } from './seo.ts';

/**
 * The questions under a list page, and the one answer the register gives to
 * every page alike.
 *
 * Answers are written, not generated: a count answers nothing a reader asked,
 * and a sentence assembled from counts is the thin content this dataset exists
 * to correct. A facet's note may carry questions for every value of it, with
 * `{label}` standing in for the value; a value's note carries its own.
 */

export type Question = { q: string; a: string };

/*
 * The phrase a "best" question is asked about, where one reads well for every
 * value of a facet. Elsewhere the question falls back to "these providers",
 * and a note may override the phrase with `topic`.
 */
const topics: Record<string, (label: string) => string> = {
  languages: (label) => `web software written in ${label}`,
  runtimes: (label) => `web software that runs on ${label}`,
  categories: (label) => soften(label).replace(/s$/, ''),
  databases: (label) => `web software for ${label}`,
};

export const topicOf = (facet: string, label: string, override?: string) => override ?? topics[facet]?.(label.trim());

/*
 * The same position in different words. One answer repeated on every list page
 * reads as boilerplate to a person and to a crawler alike; the position does
 * not change, so only the wording rotates.
 */
const bestAnswers = [
  "We don't know. A portfolio, a shop and a documentation site need different things from their software, and so does a team of one against an agency. Nobody pays to be listed here and the order is alphabetical.",
  "No idea. We list software, we don't rate it. Open the records that look close and compare them side by side.",
  "We can't tell from here. What suits an editor-heavy marketing site can be wrong for a static documentation site. The list is alphabetical and nobody paid for a place on it.",
];

/* A stable pick per page, so a rebuild does not reword a page nobody edited. */
const pick = (seed: string) => [...seed].reduce((sum, char) => (sum * 31 + char.charCodeAt(0)) % 9973, 7);

/**
 * Asked on every list page, because it is what people type. The answer holds
 * the same position on each: nothing here is ranked, and "best" depends on the
 * reader.
 */
export const best = (topic: string | undefined, seed = topic ?? ''): Question => ({
  q: topic ? `What is the best ${topic}?` : 'Which of these is best?',
  a: bestAnswers[pick(seed) % bestAnswers.length]!,
});

/** The value's own questions first, then the facet's, then the one every page asks. */
export const questionsFor = (
  label: string,
  topic: string | undefined,
  facetQuestions: Question[] = [],
  valueQuestions: Question[] = [],
): Question[] => [
  ...valueQuestions,
  ...facetQuestions.map(({ q, a }) => ({ q: fill(q, label), a: fill(a, label) })),
  best(topic, `${topic ?? ''}${label}`),
];

const fill = (text: string, label: string) => text.replaceAll('{label}', label.trim());

const link = /\[([^\]]+)\]\(([^)\s]+)\)/g;

const escape = (text: string) =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** An answer as HTML. Links are the only markup an answer may carry. */
export const answerHtml = (answer: string) =>
  escape(answer).replace(link, (_, text: string, href: string) => `<a href="${href}">${text}</a>`);

/** An answer as plain text, for the schema and anywhere a link cannot follow. */
export const answerText = (answer: string) => answer.replace(link, '$1');

/** The same questions as structured data, from the same strings the page shows. */
export const faqSchema = (questions: Question[]) => ({
  '@type': 'FAQPage',
  mainEntity: questions.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: answerText(a) },
  })),
});

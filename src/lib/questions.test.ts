import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { answerHtml, answerText, best, faqSchema, questionsFor, topicOf } from './questions.ts';

describe('topicOf', () => {
  it('phrases a value by its facet', () => {
    assert.equal(topicOf('languages', 'PHP'), 'web software written in PHP');
    assert.equal(topicOf('runtimes', 'Node.js'), 'web software that runs on Node.js');
  });

  it('lower-cases a sentence-case label and keeps one with capitals of its own', () => {
    assert.equal(topicOf('categories', 'Web frameworks'), 'web framework');
    assert.equal(topicOf('categories', 'APIs and backends'), 'APIs and backend');
  });

  it('prefers the note over the pattern', () => {
    assert.equal(topicOf('categories', 'Site and docs generators', 'static site generator'), 'static site generator');
  });

  it('has no phrase for a facet that reads badly as one', () => {
    assert.equal(topicOf('license', 'MIT'), undefined);
    assert.equal(best(undefined).q, 'Which of these is best?');
  });
});

describe('best', () => {
  it('words the answer the same way for the same page on every build', () => {
    assert.equal(best('web software written in PHP').a, best('web software written in PHP').a);
  });

  it('words it differently across pages', () => {
    const topics = ['Kirby', 'WordPress', 'PHP', 'Node.js', 'Rust', 'Go', 'Astro', 'Laravel'];
    const answers = new Set(topics.map((topic) => best(topic).a));
    assert.ok(answers.size > 1);
  });
});

describe('questionsFor', () => {
  it('puts the value first, the facet next and the best question last', () => {
    const questions = questionsFor(
      'Kirby',
      'web software written in PHP',
      [{ q: 'Which database does {label} need?', a: '{label} stores content in files.' }],
      [{ q: 'Is Kirby a CMS?', a: 'Yes.' }],
    );

    assert.deepEqual(
      questions.map(({ q }) => q),
      ['Is Kirby a CMS?', 'Which database does Kirby need?', 'What is the best web software written in PHP?'],
    );
    assert.equal(questions[1]!.a, 'Kirby stores content in files.');
  });
});

describe('answers', () => {
  const answer = 'See the [guide](/guide/) & <this>.';

  it('renders links and escapes everything else', () => {
    assert.equal(answerHtml(answer), 'See the <a href="/guide/">guide</a> &amp; &lt;this&gt;.');
  });

  it('keeps the link text and drops the address in plain text', () => {
    assert.equal(answerText(answer), 'See the guide & <this>.');
  });

  it('writes the schema from the same strings', () => {
    const schema = faqSchema([{ q: 'Why?', a: answer }]);
    assert.equal(schema['@type'], 'FAQPage');
    assert.deepEqual(schema.mainEntity[0], {
      '@type': 'Question',
      name: 'Why?',
      acceptedAnswer: { '@type': 'Answer', text: 'See the guide & <this>.' },
    });
  });
});

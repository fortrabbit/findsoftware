import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { changedFields, isConfirmation, isRecord, isSelfMerging, withoutDates } from './confirmation.ts';

const record = [
  '---',
  'id: wordpress',
  'name: WordPress',
  'firstRelease: 2003',
  'status: active',
  'checkedAt: 2026-08-01',
  'sources:',
  "  - { field: firstRelease, url: 'https://wordpress.org/about/', checkedAt: 2026-07-31 }",
  "  - { field: languages, url: 'https://wordpress.org/documentation/', checkedAt: 2026-08-01 }",
  '---',
  '',
  'WordPress was first released in 2003.',
].join('\n');

describe('a confirmation', () => {
  it('is a change to checkedAt dates and nothing else', () => {
    const after = record
      .replace('checkedAt: 2026-08-01\n', 'checkedAt: 2026-09-08\n')
      .replace('2026-07-31', '2026-09-08');
    assert.equal(isConfirmation(record, after), true);
  });

  it('includes setting a checkedAt where there was none', () => {
    const before = record.replace('checkedAt: 2026-08-01\n', '');
    assert.equal(isConfirmation(before, record), true);
  });

  it('is not a changed value, even with the dates bumped', () => {
    const after = record.replace('firstRelease: 2003', 'firstRelease: 2004').replace('2026-07-31', '2026-09-08');
    assert.equal(isConfirmation(record, after), false);
  });

  it('is not a status change', () => {
    assert.equal(isConfirmation(record, record.replace('status: active', 'status: discontinued')), false);
  });

  it('is not a moved source', () => {
    assert.equal(isConfirmation(record, record.replace('/about/', '/history/')), false);
  });

  it('is not a change to prose', () => {
    assert.equal(
      isConfirmation(record, record.replace('first released in 2003.', 'first released in 2003 in Berlin.')),
      false,
    );
  });

  it('is not an added source, which is research', () => {
    const after = record.replace(
      '---\n\nWordPress',
      "  - { field: license, url: 'https://wordpress.org/about/', checkedAt: 2026-09-08 }\n---\n\nWordPress",
    );
    assert.equal(isConfirmation(record, after), false);
  });
});

describe('a sourced change', () => {
  it('is a field the record cites, so the routine merges it', () => {
    const after = record.replace('firstRelease: 2003', 'firstRelease: 2004').replace('2026-07-31', '2026-09-08');
    assert.equal(isSelfMerging(record, after), true);
  });

  it('is not a field cited only by a source the run left untouched', () => {
    assert.equal(isSelfMerging(record, record.replace('firstRelease: 2003', 'firstRelease: 2004')), false);
  });

  it('reads a source entry that wraps over several lines', () => {
    const wrapped = record.replace(
      "  - { field: firstRelease, url: 'https://wordpress.org/about/', checkedAt: 2026-07-31 }",
      "  - {\n      field: firstRelease,\n      url: 'https://wordpress.org/about/',\n      checkedAt: 2026-07-31,\n    }",
    );
    const after = wrapped.replace('firstRelease: 2003', 'firstRelease: 2004').replace('2026-07-31', '2026-09-08');
    assert.equal(isSelfMerging(wrapped, after), true);
    assert.equal(isSelfMerging(wrapped, wrapped.replace('firstRelease: 2003', 'firstRelease: 2004')), false);
  });

  it('is not a field nothing cites', () => {
    const after = record.replace('name: WordPress', 'name: WordPress Core');
    assert.equal(isSelfMerging(record, after), false);
  });

  it('is a status change the record cites, which ships without a person', () => {
    const after = record
      .replace('status: active', 'status: discontinued')
      .replace(
        '---\n\nWordPress',
        "  - { field: status, url: 'https://wordpress.org/news/', checkedAt: 2026-09-08 }\n---\n\nWordPress",
      );
    assert.equal(isSelfMerging(record, after), true);
  });

  it('is not a status change nothing cites', () => {
    assert.equal(isSelfMerging(record, record.replace('status: active', 'status: discontinued')), false);
  });

  it('is never the record identity, however well cited', () => {
    const after = record
      .replace('name: WordPress', 'name: WordPress Core')
      .replace(
        '---\n\nWordPress',
        "  - { field: name, url: 'https://wordpress.org/about/', checkedAt: 2026-09-08 }\n---\n\nWordPress",
      );
    assert.equal(isSelfMerging(record, after), false);
  });

  it('is not a change to prose', () => {
    assert.equal(isSelfMerging(record, record.replace('first released in 2003.', 'first released in 2004.')), false);
  });

  it('covers a confirmation, which changes no field at all', () => {
    const after = record.replace('checkedAt: 2026-08-01', 'checkedAt: 2026-09-08');
    assert.equal(isSelfMerging(record, after), true);
  });

  it('takes a list as one field, so a changed language is a changed languages', () => {
    const listed = record.replace('firstRelease: 2003', 'languages:\n  - php\n  - javascript');
    const after = listed
      .replace('  - javascript', '  - typescript')
      .replace("documentation/', checkedAt: 2026-08-01", "documentation/', checkedAt: 2026-09-08");
    assert.deepEqual(changedFields(listed, after), ['languages']);
    assert.equal(isSelfMerging(listed, after), true);
  });
});

describe('the date blanking', () => {
  it('leaves everything but the dates', () => {
    assert.equal(withoutDates(record).includes('2026'), false);
    assert.equal(withoutDates(record).includes('firstRelease: 2003'), true);
  });
});

describe('what counts as a record', () => {
  it('is a markdown file directly under the software directory', () => {
    assert.equal(isRecord('src/content/software/wordpress.md'), true);
    assert.equal(isRecord('src/content/notes/categories.md'), false);
    assert.equal(isRecord('src/content/software/README.md'), true);
  });
});

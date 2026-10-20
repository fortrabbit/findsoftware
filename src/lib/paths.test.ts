import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { isHolding, recordMarkdownPath, recordPath } from './paths.ts';

const record = (id: string, status?: string) => ({ id, data: { status } });

describe('recordPath', () => {
  it('leaves a listed record in the root namespace', () => {
    assert.equal(recordPath(record('wordpress')), '/wordpress/');
    assert.equal(recordPath(record('wordpress', 'active')), '/wordpress/');
  });

  it('leaves every group beside the register at the root', () => {
    assert.equal(recordPath(record('flickr-api', 'discontinued')), '/flickr-api/');
    assert.equal(recordPath(record('contentful', 'hosted-service')), '/contentful/');
  });

  it('writes the markdown twin from the same rule', () => {
    assert.equal(recordMarkdownPath(record('wordpress')), '/wordpress.md');
    assert.equal(recordMarkdownPath(record('contentful', 'hosted-service')), '/contentful.md');
  });
});

describe('isHolding', () => {
  it('reads the dictionary, which has no holding status', () => {
    assert.equal(isHolding(record('wordpress')), false);
    assert.equal(isHolding(record('contentful', 'hosted-service')), false);
    assert.equal(isHolding(record('wordpress', 'unlisted')), false);
  });
});

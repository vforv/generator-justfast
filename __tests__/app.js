'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-justfast:app', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/app'));
  });

  it('creates files', () => {
    assert.file(['justfast/.env', 'justfast/.gitignore', 'justfast/.dockerignore']);
  });

  it('test readme', () => {
    assert.fileContent('justfast/README.md', `Justfast Documentation`);
    assert.fileContent('justfast/README.md', `This service use just for testing it will create ping date route which return date.`);
  });

  it('test package.json', () => {
    assert.fileContent('justfast/package.json', `Vladimir Djukic`);
    assert.fileContent('justfast/package.json', `This service use just for testing it will create ping date route which return date.`);
  });
});

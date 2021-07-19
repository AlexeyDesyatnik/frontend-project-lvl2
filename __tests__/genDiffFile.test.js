import { expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import genDiffFile from '../src/genDiffFile.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const expectedDiff = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;

test('Plain JSON file difference', () => {
  const path1 = getFixturePath('file1.json');
  const path2 = getFixturePath('file2.json');
  expect(genDiffFile(path1, path2)).toEqual(expectedDiff);
});

test('Plain YAML file difference', () => {
  const path1 = getFixturePath('file1.yaml');
  const path2 = getFixturePath('file2.yaml');
  expect(genDiffFile(path1, path2)).toEqual(expectedDiff);
});

test('Plain JSON and YAML file difference', () => {
  const path1 = getFixturePath('file1.json');
  const path2 = getFixturePath('file2.yaml');
  expect(genDiffFile(path1, path2)).toEqual(expectedDiff);
});

test('Plain YAML and JSON file difference', () => {
  const path1 = getFixturePath('file1.json');
  const path2 = getFixturePath('file2.yaml');
  expect(genDiffFile(path1, path2)).toEqual(expectedDiff);
});

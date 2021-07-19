import { readFileSync } from 'fs';
import path from 'path';
import genDiff from './genDiff.js';
import getConfigParser from './parsers.js';

// Generate diff of two JSON or YAML files
const genDiffFile = (filepathA, filepathB) => {
  const fullPathA = path.resolve(filepathA);
  const fullPathB = path.resolve(filepathB);

  const dataA = readFileSync(fullPathA, 'utf-8');
  const dataB = readFileSync(fullPathB, 'utf-8');

  const objectA = getConfigParser(filepathA)(dataA);
  const objectB = getConfigParser(filepathB)(dataB);

  return genDiff(objectA, objectB);
};

export default genDiffFile;

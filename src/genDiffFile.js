import { readFileSync } from 'fs';
import path from 'path';
import genDiff from './genDiff.js';

// Generate diff of two JSON files
const genDiffFile = (filepathA, filepathB) => {
  const fullPathA = path.resolve(filepathA);
  const fullPathB = path.resolve(filepathB);

  const dataA = readFileSync(fullPathA);
  const dataB = readFileSync(fullPathB);

  const jsonA = JSON.parse(dataA);
  const jsonB = JSON.parse(dataB);

  return genDiff(jsonA, jsonB);
};

export default genDiffFile;

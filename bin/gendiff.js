#!/usr/bin/env node

import { Command } from 'commander/esm.mjs';
import genDiffJSON from '../src/genDiffJSON.js';

const program = new Command();

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2, options) => {
    const diff = genDiffJSON(filepath1, filepath2);
    console.log(diff);
  });

program.parse(process.argv);
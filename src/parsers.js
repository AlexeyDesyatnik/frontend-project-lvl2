import path from 'path';
import yaml from 'js-yaml';

// Get JSON or YAML parser depending on the file extension
const getConfigParser = (filepath) => {
  const parsers = {
    '.json': JSON.parse,
    '.yml': yaml.load,
    '.yaml': yaml.load,
  };
  const ext = path.extname(filepath);
  return parsers[ext];
};

export default getConfigParser;

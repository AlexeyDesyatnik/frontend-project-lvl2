// Format diff line for given key:value pair and its status
// status could be '-', '+', ' '
const formatDiffLine = (key, value, status, indent = 2) => {
  const spaces = ' '.repeat(indent);
  return `${spaces}${status} ${key}: ${value}`;
};

// Generate diff for given key and its values in objects A and B
// (possibly undefined in either one or different)
// Returns an array of strings
const genKeyDiff = (key, valueA, valueB) => {
  // Case 1: key is missing in object B
  if (valueB === undefined) {
    return [formatDiffLine(key, valueA, '-')];
  }
  // Case 2: key is missing in object A
  if (valueA === undefined) {
    return [formatDiffLine(key, valueB, '+')];
  }
  // Case 3: values are different
  if (valueA !== valueB) {
    return [
      formatDiffLine(key, valueA, '-'),
      formatDiffLine(key, valueB, '+'),
    ];
  }
  // Case 4: values are equal
  return [formatDiffLine(key, valueA, ' ')];
};

// Generate diff between two objects,
// keys are sorted alphabetically
const genDiff = (objectA, objectB) => {
  const listOfAllKeys = Object.keys(objectA).concat(Object.keys(objectB));
  const allKeys = [...new Set(listOfAllKeys)].sort();
  const diff = ['{'];
  allKeys.forEach((key) => {
    const valueA = objectA[key];
    const valueB = objectB[key];
    const keyDiff = genKeyDiff(key, valueA, valueB);
    diff.push(...keyDiff);
  });
  diff.push('}');
  return diff.join('\n');
};

export default genDiff;

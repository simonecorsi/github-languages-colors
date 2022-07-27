import { writeFile } from 'node:fs/promises';
import { createWriteStream, readFile } from 'node:fs';
import crypto from 'node:crypto';
import yaml from 'yaml';
import slug from 'slug';

function checksum(str) {
  return crypto.createHash('md5').update(str).digest('hex');
}

const res = await fetch(
  'https://raw.githubusercontent.com/github/linguist/master/lib/linguist/languages.yml'
);

const yml = await res.text();

const sum = checksum(yml);
let oldSum;
try {
  oldSum = await readFile('build/checksum.txt', 'utf-8');
} catch {}

if (sum === oldSum) {
  console.log('Already up to date!');
  process.exit(0);
}

await writeFile('build/checksum.txt', sum);

const result = yaml.parse(yml);

let parsed = new Map();

const cssColors = createWriteStream('src/gh-colors.css');
const cssBgs = createWriteStream('src/gh-backgrounds.css');
const cssVars = createWriteStream('src/gh-variables.css');

cssVars.write(':root {\n');

for (const [lang, meta] of Object.entries(result)) {
  if (meta.type !== 'programming') {
    continue;
  }
  if (!meta.color) meta.color = '#000000';
  parsed.set(lang, meta.color);

  cssColors.write(
    `.ghColor-${slug(lang, { lower: false })} { color: "${meta.color}"; }\n`
  );
  cssBgs.write(
    `.ghBg-${slug(lang, { lower: false })} { background: "${meta.color}"; }\n`
  );
  cssVars.write(`--ghVar-${slug(lang, { lower: false })}: ${meta.color};\n`);
}

cssVars.write('}');

// close streams
cssVars.end();
cssColors.end();
cssBgs.end();

const json = JSON.stringify(Object.fromEntries(parsed), null, 2);

await Promise.all([
  writeFile('src/index.json', json),
  writeFile('src/index.mjs', `export default ${json}`),
  writeFile('src/index.cjs', `module.exports = ${json}`),
]);

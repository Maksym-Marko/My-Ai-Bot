// generate-structure.js
const fs = require('fs');
const path = require('path');

function generateTree(dir, prefix = '', isLast = true) {
  const items = fs.readdirSync(dir).filter(
    item => 
        item !== 'node_modules' &&
        item !== '.git' &&
        item !== '.gitignore' &&
        item !== 'mx-debug' &&
        item !== '.next' &&
        item !== '.env' &&
        item !== 'vendor'
    ).sort();
  const lines = [];

  items.forEach((item, index) => {
    const fullPath = path.join(dir, item);
    const isDir = fs.statSync(fullPath).isDirectory();
    const isLastItem = index === items.length - 1;

    const pointer = isLastItem ? '└── ' : '├── ';
    lines.push(prefix + pointer + item);

    if (isDir) {
      const nextPrefix = prefix + (isLastItem ? '    ' : '│   ');
      lines.push(...generateTree(fullPath, nextPrefix));
    }
  });

  return lines;
}

// Replace this with your actual plugin folder path
const rootDir = path.resolve('./');

const output = ['```bash', path.basename(rootDir) + '/', ...generateTree(rootDir), '```'].join('\n');

fs.writeFileSync('plugin-structure.md', output, 'utf-8');
console.log('Markdown structure saved to plugin-structure.md');

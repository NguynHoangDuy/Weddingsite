const fs = require('fs');
const path = require('path');

const rootDir = 'd:/2026/Weddingsite';
const dirs = ['AB 2535 10 TỜ', 'MÀU'];
const outputFile = path.join(rootDir, 'src/app/images.ts');

let imports = '';
let photosExports = `export const abImages = [];\nexport const mauImages = [];\n`;
let abArr = [];
let mauArr = [];

let counter = 1;

dirs.forEach(dir => {
  const dirPath = path.join(rootDir, dir);
  if (fs.existsSync(dirPath)) {
    const files = fs.readdirSync(dirPath).filter(f => f.toLowerCase().endsWith('.jpg') || f.toLowerCase().endsWith('.png'));
    files.forEach(file => {
      const varName = `img_${counter++}`;
      imports += `import ${varName} from '../../${dir}/${file}';\n`;
      if (dir === 'AB 2535 10 TỜ') {
        abArr.push(`{ id: ${counter}, url: ${varName}, caption: '${file}' }`);
      } else {
        mauArr.push(`{ id: ${counter}, url: ${varName}, caption: '${file}' }`);
      }
    });
  }
});

const fileContent = `${imports}\nexport const abImages = [\n  ${abArr.join(',\n  ')}\n];\n\nexport const mauImages = [\n  ${mauArr.join(',\n  ')}\n];\n`;

fs.writeFileSync(outputFile, fileContent);
console.log('Generated ' + outputFile);

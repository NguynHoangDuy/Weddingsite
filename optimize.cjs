const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const rootDir = __dirname;
const dirs = [
  { name: 'AB 2535 10 TỜ', prefix: 'ab' },
  { name: 'MÀU', prefix: 'mau' }
];

const outDir = path.join(rootDir, 'src/assets/optimized');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function processImages() {
  let imports = '';
  let abArr = [];
  let mauArr = [];
  let globalId = 1;

  for (const dirObj of dirs) {
    const dirPath = path.join(rootDir, dirObj.name);
    if (!fs.existsSync(dirPath)) continue;

    const files = fs.readdirSync(dirPath).filter(f => /.(jpg|jpeg|png)$/i.test(f));
    let counter = 1;

    const subOutDir = path.join(outDir, dirObj.prefix);
    if (!fs.existsSync(subOutDir)) {
      fs.mkdirSync(subOutDir, { recursive: true });
    }

    for (const file of files) {
      const newName = `${dirObj.prefix}-${counter}.webp`;
      const inPath = path.join(dirPath, file);
      const outPath = path.join(subOutDir, newName);

      console.log(`Optimizing ${file} -> ${newName}...`);
      await sharp(inPath)
        .resize({ width: 1920, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(outPath);

      const varName = `${dirObj.prefix}_${counter}`;
      imports += `import ${varName} from '../assets/optimized/${dirObj.prefix}/${newName}';\n`;
      
      const entry = `{ id: ${globalId++}, url: ${varName}, caption: '${dirObj.prefix}-${counter}' }`;
      if (dirObj.prefix === 'ab') abArr.push(entry);
      else mauArr.push(entry);

      counter++;
    }
  }

  const fileContent = `${imports}\nexport const abImages = [\n  ${abArr.join(',\n  ')}\n];\n\nexport const mauImages = [\n  ${mauArr.join(',\n  ')}\n];\n`;
  fs.writeFileSync(path.join(rootDir, 'src/app/images.ts'), fileContent);
  console.log('Optimized images generated and src/app/images.ts updated.');
}

processImages().catch(err => {
  console.error('Error during optimization:', err);
  process.exit(1);
});

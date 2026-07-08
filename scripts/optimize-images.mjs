import sharp from 'sharp';
import { readdir, stat, mkdir, rm, access } from 'fs/promises';
import { existsSync } from 'fs';
import { join, extname, basename, dirname, relative } from 'path';

const QUALITY = 80;
const MAX_WIDTH = 2400;
const SKIP_THRESHOLD = 100 * 1024; // skip optimization if already under 100KB

async function processDir(inputDir, outputDir, relativeBase) {
  const entries = await readdir(inputDir, { withFileTypes: true });
  
  for (const entry of entries) {
    const inputPath = join(inputDir, entry.name);
    const outputPath = join(outputDir, entry.name);
    
    if (entry.isDirectory()) {
      if (entry.name === 'optimized') continue;
      await mkdir(outputPath, { recursive: true });
      await processDir(inputPath, outputPath, join(relativeBase, entry.name));
      continue;
    }
    
    const ext = extname(entry.name).toLowerCase();
    if (!['.jpg', '.jpeg', '.png', '.webp', '.avif'].includes(ext)) {
      continue;
    }
    
    const stats = await stat(inputPath);
    const sizeMB = (stats.size / 1024 / 1024).toFixed(2);
    
    const webpName = basename(entry.name, ext) + '.webp';
    const webpPath = join(dirname(outputPath), webpName);
    const publicPath = `/images/optimized/${join(relativeBase, webpName).replace(/\\/g, '/')}`;
    
    try {
      const image = sharp(inputPath);
      const metadata = await image.metadata();
      
      let pipeline = image;
      if (metadata.width > MAX_WIDTH) {
        pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
      }
      
      await pipeline
        .webp({ quality: QUALITY })
        .toFile(webpPath);
      
      const outStats = await stat(webpPath);
      const outMB = (outStats.size / 1024 / 1024).toFixed(2);
      const reduction = ((1 - outStats.size / stats.size) * 100).toFixed(0);
      console.log(`  ${join(relativeBase, entry.name)}: ${sizeMB}MB -> ${outMB}MB (-${reduction}%)`);
    } catch (err) {
      console.error(`  Error processing ${entry.name}: ${err.message}`);
    }
  }
}

const inputDir = 'public/images';
const outputDir = 'public/images/optimized';

// Clean previous output
if (existsSync(outputDir)) {
  await rm(outputDir, { recursive: true });
}
await mkdir(outputDir, { recursive: true });

console.log('Optimizing images...');
console.log(`  Quality: ${QUALITY} | Max width: ${MAX_WIDTH}px | Format: WebP`);
console.log('');

await processDir(inputDir, outputDir, '');

console.log('');
console.log('Done! Optimized images are in public/images/optimized/');

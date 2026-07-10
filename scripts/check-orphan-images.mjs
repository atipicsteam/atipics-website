/**
 * Check for orphaned image references in Keystatic JSON files.
 * 
 * This script scans all JSON content files for image paths and verifies
 * that the referenced files actually exist in the public/ directory.
 * 
 * Usage: node scripts/check-orphan-images.mjs
 * 
 * If orphaned references are found, they are listed so you can fix them
 * before Keystatic Cloud tries to delete non-existent files (which causes
 * the GraphQL "A path was requested for deletion which does not exist" error).
 */
import { readFileSync, existsSync, readdirSync, statSync } from 'fs';
import { join, resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const contentDir = join(root, 'src', 'content');
const publicDir = join(root, 'public');

function findJsonFiles(dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      results.push(...findJsonFiles(fullPath));
    } else if (entry.endsWith('.json')) {
      results.push(fullPath);
    }
  }
  return results;
}

function extractImagePaths(obj, path = '') {
  const paths = [];
  if (obj === null || obj === undefined) return paths;
  if (typeof obj === 'string') {
    if (obj.startsWith('/images/') || obj.startsWith('images/')) {
      paths.push({ path, value: obj });
    }
  } else if (Array.isArray(obj)) {
    obj.forEach((item, i) => {
      paths.push(...extractImagePaths(item, `${path}[${i}]`));
    });
  } else if (typeof obj === 'object') {
    for (const [key, value] of Object.entries(obj)) {
      if (key === 'images' && Array.isArray(value)) {
        value.forEach((item, i) => {
          if (typeof item === 'string') {
            paths.push({ path: `${path}.${key}[${i}]`, value: item });
          }
        });
      } else if (key === 'bandeau_image' && typeof value === 'string' && value) {
        paths.push({ path: `${path}.${key}`, value: value });
      } else if (key === 'cover' && typeof value === 'string' && value) {
        paths.push({ path: `${path}.${key}`, value: value });
      } else if (key === 'image' && typeof value === 'string' && value) {
        paths.push({ path: `${path}.${key}`, value: value });
      } else if (key === 'src' && typeof value === 'string' && value) {
        paths.push({ path: `${path}.${key}`, value: value });
      } else {
        paths.push(...extractImagePaths(value, `${path}.${key}`));
      }
    }
  }
  return paths;
}

const jsonFiles = findJsonFiles(contentDir);
const orphans = [];

for (const file of jsonFiles) {
  const relPath = file.replace(root + '\\', '').replace(root + '/', '');
  let data;
  try {
    data = JSON.parse(readFileSync(file, 'utf-8'));
  } catch {
    continue;
  }
  const imageRefs = extractImagePaths(data);
  for (const ref of imageRefs) {
    const cleanPath = ref.value.replace(/^\//, '');
    const fullPath = join(publicDir, cleanPath);
    const fullPathWithImages = join(publicDir, 'images', cleanPath);
    if (!existsSync(fullPath) && !existsSync(fullPathWithImages)) {
      orphans.push({ file: relPath, field: ref.path, value: ref.value });
    }
  }
}

if (orphans.length === 0) {
  console.log('\n✅ No orphaned image references found. All clear!\n');
  process.exit(0);
} else {
  console.log(`\n❌ Found ${orphans.length} orphaned image reference(s):\n`);
  for (const o of orphans) {
    console.log(`  File:  ${o.file}`);
    console.log(`  Field: ${o.field}`);
    console.log(`  Path:  ${o.value}`);
    console.log('');
  }
  console.log('These references point to files that do not exist in public/.');
  console.log('Fix: remove the image path from the JSON or add the missing file.');
  console.log('If you skip this, Keystatic Cloud may throw a GraphQL deletion error.\n');
  process.exit(1);
}

import fs from 'fs';
import path from 'path';

const filesToMigrate = [
  'src/content/pages/agence-sections.json',
  'src/content/pages/savoir-faire-sections.json',
  'src/content/pages/village-sections.json',
];

for (const file of filesToMigrate) {
  const filePath = path.resolve(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    try {
      const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      if (data.sections && Array.isArray(data.sections)) {
        let modified = false;
        data.sections = data.sections.map(section => {
          if (section.paragraphs) {
            // Flatten the array of documents into a single document array
            section.content = section.paragraphs.flat();
            delete section.paragraphs;
            modified = true;
          }
          return section;
        });
        
        if (modified) {
          fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
          console.log(`Migrated ${file}`);
        } else {
          console.log(`No changes needed for ${file}`);
        }
      }
    } catch (e) {
      console.error(`Error migrating ${file}:`, e);
    }
  } else {
    console.warn(`File not found: ${file}`);
  }
}

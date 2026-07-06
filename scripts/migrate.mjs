import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const API_URL = "https://admin-demo.atipics.art/items";
const ASSETS_URL = "https://admin-demo.atipics.art/assets";

const CONTENT_DIR = path.resolve(__dirname, '../src/content');
const IMAGES_DIR = path.resolve(__dirname, '../public/images/directus');

// S'assurer que les dossiers existent
const ensureDir = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

ensureDir(CONTENT_DIR);
ensureDir(IMAGES_DIR);

const downloadImage = async (id, filename) => {
  if (!id) return null;
  const url = `${ASSETS_URL}/${id}`;
  const filepath = path.join(IMAGES_DIR, filename);
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Status ${res.status}`);
    const buffer = await res.arrayBuffer();
    fs.writeFileSync(filepath, Buffer.from(buffer));
    return `directus/${filename}`; // Return relative path for Keystatic/Astro
  } catch (err) {
    console.error(`Erreur de téléchargement d'image ${id}:`, err);
    return null;
  }
};

const writeJson = (folder, filename, data) => {
  const dir = path.join(CONTENT_DIR, folder);
  ensureDir(dir);
  fs.writeFileSync(path.join(dir, filename), JSON.stringify(data, null, 2), 'utf-8');
  console.log(`✅ Créé: ${folder}/${filename}`);
};

const fetchAndMigrate = async () => {
  console.log('--- Début de la migration depuis Directus ---');

  // 1. Paramètres
  try {
    const res = await fetch(`${API_URL}/parametres`);
    const json = await res.json();
    const data = Array.isArray(json.data) ? json.data[0] : json.data;
    if (data) {
      writeJson('parametres', 'index.json', {
        nom_site: data.nom_site || '',
        email: data.email || '',
        telephone: data.telephone || '',
        adresse: data.adresse || '',
        font: data.font || 'helvetica',
      });
    }
  } catch (e) { console.error('Erreur Paramètres', e); }

  // 2. Page Contact
  try {
    const res = await fetch(`${API_URL}/contact_page`);
    const json = await res.json();
    const data = Array.isArray(json.data) ? json.data[0] : json.data;
    if (data) writeJson('pages', 'contact.json', { rdv_texte: data.rdv_texte || '' });
  } catch (e) { console.error('Erreur Page Contact', e); }

  // 3. Page Agence
  try {
    const res = await fetch(`${API_URL}/agence_page`);
    const json = await res.json();
    const data = Array.isArray(json.data) ? json.data[0] : json.data;
    if (data) {
      // Télécharger l'image si présente
      let imgPath = null;
      if (data.bandeau_image) {
        imgPath = await downloadImage(data.bandeau_image, `agence-bandeau-${data.bandeau_image}.jpg`);
      }
      writeJson('pages', 'agence.json', {
        bandeau_image: imgPath,
        bandeau_label: data.bandeau_label || '',
        bandeau_titre: data.bandeau_titre || '',
        intro: data.intro || '',
        manifeste_label: data.manifeste_label || '',
        manifeste_titre: data.manifeste_titre || '',
        manifeste_p1: data.manifeste_p1 || '',
        manifeste_p2: data.manifeste_p2 || '',
        manifeste_p3: data.manifeste_p3 || '',
        reseaux_label: data.reseaux_label || '',
        reseaux_titre: data.reseaux_titre || '',
        reseaux_p1: data.reseaux_p1 || '',
        reseaux_p2: data.reseaux_p2 || '',
        reseaux_p3: data.reseaux_p3 || '',
        reseaux_p4: data.reseaux_p4 || '',
      });
    }
  } catch (e) { console.error('Erreur Page Agence', e); }

  // 4. Page Savoir Faire
  try {
    const res = await fetch(`${API_URL}/savoir_faire_page`);
    const json = await res.json();
    const data = Array.isArray(json.data) ? json.data[0] : json.data;
    if (data) {
      writeJson('pages', 'savoir-faire.json', {
        page_label: data.page_label || '',
        page_titre: data.page_titre || '',
        page_sous_titre: data.page_sous_titre || '',
        curation_label: data.curation_label || '',
        curation_titre: data.curation_titre || '',
        curation_intro: data.curation_intro || '',
        curation_p1: data.curation_p1 || '',
        curation_p2: data.curation_p2 || '',
        conciergerie_label: data.conciergerie_label || '',
        conciergerie_titre: data.conciergerie_titre || '',
        conciergerie_intro: data.conciergerie_intro || '',
        conciergerie_p1: data.conciergerie_p1 || '',
        conciergerie_p2: data.conciergerie_p2 || '',
        events_label: data.events_label || '',
        events_titre: data.events_titre || '',
        events_intro: data.events_intro || '',
        events_p1: data.events_p1 || '',
        events_p2: data.events_p2 || '',
        intendance_label: data.intendance_label || '',
        intendance_titre: data.intendance_titre || '',
        intendance_intro: data.intendance_intro || '',
        intendance_p1: data.intendance_p1 || '',
        intendance_p2: data.intendance_p2 || '',
        valorisation_label: data.valorisation_label || '',
        valorisation_titre: data.valorisation_titre || '',
        valorisation_intro: data.valorisation_intro || '',
        valorisation_p1: data.valorisation_p1 || '',
        valorisation_p2: data.valorisation_p2 || '',
        form_titre: data.form_titre || '',
        form_intro_1: data.form_intro_1 || '',
        form_intro_2: data.form_intro_2 || '',
      });
    }
  } catch (e) { console.error('Erreur Page Savoir Faire', e); }

  // 5. Page Village
  try {
    const res = await fetch(`${API_URL}/village_page`);
    const json = await res.json();
    const data = Array.isArray(json.data) ? json.data[0] : json.data;
    if (data) {
      let imgPath = null;
      if (data.bandeau_image) {
        imgPath = await downloadImage(data.bandeau_image, `village-bandeau-${data.bandeau_image}.jpg`);
      }
      writeJson('pages', 'village.json', {
        bandeau_image: imgPath,
        bandeau_label: data.bandeau_label || '',
        bandeau_titre: data.bandeau_titre || '',
        intro: data.intro || '',
        entrepot_label: data.entrepot_label || '',
        entrepot_titre: data.entrepot_titre || '',
        entrepot_p1: data.entrepot_p1 || '',
        entrepot_p2: data.entrepot_p2 || '',
        entrepot_p3: data.entrepot_p3 || '',
        studiodesign_label: data.studiodesign_label || '',
        studiodesign_titre: data.studiodesign_titre || '',
        studiodesign_p1: data.studiodesign_p1 || '',
        studiodesign_p2: data.studiodesign_p2 || '',
        studiodesign_p3: data.studiodesign_p3 || '',
        atelier_label: data.atelier_label || '',
        atelier_titre: data.atelier_titre || '',
        atelier_p1: data.atelier_p1 || '',
        atelier_p2: data.atelier_p2 || '',
        atelier_p3: data.atelier_p3 || '',
        form_intro: data.form_intro || '',
      });
    }
  } catch (e) { console.error('Erreur Page Village', e); }

  // 6. Navigation
  try {
    const resNav = await fetch(`${API_URL}/nav_principale?sort=sort`);
    const resSub = await fetch(`${API_URL}/nav_sub`);
    const jsonNav = await resNav.json();
    const jsonSub = await resSub.json();
    if (jsonNav.data) {
      jsonNav.data.forEach(nav => {
        const subs = (jsonSub.data || []).filter(s => {
          let parentId = s.parent;
          if (Array.isArray(s.parent)) parentId = s.parent[0];
          if (typeof s.parent === 'object' && s.parent !== null) parentId = s.parent.id;
          return String(parentId) === String(nav.id);
        }).map(s => ({ label: s.label, href: s.href }));
        writeJson('nav', `nav-${nav.id}.json`, {
          label: nav.label,
          href: nav.href,
          sort: nav.sort || 0,
          sub: subs
        });
      });
    }
  } catch (e) { console.error('Erreur Navigation', e); }

  console.log('--- Migration terminée ! ---');
};

fetchAndMigrate();

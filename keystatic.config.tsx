import { config, fields, collection, singleton } from '@keystatic/core';
import React from 'react';

// ─── Reusable option sets ───
const FONT_OPTIONS = [
  { label: 'Hériter du site', value: 'inherit' },
  { label: 'Helvetica', value: 'helvetica' },
  { label: 'Inter', value: 'inter' },
  { label: 'Playfair Display', value: 'playfair' },
  { label: 'Cormorant Garamond', value: 'cormorant' },
  { label: 'DM Sans', value: 'dm-sans' },
  { label: 'Josefin Sans', value: 'josefin' },
  { label: 'Manrope', value: 'manrope' },
  { label: 'EB Garamond', value: 'eb-garamond' },
];

const SIZE_OPTIONS = [
  { label: 'Hériter', value: 'inherit' },
  { label: 'XS — 0.75rem', value: 'xs' },
  { label: 'SM — 0.875rem', value: 'sm' },
  { label: 'Base — 1rem', value: 'base' },
  { label: 'MD — 1.125rem', value: 'md' },
  { label: 'LG — 1.25rem', value: 'lg' },
  { label: 'XL — 1.5rem', value: 'xl' },
  { label: '2XL — 2rem', value: '2xl' },
  { label: '3XL — 2.5rem', value: '3xl' },
  { label: '4XL — 3rem', value: '4xl' },
  { label: '5XL — 4rem', value: '5xl' },
  { label: '6XL — 5rem', value: '6xl' },
];

const STYLE_OPTIONS = [
  { label: 'Normal', value: 'normal' },
  { label: 'Gras', value: 'bold' },
  { label: 'Italique', value: 'italic' },
];

// ─── Reusable field factories ───
const colorField = (label: string, defaultValue = '') =>
  fields.text({ label, defaultValue, description: 'Code hex (ex: #ffffff). Laisser vide pour hériter.' });

const fontSelect = (label: string, defaultValue = 'inherit') =>
  fields.select({ label, options: FONT_OPTIONS, defaultValue });

const sizeSelect = (label: string, defaultValue = 'inherit') =>
  fields.select({ label, options: SIZE_OPTIONS, defaultValue });

const styleSelect = (label: string, defaultValue = 'normal') =>
  fields.select({ label, options: STYLE_OPTIONS, defaultValue });

const richDoc = (label: string) =>
  fields.document({
    label,
    formatting: {
      inlineMarks: { bold: true, italic: true },
      blockTypes: { blockquote: true },
      headingLevels: [2, 3, 4],
    },
  });

// ─── Per-element style group ───
const elementStyles = (prefix: string, labelName: string) => ({
  [`${prefix}_color`]: colorField(`Couleur ${labelName}`),
  [`${prefix}_font`]: fontSelect(`Police ${labelName}`),
  [`${prefix}_size`]: sizeSelect(`Taille ${labelName}`),
  [`${prefix}_style`]: styleSelect(`Style ${labelName}`),
});

export default config({
  storage: {
    kind: 'cloud',
  },
  cloud: {
    project: 'atipics/atipics-website',
  },
  ui: {
    brand: { 
      name: 'Atipics',
      mark: () => <img src="/favicon.svg" alt="Atipics" style={{ height: 24 }} />
    },
    navigation: {
      'Page d\'accueil': ['navigation', 'carousel', 'footer'],
      'Agence Atipics': ['agence_bandeau', 'agence_sections'],
      'Contenu Principal': ['projets', 'journal'],
      'Savoir Faire': ['savoir_faire_bandeau', 'savoir_faire_sections', 'savoir_faire_contact'],
      'Village': ['village_bandeau', 'village_sections', 'village_contact'],
      'Contact': ['contact_page'],
      'Configuration': ['parametres', 'theme'],
    }
  },
  collections: {
    projets: collection({
      label: 'Projets',
      slugField: 'title',
      path: 'src/content/projets/*',
      format: { data: 'json' },
      schema: {
        title: fields.slug({ name: { label: 'Titre du projet' } }),
        category: fields.text({ label: 'Catégorie' }),
        year: fields.text({ label: 'Année' }),
        description: richDoc('Description'),
        cover: fields.image({
          label: 'Image de couverture',
          directory: 'public/images/projets',
          publicPath: '/images/projets/',
        }),
        medias: fields.array(
          fields.object({
            type: fields.select({
              label: 'Type de média',
              options: [
                { label: 'Image', value: 'image' },
                { label: 'Vidéo', value: 'video' },
              ],
              defaultValue: 'image',
            }),
            src: fields.image({
              label: 'Fichier Média',
              directory: 'public/images/projets',
              publicPath: '/images/projets/',
            }),
            alt: fields.text({ label: 'Texte alternatif' }),
          }),
          { label: 'Médias du projet', itemLabel: props => props.fields.alt.value || 'Nouveau média' }
        ),
      },
    }),
    journal: collection({
      label: 'Journal',
      slugField: 'title',
      path: 'src/content/journal/*',
      format: { data: 'json' },
      schema: {
        title: fields.slug({ name: { label: 'Titre de l\'article' } }),
        date: fields.date({ label: 'Date' }),
        dateLabel: fields.text({ label: 'Label de la date (ex: 10 Avril 2026)' }),
        category: fields.text({ label: 'Catégorie' }),
        excerpt: richDoc('Extrait'),
        cover: fields.image({
          label: 'Image de couverture',
          directory: 'public/images/journal',
          publicPath: '/images/journal/',
        }),
      },
    }),
  },
  singletons: {
    navigation: singleton({
      label: 'Navigation',
      path: 'src/content/navigation/index',
      format: { data: 'json' },
      schema: {
        items: fields.array(
          fields.object({
            label: fields.text({ label: 'Label' }),
            href: fields.text({ label: 'Lien' }),
            sub: fields.array(
              fields.object({
                label: fields.text({ label: 'Label' }),
                href: fields.text({ label: 'Lien' }),
              }),
              { label: 'Sous-menus', itemLabel: props => props.fields.label.value || 'Nouveau sous-menu' }
            ),
          }),
          { label: 'Liens de navigation', itemLabel: props => props.fields.label.value || 'Nouveau lien' }
        ),
        text_color: fields.text({ label: 'Couleur du texte', defaultValue: '#888884', description: 'Couleur des liens de navigation' }),
        font: fields.select({
          label: 'Police de la navigation',
          description: 'Police indépendante du reste du site',
          options: [
            { label: 'Hériter du site', value: 'inherit' },
            { label: 'Helvetica', value: 'helvetica' },
            { label: 'Inter', value: 'inter' },
            { label: 'Playfair Display', value: 'playfair' },
            { label: 'Cormorant Garamond', value: 'cormorant' },
            { label: 'DM Sans', value: 'dm-sans' },
            { label: 'Josefin Sans', value: 'josefin' },
            { label: 'Manrope', value: 'manrope' },
            { label: 'EB Garamond', value: 'eb-garamond' },
          ],
          defaultValue: 'inherit',
        }),
        logo_style: fields.select({
          label: 'Style du logo',
          options: [
            { label: 'Normal', value: 'normal' },
            { label: 'Gras', value: 'bold' },
            { label: 'Italique', value: 'italic' },
          ],
          defaultValue: 'bold',
        }),
        links_style: fields.select({
          label: 'Style des liens principaux',
          options: [
            { label: 'Normal', value: 'normal' },
            { label: 'Gras', value: 'bold' },
            { label: 'Italique', value: 'italic' },
          ],
          defaultValue: 'normal',
        }),
        sublinks_style: fields.select({
          label: 'Style des sous-liens',
          options: [
            { label: 'Normal', value: 'normal' },
            { label: 'Gras', value: 'bold' },
            { label: 'Italique', value: 'italic' },
          ],
          defaultValue: 'normal',
        }),
      }
    }),
    parametres: singleton({
      label: 'Paramètres du site',
      path: 'src/content/parametres/index',
      format: { data: 'json' },
      schema: {
        nom_site: fields.text({ label: 'Nom du site' }),
        description_site: richDoc('Description du site'),
        email: fields.text({ label: 'Email' }),
        telephone: fields.text({ label: 'Téléphone' }),
        adresse: richDoc('Adresse'),
        font: fields.select({
          label: 'Police du site',
          options: [
            { label: 'Helvetica', value: 'helvetica' },
            { label: 'Inter', value: 'inter' },
            { label: 'Playfair Display', value: 'playfair' },
            { label: 'Cormorant Garamond', value: 'cormorant' },
            { label: 'DM Sans', value: 'dm-sans' },
            { label: 'Josefin Sans', value: 'josefin' },
            { label: 'Manrope', value: 'manrope' },
            { label: 'EB Garamond', value: 'eb-garamond' },
          ],
          defaultValue: 'helvetica',
        }),
      },
    }),
    agence_bandeau: singleton({
      label: 'Bandeau',
      path: 'src/content/pages/agence-bandeau',
      format: { data: 'json' },
      schema: {
        bandeau_image: fields.image({
          label: 'Image du bandeau',
          directory: 'public/images/pages',
          publicPath: '/images/pages/',
        }),
        bandeau_label: fields.text({ label: 'Label du bandeau' }),
        bandeau_titre: fields.text({ label: 'Titre du bandeau' }),
        intro: richDoc('Texte d\'introduction'),
        text_color: fields.text({ label: 'Couleur du texte (défaut)', defaultValue: '#ffffff', description: 'Couleur par défaut — peut être surchargée par élément' }),
        font: fontSelect('Police (défaut)', 'inherit'),
        intro_style: styleSelect('Style de l\'introduction', 'normal'),
        ...elementStyles('label', 'du label'),
        ...elementStyles('titre', 'du titre'),
      },
    }),
    agence_sections: singleton({
      label: 'Sections',
      path: 'src/content/pages/agence-sections',
      format: { data: 'json' },
      schema: {
        sections: fields.array(
          fields.object({
            label: fields.text({ label: 'Label' }),
            title: fields.text({ label: 'Titre' }),
            content: richDoc('Contenu'),
            images: fields.array(
              fields.image({ label: 'Image', directory: 'public/images/agence', publicPath: '/images/agence/' }),
              { label: 'Images', itemLabel: props => 'Image' }
            ),
            text_color: fields.text({ label: 'Couleur du texte (défaut)', defaultValue: '#1A1A18', description: 'Couleur par défaut — peut être surchargée par élément' }),
            font: fontSelect('Police (défaut)', 'inherit'),
            ...elementStyles('label', 'du label'),
            ...elementStyles('title', 'du titre'),
            ...elementStyles('content', 'du contenu'),
          }),
          { label: 'Sous-catégories', itemLabel: props => props.fields.title.value || props.fields.label.value || 'Nouvelle section' }
        ),
      },
    }),
    savoir_faire_bandeau: singleton({
      label: 'Bandeau',
      path: 'src/content/pages/savoir-faire-bandeau',
      format: { data: 'json' },
      schema: {
        page_label: fields.text({ label: 'Label de la page' }),
        page_titre: fields.text({ label: 'Titre de la page' }),
        page_sous_titre: fields.text({ label: 'Sous-titre' }),
        text_color: fields.text({ label: 'Couleur du texte (défaut)', defaultValue: '#1A1A18', description: 'Couleur par défaut — peut être surchargée par élément' }),
        font: fontSelect('Police (défaut)', 'inherit'),
        sous_titre_style: styleSelect('Style du sous-titre', 'normal'),
        ...elementStyles('label', 'du label'),
        ...elementStyles('titre', 'du titre'),
      },
    }),
    savoir_faire_sections: singleton({
      label: 'Sections',
      path: 'src/content/pages/savoir-faire-sections',
      format: { data: 'json' },
      schema: {
        sections: fields.array(
          fields.object({
            label: fields.text({ label: 'Label' }),
            title: fields.text({ label: 'Titre' }),
            intro: richDoc('Introduction'),
            content: richDoc('Contenu'),
            images: fields.array(
              fields.image({ label: 'Image', directory: 'public/images/savoir', publicPath: '/images/savoir/' }),
              { label: 'Images', itemLabel: props => 'Image' }
            ),
            text_color: fields.text({ label: 'Couleur du texte (défaut)', defaultValue: '#1A1A18', description: 'Couleur par défaut — peut être surchargée par élément' }),
            font: fontSelect('Police (défaut)', 'inherit'),
            ...elementStyles('label', 'du label'),
            ...elementStyles('title', 'du titre'),
            ...elementStyles('content', 'du contenu'),
          }),
          { label: 'Sous-catégories', itemLabel: props => props.fields.title.value || props.fields.label.value || 'Nouvelle section' }
        ),
      },
    }),
    village_bandeau: singleton({
      label: 'Bandeau',
      path: 'src/content/pages/village-bandeau',
      format: { data: 'json' },
      schema: {
        bandeau_image: fields.image({
          label: 'Image du bandeau',
          directory: 'public/images/pages',
          publicPath: '/images/pages/',
        }),
        bandeau_label: fields.text({ label: 'Label du bandeau' }),
        bandeau_titre: fields.text({ label: 'Titre du bandeau' }),
        intro: richDoc('Texte d\'introduction'),
        text_color: fields.text({ label: 'Couleur du texte (défaut)', defaultValue: '#ffffff', description: 'Couleur par défaut — peut être surchargée par élément' }),
        font: fontSelect('Police (défaut)', 'inherit'),
        intro_style: styleSelect('Style de l\'introduction', 'normal'),
        ...elementStyles('label', 'du label'),
        ...elementStyles('titre', 'du titre'),
      },
    }),
    village_sections: singleton({
      label: 'Sections',
      path: 'src/content/pages/village-sections',
      format: { data: 'json' },
      schema: {
        sections: fields.array(
          fields.object({
            label: fields.text({ label: 'Label' }),
            title: fields.text({ label: 'Titre' }),
            content: richDoc('Contenu'),
            images: fields.array(
              fields.image({ label: 'Image', directory: 'public/images/village', publicPath: '/images/village/' }),
              { label: 'Images', itemLabel: props => 'Image' }
            ),
            text_color: fields.text({ label: 'Couleur du texte (défaut)', defaultValue: '#1A1A18', description: 'Couleur par défaut — peut être surchargée par élément' }),
            font: fontSelect('Police (défaut)', 'inherit'),
            ...elementStyles('label', 'du label'),
            ...elementStyles('title', 'du titre'),
            ...elementStyles('content', 'du contenu'),
          }),
          { label: 'Sous-catégories', itemLabel: props => props.fields.title.value || props.fields.label.value || 'Nouvelle section' }
        ),
      },
    }),
    savoir_faire_contact: singleton({
      label: 'Section Contact',
      path: 'src/content/pages/savoir-faire-contact',
      format: { data: 'json' },
      schema: {
        section_label: fields.text({ label: 'Label de la section', defaultValue: 'CONFIER UNE MISSION' }),
        form_titre: fields.text({ label: 'Titre du formulaire' }),
        form_intro_1: richDoc('Intro formulaire 1'),
        form_intro_2: richDoc('Intro formulaire 2'),
      },
    }),
    village_contact: singleton({
      label: 'Section Contact',
      path: 'src/content/pages/village-contact',
      format: { data: 'json' },
      schema: {
        section_label: fields.text({ label: 'Label de la section', defaultValue: 'CONTACT' }),
        form_intro: richDoc('Intro formulaire'),
      },
    }),
    contact_page: singleton({
      label: 'Page Contact',
      path: 'src/content/pages/contact',
      format: { data: 'json' },
      schema: {
        form_tab_message: fields.text({ label: 'Onglet Message', defaultValue: 'Message' }),
        form_tab_mission: fields.text({ label: 'Onglet Mission', defaultValue: 'Confier une mission' }),
        form_titre_message: fields.text({ label: 'Titre Formulaire', defaultValue: 'ENVOYER UN MESSAGE' }),
        form_titre_mission: fields.text({ label: 'Titre Mission', defaultValue: 'CONFIER UNE MISSION' }),
        info_rdv_label: fields.text({ label: 'Label RDV', defaultValue: 'PRENDRE RENDEZ-VOUS' }),
        rdv_texte: richDoc('Texte RDV'),
        info_email_label: fields.text({ label: 'Label Email', defaultValue: 'EMAIL' }),
        info_tel_label: fields.text({ label: 'Label Téléphone', defaultValue: 'TÉLÉPHONE' }),
        info_adresse_label: fields.text({ label: 'Label Adresse', defaultValue: 'NOUS TROUVER' }),
        info_bouton_label: fields.text({ label: 'Label Bouton Village', defaultValue: 'VISITER LE VILLAGE' }),
      },
    }),
    theme: singleton({
      label: 'Thème et Couleurs',
      path: 'src/content/theme/index',
      format: { data: 'json' },
      schema: {
        c_bg: fields.text({ label: 'Couleur de fond (ex: #FAFAF8)', defaultValue: '#FAFAF8' }),
        c_text: fields.text({ label: 'Couleur du texte (ex: #1A1A18)', defaultValue: '#1A1A18' }),
        c_accent: fields.text({ label: 'Couleur d\'accent (ex: #2E4D3F)', defaultValue: '#2E4D3F' }),
        c_accent_lt: fields.text({ label: 'Couleur d\'accent clair (ex: #4A7A65)', defaultValue: '#4A7A65' }),
        c_muted: fields.text({ label: 'Couleur muette (ex: #888884)', defaultValue: '#888884' }),
        c_border: fields.text({ label: 'Couleur de bordure (ex: #E4E1DA)', defaultValue: '#E4E1DA' }),
        c_surface: fields.text({ label: 'Couleur de surface (ex: #F0EDE7)', defaultValue: '#F0EDE7' }),
      },
    }),
    carousel: singleton({
      label: 'Carousel Accueil',
      path: 'src/content/carousel/index',
      format: { data: 'json' },
      schema: {
        slides: fields.array(
          fields.object({
            title: fields.text({ label: 'Titre' }),
            category: fields.text({ label: 'Catégorie' }),
            year: fields.text({ label: 'Année' }),
            image: fields.image({
              label: 'Image',
              directory: 'public/images',
              publicPath: '/images/',
            }),
          }),
          { label: 'Slides', itemLabel: props => props.fields.title.value || 'Nouveau slide' }
        ),
        text_color: fields.text({ label: 'Couleur du texte', defaultValue: '#ffffff', description: 'Couleur du texte sur le carousel' }),
        font: fields.select({
          label: 'Police du carousel',
          description: 'Police indépendante du reste du site',
          options: [
            { label: 'Hériter du site', value: 'inherit' },
            { label: 'Helvetica', value: 'helvetica' },
            { label: 'Inter', value: 'inter' },
            { label: 'Playfair Display', value: 'playfair' },
            { label: 'Cormorant Garamond', value: 'cormorant' },
            { label: 'DM Sans', value: 'dm-sans' },
            { label: 'Josefin Sans', value: 'josefin' },
            { label: 'Manrope', value: 'manrope' },
            { label: 'EB Garamond', value: 'eb-garamond' },
          ],
          defaultValue: 'inherit',
        }),
        title_style: fields.select({
          label: 'Style du titre',
          options: [
            { label: 'Normal', value: 'normal' },
            { label: 'Gras', value: 'bold' },
            { label: 'Italique', value: 'italic' },
          ],
          defaultValue: 'normal',
        }),
        category_style: fields.select({
          label: 'Style de la catégorie',
          options: [
            { label: 'Normal', value: 'normal' },
            { label: 'Gras', value: 'bold' },
            { label: 'Italique', value: 'italic' },
          ],
          defaultValue: 'normal',
        }),
      }
    }),
    footer: singleton({
      label: 'Pied de page',
      path: 'src/content/footer/index',
      format: { data: 'json' },
      schema: {
        legal: fields.text({ label: 'Texte légal', defaultValue: '© 2026 Atipics — Ressourcerie éclectique et polyvalente' }),
        links: fields.array(
          fields.object({
            label: fields.text({ label: 'Label du lien' }),
            href: fields.text({ label: 'URL' }),
          }),
          { label: 'Liens rapides', itemLabel: props => props.fields.label.value || 'Nouveau lien' }
        ),
        text_color: fields.text({ label: 'Couleur du texte', defaultValue: '#888884', description: 'Couleur principale du texte du pied de page' }),
        font: fields.select({
          label: 'Police du pied de page',
          description: 'Police indépendante du reste du site',
          options: [
            { label: 'Hériter du site', value: 'inherit' },
            { label: 'Helvetica', value: 'helvetica' },
            { label: 'Inter', value: 'inter' },
            { label: 'Playfair Display', value: 'playfair' },
            { label: 'Cormorant Garamond', value: 'cormorant' },
            { label: 'DM Sans', value: 'dm-sans' },
            { label: 'Josefin Sans', value: 'josefin' },
            { label: 'Manrope', value: 'manrope' },
            { label: 'EB Garamond', value: 'eb-garamond' },
          ],
          defaultValue: 'inherit',
        }),
        links_style: fields.select({
          label: 'Style des liens',
          options: [
            { label: 'Normal', value: 'normal' },
            { label: 'Gras', value: 'bold' },
            { label: 'Italique', value: 'italic' },
          ],
          defaultValue: 'normal',
        }),
        copyright_style: fields.select({
          label: 'Style du copyright',
          options: [
            { label: 'Normal', value: 'normal' },
            { label: 'Gras', value: 'bold' },
            { label: 'Italique', value: 'italic' },
          ],
          defaultValue: 'normal',
        }),
        lang_style: fields.select({
          label: 'Style du sélecteur de langue',
          options: [
            { label: 'Normal', value: 'normal' },
            { label: 'Gras', value: 'bold' },
            { label: 'Italique', value: 'italic' },
          ],
          defaultValue: 'normal',
        }),
      }
    }),
  },
});
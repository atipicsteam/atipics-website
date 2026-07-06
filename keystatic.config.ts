import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: 'atipicsteam/atipics-website',
  },
  ui: {
    brand: { name: 'Atipics' }
  },
  collections: {
    projets: collection({
      label: 'Projets',
      slugField: 'title',
      path: 'src/content/projets/*',
      format: { data: 'json' },
      schema: {
        title: fields.text({ label: 'Titre du projet' }),
        category: fields.text({ label: 'Catégorie' }),
        year: fields.text({ label: 'Année' }),
        description: fields.text({ label: 'Description', multiline: true }),
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
    nav_principale: collection({
      label: 'Navigation Principale',
      slugField: 'label',
      path: 'src/content/nav/*',
      format: { data: 'json' },
      schema: {
        label: fields.text({ label: 'Label' }),
        href: fields.text({ label: 'Lien' }),
        sort: fields.integer({ label: 'Ordre' }),
        sub: fields.array(
          fields.object({
            label: fields.text({ label: 'Label' }),
            href: fields.text({ label: 'Lien' }),
          }),
          { label: 'Sous-menus', itemLabel: props => props.fields.label.value }
        ),
      },
    }),
    journal: collection({
      label: 'Journal',
      slugField: 'title',
      path: 'src/content/journal/*',
      format: { data: 'json' },
      schema: {
        title: fields.text({ label: 'Titre de l\'article' }),
        date: fields.date({ label: 'Date' }),
        dateLabel: fields.text({ label: 'Label de la date (ex: 10 Avril 2026)' }),
        category: fields.text({ label: 'Catégorie' }),
        excerpt: fields.text({ label: 'Extrait', multiline: true }),
        cover: fields.image({
          label: 'Image de couverture',
          directory: 'public/images/journal',
          publicPath: '/images/journal/',
        }),
      },
    }),
  },
  singletons: {
    parametres: singleton({
      label: 'Paramètres du site',
      path: 'src/content/parametres/index',
      format: { data: 'json' },
      schema: {
        nom_site: fields.text({ label: 'Nom du site' }),
        email: fields.text({ label: 'Email' }),
        telephone: fields.text({ label: 'Téléphone' }),
        adresse: fields.text({ label: 'Adresse', multiline: true }),
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
    agence_page: singleton({
      label: 'Page Agence',
      path: 'src/content/pages/agence',
      format: { data: 'json' },
      schema: {
        bandeau_image: fields.image({
          label: 'Image du bandeau',
          directory: 'public/images/pages',
          publicPath: '/images/pages/',
        }),
        bandeau_label: fields.text({ label: 'Label du bandeau' }),
        bandeau_titre: fields.text({ label: 'Titre du bandeau' }),
        intro: fields.text({ label: 'Introduction', multiline: true }),
        manifeste_label: fields.text({ label: 'Label Manifeste' }),
        manifeste_titre: fields.text({ label: 'Titre Manifeste' }),
        manifeste_p1: fields.text({ label: 'Paragraphe 1', multiline: true }),
        manifeste_p2: fields.text({ label: 'Paragraphe 2', multiline: true }),
        manifeste_p3: fields.text({ label: 'Paragraphe 3', multiline: true }),
        reseaux_label: fields.text({ label: 'Label Réseaux' }),
        reseaux_titre: fields.text({ label: 'Titre Réseaux' }),
        reseaux_p1: fields.text({ label: 'Paragraphe Réseaux 1', multiline: true }),
        reseaux_p2: fields.text({ label: 'Paragraphe Réseaux 2', multiline: true }),
        reseaux_p3: fields.text({ label: 'Paragraphe Réseaux 3', multiline: true }),
        reseaux_p4: fields.text({ label: 'Paragraphe Réseaux 4', multiline: true }),
      },
    }),
    savoir_faire_page: singleton({
      label: 'Page Savoir Faire',
      path: 'src/content/pages/savoir-faire',
      format: { data: 'json' },
      schema: {
        page_label: fields.text({ label: 'Label de la page' }),
        page_titre: fields.text({ label: 'Titre de la page' }),
        page_sous_titre: fields.text({ label: 'Sous-titre' }),
        
        curation_label: fields.text({ label: 'Curation - Label' }),
        curation_titre: fields.text({ label: 'Curation - Titre' }),
        curation_intro: fields.text({ label: 'Curation - Intro', multiline: true }),
        curation_p1: fields.text({ label: 'Curation - P1', multiline: true }),
        curation_p2: fields.text({ label: 'Curation - P2', multiline: true }),

        conciergerie_label: fields.text({ label: 'Conciergerie - Label' }),
        conciergerie_titre: fields.text({ label: 'Conciergerie - Titre' }),
        conciergerie_intro: fields.text({ label: 'Conciergerie - Intro', multiline: true }),
        conciergerie_p1: fields.text({ label: 'Conciergerie - P1', multiline: true }),
        conciergerie_p2: fields.text({ label: 'Conciergerie - P2', multiline: true }),

        events_label: fields.text({ label: 'Events - Label' }),
        events_titre: fields.text({ label: 'Events - Titre' }),
        events_intro: fields.text({ label: 'Events - Intro', multiline: true }),
        events_p1: fields.text({ label: 'Events - P1', multiline: true }),
        events_p2: fields.text({ label: 'Events - P2', multiline: true }),

        intendance_label: fields.text({ label: 'Intendance - Label' }),
        intendance_titre: fields.text({ label: 'Intendance - Titre' }),
        intendance_intro: fields.text({ label: 'Intendance - Intro', multiline: true }),
        intendance_p1: fields.text({ label: 'Intendance - P1', multiline: true }),
        intendance_p2: fields.text({ label: 'Intendance - P2', multiline: true }),

        valorisation_label: fields.text({ label: 'Valorisation - Label' }),
        valorisation_titre: fields.text({ label: 'Valorisation - Titre' }),
        valorisation_intro: fields.text({ label: 'Valorisation - Intro', multiline: true }),
        valorisation_p1: fields.text({ label: 'Valorisation - P1', multiline: true }),
        valorisation_p2: fields.text({ label: 'Valorisation - P2', multiline: true }),

        form_titre: fields.text({ label: 'Formulaire - Titre' }),
        form_intro_1: fields.text({ label: 'Formulaire - Intro 1', multiline: true }),
        form_intro_2: fields.text({ label: 'Formulaire - Intro 2', multiline: true }),
      },
    }),
    village_page: singleton({
      label: 'Page Village',
      path: 'src/content/pages/village',
      format: { data: 'json' },
      schema: {
        bandeau_image: fields.image({
          label: 'Image du bandeau',
          directory: 'public/images/pages',
          publicPath: '/images/pages/',
        }),
        bandeau_label: fields.text({ label: 'Label du bandeau' }),
        bandeau_titre: fields.text({ label: 'Titre du bandeau' }),
        intro: fields.text({ label: 'Introduction', multiline: true }),
        entrepot_label: fields.text({ label: 'Entrepôt - Label' }),
        entrepot_titre: fields.text({ label: 'Entrepôt - Titre' }),
        entrepot_p1: fields.text({ label: 'Entrepôt - P1', multiline: true }),
        entrepot_p2: fields.text({ label: 'Entrepôt - P2', multiline: true }),
        entrepot_p3: fields.text({ label: 'Entrepôt - P3', multiline: true }),
        studiodesign_label: fields.text({ label: 'Studio Design - Label' }),
        studiodesign_titre: fields.text({ label: 'Studio Design - Titre' }),
        studiodesign_p1: fields.text({ label: 'Studio Design - P1', multiline: true }),
        studiodesign_p2: fields.text({ label: 'Studio Design - P2', multiline: true }),
        studiodesign_p3: fields.text({ label: 'Studio Design - P3', multiline: true }),
        atelier_label: fields.text({ label: 'Atelier - Label' }),
        atelier_titre: fields.text({ label: 'Atelier - Titre' }),
        atelier_p1: fields.text({ label: 'Atelier - P1', multiline: true }),
        atelier_p2: fields.text({ label: 'Atelier - P2', multiline: true }),
        atelier_p3: fields.text({ label: 'Atelier - P3', multiline: true }),
        form_intro: fields.text({ label: 'Introduction formulaire', multiline: true }),
      },
    }),
    contact_page: singleton({
      label: 'Page Contact',
      path: 'src/content/pages/contact',
      format: { data: 'json' },
      schema: {
        rdv_texte: fields.text({ label: 'Texte RDV', multiline: true }),
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
              directory: 'public/images/carousel',
              publicPath: '/images/carousel/',
            }),
            bg: fields.text({ label: 'Couleur de fond (ex: #2E4D3F)' }),
          }),
          { label: 'Slides', itemLabel: props => props.fields.title.value || 'Nouveau slide' }
        )
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
        )
      }
    }),
  },
});
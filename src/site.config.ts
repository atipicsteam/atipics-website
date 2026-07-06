// ═══════════════════════════════════════════════════
//  ATIPICS — Configuration du site
//  Textes → modifiez ce fichier
//  Couleurs → src/layouts/Layout.astro (:root)
// ═══════════════════════════════════════════════════

export const site = {
  name: "ATIPICS",
  tagline: "Agence Atipics · Savoir Faire · Village",
  description: "Ressourcerie éclectique et polyvalente — 10 ans de savoir-faire",

  // ─── Navigation principale (3 rubriques + sous-onglets) ───
  nav: [
    {
      label: "Agence Atipics",
      href: "/agence",
      sub: [
        { label: "Manifeste", href: "/agence#manifeste" },
        { label: "Réseaux", href: "/agence#reseaux" },
      ],
    },
    {
      label: "Savoir Faire",
      href: "/savoir-faire",
      sub: [
        { label: "Curation et Sourcing", href: "/savoir-faire#curation" },
        { label: "Conciergerie et Propriété", href: "/savoir-faire#conciergerie" },
        { label: "Events et Scénographie", href: "/savoir-faire#events" },
        { label: "Intendance et Logistique", href: "/savoir-faire#intendance" },
        { label: "Valorisation de Collections", href: "/savoir-faire#valorisation" },
      ],
    },
    {
      label: "Village Atipics",
      href: "/village",
      sub: [
        { label: "Entrepôt", href: "/village#Entrepôt" },
        { label: "StudioDesign", href: "/village#StudioDesign" },
        { label: "Atelier", href: "/village#Atelier" },
      ],
    },
  ],

  // ─── Carousel de projets (homepage) ───
  projetsCarousel: [
    {
      title: "Projet A",
      category: "Artisanat",
      year: "2024",
      image: "/images/projet1.jpg",
      bg: "#2E4D3F",
    },
    {
      title: "Projet B",
      category: "Design circulaire",
      year: "2024",
      image: "/images/projet2.webp",
      bg: "#4D3E2E",
    },
    {
      title: "Projet C",
      category: "Architecture",
      year: "2023",
      image: "/images/projet3.jpg",
      bg: "#3E2E4D",
    },
    {
      title: "Projet D",
      category: "Textile",
      year: "2023",
      image: "/images/projet4.webp",
      bg: "#1A2E26",
    },
  ],

  // ─── Page Projets ───
  // Chaque projet peut contenir des images et/ou vidéos (type: "image" | "video")
  // Pour ajouter un projet: dupliquer un bloc et modifier les champs
  projets: [
    {
      id: "projet-a",
      title: "Projet A",
      category: "Artisanat",
      year: "2024",
      description: "Sélection et mise en scène d'objets artisanaux pour une résidence privée dans le sud de la France. Sourcing, restauration et scénographie sur-mesure.",
      cover: "/images/projet1.jpg",
      medias: [
        { type: "image", src: "/images/projet1.jpg", alt: "Vue principale" },
        { type: "image", src: "/images/projet2.webp", alt: "Détail" },
        { type: "image", src: "/images/projet3.jpg", alt: "Ambiance générale" },
      ],
    },
    {
      id: "projet-b",
      title: "Projet B",
      category: "Design circulaire",
      year: "2024",
      description: "Valorisation d'une collection de mobilier des années 70 pour un client collectionneur. Restauration complète, documentation et mise en vente sélective.",
      cover: "/images/projet2.webp",
      medias: [
        { type: "image", src: "/images/projet2.webp", alt: "Vue principale" },
        { type: "image", src: "/images/projet4.webp", alt: "Détail pièce" },
        { type: "image", src: "/images/projet1.jpg", alt: "Contexte" },
      ],
    },
    {
      id: "projet-c",
      title: "Projet C",
      category: "Architecture",
      year: "2023",
      description: "Scénographie d'une galerie éphémère pour une exposition d'architectures intérieures. Conception spatiale, sélection des œuvres et coordination logistique.",
      cover: "/images/projet3.jpg",
      medias: [
        { type: "image", src: "/images/projet3.jpg", alt: "Vue d'ensemble" },
        { type: "image", src: "/images/projet1.jpg", alt: "Détail installation" },
        { type: "image", src: "/images/projet2.webp", alt: "Vue latérale" },
      ],
    },
    {
      id: "projet-d",
      title: "Projet D",
      category: "Textile",
      year: "2023",
      description: "Curation d'une collection textile rare pour un hôtel de luxe. Recherche, acquisition et mise en valeur de pièces uniques tissées à la main.",
      cover: "/images/projet4.webp",
      medias: [
        { type: "image", src: "/images/projet4.webp", alt: "Vue principale" },
        { type: "image", src: "/images/projet3.jpg", alt: "Détail tissu" },
        { type: "image", src: "/images/projet2.webp", alt: "Mise en scène" },
      ],
    },
  ],

  // ─── Page Contact ───
  contact: {
    title: "Contact",
    intro: "Une question, un projet, une idée ?",
    email: "contact@atipics.fr",
    address: "Village Atipics, France",
  },

  // ─── Footer ───
  footer: {
    links: [
      { label: "Projets", href: "/projets" },
      { label: "Journal", href: "/journal" },
      { label: "Contact", href: "/contact" },
    ],
    legal: "© 2026 Atipics — Ressourcerie éclectique et polyvalente",
  },
};

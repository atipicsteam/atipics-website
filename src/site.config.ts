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
      { label: "Projets", href: "/village#projets" },
      { label: "Journal", href: "/village#journal" },
      { label: "Contact", href: "/contact" },
      { label: "Rejoignez nous", href: "/rejoindre" },
      { label: "Galerie", href: "/village#galerie" },
    ],
    legal: "© 2026 Atipics — Ressourcerie éclectique et polyvalente",
  },
};

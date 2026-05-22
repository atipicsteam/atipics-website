const DIRECTUS_API_URL = "http://127.0.0.1:8055";

const DIRECTUS_ASSETS_URL = "http://100.66.112.125:8055"; 

export async function fetchCollection<T>(
  collection: string,
  params: Record<string, string> = {}
): Promise<T[]> {
  try {
    const query = new URLSearchParams({ limit: "-1", ...params });
    // On utilise l'API interne ici :
    const res = await fetch(`${DIRECTUS_API_URL}/items/${collection}?${query}`);
    if (!res.ok) {
      console.error(`Erreur Directus sur ${collection}: ${res.statusText}`);
      return [];
    }
    const json = await res.json();
    return json.data ?? [];
  } catch (err) {
    console.error(`Impossible de joindre Directus pour ${collection}:`, err);
    return [];
  }
}

export function fileUrl(id: string | null | undefined): string {
  if (!id) return "";
  // On utilise l'URL publique pour les images :
  return `${DIRECTUS_ASSETS_URL}/assets/${id}`;
}

// ── Nav + Footer ─────────────────────────────────────

interface NavSubDirectus {
  id: number;
  label: string;
  href: string;
  parent: number;
}

interface NavDirectus {
  id: number;
  label: string;
  href: string;
}

interface FooterLienDirectus {
  id: number;
  label: string;
  href: string;
}

interface ParamDirectus {
  nom_site: string;
  email: string;
  telephone: string;
  adresse: string;
}

export interface AgencePageDirectus {
  bandeau_image?: string;
  bandeau_label?: string;
  bandeau_titre?: string;
  intro?: string;
  manifeste_label?: string;
  manifeste_titre?: string;
  manifeste_p1?: string;
  manifeste_p2?: string;
  manifeste_p3?: string;
  reseaux_label?: string;
  reseaux_titre?: string;
  reseaux_p1?: string;
  reseaux_p2?: string;
  reseaux_p3?: string;
  reseaux_p4?: string;
}

export interface SavoirFairePageDirectus {
  page_label?: string;
  page_titre?: string;
  page_sous_titre?: string;
  curation_label?: string; curation_titre?: string; curation_intro?: string; curation_p1?: string; curation_p2?: string;
  conciergerie_label?: string; conciergerie_titre?: string; conciergerie_intro?: string; conciergerie_p1?: string; conciergerie_p2?: string;
  events_label?: string; events_titre?: string; events_intro?: string; events_p1?: string; events_p2?: string;
  intendance_label?: string; intendance_titre?: string; intendance_intro?: string; intendance_p1?: string; intendance_p2?: string;
  valorisation_label?: string; valorisation_titre?: string; valorisation_intro?: string; valorisation_p1?: string; valorisation_p2?: string;
  form_titre?: string;
  form_intro_1?: string;
  form_intro_2?: string;
}

export async function fetchSavoirFairePage(): Promise<SavoirFairePageDirectus> {
  try {
    const res = await fetch(`${DIRECTUS_API_URL}/items/savoir_faire_page`);
    if (!res.ok) return {};
    const json = await res.json();
    const data = json.data;
    return (Array.isArray(data) ? data[0] : data) ?? {};
  } catch {
    return {};
  }
}

export async function fetchAgencePage(): Promise<AgencePageDirectus> {
  try {
    const res = await fetch(`${DIRECTUS_API_URL}/items/agence_page`);
    if (!res.ok) return {};
    const json = await res.json();
    const data = json.data;
    return (Array.isArray(data) ? data[0] : data) ?? {};
  } catch {
    return {};
  }
}

export interface NavItem {
  label: string;
  href: string;
  sub?: { label: string; href: string }[];
}

export interface SiteNav {
  name: string;
  nav: NavItem[];
  footerLinks: { label: string; href: string }[];
  email: string;
}

export async function fetchSiteNav(): Promise<SiteNav | null> {
  try {
    const [navRaw, subRaw, footerRaw, paramRaw] = await Promise.all([
      fetchCollection<NavDirectus>("nav_principale", { sort: "sort" }),
      fetchCollection<NavSubDirectus>("nav_sub"),
      fetchCollection<FooterLienDirectus>("footer_liens", { sort: "sort" }),
      fetchCollection<ParamDirectus>("parametres"),
    ]);

    if (!navRaw.length && !footerRaw.length) return null;

    const nav: NavItem[] = navRaw.map((item) => ({
      label: item.label,
      href: item.href,
      sub: subRaw
        .filter((s) => {
          // La magie est ici : on extrait l'ID, qu'il soit dans un tableau [1] ou un objet {id: 1}
          let parentId = s.parent;
          if (Array.isArray(s.parent)) parentId = s.parent[0];
          if (typeof s.parent === 'object' && s.parent !== null && 'id' in s.parent) parentId = (s.parent as any).id;
          
          return String(parentId) === String(item.id);
        })
        .map((s) => ({ label: s.label, href: s.href })),
    }));

    return {
      name: paramRaw[0]?.nom_site || "ATIPICS",
      nav,
      footerLinks: footerRaw.map((l) => ({ label: l.label, href: l.href })),
      email: paramRaw[0]?.email || "contact@atipics.fr",
    };
  } catch (e) {
    console.error("Erreur fetchSiteNav:", e);
    return null;
  }
}
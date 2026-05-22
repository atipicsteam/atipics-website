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

export async function fetchAgencePage(): Promise<AgencePageDirectus> {
  try {
    const res = await fetch(`${DIRECTUS_API_URL}/items/agence_page`);
    if (!res.ok) return {};
    const json = await res.json();
    return json.data ?? {};
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
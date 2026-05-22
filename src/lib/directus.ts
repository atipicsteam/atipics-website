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
        .filter((s) => s.parent === item.id)
        .map((s) => ({ label: s.label, href: s.href })),
    }));

    return {
      name: paramRaw[0]?.nom_site || "ATIPICS",
      nav,
      footerLinks: footerRaw.map((l) => ({ label: l.label, href: l.href })),
      email: paramRaw[0]?.email || "contact@atipics.fr",
    };
  } catch {
    return null;
  }
}

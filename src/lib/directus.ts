const DIRECTUS_URL = "https://directus-production-b982.up.railway.app";

export async function fetchCollection<T>(
  collection: string,
  params: Record<string, string> = {}
): Promise<T[]> {
  const query = new URLSearchParams({
    limit: "-1",
    ...params,
  });
  const res = await fetch(`${DIRECTUS_URL}/items/${collection}?${query}`);
  if (!res.ok) return [];
  const json = await res.json();
  return json.data ?? [];
}

export function fileUrl(id: string | null | undefined): string {
  if (!id) return "";
  return `${DIRECTUS_URL}/assets/${id}`;
}

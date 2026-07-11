const BACKSLASH = String.fromCharCode(92);
const DIACRITICS = new RegExp('[' + BACKSLASH + 'u0300-' + BACKSLASH + 'u036f]', 'g');

export function slugifySection(title: string | undefined | null, index: number): string {
  if (!title) return `section-${index}`;
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(DIACRITICS, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

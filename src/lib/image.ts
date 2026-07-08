/**
 * Rewrites an image path to its optimized WebP version.
 * /images/carousel/photo.jpg -> /images/optimized/carousel/photo.webp
 * /images/projet1.jpg -> /images/optimized/projet1.webp
 * Already optimized paths are returned as-is.
 */
export function optimizePath(src: string): string {
  if (!src) return src;
  if (src.includes('/images/optimized/')) return src;
  if (!src.startsWith('/images/')) return src;

  const relativePath = src.replace('/images/', '');
  const withoutExt = relativePath.replace(/\.(jpg|jpeg|png|webp|avif)$/i, '');
  return `/images/optimized/${withoutExt}.webp`;
}

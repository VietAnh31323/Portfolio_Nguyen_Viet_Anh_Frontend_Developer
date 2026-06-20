// Prefix a public asset path with the configured basePath so links work both
// locally (basePath = '') and on GitHub Pages (basePath = '/<repo>').
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function asset(path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${clean}`;
}

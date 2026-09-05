export const basePath =
  process.env.NODE_ENV === "production" ? "/save-videos" : "";

export function assetPath(src: string): string {
  if (/^https?:\/\//.test(src)) {
    return src;
  }
  return `${basePath}${src}`;
}

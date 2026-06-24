export function assetPath(path: string) {
  if (/^https?:\/\//.test(path)) {
    return path;
  }

  const base = import.meta.env.BASE_URL;
  return `${base.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
}

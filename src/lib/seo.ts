import { assetPath } from "./paths";

export const siteName = "Geloblog";
export const siteDescription =
  "Blog em português do Gelo sobre programação, streaming, comunidades, extensões, emotes, produto e tecnologia para criadores.";
export const siteLocale = "pt_BR";
export const siteLanguage = "pt-BR";
export const siteTopics = [
  "programação",
  "tecnologia",
  "streaming",
  "criadores de conteúdo",
  "comunidades online",
  "emotes",
  "extensão de navegador",
  "Twitch",
  "YouTube",
  "Kick",
  "produto digital",
  "gelo.tv",
] as const;

export function absoluteUrl(path: string, site: URL | undefined) {
  return new URL(assetPath(path), site).toString();
}

export function currentUrl(pathname: string, site: URL | undefined) {
  return new URL(pathname, site).toString();
}

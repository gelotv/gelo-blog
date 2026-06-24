import { assetPath } from "../lib/paths";

export function GET(context) {
  const sitemapUrl = new URL(assetPath("/sitemap-index.xml"), context.site);
  const llmsUrl = new URL(assetPath("/llms.txt"), context.site);

  return new Response(
    [
      "User-agent: *",
      "Allow: /",
      "Allow: /posts/",
      "Allow: /rss.xml",
      "Allow: /llms.txt",
      "",
      `Sitemap: ${sitemapUrl.toString()}`,
      `LLMs: ${llmsUrl.toString()}`,
      "",
    ].join("\n"),
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    },
  );
}

import { getCollection } from "astro:content";
import { assetPath } from "../lib/paths";
import { siteDescription, siteName, siteTopics } from "../lib/seo";

const postPath = (post) => assetPath(`/posts/${post.id.replace(/\.(md|mdx)$/, "")}/`);

export async function GET(context) {
  const posts = (await getCollection("posts"))
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());

  const lines = [
    `# ${siteName}`,
    "",
    siteDescription,
    "",
    "## Idioma",
    "pt-BR",
    "",
    "## Assuntos principais",
    ...siteTopics.map((topic) => `- ${topic}`),
    "",
    "## Páginas",
    `- Página inicial: ${new URL(assetPath("/"), context.site).toString()}`,
    `- RSS: ${new URL(assetPath("/rss.xml"), context.site).toString()}`,
    `- Sitemap: ${new URL(assetPath("/sitemap-index.xml"), context.site).toString()}`,
    "",
    "## Posts",
    ...posts.map(
      (post) =>
        `- ${post.data.title}: ${new URL(postPath(post), context.site).toString()} — ${post.data.description}`,
    ),
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}

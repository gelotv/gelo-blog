import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

const postPath = (post) => `posts/${post.id.replace(/\.(md|mdx)$/, "")}/`;

export async function GET(context) {
  const posts = (await getCollection("posts"))
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());

  return rss({
    title: "Geloblog",
    description: "Blog em português do Gelo sobre produto, comunidade e streaming.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishDate,
      link: postPath(post),
      categories: post.data.tags,
    })),
  });
}

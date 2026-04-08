import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../config';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  return rss({
    title: SITE.title,
    description: SITE.subtitle,
    site: context.site ?? SITE.url,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/${post.data.slug}/`,
    })),
  });
}

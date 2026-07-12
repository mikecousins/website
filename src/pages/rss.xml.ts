import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { SITE, excerpt } from '../lib/seo';

export async function GET(context: APIContext) {
  const posts = await getCollection('posts', ({ data }) => !data.meta.draft);
  const sortedPosts = posts.sort(
    (a, b) => b.data.meta.date.getTime() - a.data.meta.date.getTime()
  );

  return rss({
    title: `${SITE.name} — Cancer Journey`,
    description: 'A diary of a cancer journey, kept in the order it happened.',
    site: context.site ?? SITE.url,
    trailingSlash: true,
    items: sortedPosts.map((post) => ({
      title: post.data.meta.title,
      pubDate: post.data.meta.date,
      description: post.data.meta.description || excerpt(post.body ?? ''),
      link: `/posts/${post.id.replace('.md', '')}/`,
      categories: post.data.meta.tags,
      author: SITE.email,
    })),
    customData: '<language>en-ca</language>',
  });
}

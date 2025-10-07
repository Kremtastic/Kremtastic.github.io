import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  // Load all blog posts from your "blog" content collection
  const posts = await getCollection('blog');

  return rss({
    title: 'Kristian Takvam — Blog',
    description: 'Updates, notes, and thoughts by Kristian Takvam.',
    site: context.site, // automatically pulls your "site" from astro.config.mjs

    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),

    customData: `<language>en-us</language>`,
  });
}

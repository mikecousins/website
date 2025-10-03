import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './app/data/posts',
  }),
  schema: z.object({
    meta: z.object({
      author: z.string().optional(),
      category: z.string().optional(),
      date: z.coerce.date(),
      description: z.string().optional(),
      draft: z.boolean().optional(),
      slug: z.string().optional(),
      tags: z.array(z.string()).optional(),
      title: z.string(),
      cover: z.string().optional(),
    }),
  }),
});

const projects = defineCollection({
  loader: glob({
    pattern: '**/*.mdx',
    base: './app/data/projects',
  }),
  schema: z.object({
    meta: z.object({
      startDate: z.coerce.date(),
      endDate: z.coerce.date().optional(),
      slug: z.string(),
      tags: z.array(z.string()),
      company: z.string(),
      role: z.string(),
      logo: z.string().optional(),
    }),
  }),
});

export const collections = { posts, projects };

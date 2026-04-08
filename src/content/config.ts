import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    template: z.string().optional(),
    draft: z.boolean().default(false),
    slug: z.string(),
    category: z.string().optional(),
    tags: z.array(z.string()).default([]),
    description: z.string().default(''),
    socialImage: z.string().optional(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    template: z.string().optional(),
    draft: z.boolean().default(false),
    socialImage: z.string().optional(),
  }),
});

export const collections = { posts, pages };

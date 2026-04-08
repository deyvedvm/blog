# Blog — Deyve Machado

Personal blog built with [Astro 5](https://astro.build) and [Tailwind CSS 4](https://tailwindcss.com), deployed on [Netlify](https://netlify.com).

## Stack

- **Framework:** Astro 5
- **Styling:** Tailwind CSS 4 + @tailwindcss/typography
- **Content:** Markdown with Astro Content Collections
- **Syntax highlighting:** Shiki (built-in)
- **Comments:** Disqus
- **Deployment:** Netlify

## Getting started

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # production build → dist/
npm run preview   # preview production build
```

## Writing posts

Create a `.md` file in `src/content/posts/` with the following frontmatter:

```yaml
---
title: "Post title"
date: "2026-01-01T00:00:00.000Z"
template: "post"
draft: false
slug: "post-url-slug"
category: "category-name"
tags:
  - "tag1"
  - "tag2"
description: "Short description shown in the feed."
socialImage: "/media/image.jpg"
---
```

Set `draft: true` to keep a post unpublished.

## Project structure

```
src/
├── content/
│   ├── config.ts       # Collection schemas (Zod)
│   ├── posts/          # Blog posts (.md)
│   └── pages/          # Static pages (.md)
├── layouts/
│   ├── Base.astro      # HTML shell, meta tags, analytics
│   └── Blog.astro      # Two-column layout with sidebar
├── components/
│   ├── Sidebar.astro
│   ├── PostCard.astro
│   ├── Pagination.astro
│   ├── Comments.astro
│   └── TagList.astro
├── pages/              # File-based routing
├── styles/
│   └── global.css      # Tailwind + typography
└── config.ts           # Site metadata, author, menu
public/
├── media/              # Post images
└── photo.jpg           # Author photo
```

## License

MIT

export const SITE = {
  url: 'https://deyvedvm.netlify.app',
  title: 'Blog by Deyve Machado',
  subtitle: 'Success is the sum of small efforts repeated day after day',
  copyright: '© All rights reserved.',
  postsPerPage: 4,
  googleAnalyticsId: 'UA-73379983-2',
  disqusShortname: 'deyve-dev',
} as const;

export const AUTHOR = {
  name: 'Deyve Machado',
  photo: '/photo.jpg',
  bio: 'Success is the sum of small efforts repeated day after day',
  contacts: {
    github: 'deyvedvm',
    linkedin: 'deyvevieiramachado',
    twitter: 'deyvedev',
    instagram: 'deyvedev',
    telegram: 'deyvedev',
    codepen: 'deyve',
    email: 'dvmachado@id.uff.br',
  },
} as const;

export const MENU = [
  { label: 'Articles', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contacts' },
] as const;

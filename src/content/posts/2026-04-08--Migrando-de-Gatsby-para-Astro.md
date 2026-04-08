---
title: "Migrando meu blog de Gatsby 2 para Astro 5"
date: "2026-04-08T10:00:00.000Z"
template: "post"
draft: false
slug: "migrando-gatsby-para-astro"
category: "desenvolvimento"
tags:
  - "astro"
  - "gatsby"
  - "javascript"
  - "typescript"
  - "tailwindcss"
description: "Meu blog ficou parado por anos rodando em Gatsby 2. Neste post conto por que decidi migrar para Astro 5, o que mudou na stack e como foi o processo."
socialImage: "/media/image-2.jpg"
---

Meu blog ficou parado por muito tempo. Não por falta de assunto, mas por falta de vontade de mexer numa stack que estava ficando cada vez mais pesada e desatualizada.

A stack era: **Gatsby 2**, lançado em 2018. Com React 16, `node-sass` (deprecated), Flow type checker (praticamente abandonado pela comunidade) e `moment.js` (também deprecated). Quase 70 dependências para fazer o que um blog precisa fazer.

Era hora de modernizar.

## Por que o Gatsby virou um problema?

O Gatsby foi uma ótima escolha para blogs estáticos em 2018–2020. O GraphQL para dados de conteúdo parecia poderoso, e o ecossistema de plugins resolvia tudo.

O problema é que o ecossistema foi além do necessário. Para um blog simples com posts em Markdown, você acabava com:

- GraphQL obrigatório para consultar **seus próprios arquivos locais**
- Dezenas de plugins para fazer coisas que hoje são primitivas em outros frameworks
- Uma versão principal (v2) chegando ao fim da vida sem uma migração simples para v5

Em 2023, a Netlify adquiriu o Gatsby e o desenvolvimento desacelerou consideravelmente. A comunidade foi migrando para outras ferramentas.

## Por que Astro?

Para um blog de conteúdo, o Astro é a escolha mais coerente em 2026.

Alguns motivos que pesaram na decisão:

**Zero JavaScript no cliente por padrão.** O Astro não envia JS para o browser a menos que você peça explicitamente. Para um blog estático, isso se traduz em páginas mais rápidas e simples.

**Content Collections nativo.** Ao invés de consultar arquivos Markdown via GraphQL, o Astro tem um sistema de coleções com schema Zod, validação de frontmatter e tipagem TypeScript nativa. Muito mais direto.

**Roteamento baseado em arquivos.** Um arquivo em `src/pages/[slug].astro` gera as rotas dos posts. Sem APIs de `createPages`, sem `gatsby-node.js`.

**Ecossistema ativo.** O Astro está em desenvolvimento constante e a comunidade cresceu muito nos últimos anos.

## O que mudou na stack

| Aspecto | Antes | Depois |
|---|---|---|
| Framework | Gatsby 2 | Astro 5 |
| Estilo | SCSS + Lost Grid | Tailwind CSS 4 |
| Tipagem | Flow | TypeScript |
| Syntax highlight | PrismJS | Shiki (built-in) |
| Dependências | ~70 pacotes | 7 pacotes |
| Dark mode | Não tinha | Toggle + preferência do SO |
| Build output | `public/` | `dist/` |

## Como foi a migração

O processo foi mais tranquilo do que esperava, principalmente porque **o conteúdo em Markdown ficou intacto**. Os arquivos de posts e páginas foram movidos para `src/content/` sem nenhuma alteração — o frontmatter é o mesmo.

O trabalho real foi:

1. Criar a nova estrutura Astro (layouts, componentes, páginas)
2. Configurar o Tailwind CSS 4 com o plugin de tipografia para o corpo dos posts
3. Reescrever os componentes (Feed, Sidebar, Paginação, Tags) como componentes `.astro`
4. Configurar o RSS feed e sitemap via integrações nativas
5. Implementar o dark mode com class-based toggle e persistência no `localStorage`

Uma decisão importante: removi o **Netlify CMS** da equação. Editar posts diretamente em arquivos Markdown no repositório é mais simples e sem dependência extra. Os comentários do **Disqus** foram mantidos via script vanilla JS — sem precisar do React.

## O resultado

Build em aproximadamente 2 segundos. Sete dependências no `package.json`. Uma codebase que consigo ler e entender completamente.

O visual foi modernizado com Tailwind CSS — paleta neutra com acento em indigo, boa tipografia para leitura e dark mode que respeita a preferência do sistema operacional (e pode ser alternado manualmente pelo sidebar).

Às vezes a melhor decisão técnica é reconhecer que uma ferramenta cumpriu seu ciclo — e escolher a certa para o próximo.

---

O código do blog está no [GitHub](https://github.com/deyvedvm/blog) caso queira ver a estrutura completa.

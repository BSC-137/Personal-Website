# Personal Website

A modern, glassy, liquid personal website with old internet vibes built using Astro, Tailwind CSS, and MDX.

## Features

- **Glassmorphism Design** - Modern aero glass effects throughout
- **Liquid Animations** - Smooth, organic motion and transitions
- **3D Interactive Elements** - Cards that respond to mouse movement
- **Old Internet Aesthetic** - Nostalgic vibes with modern execution
- **Blog System** - Full-featured blog with MDX support
- **Fully Responsive** - Looks great on all devices
- **Fast Performance** - Built with Astro for blazing speed

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. The project is already set up! Just run:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser to `http://localhost:4321`

### Build for Production

```bash
npm run build
npm run preview  # Preview the built site
```

## Adding Blog Posts

Blog posts are located in `src/content/blog/` and use MDX format (Markdown with React components).

### Creating a New Post

1. Create a new `.mdx` file in `src/content/blog/`
2. Add frontmatter at the top:

```mdx
---
title: "Your Post Title"
description: "A brief description of your post"
date: 2025-10-05
tags: ["tag1", "tag2", "tag3"]
draft: false
---

Your content here...
```

### Migrating from Notion

To migrate your Notion blogs:

1. **Export from Notion:**
   - Open your Notion page
   - Click the `•••` menu → Export
   - Choose "Markdown & CSV" format
   - Download the zip file

2. **Convert to MDX:**
   - Extract the zip file
   - Copy the `.md` files to `src/content/blog/`
   - Rename them to `.mdx`
   - Add the frontmatter (see example above)
   - Update any image paths if needed

3. **Clean up the content:**
   - Remove any Notion-specific syntax
   - Fix image references to point to your `/public` folder
   - Add tags and proper dates

### Example Blog Post Structure

```
src/content/blog/
├── welcome.mdx
├── my-first-post.mdx
├── web-design-tips.mdx
└── another-post.mdx
```

## Customization

### Update Your Information

1. **Navigation & Name:**
   - Edit `src/layouts/BaseLayout.astro`
   - Change "Your Name" in the navigation

2. **Homepage:**
   - Edit `src/pages/index.astro`
   - Update the hero text and introduction

3. **About Page:**
   - Edit `src/pages/about.astro`
   - Add your bio and information

4. **Contact Page:**
   - Edit `src/pages/contact.astro`
   - Update your email and social media links

5. **Domain:**
   - Edit `astro.config.mjs`
   - Update the `site` field with your domain

### Styling

- Colors and animations are in `tailwind.config.mjs`
- Global styles are in `src/layouts/BaseLayout.astro`
- Customize the gradient background, glass effects, and more!

### Adding More Animations

The site includes several custom animations:
- `animate-float` - Floating up and down
- `animate-glow` - Pulsing glow effect
- `animate-liquid` - Morphing blob shapes
- `card-3d` - 3D tilt on hover

Add these classes to any element to apply the effects!

## Project Structure

```
/
├── public/              # Static assets
│   ├── favicon.svg
│   └── fonts/
├── src/
│   ├── content/         # Blog posts
│   │   ├── blog/
│   │   └── config.ts
│   ├── layouts/         # Page layouts
│   │   └── BaseLayout.astro
│   ├── pages/           # Website pages
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   └── blog/
│   │       ├── index.astro
│   │       └── [...slug].astro
│   └── components/      # Reusable components
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repo on [Vercel](https://vercel.com)
3. Vercel will auto-detect Astro and deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Import your repo on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`

### Deploy to GitHub Pages

1. Update `astro.config.mjs` with your GitHub repo name
2. Run `npm run build`
3. Deploy the `dist` folder to GitHub Pages

## Tech Stack

- [Astro](https://astro.build) - Static Site Generator
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS
- [MDX](https://mdxjs.com) - Markdown with components
- TypeScript - Type safety

## Tips

- **Images:** Place images in `public/` folder and reference with `/image.jpg`
- **SEO:** Update meta descriptions in page frontmatter
- **Analytics:** Add your analytics code to `BaseLayout.astro`
- **Custom Domain:** Configure through your hosting provider

## Resources

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [MDX Documentation](https://mdxjs.com/docs)




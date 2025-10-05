# 🚀 Quick Start Guide

Welcome to your new personal website! Here's everything you need to get started.

## ⚡ Start Development Server

### Option 1: Using the batch file (Windows)
Double-click `start-dev.bat` or run:
```bash
.\start-dev.bat
```

### Option 2: Using npm
```bash
npm run dev
```

Your site will be available at: **http://localhost:4321**

## 📋 First Steps Checklist

### 1. Personalize Your Site (5 minutes)

- [ ] Open `src/layouts/BaseLayout.astro`
  - Line 22: Change "✨ Your Name" to your actual name
  
- [ ] Open `src/pages/index.astro`
  - Update the welcome message
  - Customize the introduction text
  
- [ ] Open `src/pages/about.astro`
  - Replace "[Your Name]" with your name
  - Write your bio and interests
  
- [ ] Open `src/pages/contact.astro`
  - Update email: `your.email@example.com`
  - Update social media links (Twitter, GitHub, LinkedIn)

### 2. Configure Your Domain

- [ ] Open `astro.config.mjs`
  - Change `site: 'https://yourdomain.com'` to your actual domain

### 3. Add Your First Blog Post

- [ ] Go to `src/content/blog/`
- [ ] Create a new file: `my-first-post.mdx`
- [ ] Copy this template:

```mdx
---
title: "My First Blog Post"
description: "This is my very first post on my new website!"
date: 2025-10-05
tags: ["personal", "first-post"]
draft: false
---

# Hello World!

This is my first blog post. Welcome to my website!

## What I'll Write About

- My thoughts and ideas
- Projects I'm working on
- Things I'm learning

Stay tuned for more!
```

### 4. Test Everything

- [ ] Visit `http://localhost:4321` - Homepage should load
- [ ] Click **Blog** - Should see your posts
- [ ] Click **About** - Should see your bio
- [ ] Click **Contact** - Should see your contact info
- [ ] Test 3D card effects by hovering over cards
- [ ] Check mobile responsiveness (press F12, toggle device toolbar)

## 🎨 Customization Guide

### Change Colors

Open `tailwind.config.mjs` and modify the colors in the `theme.extend` section.

Example - Change purple to blue:
```javascript
colors: {
  // Change from purple to blue throughout
  primary: '#3b82f6',  // blue-500
}
```

### Adjust Animations

In `tailwind.config.mjs`, you can modify:
- `animation` - Add or change animation names
- `keyframes` - Define how animations behave

### Modify Background Gradient

In `src/layouts/BaseLayout.astro`, line 15:
```astro
<div class="fixed inset-0 -z-10 bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900 animate-gradient"></div>
```

Change the colors:
```astro
<div class="fixed inset-0 -z-10 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 animate-gradient"></div>
```

## 📝 Migrating from Notion

See the detailed guide: **[NOTION_MIGRATION.md](NOTION_MIGRATION.md)**

Quick version:
1. Export from Notion (Markdown format)
2. Add frontmatter to each post
3. Rename to `.mdx`
4. Copy to `src/content/blog/`

## 🌐 Deploy Your Site

### Deploy to Vercel (Easiest)

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repo
5. Vercel auto-detects Astro - just click "Deploy"!
6. Done! Your site is live! 🎉

### Deploy to Netlify

1. Push code to GitHub (see above)
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect GitHub and select your repo
5. Settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy"!

## 🛠️ Common Tasks

### Add a New Page

1. Create file in `src/pages/`, e.g., `projects.astro`
2. Add to navigation in `src/layouts/BaseLayout.astro`

Example:
```astro
<li><a href="/projects">Projects</a></li>
```

### Add Images

1. Place images in `public/images/`
2. Reference in posts with `/images/your-image.jpg`

### Change Font

In `src/layouts/BaseLayout.astro`, line 52:
```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
```

Browse [Google Fonts](https://fonts.google.com), pick a font, and replace the URL.

## 📱 Mobile Testing

1. Start dev server: `npm run dev`
2. Press `F12` in your browser
3. Click the device icon (toggle device toolbar)
4. Test on different screen sizes

## 🐛 Troubleshooting

### Site won't start
```bash
# Delete node_modules and reinstall
rmdir /s node_modules
npm install
npm run dev
```

### Blog posts not showing
- Check `draft: false` in frontmatter
- Ensure file is in `src/content/blog/`
- Check the date format: `YYYY-MM-DD`

### Images not loading
- Images must be in `public/` folder
- Use paths starting with `/`
- Check file names (case-sensitive)

### Build errors
```bash
# Clear Astro cache
rmdir /s .astro
npm run dev
```

## 📚 Resources

- [Main README](README.md) - Complete documentation
- [Notion Migration Guide](NOTION_MIGRATION.md) - Move your blog
- [Astro Docs](https://docs.astro.build) - Learn more about Astro
- [Tailwind Docs](https://tailwindcss.com/docs) - CSS customization

## 💡 Tips

- **Work in iterations** - Start simple, add features gradually
- **Preview changes** - The dev server auto-reloads as you edit
- **Back up your work** - Commit to Git regularly
- **Experiment** - Try changing colors, animations, layouts!
- **Have fun** - This is YOUR space to be creative! ✨

## 🎉 You're Ready!

Your website is set up and ready to customize. Take it step by step, and enjoy building your digital home!

Questions? Check the README or the Astro documentation.

**Now go make it yours! 🚀**


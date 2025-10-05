# 📝 Migrating Your Blog from Notion to Your Website

This guide will walk you through moving your blog posts from Notion to your new personal website.

## Step 1: Export from Notion

1. Open Notion and navigate to your blog database/page
2. Click on the **`•••`** menu (top right)
3. Select **Export**
4. Choose these settings:
   - Export format: **Markdown & CSV**
   - Include subpages: **Yes** (if applicable)
   - Create folders for subpages: **Optional**
5. Click **Export** and download the ZIP file

## Step 2: Extract and Organize

1. Unzip the downloaded file
2. You'll see `.md` files (one for each blog post)
3. Each file contains your content in Markdown format

## Step 3: Convert to MDX Format

For each blog post file:

### Before (Notion Export - `my-post.md`):
```markdown
# My Post Title

This is my content...
```

### After (Your Website - `my-post.mdx`):
```mdx
---
title: "My Post Title"
description: "A brief summary of what this post is about"
date: 2025-10-05
tags: ["notion", "migration", "blog"]
draft: false
---

This is my content...
```

## Step 4: Add Frontmatter

At the very top of each `.mdx` file, add the frontmatter section:

```yaml
---
title: "Your Post Title"           # Required: The title of your post
description: "A brief summary"     # Required: Short description (for SEO)
date: 2025-10-05                   # Required: Publication date (YYYY-MM-DD)
tags: ["tag1", "tag2"]             # Optional: Categories/topics
draft: false                       # Optional: Set to true to hide from site
---
```

### Date Format
- Use this format: `2025-10-05` (YYYY-MM-DD)
- JavaScript Date object: `date: 2025-10-05` will be parsed automatically

### Tips for Frontmatter
- **Title:** Use quotes if it contains special characters
- **Description:** Keep it under 160 characters for better SEO
- **Tags:** Use lowercase, no spaces (use hyphens instead)
- **Draft:** Set to `true` to work on posts without publishing them

## Step 5: Handle Images

Notion exports include images, but you'll need to organize them:

### Option 1: Use Public Folder
1. Create a folder in `public/blog-images/`
2. Move your post images there
3. Update image references in your `.mdx` files:

```markdown
<!-- Notion export might have: -->
![image.png](Untitled%203.png)

<!-- Change to: -->
![Descriptive alt text](/blog-images/my-post-image.png)
```

### Option 2: Use External Hosting
1. Upload images to a service like [Cloudinary](https://cloudinary.com) or [Imgur](https://imgur.com)
2. Use the external URLs in your posts:

```markdown
![Alt text](https://your-cdn.com/image.jpg)
```

## Step 6: Clean Up Content

Notion might export some quirks. Look for and fix:

### Remove Notion IDs
```markdown
<!-- Remove these lines: -->
Notion ID: abc-123-def
Database: My Blog
```

### Fix Checkboxes
```markdown
<!-- Notion exports: -->
- [ ] Unchecked item
- [x] Checked item

<!-- These work fine in MDX! -->
```

### Fix Code Blocks
```markdown
<!-- Make sure code blocks have language specified: -->
```javascript
console.log('Hello!');
`` `

<!-- Instead of: -->
`` `
console.log('Hello!');
`` `
```

### Update Links
```markdown
<!-- Notion internal links: -->
[Another Post](notion://www.notion.so/another-post-123)

<!-- Change to: -->
[Another Post](/blog/another-post)
```

## Step 7: Copy Files to Your Site

1. Rename each file from `.md` to `.mdx`
2. Use a clear, URL-friendly filename:
   - Good: `my-first-blog-post.mdx`
   - Avoid: `Untitled 3.md` or `My Post!!!.md`

3. Copy all `.mdx` files to: `src/content/blog/`

Example structure:
```
src/content/blog/
├── welcome.mdx
├── my-notion-journey.mdx
├── web-design-tips.mdx
└── productivity-hacks.mdx
```

## Step 8: Test Your Posts

1. Start the dev server:
```bash
npm run dev
```

2. Visit `http://localhost:4321/blog`
3. Check each post to ensure:
   - ✅ Title displays correctly
   - ✅ Date is formatted properly
   - ✅ Images load
   - ✅ Links work
   - ✅ Code blocks render correctly

## Quick Reference: Complete Example

Here's a full example of a migrated post:

```mdx
---
title: "5 Productivity Tips I Learned from Using Notion"
description: "Discover how Notion transformed my workflow and the habits that stuck with me."
date: 2025-09-15
tags: ["productivity", "notion", "workflow", "tips"]
draft: false
---

# Introduction

When I first started using Notion, I had no idea how much it would change my approach to productivity...

## Tip 1: Master the Basics First

Don't try to build complex systems right away. Start with:

- Simple to-do lists
- Basic note-taking
- Daily journaling

![My simple Notion setup](/blog-images/notion-simple-setup.png)

## Tip 2: Templates Are Your Friend

Create templates for recurring tasks...

```javascript
// Example of automating with Notion API
const notion = new Client({ auth: process.env.NOTION_TOKEN });
```

## Conclusion

These tips helped me stay productive and I hope they help you too!

---

*Originally published on my Notion blog, now living here! 🎉*
```

## Automation Tips (Advanced)

If you have many posts, consider using a script:

1. Install `notion-to-md` npm package
2. Use Notion API to export programmatically
3. Automatically add frontmatter with a script

Let me know if you need help setting this up!

## Troubleshooting

### Post doesn't appear on blog page
- Check that `draft: false` (or remove draft field)
- Ensure date is in correct format
- Verify file is in `src/content/blog/` folder
- Check for syntax errors in frontmatter

### Images not loading
- Images must be in `public/` folder
- Use paths starting with `/` (e.g., `/images/photo.jpg`)
- Check file extensions match (case-sensitive on some systems)

### Formatting looks wrong
- Ensure there's a blank line between frontmatter and content
- Check that code blocks have closing backticks
- Verify markdown syntax is correct

## Need Help?

If you run into issues:
1. Check the browser console for errors
2. Look at the terminal where dev server is running
3. Refer to the main README.md for more details

---

Happy migrating! Your content deserves a beautiful home 🏡✨


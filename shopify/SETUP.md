# Setup Guide - Flores Island Coffee Shopify Theme

## 📋 Prerequisites

Before you begin, ensure you have:

1. **Node.js 18+** installed
2. **Shopify CLI** installed (`npm install -g @shopify/cli @shopify/theme`)
3. **Shopify Partner Account** and a development store
4. **Git** (optional, for version control)

## 🚀 Quick Start

### Step 1: Install Dependencies

```bash
cd shopify-theme
npm install
```

### Step 2: Build Assets

Build TailwindCSS and JavaScript files:

```bash
npm run build
```

This will:
- Compile `src/input.css` → `assets/application.css`
- Bundle Alpine.js + theme scripts → `assets/vendor.js`

### Step 3: Connect to Shopify Store

```bash
shopify theme dev --store=your-store.myshopify.com
```

Follow the prompts to:
1. Login to your Shopify account
2. Select your development store
3. The theme will be uploaded and a preview URL will be provided

### Step 4: Test Locally

Open the preview URL in your browser. The theme should load with all styling intact.

## 🎨 Customization

### Theme Editor

1. Go to your Shopify admin
2. Navigate to **Online Store > Themes**
3. Find "Flores Island Coffee" theme
4. Click **Customize**

You can now:
- Upload logos and images
- Edit section content
- Rearrange sections
- Modify colors (limited by theme design)

### Adding Content

#### Homepage Sections

The homepage uses these sections (in order):
1. **Hero Home** - Main hero with background image
2. **Our Values** - Grid of value cards
3. **Coffee Origin** - Two-column sustainability section
4. **Cultivation Story** - Map with factory info
5. **Coffee Harvest** - Full-width background section
6. **Product Showcase** - Product grid
7. **Specialty Beans** - Roasted beans showcase
8. **Coffee News** - Blog posts (requires blog setup)
9. **Newsletter Signup** - Email subscription

#### Creating Pages

1. **About Page:**
   - Create a new page in Shopify admin
   - Set template to `page.about`
   - Content will use predefined sections

2. **Contact Page:**
   - Create a new page with handle `contact`
   - Set template to `page.contact`
   - Includes contact form, map, and FAQ

### Blog Setup

To display news/blog posts:

1. Create a blog in Shopify admin
2. Add blog posts with featured images
3. In theme editor, edit "Coffee News" section
4. Select your blog from the dropdown

## 🔧 Development Workflow

### Watch Mode

For active development:

```bash
npm run watch:css
```

This watches for CSS changes and rebuilds automatically.

### Making Changes

**To modify styling:**
1. Edit `src/input.css` or `tailwind.config.js`
2. Run `npm run build:css` or use watch mode
3. Changes appear immediately in browser

**To modify JavaScript:**
1. Edit `assets/theme.js`
2. Run `npm run build:js`
3. Refresh browser to see changes

**To modify templates:**
1. Edit `.liquid` files in `sections/`, `snippets/`, or `templates/`
2. Changes sync automatically if using `shopify theme dev`

## 📦 Deployment

### Deploy to Live Theme

```bash
npm run deploy
```

Or manually:

```bash
npm run build
shopify theme push --live
```

⚠️ **Warning:** This overwrites the live theme. Test thoroughly first!

### Best Practice Deployment

1. Create a duplicate of current live theme (backup)
2. Push to a new unpublished theme:
   ```bash
   npm run build
   shopify theme push --unpublished
   ```
3. Test the new theme thoroughly
4. Publish when ready in Shopify admin

## 🖼️ Assets Management

### Uploading Images

**Option 1: Through Shopify Admin**
1. Go to **Content > Files**
2. Upload images
3. Copy the URL
4. Use in theme editor or liquid files

**Option 2: In Theme Files**
1. Place images in `assets/` folder
2. Reference as `{{ 'filename.jpg' | asset_url }}`

### Required Images

For full theme functionality, upload:
- Header logo (transparent background recommended)
- Footer logo (white version)
- Hero background image
- Coffee icon/logo
- Value card icons (4x)
- Product images
- Team photos
- Factory/origin images

## 🎯 SEO Setup

### Meta Tags

Meta tags are automatically generated from:
- Page titles
- Page descriptions (set in page editor)
- Featured images

### Structured Data

Consider adding JSON-LD structured data for:
- Organization
- LocalBusiness
- Products

## 🐛 Troubleshooting

### CSS Not Loading

1. Check that `assets/application.css` exists
2. Rebuild: `npm run build:css`
3. Clear browser cache
4. Check Shopify file upload limits

### JavaScript Not Working

1. Check browser console for errors
2. Rebuild: `npm run build:js`
3. Verify Alpine.js is loaded (check `vendor.js`)

### Sections Not Appearing

1. Verify JSON syntax in template files
2. Check section schema in `.liquid` files
3. Ensure section type matches filename

### Mobile Menu Not Opening

1. Check that Alpine.js is loaded
2. Verify `x-data` attributes in header
3. Check browser console for JavaScript errors

## 📱 Testing Checklist

Before going live:

- [ ] Test on mobile devices (iOS & Android)
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)
- [ ] Verify all links work
- [ ] Test contact form submission
- [ ] Test newsletter signup
- [ ] Check page load speed
- [ ] Verify images are optimized
- [ ] Test navigation (desktop & mobile)
- [ ] Check footer links
- [ ] Test search functionality (if implemented)
- [ ] Verify SEO meta tags

## 🔄 Updating

### Updating Dependencies

```bash
npm update
npm run build
```

### Pulling Theme from Shopify

To download current live theme:

```bash
shopify theme pull
```

## 📞 Support

For issues specific to:
- **Shopify Platform:** [Shopify Help Center](https://help.shopify.com)
- **TailwindCSS:** [TailwindCSS Docs](https://tailwindcss.com/docs)
- **Alpine.js:** [Alpine.js Docs](https://alpinejs.dev)

## 📝 Notes

- The `@theme` directive in CSS is valid for TailwindCSS v4 - linter warnings can be ignored
- Alpine.js provides reactive components (mobile menu, scroll effects)
- All colors and fonts match the original React design
- Theme is fully responsive and accessibility-friendly

## 🎉 Next Steps

1. Upload brand assets (logos, images)
2. Create pages (About, Contact, etc.)
3. Set up blog and add posts
4. Configure theme settings
5. Test thoroughly
6. Launch! 🚀

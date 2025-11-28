# Flores Island Coffee - Shopify Theme

Shopify Liquid theme converted from React SPA, preserving all TailwindCSS styling and design.

## 🚀 Features

- **TailwindCSS v4** - Same styling as React version
- **Alpine.js** - For interactive components
- **Responsive Design** - Mobile-first approach
- **SEO Optimized** - Meta tags and structured data
- **Custom Sections** - Modular and reusable
- **Custom Fonts** - Cormorant Garamond & Raleway

## 📁 Structure

```
shopify-theme/
├── assets/           # CSS, JS, images
├── config/           # Theme settings
├── layout/           # theme.liquid
├── locales/          # Translations
├── sections/         # Reusable sections
├── snippets/         # Small reusable components
├── templates/        # Page templates
└── src/              # Source files for build
```

## 🛠️ Setup & Development

### Prerequisites
- Node.js 18+ 
- Shopify CLI
- NPM or Yarn

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Build CSS:**
```bash
npm run build:css
```

3. **Build JavaScript:**
```bash
npm run build:js
```

4. **Build all assets:**
```bash
npm run build
```

### Development

**Watch CSS changes:**
```bash
npm run watch:css
```

**Development with Shopify CLI:**
```bash
npm run dev
```

This will:
- Watch for CSS changes with TailwindCSS
- Start Shopify theme dev server
- Enable hot reload

### Deployment

**Deploy to Shopify:**
```bash
npm run deploy
```

Or manually:
```bash
npm run build
shopify theme push
```

## 🎨 Customization

### Colors

All colors are defined in `tailwind.config.js` and `src/input.css`:

- **Primary:** `#005E75` (flores-primary)
- **Light:** `#9AD7E5` (flores-light)
- **Footer:** `#143F58` (flores-footer)
- **Separator:** `#E2F4F7` (flores-separator)

### Fonts

- **Heading:** Cormorant Garamond (Google Fonts)
- **Body:** Raleway (Google Fonts)

### Sections

All sections are customizable through the Shopify theme editor:

- **hero-home** - Homepage hero section
- **our-values** - Values grid with cards
- **coffee-origin** - Two-column content section
- **coffee-harvest** - Full-width background section
- **newsletter-signup** - Email subscription form
- And more...

## 📝 Page Templates

- `index.json` - Homepage
- `page.about.json` - About page
- `page.contact.json` - Contact page
- `page.json` - Default page template

## 🔧 Configuration

### Theme Settings

Edit `config/settings_schema.json` to add global theme settings accessible in the theme editor.

### Alpine.js

Interactive components use Alpine.js for reactivity. Examples:
- Mobile menu toggle
- Scroll-based header styling
- Modal dialogs

## 📦 Build Process

### CSS Build
TailwindCSS processes `src/input.css` → `assets/application.css`

### JavaScript Build  
`build-js.js` bundles Alpine.js + theme scripts → `assets/vendor.js`

## ⚠️ Important Notes

1. **TailwindCSS v4** uses `@theme` directive - CSS linter warnings can be ignored
2. **Alpine.js** is bundled in vendor.js - included in theme.liquid
3. **Images** should be uploaded to Shopify admin or placed in assets/
4. **Custom sections** can be added/removed in theme editor

## 🔗 Original React App

This theme is a conversion from the React + Vite application maintaining:
- ✅ All TailwindCSS classes
- ✅ Same color scheme
- ✅ Same typography
- ✅ Same layout structure
- ✅ Responsive design
- ✅ Animations (CSS-based)

## 📞 Support

For issues or questions about this theme, refer to:
- [Shopify Theme Documentation](https://shopify.dev/themes)
- [TailwindCSS Documentation](https://tailwindcss.com/)
- [Alpine.js Documentation](https://alpinejs.dev/)

## 📄 License

Copyright © 2025 Flores Island Coffee. All rights reserved.

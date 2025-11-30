# Flores Island Coffee - Shopify Theme

A high-performance, optimized Shopify theme for Flores Island Coffee, built following Shopify best practices.

## ✨ Features

- 🎨 **Modern Design** - Clean, professional layout dengan brand identity yang kuat
- ⚡ **Performance Optimized** - Lazy loading, resource hints, dan optimized assets
- ♿ **Accessibility First** - WCAG 2.1 AA compliant dengan proper ARIA labels
- 📱 **Fully Responsive** - Mobile-first approach, optimal di semua devices
- 🌐 **SEO Ready** - Semantic HTML, meta tags, dan structured data
- 🎯 **Conversion Focused** - Clear CTAs dan user-friendly navigation
- 🔧 **Developer Friendly** - Well-organized code dengan comprehensive documentation

## 🛠 Tech Stack

- **Shopify Liquid** - Template language untuk dynamic content
- **Tailwind CSS v3.4** - Utility-first CSS framework
- **Alpine.js v3** - Lightweight JavaScript untuk interactivity
- **PostCSS** - CSS processing dan optimization
- **Autoprefixer** - Automatic vendor prefixes

## 📁 Project Structure

```
shopify/
├── assets/              # Compiled & minified assets
│   ├── application.css  # Main stylesheet (compiled)
│   ├── theme.js        # Theme JavaScript
│   └── vendor.js       # Third-party libraries
├── config/
│   └── settings_schema.json  # Theme settings
├── layout/
│   └── theme.liquid    # Main layout template
├── locales/
│   └── en.default.json # Translations
├── sections/           # 21 sections
│   ├── header.liquid
│   ├── footer.liquid
│   ├── hero-home.liquid
│   ├── our-values.liquid
│   └── ...
├── snippets/           # Reusable components
│   ├── product-card.liquid
│   ├── icon.liquid
│   ├── meta-tags.liquid
│   └── scroll-to-top-button.liquid
├── src/
│   └── input.css       # Source CSS dengan Tailwind
├── templates/          # Page templates (JSON)
│   ├── index.json
│   ├── page.about.json
│   └── page.contact.json
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── OPTIMIZATION.md     # Detailed optimization guide
└── README.md
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** v16 atau lebih baru
- **npm** atau **yarn**
- **Shopify CLI** ([Install Guide](https://shopify.dev/themes/tools/cli/installation))
- **Shopify Partner Account** atau **Store Access**

### Installation

1. **Clone atau download repository**

2. **Install dependencies:**
```bash
cd shopify
npm install
```

3. **Login ke Shopify:**
```bash
shopify login
```

4. **Connect ke store:**
```bash
shopify theme dev --store=your-store.myshopify.com
```

### Development Workflow

**Start development server:**
```bash
npm run dev
```

Ini akan:
- Watch CSS changes dan auto-compile
- Start Shopify theme dev server
- Open preview di browser dengan hot reload

**Build CSS only:**
```bash
npm run build:css
```

**Watch CSS changes:**
```bash
npm run watch:css
```

**Build untuk production:**
```bash
npm run build
```

## 📦 Deployment

### Deploy ke Shopify

**Development deployment:**
```bash
shopify theme push --development
```

**Production deployment:**
```bash
npm run deploy
```

atau manual:
```bash
npm run build
shopify theme push
```

### Pre-deployment Checklist

- [ ] Run `npm run build` untuk compile assets
- [ ] Test di mobile devices
- [ ] Check accessibility dengan screen reader
- [ ] Verify SEO meta tags
- [ ] Test performance dengan Lighthouse
- [ ] Backup current theme

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

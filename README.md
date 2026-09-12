# Silverstar Glass Website

**Modern, premium glass installation website for DFW**

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)  
![React](https://img.shields.io/badge/React-18-blue?logo=react)  
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)  
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?logo=tailwindcss)  
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-10-black)

---

## 🎨 Features

✨ **Premium, modern design** — Bright, clean UI with soft animations  
📱 **Mobile-first responsive** — Single-column on mobile, full-featured on desktop  
⚡ **Fast performance** — Optimized animations, lazy-loaded images  
♿ **Accessible** — WCAG 2.1 AA compliant, keyboard navigation, screen reader friendly  
🎬 **Smooth animations** — Scroll-triggered entries, hover effects, micro-interactions  
📞 **Conversion-focused** — Multiple CTAs, sticky mobile action bar, clear process  
🌐 **SEO-optimized** — Meta tags, structured data, semantic HTML  

---

## 📋 Sections

### 1. **Hero** — Trust + CTA
Bright, energetic introduction with headline, subheadline, and dual CTAs (estimate + call).

### 2. **Services** — Card Grid
Five service offerings (Windows, Residential Glass, Mirrors, Showers, Screens) with icons and descriptions.

### 3. **Why Choose Us** — Trust Signals
4 pillars + 4 badges (Locally owned, Free estimates, Hablamos Español, Financing) with team image.

### 4. **Featured Projects** — Gallery
Masonry/grid of project photos with hover overlays and location labels.

### 5. **Process** — 4-Step Stepper
Simple journey: Reach out → Get plan → Install day → Enjoy result.

### 6. **Testimonials** — Social Proof
3 customer reviews with names, cities, quotes, and 5-star ratings.

### 7. **Contact** — Conversion Hub
Three info cards (Call, Service area, Text) + contact form for free estimates.

### 8. **Footer** — Navigation & Links
Brand, services, company info, and contact details.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (React 18, TypeScript)
- **Styling:** Tailwind CSS 3 with custom design tokens
- **Animation:** Framer Motion 10 + react-intersection-observer
- **Type Safety:** TypeScript 5
- **Build:** Vite / Next.js built-in
- **Hosting:** Vercel (recommended)

---

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm/yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/AnibalSS/silverstar-glass.git
cd silverstar-glass

# Install dependencies
npm install

# Run development server
npm run dev

# Open in browser
# http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles + animations
├── components/
│   ├── Navbar.tsx          # Navigation + mobile menu
│   ├── Hero.tsx            # Hero section
│   ├── Services.tsx        # Services grid
│   ├── WhyChooseUs.tsx     # Trust section
│   ├── Gallery.tsx         # Project gallery
│   ├── Process.tsx         # 4-step process
│   ├── Testimonials.tsx    # Reviews
│   ├── Contact.tsx         # Contact form + info
│   ├── Footer.tsx          # Footer
│   └── MobileActionBar.tsx # Sticky CTA bar (mobile)
public/
├── images/                 # Hero, gallery, team photos
└── icons/                  # Service icons (SVGs)
docs/
├── DESIGN_SYSTEM.md        # Complete design spec
├── SPEC.md                 # Project specification
└── FIGMA_EXPORT.json       # Design tokens (Figma export)
```

---

## 🎨 Design System

### Colors

```
Primary Blue:    #1F7FD9
Accent Cyan:     #4FC3F7
Text Primary:    #22252A
Text Muted:      #6F7782
Bg Light:        #F7FBFF
Border Light:    #E3E8EF
```

### Typography

- **Headings:** Poppins (or Inter, -0.5px letter-spacing)
- **Body:** Inter (16px, 1.6 line-height)

### Animations

- **Entrance:** Fade-in + slide-up (600ms, staggered 100–150ms)
- **Hover:** Lift + shadow intensify (300ms)
- **Transitions:** All 200–300ms ease-out

See [`docs/DESIGN_SYSTEM.md`](docs/DESIGN_SYSTEM.md) for full specification.

---

## 🚀 Features in Detail

### Responsive Design

- ✅ Mobile-first approach
- ✅ Sticky bottom action bar on mobile (Call + Quote)
- ✅ Full-width hero image on mobile
- ✅ Single-column layout for all sections
- ✅ Optimized touch targets (44px+)

### Animations

- ✅ Hero text & image entrance on page load
- ✅ Scroll-triggered section animations
- ✅ Staggered card entrances
- ✅ Hover lift + shadow effects
- ✅ Light, performant animations (no jank)

### Accessibility

- ✅ WCAG 2.1 AA compliant
- ✅ Semantic HTML structure
- ✅ Keyboard navigation
- ✅ Focus states visible
- ✅ Color contrast ≥ 4.5:1
- ✅ Screen reader friendly
- ✅ Form labels & error states

### Performance

- ✅ Optimized images (Next.js `<Image>`)
- ✅ Lazy loading components & gallery
- ✅ CSS purging via Tailwind
- ✅ GPU-accelerated animations
- ✅ Minimal JavaScript bundle

### SEO

- ✅ Meta tags & Open Graph
- ✅ Semantic HTML
- ✅ Fast page load (optimized for Core Web Vitals)
- ✅ Mobile-friendly
- ✅ Structured data ready

---

## 📞 Contact Information

**Phone:** (469) 616-5555  
**Service Area:** Dallas, Fort Worth, Arlington, DFW  
**Languages:** English, Español  
**Services:** Windows, Residential Glass, Mirrors, Shower Enclosures, Screens  

---

## 🔧 Customization

### Update Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: "#YOUR_COLOR",
  accent: "#YOUR_COLOR",
  // ...
}
```

### Update Content

Each component has hardcoded content. To make it dynamic, pass props:

```tsx
<Hero headline="..." subheadline="..." />
<Services services={servicesArray} />
```

### Update Typography

Edit font families in `tailwind.config.js` and `globals.css`.

---

## 📊 Lighthouse Targets

- **Performance:** ≥ 90
- **Accessibility:** ≥ 95
- **Best Practices:** ≥ 95
- **SEO:** ≥ 95

---

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Other Platforms

Next.js builds work on any Node.js hosting (Netlify, AWS, Heroku, etc.).

```bash
npm run build
npm start
```

---

## 📝 Environment Variables

Create a `.env.local` file:

```
NEXT_PUBLIC_PHONE=(469) 616-5555
NEXT_PUBLIC_FORM_ENDPOINT=https://api.example.com/contact
```

---

## 📚 Documentation

- **Design System:** [`docs/DESIGN_SYSTEM.md`](docs/DESIGN_SYSTEM.md)
- **Specification:** [`docs/SPEC.md`](docs/SPEC.md)
- **Figma Export:** [`docs/FIGMA_EXPORT.json`](docs/FIGMA_EXPORT.json)

---

## 🤝 Contributing

Feel free to fork, modify, and use this template for your own projects.

---

## 📄 License

MIT License — See LICENSE file for details.

---

## 🙋 Support

For questions or issues:
1. Check the documentation in `/docs`
2. Review the component code
3. Open an issue on GitHub

---

**Built with ❤️ for Silverstar Glass**

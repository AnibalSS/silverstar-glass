# Silverstar Glass — Quick Start Guide

## Installation

```bash
git clone https://github.com/AnibalSS/silverstar-glass.git
cd silverstar-glass
npm install
npm run dev
```

Open http://localhost:3000

## Key Files

- **Pages:** `src/app/page.tsx` (home page layout)
- **Components:** `src/components/` (8 main sections)
- **Styles:** `tailwind.config.js` (design tokens), `src/app/globals.css` (animations)
- **Docs:** `docs/DESIGN_SYSTEM.md`, `docs/SPEC.md`

## Customization

### Update Content

Edit component files directly. Content is hardcoded for now.

```tsx
// src/components/Hero.tsx
export const Hero = () => {
  return (
    <h1>Your Headline Here</h1>
  )
}
```

### Update Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: "#YOUR_COLOR",
  accent: "#YOUR_COLOR",
}
```

### Update Animations

Edit `src/utils/animations.ts` or component-level animation props.

## Scripts

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run linter
```

## Deployment

### Vercel

```bash
vercel deploy
```

### Other Platforms

```bash
npm run build
npm start
```

## Next Steps

1. Replace placeholder images in `public/images/`
2. Update contact form endpoint in `Contact.tsx`
3. Add Google Analytics tracking ID
4. Set up email notifications for form submissions
5. Configure custom domain
6. Deploy to Vercel or hosting platform

## Need Help?

Check:
- `docs/DESIGN_SYSTEM.md` for design specs
- `docs/SPEC.md` for technical details
- Component code comments for implementation notes

---

**Built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion**

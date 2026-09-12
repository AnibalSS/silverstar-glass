# Silverstar Glass — Project Specification & Architecture

## Project Overview

**Name:** Silverstar Glass  
**Type:** Modern, premium business website  
**Purpose:** Showcase glass installation services (residential & commercial) for DFW area  
**Target Audience:** Homeowners and business owners in Dallas, Fort Worth, Arlington, and surrounding areas  
**Tech Stack:** Next.js 14+, React 18, TypeScript, Tailwind CSS, Framer Motion  

---

## Page Structure

### Home Page (`/`)

#### 1. **Hero Section**
- **Layout:** Two-column (left text, right image)
- **Headline:** "Bright, modern glasswork for homes and businesses across DFW."
- **Subheadline:** Trust + benefit statement
- **CTAs:** Primary (Request estimate) + Secondary (Call button)
- **Visuals:** Glass accent shapes, soft shadow under image
- **Animation:** Text fade-in + slide-up, image scale-in

#### 2. **Services Section** (`#services`)
- **Layout:** 3–5 card grid
- **Content:** Windows, Residential Glass, Mirrors, Showers, Screens
- **Component:** Service card with icon, title, description, "Learn more" link
- **Interaction:** Hover lift, border color shift to primary
- **Animation:** Staggered entrance (100–150ms offset)

#### 3. **Why Choose Us / Trust Section**
- **Layout:** Two-column (left text + pillars, right image/photo)
- **Pillars:** Professional & modern, Clean installs, Friendly communication, Residential & commercial expertise
- **Badges:** Locally owned, Free estimates, Hablamos Español, Financing available
- **Background:** Light gray or subtle gradient
- **Animation:** Fade-in + slide-up on scroll

#### 4. **Featured Projects / Gallery Section** (`#gallery`)
- **Layout:** Masonry or 3-column grid
- **Content:** 6+ project photos with labels ("Custom shower · Garland, TX")
- **Interaction:** Hover zoom-in + overlay with label
- **Optional:** Lightbox for full-screen view
- **Animation:** Staggered fade-in as items scroll into view

#### 5. **Process / How It Works Section** (`#process`)
- **Layout:** 4-step horizontal stepper
- **Steps:**
  1. Reach out (Call, text, photos)
  2. Get a clear plan (Options, pricing, timeline)
  3. Install day (Clean, respectful, professional)
  4. Enjoy the result (Bright, modern glass)
- **Visuals:** Icons, numbered circles, soft connecting lines
- **Animation:** Step cards fade-in on scroll

#### 6. **Testimonials / Reviews Section**
- **Layout:** 3-column card grid
- **Content:** Name, city, star rating (5 stars), quote
- **Styling:** Light gray/gradient background to stand out
- **Animation:** Cards fade-in as they scroll into view

#### 7. **Contact / CTA Section** (`#contact`)
- **Layout:** Three info cards (Call, Service area, Text) + contact form
- **Form Fields:** Name, Email, Phone, Message
- **Submit Button:** "Request Free Estimate"
- **Form Styling:** Clean inputs with focus ring, larger on mobile
- **Background:** Gradient from white to light blue

#### 8. **Footer**
- **Content:** Logo, services links, quick links, contact info (phone, service area, language)
- **Background:** Dark charcoal (#22252A)
- **Text:** White / light gray
- **Links:** Hover to accent color

### Mobile Navigation
- **Sticky Top Bar:** Logo + hamburger menu (collapse/expand)
- **Mobile Action Bar (Sticky Bottom):** Two-button bar with "Call Now" and "Get Quote"
- **Responsive:** Single-column layout, full-width hero image, centered text

---

## File Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page (page composition)
│   └── globals.css          # Global styles + animations
├── components/
│   ├── Navbar.tsx           # Navigation + mobile menu
│   ├── Hero.tsx             # Hero section
│   ├── Services.tsx         # Services card grid
│   ├── WhyChooseUs.tsx      # Trust section with pillars
│   ├── Gallery.tsx          # Project gallery grid
│   ├── Process.tsx          # 4-step process stepper
│   ├── Testimonials.tsx     # Reviews cards
│   ├── Contact.tsx          # Contact form + info cards
│   ├── Footer.tsx           # Footer
│   └── MobileActionBar.tsx  # Sticky mobile CTA bar
├── hooks/                   # Custom React hooks (if needed)
├── utils/                   # Utility functions
├── types/                   # TypeScript types/interfaces
public/
├── images/                  # Hero, gallery, team photos
├── icons/                   # Service icons (SVGs)
docs/
├── DESIGN_SYSTEM.md        # Full design spec
├── SPEC.md                 # This file
├── FIGMA_EXPORT.json       # Figma component & token export
README.md
package.json
tailwind.config.js
next.config.js
tsconfig.json
```

---

## Component API

### Hero Component
```tsx
<Hero />
// Props: None (content is hardcoded for now)
// State: None
// Animation: Framer Motion fade-in + slide-up on load
```

### Service Card Component (inside Services)
```tsx
interface ServiceCard {
  id: number;
  title: string;
  description: string;
  icon: string; // emoji or SVG
}
```

### Gallery Component
```tsx
interface Project {
  id: number;
  title: string;
  location: string;
  category: string;
  imageUrl?: string; // placeholder if not provided
}
```

### Process Component
```tsx
interface Step {
  number: number;
  title: string;
  description: string;
  icon: string;
}
```

### Testimonial Component
```tsx
interface Testimonial {
  id: number;
  name: string;
  city: string;
  quote: string;
  rating: number; // 1–5 stars
}
```

---

## Styling Strategy

### Tailwind CSS Configuration
- **Custom theme:** Colors, spacing, shadows in `tailwind.config.js`
- **Semantic color names:** `primary`, `accent`, `text-primary`, `text-muted`
- **Custom animations:** `fade-in`, `slide-up`, `scale-in`
- **Utilities:** `btn-primary`, `btn-outline`, `card-hover` classes

### Global Styles (`globals.css`)
- **Font setup:** Poppins for headings, Inter for body
- **Smooth scroll:** Applied to `html`
- **Animation keyframes:** Defined for reuse across components
- **Responsive:** Mobile-first approach (TW defaults)

---

## Animation Specifications

### On Page Load
- **Hero text:** fade-in + slide-up (0.6s, ease-out)
- **Hero image:** scale-in (0.6s, ease-out, delay 0.2s)

### On Scroll (Intersection Observer)
- **Section headings:** fade-in + slide-up (0.6s, ease-out)
- **Cards:** staggered entrance (0.1–0.15s offset per item, 0.6s duration)
- **Gallery items:** fade-in as they come into view

### On Hover
- **Buttons:** translateY(-2px) + shadow-lift (0.2–0.3s)
- **Cards:** translateY(-4px) + shadow intensify (0.3s)
- **Links:** color shift + underline animation (0.2s)

### Easing Functions
```
Default: ease-out
Premium feel: cubic-bezier(0.4, 0, 0.2, 1) or similar
```

---

## Accessibility

### WCAG 2.1 Compliance (AA)
- ✅ Color contrast ratios ≥ 4.5:1 for text
- ✅ Interactive elements ≥ 44px × 44px (touch targets)
- ✅ Focus states visible (ring-2 ring-primary)
- ✅ Form labels associated with inputs
- ✅ Semantic HTML (headings, lists, buttons)
- ✅ Alt text on images (to be added when images are loaded)
- ✅ Keyboard navigation supported
- ✅ Screen reader friendly

### Mobile Accessibility
- ✅ Tap targets at least 44–48px
- ✅ Font size ≥ 16px (no zoom required for forms)
- ✅ Sufficient color contrast on small screens
- ✅ No horizontal scrolling

---

## Performance Considerations

### Optimization Strategies
- **Image loading:** Use Next.js `<Image>` component with `loading="lazy"`
- **Code splitting:** Each component is a separate chunk (automatic in Next.js)
- **CSS-in-JS:** Tailwind purges unused styles in production
- **Animation perf:** Use GPU-accelerated transforms (translate, scale, opacity)
- **Lazy components:** Testimonials & gallery can be lazy-loaded

### Lighthouse Targets
- Performance: ≥ 90
- Accessibility: ≥ 95
- Best Practices: ≥ 95
- SEO: ≥ 95

---

## SEO & Meta Tags

### Page Title
"Silverstar Glass | DFW Glass Installation & Repair"

### Meta Description
"Professional glass installation and repair for homes and businesses across DFW. Windows, mirrors, shower enclosures, and more."

### Keywords
glass installation, glass repair, DFW, Dallas, Fort Worth, windows, mirrors, shower enclosures, commercial glass

### Open Graph Tags
```html
<meta property="og:title" content="Silverstar Glass | DFW Glass Installation" />
<meta property="og:description" content="Professional glass services..." />
<meta property="og:image" content="/og-image.jpg" />
<meta property="og:url" content="https://silverstar-glass.com" />
```

---

## Contact Information (Hardcoded)

**Phone:** (469) 616-5555  
**Service Area:** Dallas, Fort Worth, Arlington, and surrounding DFW areas  
**Languages:** English, Español  
**Financing:** Available (badge, no details yet)

---

## Future Enhancements

1. **Blog section** for glass care tips, installation guides
2. **Appointment booking** integration (Calendly, Acuity, etc.)
3. **Before/after gallery** with slider
4. **Customer testimonial video** section
5. **Live chat** (Intercom, Drift, etc.)
6. **Service area map** (Google Maps embed)
7. **Financing options** detail page
8. **FAQ section** (collapsible accordion)
9. **Email automation** (Mailchimp, ConvertKit for newsletter)
10. **Analytics** (Google Analytics 4, heat mapping with Hotjar)

---

## Development Checklist

- [ ] Set up Next.js project with TypeScript
- [ ] Install Tailwind CSS & Framer Motion
- [ ] Create component structure
- [ ] Implement Hero section with animations
- [ ] Add Services grid
- [ ] Build Why Choose Us section
- [ ] Create Gallery with hover effects
- [ ] Implement Process stepper
- [ ] Add Testimonials cards
- [ ] Build Contact form (validation pending backend)
- [ ] Add Footer
- [ ] Implement mobile navigation & action bar
- [ ] Add intersection observer for scroll animations
- [ ] Optimize images & lazy load
- [ ] Test accessibility (axe, WAVE)
- [ ] Test on mobile devices
- [ ] Set up analytics
- [ ] Deploy to Vercel or hosting platform
- [ ] Set up custom domain
- [ ] Configure email notifications for form submissions

---

## Deployment

### Recommended Platform
**Vercel** (optimized for Next.js)

### Environment Variables
```
NEXT_PUBLIC_PHONE=(469) 616-5555
NEXT_PUBLIC_FORM_ENDPOINT=https://api.example.com/contact
```

### Build & Deploy
```bash
npm run build
vercel deploy
```

---

## Contact & Support

**Project Owner:** Silverstar Glass  
**Developed By:** [Your Name/Team]  
**Last Updated:** 2026-09-12

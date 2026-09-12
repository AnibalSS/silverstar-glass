# Silverstar Glass — Design System & Specification

## Overview

This document outlines the complete design system, color palette, typography, component patterns, and animation guidelines for the Silverstar Glass website.

---

## Color Palette

### Primary Colors

```
Primary Blue:     #1F7FD9
Accent Cyan:      #4FC3F7
```

### Background Colors

```
Hero Gradient Top:     #F7FBFF
Base/Default:          #FFFFFF
Card/Section BG:       #F5F7FA
Light Gray:            #F5F7FA
```

### Text Colors

```
Primary Text:     #22252A (Charcoal)
Muted Text:       #6F7782 (Gray)
Light Text:       #FFFFFF (on dark backgrounds)
```

### Border & Shadows

```
Border Light:     #E3E8EF
Shadow Soft:      0 4px 12px rgba(0, 0, 0, 0.08)
Shadow Card:      0 2px 8px rgba(0, 0, 0, 0.06)
Shadow Lift:      0 12px 24px rgba(0, 0, 0, 0.12)
```

---

## Typography System

### Heading Font
**Family:** Poppins, Inter, or SF (system sans-serif)
- **Letter Spacing:** -0.5px (tight, confident look)
- **Weight:** Bold (700) for main headings

### Body Font
**Family:** Inter, Source Sans Pro, or system sans-serif
- **Size:** 16px (default)
- **Line Height:** 1.6 (comfortable reading)
- **Weight:** Regular (400) for body text

### Hierarchy

```
H1: 48px–60px, Bold, -0.5px tracking
H2: 36px–48px, Bold, -0.5px tracking
H3: 24px–32px, Bold, -0.5px tracking
H4: 18px–20px, Bold, -0.5px tracking
Body: 16px, Regular, 1.6 line height
Small: 14px, Regular, 1.5 line height
```

---

## Component Patterns

### Buttons

#### Primary Button
```
Background: #1F7FD9
Text Color: #FFFFFF
Padding: 12px 24px (3 x 6 in Tailwind)
Border Radius: 8px
Font Weight: Medium (500)
Hover State: shadow-lift + translateY(-2px)
Active State: translateY(0)
Transition: 300ms ease-out
```

#### Secondary (Outline) Button
```
Background: Transparent
Border: 2px solid #1F7FD9
Text Color: #1F7FD9
Padding: 12px 24px
Hover State: bg-primary, text-white, full invert
Transition: 300ms ease-out
```

### Cards

```
Background: #FFFFFF
Border: 1px solid #E3E8EF
Border Radius: 12px–16px
Shadow: 0 2px 8px rgba(0, 0, 0, 0.06)
Padding: 24px (6 in Tailwind)
Hover: shadow-lift, translateY(-4px), border → primary
Transition: 300ms ease-out
```

### Form Inputs

```
Background: #F5F7FA
Border: 1px solid #E3E8EF
Border Radius: 8px
Padding: 12px 16px
Focus: ring-2 ring-primary (offset 0)
Font: 16px, body font
Placeholder: #6F7782
```

---

## Animation Guidelines

### Entrance Animations (On Scroll)

**Fade In + Slide Up:**
```
Duration: 600ms
Delay: 0–300ms (staggered by 100–150ms per item)
Easing: ease-out or cubic-bezier(0.4, 0, 0.2, 1)
Transform: translateY(20px) → translateY(0)
Opacity: 0 → 1
```

**Scale In:**
```
Duration: 600ms
Delay: 200–300ms
Easing: ease-out
Transform: scale(0.95) → scale(1)
Opacity: 0 → 1
```

### Hover Animations

**Card Lift:**
```
Duration: 200–300ms
Transform: translateY(-4px)
Shadow: card → lift
Border Color: light → primary (optional)
```

**Button Hover:**
```
Duration: 200ms
Transform: translateY(-2px) + shadow lift
Color: shift to secondary state
```

**Icon/Link Hover:**
```
Duration: 200ms
Gap increase: 0 → 8px (arrow appears to move right)
```

### Page Transitions

```
Duration: 300–400ms
Easing: ease-in-out
Fade + slight scale for smoothness
```

---

## Layout & Spacing

### Container
```
Max Width: 1280px (7xl in Tailwind)
Horizontal Padding: 16px (mobile), 24px (tablet), 32px (desktop)
Vertical Padding (sections): 96px (24 in Tailwind)
```

### Gaps
```
Section to section: 96px
Component gaps: 24px–32px
Intra-component gaps: 16px–24px
```

### Responsive Breakpoints
```
Mobile: 375px–640px
Tablet: 641px–1024px
Desktop: 1025px+
```

---

## Accessibility & Mobile

### Touch Targets
- Minimum 44px × 44px for all interactive elements
- Extra padding on mobile buttons (48px+)

### Mobile-First Animations
- Disable heavy parallax on mobile
- Use simple fade-in/slide-up only
- Reduce animation duration to 400ms max
- Prefer `prefers-reduced-motion` media query

### Form Accessibility
- All inputs have associated labels (semantic HTML)
- Focus states clearly visible (ring-2 ring-primary)
- Error states use color + text (not color alone)

---

## Glass Morphism (Accent Visual)

### Subtle Background Elements
```
Background: rgba(255, 255, 255, 0.7)
Backdrop Filter: blur(10px)
Border: 1px solid rgba(255, 255, 255, 0.2)
Opacity: Low (5%–10%) for accent shapes
Use: Behind hero image, section dividers
```

---

## Premium Feel Checklist

✅ Tight heading letter-spacing (-0.5px)  
✅ Consistent 300ms transitions (no jank)  
✅ Soft, wide shadows (not harsh)  
✅ Ample whitespace (breathing room)  
✅ Smooth scroll behavior  
✅ Micro-interactions on hover  
✅ Light, modern color palette  
✅ Sentence case (not all caps)  
✅ Rounded corners (12–16px cards)  
✅ Glass accent shapes (blurred, low opacity)  

---

## Figma/Design Export Format

For design handoff, export as:
- **Color styles** with semantic naming (primary, accent, text-primary, etc.)
- **Text styles** (H1, H2, Body, Small)
- **Component library** (Button/Primary, Button/Secondary, Card, Input)
- **Shadow styles** (soft, card, lift)
- **Animation presets** (fade-in-up, scale-in, hover-lift)

---

## Implementation Notes

- Use **Tailwind CSS** with custom theme configuration (see `tailwind.config.js`)
- Leverage **Framer Motion** for scroll-triggered animations
- Use **react-intersection-observer** to detect when elements enter viewport
- Keep animations under 600ms for a premium feel
- Always include focus states for accessibility
- Test on real devices (not just responsive emulator)

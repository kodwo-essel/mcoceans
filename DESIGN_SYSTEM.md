# MC Daniel Ocean Design System

This document outlines the visual and interactive design system for the **MC Daniel Ocean** website.

---

## 1. Core Tokens

### Colors
- **Midnight Navy**: `#0A192F` (Deep Oceanic Blue) - Main background.
- **Liquid Gold**: `#CCA353` (Metallic Gold) - Primary accents, CTAs, highlights.
- **Ocean Pearl**: `#F8F9FA` (Soft White) - Primary text on dark backgrounds.
- **Deep Abyss**: `#020617` (Near Black) - Section dividers, dark overlays.
- **Seafoam Gray**: `#94A3B8` (Muted Blue-Gray) - Secondary text.

### Typography
- **Headlines**: **Clash Display** (or similar heavy Sans-Serif)
  - Style: SemiBold/Bold, Uppercase for primary headers, `tracking-wide`.
- **Body**: **Inter** (Google Font)
  - Style: Regular/Medium, clean, high readability.

---

## 2. Component Patterns

### Oceanic Hero
- **Visuals**: Full-screen cinematic video or image of deep ocean waves or a high-end gala.
- **Effects**: Slow-motion zoom (`scale: 1.1` over 30s) + fixed grain texture overlay.

### Luxury Buttons
- **Primary**: `Liquid Gold` background with `Midnight Navy` text. Sharp corners (4px).
- **Secondary**: Transparent with 1px `Liquid Gold` border, backdrop blur (`backdrop-blur-md`).

### Section Design
- Large vertical spacing (`py-32` to `py-48`).
- Subtle radial gradients to create depth (e.g., a faint navy glow in the center of the screen).

---

## 3. Motion & Animation
- **useFadeUp**: Items slide up 20px and fade in over 0.8s.
- **Magnetic Links**: Navbar items have a subtle magnetic pull on hover.
- **Liquid Scroll**: Slow, smooth parallax effects on background imagery.

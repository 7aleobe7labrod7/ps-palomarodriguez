# Copilot Instructions - Psicóloga Paloma Rodríguez Website

## Project Overview
Single-page professional portfolio for a Chilean psychologist (Psi. Paloma Rodríguez) offering trauma therapy and couples therapy. Bilingual focus: Spanish-first content with potential for English expansion. Key integration: **Encuadrado booking platform** (external scheduler), **Formspree** (form backend), **Google Tag Manager** (analytics).

## Architecture & Data Flow

### Stack
- **Frontend**: HTML5 + Tailwind CSS (CDN-based) + Vanilla JS
- **Build**: None - static site deployment ready
- **Styling**: Tailwind utility-first + custom CSS for Swiper carousel styling
- **External Services**:
  - Form submissions: Formspree endpoint `https://formspree.io/f/mqekknke`
  - Booking: Encuadrado link `https://encuadrado.com/p/psi-paloma-rodriguez`
  - Analytics: GTM container ID `GTM-M3TTZ8JR`
  - Carousel: Swiper 11 (CDN)

### Key Components
1. **Navigation** (`<nav>`)
   - Sticky positioning (`sticky top-8 z-40`)
   - Brand logo with orange accent dot
   - Responsive: hidden menu on mobile, full nav on `md:` breakpoint
   - All internal links use `#id` hash navigation with smooth scroll

2. **Hero Section** (`<header>`)
   - Two-column grid (swaps order on mobile with `order-1`/`order-2`)
   - Value proposition: "Sana el pasado, fortalece tus vínculos"
   - CTA buttons: Primary (orange `#ff914d`) + Secondary (bordered blue)
   - Profile image: `.webp` format with fallback to hidden placeholder

3. **Service Cards Section** (`#servicios`)
   - Two specializations: Trauma treatment + Couples therapy
   - Card hover effect: shadow/scale animations
   - Top border color coding: Blue for trauma, green for couples

4. **Testimonial Carousel** (`#testimonios`)
   - Swiper config: 1-2-3 slides responsive, 4s autoplay, looping
   - Images: PNG reviews loaded from `assets/img/reviews/review-(N).webp`
   - Accessible pagination bullets

5. **Contact Form** (`#contacto`)
   - POST to Formspree with JSON data
   - Fields: name, email, phone, message (all required except phone)
   - Status feedback: Green success/red error messages
   - Button state: Disables during submission, shows "Enviando..."

## Color Palette & Design System
- **Primary Blue**: `#023667` (text, primary elements)
- **Secondary Blue**: `#5a8dbe` (accents, borders)
- **Accent Orange**: `#ff914d` (CTAs, highlights)
- **Accent Cyan**: `#94dadc` (subtle highlights, selection color)
- **Green**: `#a3ed98` (seasonal banners, alternative accent)

All colors are utility-class-based in Tailwind. Custom CSS is minimal.

## Critical Developer Workflows

### Adding Content Changes
- **Service/specialization updates**: Edit text within `#servicios` service cards
- **Hero messaging**: Update `<h1>` and paragraph in `<header>`
- **About section**: Text spans entire `#sobre-mi` dark section
- **Contact info**: Update email, WhatsApp link, location info in `#contacto` and footer

### Adding Testimonials
- Add new `<div class="swiper-slide">` in the `.swiper-wrapper` section
- Image path format: `assets/img/reviews/review-(N).webp`
- Swiper auto-initializes; no manual carousel code needed

### Form Customization
- **Endpoint**: Change `FORMSPREE_ENDPOINT` in [assets/js/main.js](assets/js/main.js)
- **Fields**: Update form inputs and FormData keys; names **must match** between HTML `name` attributes and backend expectations
- **Validation**: HTML5 native validation; add server-side checks if needed
- **Response messages**: Spanish messages in status feedback (`statusMsg` element)

### SEO & Metadata
- Meta tags in `<head>`: geo-location (Chile), OG tags, keywords
- Language: `lang="es-CL"` (Chilean Spanish)
- Mobile viewport: Standard `initial-scale=1.0`
- Google Tag Manager embedded in head + noscript fallback

### Analytics Integration
- GTM container ID: `GTM-M3TTZ8JR`
- No custom events configured in codebase; configure in GTM dashboard
- Booking link (`encuadrado.com`) should be tagged with UTM or GTM events if tracking desired

## Code Patterns & Conventions

### Navigation & Linking
- All internal links use `href="#section-id"` with smooth scroll behavior
- External links: `target="_blank"` + explicit URLs
- WhatsApp links: Template: `https://wa.me/56933979733?text=Hola%20Paloma%2C%20...` (URL-encoded)

### CSS Class Organization
- Tailwind-first: all spacing, colors, responsive behavior via utility classes
- Custom CSS in [assets/css/styles.css](assets/css/styles.css): Swiper overrides + scroll margins only
- **No separate component classes**: `style.css` is minimal; extend Tailwind config if adding new patterns

### JavaScript (Vanilla, No Frameworks)
- Single event listener on `DOMContentLoaded`
- Form handling: async fetch to Formspree, error/success state management
- Carousel: Swiper library initialization with CDN-provided settings
- **No build tool**: Import scripts in HTML via `<script>` tags at bottom

### Responsive Design
- **Breakpoints**: Mobile-first, with `md:` (768px) for tablet, `lg:` (1024px) for desktop
- **Grid Layouts**: `grid-cols-1` → `md:grid-cols-2` pattern repeated
- **Images**: `.webp` format encouraged; include `onerror` fallback if critical

## Testing & Deployment Checklist
- Formspree endpoint active and receiving test submissions
- WhatsApp link works in mobile browsers (test via `https://wa.me/...`)
- Encuadrado booking link accessible and opens in new tab
- Images load from correct `assets/` paths (verify relative paths)
- Swiper carousel auto-plays and pagination is clickable
- GTM container loads (check browser GTM preview mode if available)
- Mobile responsiveness: Test at 320px (mobile), 768px (tablet), 1024px+ (desktop)
- Smooth scroll works in target browsers (CSS `scroll-behavior: smooth`)

## File Structure Reference
```
├── index.html                           # Single-page app
├── assets/
│   ├── css/styles.css                  # Custom overrides (minimal)
│   ├── js/main.js                      # Form + carousel init
│   └── img/
│       ├── psicologa-paloma-...webp    # Hero profile image
│       └── reviews/review-(1-15).webp # Testimonial images
├── .github/copilot-instructions.md      # This file
└── README.md                            # Project stub
```

## Common Modifications

| Task | File | Key Change |
|------|------|-----------|
| Update booking link | `index.html` | Change all `href="https://encuadrado.com/..."` occurrences |
| Add testimonial image | `index.html` + file add | Add swiper-slide div + upload image to `assets/img/reviews/` |
| Change form endpoint | `assets/js/main.js` | Update `FORMSPREE_ENDPOINT` constant |
| Adjust colors | `index.html` or `styles.css` | Replace color hex (e.g., `#ff914d`) with new hex (use Tailwind class names when possible) |
| Add service card | `index.html` | Duplicate existing service card div in `#servicios` section |

## Notes for AI Agents
- This is a **content-driven marketing site**, not an app; prioritize clarity and conversions in copy changes.
- All external links should remain pointing to current integrations unless explicitly instructed otherwise.
- Maintain Spanish-first language and therapeutic framing (trust, process-oriented language).
- Image optimization: always use `.webp` format when adding new images; keep file sizes reasonable for web.
- No build step needed; changes go live on file save to hosting server.

# Design & Style Guidelines (`style.md`)

This document serves as the single source of truth for the visual design, typography, spacing, and styling choices of the project, including a curated **Anti-Patterns & AI-Slop Avoidance Catalog** derived from [impeccable.style/slop](https://impeccable.style/slop/).

---

## 1. Project Style Notes

### Core Aesthetic
- **Character**: Crisp, refined, native mobile/desktop product showcase.
- **Tone**: Professional, confident, clean, and legible. Avoids gimmicks, superfluous glowing orbs, and generic template tropes.
- **Palette Identity**:
  - Three defined colors configured via `content.json`:
    - `Primary`: Confident accent color (e.g. indigo, sapphire, or emerald, rather than default violet-cyan mix).
    - `Accent`: Deliberate complementary highlight used sparingly for focal actions.
    - `Surface`: Clean, grounded background (deep slate/ink for dark mode, crisp warm paper/off-white for light mode).
- **Typography**:
  - **Headings**: `Outfit`, sans-serif (clean, geometric, contemporary).
  - **Body**: `Poppins`, sans-serif (friendly, highly readable, open geometry).
  - Use `text-wrap: balance` on display headings to prevent orphan stub lines.
  - Use `text-wrap: pretty` on body copy to avoid dangling single words.

### Thoughtful Widget Treatment
- **Phone Scroll Widget**: Built as a physical, realistic device chassis rather than an abstract floating rendering. Starts with subtle proportional perspective and settles flat as the user scrolls.
- **Spotlight Cards**: Used with restraint. Only activated on purposeful interactive elements; border highlight is soft and responds to pointer coordinates without blowing out contrast or overwhelming readability.
- **Theme Switcher**: Clean, tactile toggle with subtle icon shift and smooth color transitions.

---

## 2. The "Avoid" Section: Anti-Patterns & AI Slop Catalog

*(Source: [impeccable.style/slop](https://impeccable.style/slop/))*

### A. Color & Contrast Anti-Patterns
- **AI Color Palette (Purple-to-Blue Gradients Everywhere)**: Do not default to generic purple/cyan gradients on dark backgrounds or across buttons and headings. Use solid, deliberate palette tokens tied to the product's identity.
- **Radial-Gradient Background Halos & Glowing Orbs**: Avoid giant blurry neon spots behind sections that add visual noise and compete with the text.
- **Soft Spotlights Behind Content**: Do not add faint glow circles behind feature cards as a substitute for clear layout and hierarchy.
- **Dark Mode as a "Wall of Neon"**: Dark mode should be deep and comfortable, not an array of glowing outlines and neon borders.
- **Gradient Text**: Avoid changing colors across a headline or number just for decoration. Use solid, high-contrast color with clear typographic weight.
- **Low-Contrast & Washed-Out Grays**: Ensure all body text meets WCAG AA contrast (at least 4.5:1 for regular text, 3:1 for large display text). Never place low-contrast gray text on tinted cards.

### B. Visual Details & Styling Anti-Patterns
- **Decorative Grid-Line Backgrounds**: Do not put blueprint / graph-paper grid lines behind hero sections unless building a developer CAD/measurement tool.
- **Glassmorphism Everywhere**: Do not frost and blur every surface. Reserve backdrop filters for genuine overlay layers (such as a sticky navigation bar or elevated card).
- **Thick Accent Borders on Rounded Elements**: Avoid heavy colored borders that fight against rounded corners. Use subtle borders (1px) with low opacity or let surface color differences define separation.
- **Side-Tab Accent Borders**: Do not stick a colored left-stripe on regular cards—it makes ordinary information look like a warning or system alert.
- **Hairline Border + Wide Blurry Shadow ("Ghost Cards")**: Avoid pairing a 1px border with a massive 40px diffuse drop shadow. Choose either clean surface contrast or a tight, realistic shadow.
- **Blobby / Extreme Border Radii**: Avoid oversized `border-radius: 44px` on small cards that squeeze inner text into awkward shapes. Match radius proportionally to element size.
- **Rough SVG Doodles / Hand-Drawn Mascots**: Never include hasty hand-drawn vector art that makes the product look unpolished.

### C. Typography Anti-Patterns
- **The "Inter Everywhere" Default**: Avoid relying on generic system or overused defaults without consideration. Pair deliberate fonts (e.g., `Outfit` + `Poppins`).
- **Tiny Badges / Kickers Above Headings**: Avoid redundant pill badges like `[ ✨ FEATURES ]` directly above a heading that already says "Features".
- **Flat Type Hierarchy**: Ensure obvious scale and weight distinction between subtitles, H1, H2, and body copy.
- **Oversized Hero Headlines**: Don't let a headline take up 90% of the viewport height, forcing actual product details below the fold.
- **Crushed or Over-Wide Letter Spacing**: Avoid tracking letters too tightly on display text or excessively spreading body paragraphs. Keep body tracking neutral.
- **All-Caps Body Text**: Never format multi-line paragraphs in uppercase.

### D. Layout & Spacing Anti-Patterns
- **Identical 3x3 Card Grids**: Avoid repeating identical icon + title + blurb cards. Vary weights, use alternating zigzag layouts, and give hero features appropriate prominence.
- **Nested Containers ("Cardocalypse")**: Avoid cards inside cards inside cards with redundant padding and shadows. Flatten hierarchy with whitespace and dividers.
- **Monotonous Spacing**: Do not use the exact same 24px gap between unrelated blocks. Use tighter grouping for related elements (8–12px) and larger section rhythm (64–96px).
- **Line Length Runaways**: Keep paragraph widths constrained to 60–75 characters max for comfortable reading.
- **Clipped Elements & Overflow**: Ensure popovers, shadows, and interactive components do not trigger horizontal scrollbars or get cut off by `overflow: hidden`.

### E. Motion Anti-Patterns
- **Pulsing Status Dots & Shimmering Badges**: Do not put an animated breathing dot on static badges when nothing is actively changing.
- **Decorative Blinking Terminal Cursors**: Don't put a blinking `|` on non-interactive static marketing headlines.
- **Auto-Scrolling Marquees**: Avoid infinite scrolling logo ticker ribbons that force users to chase logos with their eyes.
- **Bouncy / Elastic Overshoot Easing**: Keep transitions smooth, clean, and fast (150ms–300ms cubic-bezier). Avoid rubber-band wobbles on functional UI.

### F. Copywriting & Content Anti-Patterns
- **Generic Marketing Slogans**: Avoid buzzwords like *"Supercharge your workflow with next-gen AI"*. State concrete, real capabilities simply.
- **Excessive Em-Dashes**: Avoid littering sentences with em-dashes (—). Use crisp sentences and clear periods.
- **Forced Contrast Slogans**: Avoid formulaic tropes like *"Not just an app. A revolution."*
- **Broken / Placeholder Assets**: Never leave broken `src=""` or generic blank grey boxes on the live page.

### G. General Quality & Performance
- **Zero CLS (Cumulative Layout Shift)**: Pre-allocate image dimensions and aspect ratios so the page doesn't jump as screenshots load.
- **Fail-Safe Visibility**: Never leave content hidden with `opacity: 0` waiting for a JS scroll event that might fail. Ensure accessible progressive enhancement.
- **Zero Console Errors**: Ensure all dynamic JSON parsing and script hooks execute without warnings or errors.

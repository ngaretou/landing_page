# Landing Page Architecture & Implementation Plan

## 1. Overview & Objectives
Build a high-performance, responsive, modern landing page driven by an editable `content.json` file. Designed specifically for simplicity and low maintenance (ideal for a Flutter developer), requiring **no frameworks** (pure vanilla HTML5, CSS3, and JavaScript).

---

## 2. File & Directory Structure

```text
/
├── .gemini/
│   ├── requirements.md
│   ├── plan.md
│   ├── style.md          # Visual guidelines & anti-slop avoidance catalog
│   └── progress.md       # Live implementation log & credit/session handover notes
├── images/
│   ├── app-store-badge.png
│   ├── google-play-badge.png
│   ├── screenshot_1.png
│   └── (user screenshots)
├── content.json          # Main editable configuration & copy file
├── index.html            # Semantic HTML skeleton & templates
├── styles.css            # Design system, CSS variables, glassmorphism, responsive grid
└── app.js                # JSON loader, dynamic rendering, phone scroll effect, spotlight effect, theme toggle
```

---

## 3. Configuration Schema (`content.json`)

To ensure backward compatibility and smooth upgrades for deployed apps, every field will have a sensible default fallback in JavaScript.

```json
{
  "theme": {
    "defaultTheme": "dark",
    "fonts": {
      "heading": "Outfit",
      "body": "Poppins"
    },
    "palette": {
      "primary": "#6366f1",
      "accent": "#ec4899",
      "surface": "#0f172a"
    }
  },
  "hero": {
    "subtitle": "Introducing Your Next Favourite App",
    "title": "Experience simplicity, redefined.",
    "mainText": "Everything you need to track, manage, and elevate your daily routine in one sleek native package.",
    "screenshot": "images/screenshot_1.png"
  },
  "stores": {
    "showBadges": true,
    "appStore": {
      "url": "https://apple.com",
      "badge": "images/app-store-badge.png"
    },
    "googlePlay": {
      "url": "https://google.com",
      "badge": "images/google-play-badge.png"
    }
  },
  "sections": [
    {
      "headline": "Real-time sync across devices",
      "text": "Never lose your place. Cloud-first architecture keeps your information synced instantly.",
      "image": "images/screenshot_1.png",
      "cardGlow": true
    },
    {
      "headline": "Distraction-free clarity",
      "text": "Crafted with precision typography and minimalist glass surfaces designed to stay out of your way.",
      "image": "images/screenshot_1.png",
      "cardGlow": true
    }
  ],
  "footer": {
    "copyright": "© 2026 Your App Name. All rights reserved."
  }
}
```

---

## 4. Key Components & Vanilla Technical Implementation

### A. Dynamic Theme, Typography & Color Palette
- **Google Fonts Dynamic Loader**:
  - `app.js` reads `theme.fonts.heading` (default `'Outfit'`) and `theme.fonts.body` (default `'Poppins'`).
  - Automatically generates Google Fonts stylesheet URL:
    `https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800&family=Poppins:wght@300;400;500;600;700&display=swap`
  - Preconnect links in `<head>` prevent connection latency.
  - Dynamically binds font families to CSS variables:
    - `--font-heading: 'Outfit', sans-serif;`
    - `--font-body: 'Poppins', sans-serif;`
  - Fallback: Defaults to `'Outfit'` and `'Poppins'` (or system sans-serif) if keys are omitted, ensuring backwards compatibility.
- **Color Palette Injection**:
  - Reads `palette.primary`, `palette.accent`, and `palette.surface` from `content.json`.
  - Injects them into `:root` as CSS custom properties (`--primary-color`, `--accent-color`, `--surface-color`).
- **Theme Switcher**:
  - Supports light/dark mode with persisted choice in `localStorage`.
  - Seamless color transition via CSS variables without layout jump.

### B. Phone Scroll Hero Widget (Pure Vanilla CSS + JS)
- **Chassis Design**: Reusable CSS-based modern smartphone mockup:
  - Notch / dynamic island camera cutout.
  - Realistic volume and power buttons.
  - Device bezel with ambient shadow and glass reflection.
- **Scroll Animation**:
  - Starts tilted backward (e.g. `transform: rotateX(20deg) translateY(0)` with 3D perspective).
  - Uses `requestAnimationFrame` + `IntersectionObserver` or scroll progress calculation to smoothly flatten to `rotateX(0deg)` and rise up over the hero title as the user scrolls down.
  - Responsive: Proportional scaling for mobile screens without overflow.

### C. Spotlight & Glass Cards
- High-end glassmorphism style (`backdrop-filter: blur()`, subtle semi-transparent borders).
- Interactive mouse-tracking spotlight effect:
  - Tracks cursor movement on card hover (`pointermove`).
  - Sets `--mouse-x` and `--mouse-y` dynamically to render a radial gradient glow following the cursor.
  - Degrades gracefully on mobile/touch devices into a soft ambient glow.

### D. Alternating Feature Sections (Desktop & Mobile)
- Alternating layout pattern:
  - Even rows: Image Left, Text Right.
  - Odd rows: Text Left, Image Right.
- Mobile Layout:
  - Clean vertical stacking with consistent padding and readable typography.
- Layout Shift Prevention:
  - Images enforce `aspect-ratio` and dimension attributes to avoid Cumulative Layout Shift (CLS).

### E. App Store Badges & Footer
- Prominent App Store & Google Play badge section directly below hero.
- Reusable footer displaying the customizable copyright string from JSON.

---

## 5. Upgrade & Compatibility Strategy
- **Null Safety / Fallbacks**: If an existing install uses an older `content.json` missing certain keys (e.g., if a new badge, section format, or font setting is omitted), the JavaScript parser provides built-in fallbacks (e.g. falls back to Outfit / Poppins / system-ui).
- **Zero Build Step**: Works by simply opening `index.html` or running a lightweight local server. No `npm install`, dependencies, or bundle pipelines that could break over time.
- **Preserve Comments**: All source code will contain clear, structured comments explaining how each widget works for easy Flutter-dev maintenance.

---

## 6. Implementation Phases

1. **Phase 1: Project Setup & Structure**
   - Create `content.json`, `index.html`, `styles.css`, and `app.js`.
   - Initialize `.gemini/progress.md` with status, completed tasks, and next steps.
2. **Phase 2: CSS Foundations & Theme Engine**
   - Setup modern typography (Outfit + Poppins), dark/light CSS variables, and palette injection.
   - Implement the Theme Switcher.
   - Update `.gemini/progress.md`.
3. **Phase 3: Hero Section & Phone Scroll Widget**
   - Build 3D phone chassis with camera cutout and screen container.
   - Implement high-performance scroll interpolation.
   - Update `.gemini/progress.md`.
4. **Phase 4: Feature Sections & Spotlight Glass Cards**
   - Implement alternating zigzag grid.
   - Implement spotlight mouse-tracking glow logic.
   - Update `.gemini/progress.md`.
5. **Phase 5: Responsive Polish, Anti-Slop Audit & Verification**
   - Audit implementation against [.gemini/style.md](file:///Users/corey/myjs/landing_page/.gemini/style.md) (check contrast, typography, avoid gratuitous glowing halos and purple AI gradients).
   - Verify on desktop and mobile viewports.
   - Verify zero layout shifts and smooth animations.
   - Final update to `.gemini/progress.md`.

---

## 7. Progress Tracking & Credit Handover Protocol

To support switching accounts or changing from free Gemini credits to paid API usage mid-development without losing any context:
- **Persistent State on Disk**: Maintain `.gemini/progress.md` as an up-to-date ledger containing:
  - Current Phase & completion percentage.
  - Completed files & architectural decisions.
  - Active work item / current block.
  - Exact next immediate action.
  - Handover notes for a new session/agent instance to resume immediately without re-reading the whole conversation history.
- **Atomic Milestones**: After completing each phase or significant component, write updates to `.gemini/progress.md` before starting the next step.


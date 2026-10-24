# Mobile App Showcase Landing Page

A high-performance, responsive, zero-framework landing page built with **pure vanilla HTML5, CSS3, and JavaScript**. Designed for simplicity and low maintenance. Controlled through a single editable `content.json` file.

---

## ✨ Key Features

- **Zero Frameworks & Zero Build Step**: No React, Tailwind, npm dependencies, or bundlers that can break over time. Just edit `content.json` and host anywhere.
- **JSON-Driven Configuration (`content.json`)**: Customize typography, color palette, hero copy, App Store / Google Play links, a growable list of feature sections, and footer text without touching HTML or JS.
- **3D Phone Scroll Hero Widget**:
  - Aerospace metallic silver/titanium device chassis (consistent across light and dark modes) with physical side buttons, pitch-black Dynamic Island camera cutout. 
  - **Edge-to-Edge Bezel Sync**: Automatically matches the inner bezel's aspect ratio to your hero screenshot's natural dimensions (`naturalWidth / naturalHeight`) so there are zero top or bottom gaps.
  - **Smooth 3D Scroll Interpolation**: Starts tilted backward (`rotateX(24deg) scale(0.94)`) below the hero text and smoothly flattens to `0deg` while climbing upward to frame the headline as the user scrolls.
- **Alternating Color Bands & Spotlight Glass Cards**:
  - Feature sections alternate between full-width **Surface** and **Accent** color bands with automatic high-contrast inverse typography.
  - Text blocks are wrapped in frosted glass tabs (`backdrop-filter: blur()`) featuring an interactive pointer-tracking radial spotlight glow.
  - Optional per-section `url` turns both the glass text card and screenshot into clickable links.
- **Uncropped Portrait & Landscape Screenshots**:
  - Screenshots are never force-cropped. `app.js` detects each image's aspect ratio on load and applies tailored portrait or landscape sizing rules for desktop and mobile viewports.
- **Dynamic Google Fonts & Theme Switcher**:
  - Automatically loads any Google Font specified in `content.json` (defaults to **Outfit** for headings and **Poppins** for body copy).
  - Floating bottom-right Light/Dark theme toggle with `localStorage` persistence and system preference detection.

---

## 📁 Project Structure

```text
/
├── content.json          # Main editable configuration & copy file
├── index.html            # Semantic HTML5 structure
├── styles.css            # Design system, CSS variables, 3D phone & responsive layout
├── app.js                # Config loader, DOM hydration, 3D scroll interpolation, spotlight & theme engine
├── images/
│   ├── app-store-badge.png
│   ├── google-play-badge.png
│   └── screenshot_1.png  # App screenshots referenced in content.json
└── .gemini/
    ├── requirements.md   # Original product & widget requirements
    ├── plan.md           # Architecture & technical implementation plan
    ├── style.md          # Visual guidelines & anti-slop catalog
    └── progress.md       # Implementation & calibration log
```

---

## 🚀 Quick Start (Running Locally)

Because modern browsers block `fetch('content.json')` over the `file://` protocol due to CORS security rules, preview the page using any lightweight local HTTP server from the project root:

```bash
python3 -m http.server 8080
```

Then open **[http://localhost:8080](http://localhost:8080)** in your browser (or use the **VS Code Live Server** extension).

> **Offline / `file://` Fallback**: If opened directly via `file://`, `app.js` includes a built-in `DEFAULT_CONFIG` fallback so the page still renders cleanly.

---

## 🛠 Customizing Your Landing Page (`content.json`)

All content and styling tokens live in `content.json`:

```json
{
  "theme": {
    "defaultTheme": "dark",
    "fonts": {
      "heading": "Outfit",
      "body": "Poppins"
    },
    "palette": {
      "primary": "#4f46e5",
      "accent": "#62E647",
      "surface": "#090d16"
    }
  },
  "hero": {
    "subtitle": "Native Mobile Experience",
    "title": "Organize your life with effortless speed.",
    "mainText": "Crafted with clean native interactions, instant sync, and zero distractions. Built to elevate how you work every single day.",
    "screenshot": "images/screenshot_1.png"
  },
  "stores": {
    "heading": "Download for iOS & Android",
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
      "headline": "Real-time sync across all your devices",
      "text": "Your notes, tasks, and habits stay in perfect synchronization. Cloud-first architecture ensures instant availability everywhere you go.",
      "image": "images/screenshot_1.png",
      "url": "https://example.com/sync",
      "cardGlow": true
    }
  ],
  "footer": {
    "copyright": "© 2026 Your App Name. All rights reserved."
  }
}
```

### Field Reference

| Path | Description |
| :--- | :--- |
| `theme.defaultTheme` | Initial theme before user toggle (`"dark"` or `"light"`). |
| `theme.fonts.heading` | Google Font family name for `h1`–`h4` headings (default: `"Outfit"`). |
| `theme.fonts.body` | Google Font family name for body text (default: `"Poppins"`). |
| `theme.palette.primary` | Hex color for the hero subtitle kicker and spotlight glow tint. |
| `theme.palette.accent` | Hex color for alternating feature section bands (`.band-accent`). |
| `theme.palette.surface` | Hex color for the dark-mode page background (`--bg-page`). |
| `hero.*` | `subtitle`, `title` (also updates `<title>`), `mainText`, and `screenshot` path inside the 3D phone. |
| `stores.showBadges` | Set to `false` to hide the App Store / Google Play section. |
| `stores.heading` | Customizable heading above the store badges. |
| `sections[]` | Growable array of feature rows. Even indices (`0, 2, ...`) use Surface bands (Text Left, Image Right); odd indices (`1, 3, ...`) use Accent bands (Image Left, Text Right). Stack vertically on mobile. |
| `sections[].url` | *(Optional)* URL opened when clicking the feature's glass card or screenshot. |
| `footer.copyright` | Copyright notice rendered in the site footer. |

---

## 🌐 Deployment

Since this project is 100% static with no build step, deploy the folder directly to **GitHub Pages**, **Cloudflare Pages**, **Netlify**, **Vercel**, **Firebase Hosting**, or any static web server by uploading `index.html`, `styles.css`, `app.js`, `content.json`, and `images/`.


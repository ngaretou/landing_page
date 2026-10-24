/**
 * ============================================================================
 * LANDING PAGE APPLICATION CONTROLLER (app.js)
 * Pure Vanilla JavaScript - No Frameworks, No Build Step, Null-Safe & Upgradable
 * ============================================================================
 */

(function () {
  'use strict';

  // ---------------------------------------------------------------------------
  // 1. Fallback Configuration (Ensures page renders even if fetch fails/offline)
  // ---------------------------------------------------------------------------
  const DEFAULT_CONFIG = {
    theme: {
      defaultTheme: "dark",
      fonts: {
        heading: "Outfit",
        body: "Poppins"
      },
      palette: {
        primary: "#4f46e5",
        accent: "#62E647",
        surface: "#090d16"
      }
    },
    hero: {
      subtitle: "Native Mobile Experience",
      title: "Organize your life with effortless speed.",
      mainText: "Crafted with clean native interactions, instant sync, and zero distractions. Built to elevate how you work every single day.",
      screenshot: "images/screenshot_1.png"
    },
    stores: {
      heading: "Download for iOS & Android",
      showBadges: true,
      appStore: {
        url: "https://apple.com",
        badge: "images/app-store-badge.png"
      },
      googlePlay: {
        url: "https://google.com",
        badge: "images/google-play-badge.png"
      }
    },
    sections: [
      {
        headline: "Real-time sync across all your devices",
        text: "Your notes, tasks, and habits stay in perfect synchronization. Cloud-first architecture ensures instant availability everywhere you go.",
        image: "images/screenshot_1.png",
        url: "https://example.com/sync",
        cardGlow: true
      },
      {
        headline: "Distraction-free clarity with thoughtful design",
        text: "Every pixel is placed with intention. Enjoy high-contrast legibility, calm color tones, and tactile responsive controls that respect your focus.",
        image: "images/screenshot_1.png",
        url: "https://example.com/design",
        cardGlow: true
      },
      {
        headline: "Offline-ready with robust local persistence",
        text: "Stay productive even without an active internet connection. Work uninterrupted on planes, subways, or remote spots with instant local caching.",
        image: "images/screenshot_1.png",
        url: "https://example.com/offline",
        cardGlow: true
      }
    ],
    footer: {
      copyright: "© 2026 Your App Name. All rights reserved."
    }
  };

  // ---------------------------------------------------------------------------
  // 2. Dynamic Google Fonts Loader
  // ---------------------------------------------------------------------------
  function applyFonts(fontsConfig) {
    const headingFont = (fontsConfig && fontsConfig.heading) ? fontsConfig.heading.trim() : "Outfit";
    const bodyFont = (fontsConfig && fontsConfig.body) ? fontsConfig.body.trim() : "Poppins";

    // Set CSS custom properties on document root
    document.documentElement.style.setProperty('--font-heading', `'${headingFont}', sans-serif`);
    document.documentElement.style.setProperty('--font-body', `'${bodyFont}', sans-serif`);

    // Dynamically inject Google Fonts stylesheet link
    const fontFamilies = [];
    if (headingFont) {
      fontFamilies.push(`family=${encodeURIComponent(headingFont)}:wght@400;600;700;800`);
    }
    if (bodyFont && bodyFont !== headingFont) {
      fontFamilies.push(`family=${encodeURIComponent(bodyFont)}:wght@300;400;500;600;700`);
    }

    if (fontFamilies.length > 0) {
      const googleFontUrl = `https://fonts.googleapis.com/css2?${fontFamilies.join('&')}&display=swap`;
      let fontLink = document.getElementById('google-fonts-link');
      if (!fontLink) {
        fontLink = document.createElement('link');
        fontLink.id = 'google-fonts-link';
        fontLink.rel = 'stylesheet';
        document.head.appendChild(fontLink);
      }
      fontLink.href = googleFontUrl;
    }
  }

  // ---------------------------------------------------------------------------
  // 3. Theme & Color Palette Engine
  // ---------------------------------------------------------------------------
  function applyPalette(palette) {
    if (!palette) return;
    const root = document.documentElement;

    if (palette.primary) {
      const primary = palette.primary.trim();
      root.style.setProperty('--primary-color', primary);
      // Soft spotlight glow calculated from primary color
      root.style.setProperty('--spotlight-glow', `${primary}26`);
    }
    if (palette.accent) {
      const accent = palette.accent.trim();
      root.style.setProperty('--accent-color', accent);
    }
    if (palette.surface) {
      const surface = palette.surface.trim();
      root.style.setProperty('--surface-color', surface);
      // Surface color dynamically drives --bg-page in styles.css for dark mode
    }
  }

  function initThemeSwitcher(defaultTheme) {
    const toggleBtn = document.getElementById('theme-toggle');
    const storedTheme = localStorage.getItem('app-theme');
    
    // Priority: 1. User manual storage, 2. Default in JSON, 3. OS system preference
    let activeTheme = storedTheme;
    if (!activeTheme) {
      if (defaultTheme) {
        activeTheme = defaultTheme;
      } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        activeTheme = 'light';
      } else {
        activeTheme = 'dark';
      }
    }

    setTheme(activeTheme);

    if (toggleBtn) {
      toggleBtn.addEventListener('click', function () {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'light' ? 'dark' : 'light';
        setTheme(next);
        localStorage.setItem('app-theme', next);
      });
    }
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
  }

  // ---------------------------------------------------------------------------
  // 4. Content Hydration from JSON
  // ---------------------------------------------------------------------------
  function renderContent(config) {
    // 4.1 Apply typography and palette
    if (config.theme) {
      applyFonts(config.theme.fonts);
      applyPalette(config.theme.palette);
      initThemeSwitcher(config.theme.defaultTheme);
    }

    // 4.2 Hero Section
    if (config.hero) {
      const subtitleEl = document.getElementById('hero-subtitle');
      const titleEl = document.getElementById('hero-title');
      const mainTextEl = document.getElementById('hero-main-text');
      const screenshotEl = document.getElementById('hero-screenshot');
      const brandEl = document.getElementById('brand-title');

      if (subtitleEl && config.hero.subtitle) subtitleEl.textContent = config.hero.subtitle;
      if (titleEl && config.hero.title) titleEl.textContent = config.hero.title;
      if (mainTextEl && config.hero.mainText) mainTextEl.textContent = config.hero.mainText;
      if (screenshotEl && config.hero.screenshot && screenshotEl.getAttribute('src') !== config.hero.screenshot) {
        screenshotEl.src = config.hero.screenshot;
      }
      if (brandEl && config.hero.title) {
        // Update document title for SEO & clean tab name
        document.title = config.hero.title;
      }
    }

    // 4.3 App Store Badges
    if (config.stores) {
      const storesSection = document.getElementById('stores-section');
      if (storesSection) {
        if (config.stores.showBadges === false) {
          storesSection.style.display = 'none';
        } else {
          storesSection.style.display = 'block';

          // Localizable heading for App Store section
          const headingEl = document.getElementById('stores-heading');
          if (headingEl) {
            headingEl.textContent = config.stores.heading || "Download for iOS & Android";
          }

          const appStoreLink = document.getElementById('app-store-link');
          const appStoreImg = document.getElementById('app-store-badge-img');
          if (config.stores.appStore) {
            if (appStoreLink && config.stores.appStore.url) appStoreLink.href = config.stores.appStore.url;
            if (appStoreImg && config.stores.appStore.badge) appStoreImg.src = config.stores.appStore.badge;
          }

          const googlePlayLink = document.getElementById('google-play-link');
          const googlePlayImg = document.getElementById('google-play-badge-img');
          if (config.stores.googlePlay) {
            if (googlePlayLink && config.stores.googlePlay.url) googlePlayLink.href = config.stores.googlePlay.url;
            if (googlePlayImg && config.stores.googlePlay.badge) googlePlayImg.src = config.stores.googlePlay.badge;
          }
        }
      }
    }

    // 4.4 Dynamic Alternating Feature Sections (Color Bands + Glass Tabs around Text)
    if (Array.isArray(config.sections)) {
      const container = document.getElementById('features-container');
      if (container) {
        container.innerHTML = ''; // Clear container

        config.sections.forEach((sec, index) => {
          // Full-width color band (Alternating between Surface and Accent)
          const band = document.createElement('section');
          band.className = index % 2 === 0 ? 'feature-band band-surface' : 'feature-band band-accent';

          // Inner row container (Even: Text Left / Image Right; Odd: Image Left / Text Right)
          const row = document.createElement('div');
          row.className = index % 2 === 1 ? 'band-container reverse' : 'band-container';

          // 1. Glass Tab around the TEXT (with spotlight mouse-tracking glow)
          const textCardWrapper = document.createElement('div');
          textCardWrapper.className = 'feature-card-wrapper';

          // If a URL destination is provided, render glass tab as a link
          const glassTab = document.createElement(sec.url ? 'a' : 'div');
          glassTab.className = 'spotlight-card feature-glass-tab';
          glassTab.setAttribute('data-spotlight', 'true');
          if (sec.url) {
            glassTab.href = sec.url;
            glassTab.target = '_blank';
            glassTab.rel = 'noopener noreferrer';
            glassTab.setAttribute('aria-label', `${sec.headline || 'Feature'} - View details`);
          }

          const headline = document.createElement('h2');
          headline.className = 'feature-headline';
          headline.textContent = sec.headline || `Feature ${index + 1}`;

          const desc = document.createElement('p');
          desc.className = 'feature-desc';
          desc.textContent = sec.text || '';

          glassTab.appendChild(headline);
          glassTab.appendChild(desc);
          textCardWrapper.appendChild(glassTab);

          // 2. Uncropped Screenshot Image beside the glass text tab
          const imgWrapper = document.createElement('div');
          imgWrapper.className = 'feature-image-wrapper';

          // If URL destination is provided, screenshot navigates to that destination as well
          const imgContainer = sec.url ? document.createElement('a') : document.createElement('div');
          imgContainer.className = 'feature-img-link';
          if (sec.url) {
            imgContainer.href = sec.url;
            imgContainer.target = '_blank';
            imgContainer.rel = 'noopener noreferrer';
            imgContainer.setAttribute('aria-label', `${sec.headline || 'Feature'} - View screenshot destination`);
          }

          const img = document.createElement('img');
          img.className = 'feature-img';
          img.src = sec.image || 'images/screenshot_1.png';
          img.alt = sec.headline || 'Feature screenshot';
          img.loading = 'lazy';
          img.decoding = 'async';

          // Detect portrait vs landscape to apply customized min/max dimensions
          function classifyImage() {
            if (img.naturalWidth && img.naturalHeight) {
              if (img.naturalWidth > img.naturalHeight) {
                img.classList.add('is-landscape');
                img.classList.remove('is-portrait');
              } else {
                img.classList.add('is-portrait');
                img.classList.remove('is-landscape');
              }
            }
          }

          img.onload = classifyImage;
          if (img.complete) {
            classifyImage();
          }

          imgContainer.appendChild(img);
          imgWrapper.appendChild(imgContainer);

          // Assemble the band
          row.appendChild(textCardWrapper);
          row.appendChild(imgWrapper);
          band.appendChild(row);
          container.appendChild(band);
        });

        // Initialize spotlight mouse tracking on newly rendered glass tabs
        initSpotlightCards();
      }
    }

    // 4.5 Footer
    if (config.footer && config.footer.copyright) {
      const footerEl = document.getElementById('footer-copyright');
      if (footerEl) footerEl.textContent = config.footer.copyright;
    }
  }

  // ---------------------------------------------------------------------------
  // 5. Phone Scroll Hero Effect Widget (3D Scroll Interpolation & Overlap)
  // ---------------------------------------------------------------------------
  function initPhoneScrollHero() {
    const chassis = document.getElementById('phone-chassis');
    const phoneStage = document.getElementById('phone-scroll-stage');
    const heroTrack = document.getElementById('hero-section');
    const heroContent = document.getElementById('hero-content');
    const titleEl = document.getElementById('hero-title');
    const mainTextEl = document.getElementById('hero-main-text');
    const glareEl = document.getElementById('phone-glare');
    const screenshotEl = document.getElementById('hero-screenshot');
    const bezelEl = chassis ? chassis.querySelector('.phone-bezel') : null;
    if (!chassis || !heroTrack) return;

    // Dynamically match inner bezel aspect-ratio to loaded hero screenshot so there are zero top/bottom gaps
    function syncBezelAspectRatio() {
      if (screenshotEl && bezelEl && screenshotEl.naturalWidth && screenshotEl.naturalHeight) {
        bezelEl.style.aspectRatio = `${screenshotEl.naturalWidth} / ${screenshotEl.naturalHeight}`;
      }
    }

    if (screenshotEl) {
      if (screenshotEl.complete) {
        syncBezelAspectRatio();
      }
      screenshotEl.addEventListener('load', function () {
        syncBezelAspectRatio();
        updatePhoneTilt();
      });
    }

    // Respect reduced motion settings
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      chassis.style.transform = 'none';
      return;
    }

    let ticking = false;

    function updatePhoneTilt() {
      const rect = heroTrack.getBoundingClientRect();
      const vh = window.innerHeight || 900;
      const travel = Math.max(1, heroTrack.offsetHeight - vh);

      // Normalized progress (0 to 1) as hero track scrolls through viewport
      const progress = Math.min(1, Math.max(0, -rect.top / travel));

      // 1. 3D Perspective, Tilt & Scale parameters (tuned to start.png -> end.png)
      const perspectivePx = 900;
      const initialTilt = 24; // Backward lean in start.png -> 0deg flat in end.png
      const initialScale = 0.94; // Subtle depth scale in start.png -> 1.0 in end.png

      const currentTilt = initialTilt * (1 - progress);
      const currentScale = initialScale + (1 - initialScale) * progress;

      // 2. Measure natural layout geometry relative to sticky stage
      const contentTop0 = heroContent ? heroContent.offsetTop : vh * 0.22;
      const contentHeight = heroContent ? heroContent.offsetHeight : 210;
      const titleOffset = titleEl ? titleEl.offsetTop : 32;
      const titleHeight = titleEl ? titleEl.offsetHeight : 110;
      const phoneTop0 = phoneStage ? phoneStage.offsetTop : (contentTop0 + contentHeight);
      const phoneHeight = chassis.offsetHeight || (vh * 0.66);

      // 3. Hero Text trajectory:
      //    - At start.png (progress = 0): Bottom of text block sits just below vertical midpoint (~51.5% vh),
      //      leaving ~29% vh breathing room above the subtitle as in start.png
      //    - At end.png (progress = 1): First line of headline sits right at the top of viewport (~ -3px)
      //      so top line stays legible above the phone bezel and second line frames the left/right of the phone
      const desiredStartContentBottom = vh * 0.515;
      const startTitleY = Math.max(24 - contentTop0, desiredStartContentBottom - (contentTop0 + contentHeight));
      const targetTitleTop = -3;
      const targetTitleY = (targetTitleTop - titleOffset) - contentTop0;
      const currentTitleY = startTitleY + (targetTitleY - startTitleY) * progress;

      if (heroContent) {
        heroContent.style.transform = `translateY(${currentTitleY.toFixed(1)}px)`;
      }

      // Fade body copy as the phone climbs over it so only the bold headline frames the top of the phone in end.png
      if (mainTextEl) {
        const textOpacity = Math.max(0, 1 - progress * 2.2);
        mainTextEl.style.opacity = textOpacity.toFixed(2);
      }

      // 4. Phone Chassis trajectory:
      //    Calculate exact 3D perspective drop of the top edge at progress = 0 due to rotateX & scale around center
      const halfH = phoneHeight / 2;
      const rad0 = (initialTilt * Math.PI) / 180;
      const projFactor0 = (initialScale * Math.cos(rad0)) / (1 + (halfH * initialScale * Math.sin(rad0)) / perspectivePx);
      const visualTopDrop0 = halfH * (1 - projFactor0);

      //    - At start.png (progress = 0): Visual top edge of tilted phone sits ~12px below bottom of hero text (~53% vh)
      //    - At end.png (progress = 1): Flat phone top edge climbs to overlap bottom ~20% of headline Line 1 and cover middle of Line 2
      const startVisualTop = contentTop0 + contentHeight + startTitleY + 12;
      const startY = startVisualTop - phoneTop0 - visualTopDrop0;
      const targetPhoneVisualTop = Math.max(vh * 0.032, targetTitleTop + titleHeight * 0.36);
      const targetY = targetPhoneVisualTop - phoneTop0;
      const currentY = startY + (targetY - startY) * progress;

      // Apply 3D transform (translateY in screen space first, then single perspective + rotateX + scale)
      chassis.style.transform = `translateY(${currentY.toFixed(1)}px) perspective(${perspectivePx}px) rotateX(${currentTilt.toFixed(2)}deg) scale(${currentScale.toFixed(3)})`;

      // Subtle glass glare reflection overlay fades as phone straightens upright
      if (glareEl) {
        glareEl.style.opacity = (0.5 * (1 - progress * 0.75)).toFixed(2);
      }

      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(updatePhoneTilt);
        ticking = true;
      }
    }, { passive: true });

    window.addEventListener('resize', function () {
      if (!ticking) {
        window.requestAnimationFrame(updatePhoneTilt);
        ticking = true;
      }
    }, { passive: true });

    // Initial calculation on load
    updatePhoneTilt();
  }

  // ---------------------------------------------------------------------------
  // 6. Spotlight Cards Widget (Pointer Coordinate Glow Effect)
  // ---------------------------------------------------------------------------
  function initSpotlightCards() {
    const cards = document.querySelectorAll('.spotlight-card');
    cards.forEach(card => {
      // Remove any existing listener before attaching
      card.onmousemove = function (e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      };

      card.onmouseleave = function () {
        card.style.setProperty('--mouse-x', `-500px`);
        card.style.setProperty('--mouse-y', `-500px`);
      };
    });
  }

  // ---------------------------------------------------------------------------
  // 7. Initialization Lifecycle
  // ---------------------------------------------------------------------------
  function mergeConfig(defaults, overrides) {
    if (!overrides || typeof overrides !== 'object') return defaults;
    const merged = Object.assign({}, defaults, overrides);
    if (defaults.theme || overrides.theme) {
      merged.theme = Object.assign({}, defaults.theme, overrides.theme || {});
      merged.theme.fonts = Object.assign(
        {},
        defaults.theme && defaults.theme.fonts,
        overrides.theme && overrides.theme.fonts
      );
      merged.theme.palette = Object.assign(
        {},
        defaults.theme && defaults.theme.palette,
        overrides.theme && overrides.theme.palette
      );
    }
    if (defaults.hero || overrides.hero) {
      merged.hero = Object.assign({}, defaults.hero, overrides.hero || {});
    }
    if (defaults.stores || overrides.stores) {
      merged.stores = Object.assign({}, defaults.stores, overrides.stores || {});
    }
    if (defaults.footer || overrides.footer) {
      merged.footer = Object.assign({}, defaults.footer, overrides.footer || {});
    }
    return merged;
  }

  async function loadConfig() {
    try {
      const response = await fetch(`content.json?t=${Date.now()}`, { cache: 'no-store' });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return mergeConfig(DEFAULT_CONFIG, data);
    } catch (err) {
      // Fallback: attempt synchronous/async XMLHttpRequest for environments where fetch on local files fails
      try {
        const data = await new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.overrideMimeType('application/json');
          xhr.open('GET', `content.json?t=${Date.now()}`, true);
          xhr.onload = function () {
            if ((xhr.status >= 200 && xhr.status < 300) || (xhr.status === 0 && xhr.responseText)) {
              try {
                resolve(JSON.parse(xhr.responseText));
              } catch (parseErr) {
                reject(parseErr);
              }
            } else {
              reject(new Error(`XHR status: ${xhr.status}`));
            }
          };
          xhr.onerror = function () {
            reject(new Error('XHR network error'));
          };
          xhr.send(null);
        });
        return mergeConfig(DEFAULT_CONFIG, data);
      } catch (_xhrErr) {
        console.warn('Could not load content.json via fetch/XHR (likely opened as local file://). Using built-in configuration defaults.', err);
        return DEFAULT_CONFIG;
      }
    }
  }

  document.addEventListener('DOMContentLoaded', async function () {
    const config = await loadConfig();
    renderContent(config);
    initPhoneScrollHero();
    initSpotlightCards();
  });

})();

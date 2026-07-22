# GTA Mavericks — Fall Rep Tryouts 2026

Astro rebuild of the Fall Rep Tryouts conversion landing page. Componentized
into shared/global pieces (`Button`, `SectionIntro`, header/footer/announcement
chrome) plus per-section components, with all repeated copy (dates, phone,
registration link, review/FAQ/pathway content) centralized in `src/data/`.

## Local development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build      # outputs static site to dist/
npm run preview    # serve the production build locally
```

## Project structure

- `src/data/site.ts` — site-wide constants (registration URL, phone, email, event dates)
- `src/data/content.ts` — repeated card/list content (reviews, pathways, FAQ, schedule, etc.)
- `src/layouts/Layout.astro` — HTML shell, fonts, global styles, interaction script
- `src/styles/global.css` — design tokens, reset, and cross-cutting utility classes
- `src/components/` — shared chrome (`SiteHeader`, `SiteFooter`, `AnnouncementBar`,
  `Button`, `SectionIntro`, `MobileCta`, `SectionTransition`) and page sections
  (`Hero`, `Countdown`, `WhySection`, `DetailsSection`, `ProofSection`,
  `ReviewsSection`, `PathsSection`, `PlacementSection`, `LifeSection`,
  `FAQSection`, `FinalCta`)
- `src/scripts/interactions.js` — countdown tick, scroll-reveal, FAQ accordion,
  smooth in-page scroll, sticky mobile CTA, lead-form mailto fallback, and the
  iframe height-sync described below
- `public/images/mavericks-action-placeholder.webp` — the stock action photo
  used as the hero poster and several card images in the source file (it was
  embedded 4x as base64; deduplicated here into one file). Swap this for real
  team photography when available — everywhere else in the page hotlinks
  images directly from `gtamavericks.ca`'s own media library.

## Deployment (Vercel)

Zero-config static Astro site. Connect the GitHub repo in Vercel, or deploy
from the CLI:

```bash
npx vercel --prod
```

## Embedding on WordPress as an iframe

This page posts its content height to its parent window on load/resize (see
the bottom of `src/scripts/interactions.js`), so the WordPress page can auto-size
the iframe instead of showing a fixed-height scrollbar. Add this to the
WordPress page (Custom HTML block, or in the theme):

```html
<iframe
  id="mavericks-tryouts-frame"
  src="https://gta-mavericks-fall-tryouts.vercel.app/"
  title="GTA Mavericks Fall Rep Tryouts"
  style="width: 100%; border: 0; display: block;"
  height="800"
></iframe>

<script>
  window.addEventListener('message', function (event) {
    if (!event.data || event.data.source !== 'gta-mavericks-tryouts') return;
    var frame = document.getElementById('mavericks-tryouts-frame');
    if (frame && event.data.type === 'resize') {
      frame.style.height = event.data.height + 'px';
    }
  });
</script>
```

Swap in a custom domain pointed at the Vercel project if you want the iframe
`src` off the `*.vercel.app` domain. External links (registration, Google reviews, camps
page) open in a new tab via `target="_blank"`, so they escape the iframe
correctly; in-page anchor links (FAQ, schedule, etc.) scroll within the
iframe itself.

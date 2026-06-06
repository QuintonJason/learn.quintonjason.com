# Learn Web Design With Quinton Jason

An Astro learning site for web design foundations, based on Quinton Jason's ART 3020 course material.

The site is intended for `learn.quintonjason.com` and focuses on:

- HTML foundations
- CSS foundations
- Layout and responsive design
- Accessibility
- JavaScript basics
- UX and systems thinking
- Course projects and resources

## Commands

```sh
npm run dev
npm run check
npm run build
npm run qa
npm run preview
```

## Local Development

```sh
npm run dev -- --host 127.0.0.1 --port 4321
```

Then open `http://127.0.0.1:4321/`.

## Production QA

Run the automated checks before pushing:

```sh
npm run qa
npm audit --audit-level=moderate
```

Manual review checklist:

- Home, Modules, Lessons, Projects, Debugging, and Resources load in light and dark mode.
- Lesson search, filters, progress, copy-code buttons, and theme toggle work with keyboard and mouse.
- Interactive demos update visually without announcing entire code blocks to screen readers.
- External links that open in a new tab include hidden "opens in a new tab" text.
- Project starter files open correctly and support the project briefs.
- Mobile layouts have no horizontal overflow at narrow widths.
- Focus states are visible on navigation, buttons, filters, cards, form fields, and demo controls.
- `sitemap-index.xml`, `robots.txt`, favicon, manifest, and social image are present in the production build.

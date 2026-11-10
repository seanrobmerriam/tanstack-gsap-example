# Sean Merriam — TanStack Start

The root GSAP landing page migrated to React and TanStack Start, preserving its content, responsive styles, local fonts, and motion effects.

## Development

```sh
bun install
bun run dev
```

Vite starts on port 3000, or the next available port.

## Verify and build

```sh
bunx tsc --noEmit
bun run build
bun run preview
```

## Site files

- `src/routes/index.tsx`: homepage route and client animation lifecycle.
- `src/components/landing-page.tsx`: page layout composing individual section components.
- `src/components/*.tsx`: navbar, hero, ticker, about, services, process, FAQ, contact, motion index, footer, and page indicators.
- `src/lib/landing-animations.js`: GSAP effects, initialized after hydration and cleaned up on unmount.
- `src/styles.css`: original responsive design and reduced-motion styles.
- `public/fonts`: bundled fonts served locally.
- `src/routes/__root.tsx`: document metadata and stylesheet/font links.

The original site's service and contact URLs are preserved. Their destination pages were not present in the source site and are not added by this migration.

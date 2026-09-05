# Save Videos

A simple page for displaying saved videos.

**Live site:** https://nana-learn.github.io/save-videos/

## Tech Stack

- **Next.js 16** (static export via `next build`)
- **Tailwind CSS v4** for styling
- **GitHub Pages** for deployment

## Project Structure

```
src/
  app/             # Next.js App Router pages
  components/      # YouTube / file video player
  lib/             # videos.ts — video list
public/
  videos/          # Local video files (optional)
```

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export to ./out
```

## Adding a Video

Add an entry in `src/lib/videos.ts`. YouTube links play in an embedded player (including `t=` start times). Local files go in `public/videos/`.

```ts
{
  id: "clip-1",
  title: "My clip",
  description: "Optional description",
  src: "https://www.youtube.com/watch?v=VIDEO_ID&t=2192s",
}
```

3. Push to `main` — GitHub Actions deploys automatically

## Deployment

GitHub Pages is published from GitHub Actions (same setup as [pbt-findings](https://github.com/fermat-hkrc/pbt-findings)).

In the repo: **Settings → Pages → Source: GitHub Actions**.

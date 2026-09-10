# Sugar Bytes

Developer education + advocacy platform by Katrina Finney.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Current site sections

- Learn
- The Lab
- Dev Voices
- Developer Tea
- DX Check
- Community
- Speaking
- About

## Editorial system

- `lib/content.ts` is the lightweight content registry for tutorials, demos, interviews, DX Checks, and talks.
- `content/templates/dev-voices.md` is the reusable long-form developer interview template.
- `content/templates/developer-tea.md` is the field interview template for quick meetup and conference clips.

## Vercel deployment

Sugar Bytes is built with Next.js and is intended to deploy on Vercel.

1. Import the GitHub repository `KatrinaFinney/sugar-bytes` into Vercel.
2. Keep the framework preset as Next.js.
3. Use the default build command: `npm run build`.
4. Use the default output settings for Next.js.
5. Deploy from `main` so merged pull requests automatically trigger production deployments.
6. Add the custom domain after the first clean production deploy.

No custom `vercel.json` is required for the current app structure.

## Immediate next build steps

1. Add the Show-Ready Checkout Lab case study and repository link.
2. Add reusable episode pages for Dev Voices and Developer Tea.
3. Add DX Check publishing structure.
4. Add YouTube/video embeds and guest cards.
5. Add guest-interest/contact form.
6. Add analytics and newsletter signup.
7. Connect production domain and deploy to Vercel.

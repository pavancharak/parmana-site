# Parmana Systems website refresh

A responsive Next.js App Router homepage themed around responsible AI, deterministic governance, execution authority, and verifiable evidence. The information architecture takes inspiration from the clarity and institutional structure of responsible.ai without copying its branding or content.

## Files in this overlay

- `app/page.tsx` — homepage
- `app/globals.css` — responsive design system and page styling
- `app/layout.tsx` — metadata and root layout

## Apply to your existing project (Windows PowerShell)

1. Make a backup of your existing `app` directory.
2. Extract this ZIP into `D:\last\parmana-site` and allow the three files under `app` to replace the existing files.
3. Keep your existing `package.json` and `package-lock.json`.
4. Run:

```powershell
npm run dev
```

Then open `http://localhost:3000`.

## Notes

- This is a front-end homepage. The contact CTA opens the visitor's email client.
- Update the contact email, product claims, and links to match your actual production setup before launch.
- The CSS imports Google Fonts. System fallbacks are included if the fonts are unavailable.
- This overlay intentionally does not include `.next`, `node_modules`, or package lock files.


### Booking CTA
All primary meeting CTAs now link to Pavan's Cal.com booking page: `https://cal.com/pavan-charak/`.


### Explainer video and booking
The homepage includes a responsive YouTube embed for `BmEDAFNi5Rg`. Primary meeting CTAs link to `https://cal.com/pavan-charak/`.

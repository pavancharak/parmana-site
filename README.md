# Parmana Systems website

The final site is the Next.js (React) app in `app/`. The legacy static `index.html` has been removed.

A responsive Next.js App Router homepage that explains how Parmana keeps AI agents within the limits a business has approved, and keeps a record of each decision. Styled in a clean, Stripe-inspired standard (original implementation, no Stripe assets).

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

- This is a front-end homepage. The meeting CTAs open the Cal.com booking page.
- Update the contact email, product claims, and links to match your actual production setup before launch.
- The CSS imports Google Fonts. System fallbacks are included if the fonts are unavailable.
- This overlay intentionally does not include `.next`, `node_modules`, or package lock files.


### Booking CTA
All primary meeting CTAs now link to Pavan's Cal.com booking page: `https://cal.com/pavan-charak/`.


### Explainer video and booking
The homepage includes a responsive YouTube embed for `BmEDAFNi5Rg`. Primary meeting CTAs link to `https://cal.com/pavan-charak/`.


### Trust narrative update
The homepage now includes a dedicated Trust section between the hero statement and the broader approach section. It explains explicit authority, enforcement before covered actions, and verifiable evidence, with a qualification that evidence does not independently prove policy correctness or external fulfillment.


### Documentation navigation
The main navigation includes a Docs link to https://docs.parmanasystems.com, opening in a new tab.


### Visual refinement
The stylesheet adds a restrained Stripe-inspired presentation: generous spacing, dark navy typography, a limited violet accent, quiet borders, subtle card elevation, responsive type, and visible keyboard focus states. This is an original implementation and does not use Stripe branding or assets.


### Trust copy revision
The homepage trust footnote now leads with Parmana's value: verifiable evidence connecting declared authority, authorization decisions, and recorded execution events. Detailed scope limitations should remain in technical documentation, where they can be explained precisely.

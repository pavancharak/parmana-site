# Parmana Site Production Revision

This package revises the full marketing site around:

MAKE YOUR BUSINESS READY FOR AUTONOMY

READY. ENFORCED. PROVEN.

It updates the homepage, metadata, header, footer, trust, demo, booking, agents/use-case pages, CTA components, and homepage sections.

The existing functionality and routes are preserved:
/
 /agents
 /demo
 /book

## Apply

From the root of the checked-out parmana-site repository:

```powershell
powershell -ExecutionPolicy Bypass -File .\apply-parmana-revision.ps1
npm run lint
npm run build
git diff --stat
git add .
git commit -m "Reposition Parmana for autonomous business systems"
git push origin main
```

The package contains replacement source files under the same relative paths.

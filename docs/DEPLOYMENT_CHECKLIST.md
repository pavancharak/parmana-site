# Deployment Checklist: 17/25 → 21/25 Upgrade

## Pre-Deployment Verification (already run against this working tree)

- [x] All 6 fixes applied to real source files (see `FIXES_BEFORE_AFTER.md` for the diff summary; `git diff` for the exact patch)
- [x] Website builds without errors: `npm run build` → `✓ Compiled successfully`, all 4 pages generated
- [x] Title in built output: `<title>Parmana | Authorization Before Execution</title>`
- [x] Description in built output matches the new copy
- [x] Diagram appears exactly once in built output ("Payment Request" occurs 1x, was 2x)
- [x] Ed25519 named in built output (Differentiators card, AuthorizationGap paragraph, new FAQ entry)
- [x] Both Security links resolve to the same URL in built output (`href="https://parmana.fly.dev/"` x2: nav + footer)
- [x] `id="contact"` present on the closing CTA section, `id="security"` gone (repo-wide grep confirmed nothing else referenced it before renaming)
- [x] Zero em dashes in `components/`, `app/`, or `lib/`
- [x] Fixed a pre-existing, unrelated syntax error in `components/Diagram.tsx` (stray leading `2` before `"use client"`) that was silently breaking `npm run build` before this pass

## Deployment Steps

### Step 1: Review the diff
- [ ] `git status` / `git diff` to review every changed file before committing (this session did not commit — see note at the end)
- [ ] Confirm no unrelated files were touched

### Step 2: Deploy
- [ ] Commit with a clear message referencing the audit
- [ ] Push / deploy via whatever this repo's normal path is (Vercel is configured per `vercel.json`)

### Step 3: Verify Changes Live
- [ ] Visit parmanasystems.com
- [ ] View source / inspect: title should read "Parmana | Authorization Before Execution"
- [ ] Meta description should mention "checks every payment"
- [ ] Scroll to FAQ self-hosting answer: should start with "Yes. Parmana runs as a standard container..."
- [ ] Confirm the 4-box diagram appears once (in the hero), not again further down the page
- [ ] Click both "Security" links (nav and footer): both should land on `https://parmana.fly.dev/`
- [ ] Confirm the new FAQ entry "How do I know a signed authorization is real?" renders

### Step 4: Search Engine Update
- [ ] Resubmit sitemap to Google Search Console if one exists
- [ ] Request re-crawl of the homepage
- [ ] New meta description should appear in Google results within ~24h

### Step 5: Re-run the Audit
- [ ] Re-run the same audit method against the live site
- [ ] Score should move from 17/25 toward 20-21/25
- [ ] Grift-risk should stay LOW (Fix #7 was deliberately deferred, not faked, see `FIX7_CUSTOMER_PROOF_PLACEHOLDER.md`)

### Step 6: Month 2 Priority
- [ ] Line up a real, named design partner or pilot customer willing to go public
- [ ] Implement Fix #7 per `FIX7_CUSTOMER_PROOF_PLACEHOLDER.md` once one exists, not before

## Rollback Plan

- [ ] This session made source edits directly (no separate backup files) — `git diff` / `git log`
      is the rollback path. If anything breaks post-deploy, `git revert` the commit rather than
      hand-reconstructing the old copy.
- [ ] Test in a preview deployment before promoting to production if this repo's Vercel setup
      supports preview URLs (check `vercel.json` / project settings)

## Success Criteria

- [ ] All 6 fixes live on parmanasystems.com
- [ ] Re-audited score: 20-21/25 (up from 17/25)
- [ ] No broken links, no build errors
- [ ] Meta tags updated and visible in search results
- [ ] Fix #7 explicitly still open, tracked, not silently skipped

---

## Note on this session's changes

Nothing was committed or pushed. All edits are currently uncommitted working-tree changes in
`D:\last\parmana-site`. Run `git status` to see the full file list, and `git diff` to review before
committing — this checklist assumes that review happens as Step 1 above, not automatically.

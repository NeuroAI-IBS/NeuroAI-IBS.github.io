# CHANGES.md: Project Setup Log

This file documents the completed tasks and changes made to the IBS NeuroAI Group website.

---

## Initial Setup (Completed)

### Task 3.1: Initialize Hugo Project ✅

**Status:** Completed

1. Initialized Hugo project using `hugo new site . --force`
2. Installed **hugo-coder** theme as a git submodule:

   ```bash
   git submodule add https://github.com/luizdepra/hugo-coder.git themes/hugo-coder
   ```

3. Configured `hugo.toml` with:
   - Site title: "IBS NeuroAI Group"
   - Base URL: `https://ibs-neuroai-lab.github.io/`
   - Navigation menu (Home, People, Research, Publications, Open Positions, Resources)
   - Social links (GitHub, Email)

**Theme Choice:** hugo-coder - A clean, minimalist, responsive theme suitable for academic/professional sites.

---

### Task 3.2: Create Necessary Directory Structure ✅

**Status:** Completed

Created the following directories:

- `/content/` - All page content
  - `/content/home/`
  - `/content/people/` - Staff profiles
  - `/content/publication/` - Paper listings
  - `/content/research/` - Project descriptions
  - `/content/opportunities/` - Open positions
  - `/content/resources/` - Open-source code/datasets
- `/layouts/` - Custom templates
- `/static/images/` - Images and static assets
- `/themes/hugo-coder/` - Theme files

---

### Task 3.3: Configure Deployment Action ✅

**Status:** Completed

Created `.github/workflows/hugo-deploy.yml` with:

- Trigger: Push to `main` branch
- Hugo version: 0.140.0 (extended)
- Uses GitHub Pages deployment via `actions/deploy-pages@v4`
- Includes submodule checkout for theme

---

### Task 3.4: Create Initial Placeholder Content ✅

**Status:** Completed

Created placeholder files:

- `content/_index.md` - Main landing page with lab introduction
- `content/people/_index.md` - People section index
- `content/people/sungho_hong.md` - Dr. Hong's profile
- `content/publication/_index.md` - Publications page
- `content/research/_index.md` - Research topics page
- `content/opportunities/_index.md` - Open positions page
- `content/resources/_index.md` - Open resources page

---

## Files Created/Modified

| File | Description |
|------|-------------|
| `hugo.toml` | Main Hugo configuration |
| `.github/workflows/hugo-deploy.yml` | GitHub Actions deployment workflow |
| `content/_index.md` | Homepage content |
| `content/people/_index.md` | People section index |
| `content/people/sungho_hong.md` | PI profile |
| `content/publication/_index.md` | Publications page |
| `content/research/_index.md` | Research page |
| `content/opportunities/_index.md` | Open Positions page |
| `content/resources/_index.md` | Resources page |

---

## Content Updates

### Lab Logo ✅

Added lab logo to `/static/images/logo.png`.

### Dr. Hong's Profile ✅

Filled in Dr. Hong's profile details in `content/people/sungho_hong.md`.

### Team Member Profiles ✅

Added team member profiles:

- `content/people/oliver_james.md` - Oliver James

### IBS Logo in Header ✅

Added IBS logo to `/static/images/ibs_logo.gif` and configured it in the site header.

---

## Banner & Documentation Refresh (Dec 2025) ✅

1. Replaced the broken center logo with `static/images/logo_w_CMG.png`, ensured it sits beside the IBS logo, enlarged it via a dedicated `.banner-logo-center` class, and tweaked spacing/offset so the two marks align.
2. Updated the center logo hyperlink to point to `https://www.ibs.re.kr/ccs` (previously targeted an incorrect address).
3. Added concise banner-maintenance guidance to `docs/QUICK_REFERENCE.md` so future updates to logo sizing/placement are straightforward.

---

## Email obfuscation and Open Positions contact (2026-05-20) ✅

Reduced public exposure of the PI email address and routed job inquiries away from direct `mailto:` links.

1. **People page:** Envelope icons use Base64 in `data-e` and `assets/js/email-obfuscate.js` to set `mailto:` at runtime (no plain address in published HTML). Wired via `layouts/_partials/email-obfuscated-link.html` and `layouts/_partials/people/card.html`.
2. **`email-icon` shortcode:** Supports obfuscated email or direct `http(s)` links (used for the application form icon).
3. **Open Positions:** “How to Apply” points to a Google Form (placeholder ID) plus envelope icon, instead of the PI inbox.
4. **`hugo.toml`:** Added `customJS = ["js/email-obfuscate.js"]` (script lives under `assets/js/` for Hugo Pipes).
5. **Documentation:** Added `docs/EMAILS.md`; linked from `docs/QUICK_REFERENCE.md`.

**Note:** Full HTML-entity encoding in `mailto:` hrefs was tried and removed — mail clients showed literal `&#115;…` instead of the real address. See `docs/EMAILS.md` for details.

| File | Description |
|------|-------------|
| `docs/EMAILS.md` | Email obfuscation and form-link documentation |
| `assets/js/email-obfuscate.js` | Decodes `data-e` and sets `mailto:` hrefs |
| `layouts/_partials/email-obfuscated-link.html` | Obfuscated envelope partial |
| `layouts/shortcodes/email-icon.html` | Email vs URL shortcode |
| `content/opportunities/_index.md` | Google Form application link |
| `hugo.toml` | `customJS` entry for email script |
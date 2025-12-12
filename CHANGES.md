# CHANGES.md: Project Setup Log

This file documents the completed tasks and changes made to the IBS NeuroAI Lab website.

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
   - Site title: "IBS NeuroAI Lab"
   - Base URL: `https://ibs-neuroai-lab.github.io/`
   - Navigation menu (Home, People, Research, Publications, Opportunities, Resources)
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
| `content/opportunities/_index.md` | Opportunities page |
| `content/resources/_index.md` | Resources page |

---

## Content Updates

### Lab Logo ✅

Added lab logo to `/static/images/logo.png`.

### Dr. Hong's Profile ✅

Filled in Dr. Hong's profile details in `content/people/sungho_hong.md`.


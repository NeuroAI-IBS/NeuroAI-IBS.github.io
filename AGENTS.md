# AGENTS.md: Project Configuration for ampcode

This file serves as the primary configuration and context guide for the 'ampcode' AI agent and any future automated systems contributing to the ibs-neuroai-lab website.

## 1. Project Overview

* **Project Name:** IBS NeuroAI Lab Homepage
* **Organization:** ibs-neuroai-lab (Institute for Basic Science)
* **Purpose:** A professional, easy-to-maintain, and highly scalable static website to showcase the lab's research, people, publications, and open resources.
* **Target Audience:** Prospective students/staff (most important), collaborators, funding agencies, and the general scientific community.

## 2. Infrastructure & Tooling Requirements

The agent MUST adhere to the following technological constraints and choices:

| Component | Specification |
| :--- | :--- |
| **Static Site Generator (SSG)** | **Hugo** (Latest stable version) |
| **Hosting** | GitHub Pages (via `ibs-neuroai-lab.github.io`) |
| **Deployment Method** | **GitHub Actions** (The agent must create the necessary YAML workflow in `.github/workflows/` to build the Hugo site and deploy it to GitHub Pages/a `gh-pages` branch). |
| **Language** | English |
| **Primary Content Format** | Markdown (`.md`) |

## 3. Project Structure

The site uses **Hugo** with the **hugo-coder** theme. Key directories:

| Directory | Purpose |
|-----------|---------|
| `/content/` | All page content (Markdown) |
| `/content/people/` | Staff profiles |
| `/content/publication/` | Publications |
| `/content/research/` | Research projects |
| `/content/opportunities/` | Open positions |
| `/content/resources/` | Open-source code/datasets |
| `/static/` | Images, PDFs, static assets |
| `/themes/hugo-coder/` | Theme (git submodule) |

## 4. Deployment

- **Workflow:** `.github/workflows/hugo-deploy.yml`
- **Trigger:** Push to `main` branch
- **Target:** GitHub Pages

## 5. Change Log

See [CHANGES.md](CHANGES.md) for completed tasks and project history.

## 6. Next Steps

- [ ] Add lab logo to `/static/images/logo.png`
- [ ] Fill in Dr. Hong's profile details
- [ ] Add team member profiles
- [ ] Add publications
- [ ] Add research project descriptions
- [ ] Customize theme styling if needed

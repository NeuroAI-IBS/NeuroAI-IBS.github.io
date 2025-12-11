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

## 3. Initial Project Tasks for ampcode

The agent should execute the following steps to initiate the project structure:

### Task 3.1: Initialize Hugo Project

1.  Initialize a new Hugo project in the root of this repository.
2.  Choose a **modern, clean, and academic-friendly Hugo Theme**. The theme must support:
    * Dedicated pages for **People, Publications, and Research Topics**.
    * Easy integration of a **CV/Academic layout** for the main lab PI (Dr. Hong).
    * **Responsive design** for mobile viewing.
    * *Suggestion:* Consider themes like **Academic Theme (Wowchemy)** if compatible with a basic Hugo setup, or another clean, professional theme like **Clarity, Toha, or a dedicated lab theme.**

### Task 3.2: Create Necessary Directory Structure

Create the following standard Hugo directory structure, ensuring the required sub-sections for the lab are prepared:

* `/content/` (For all page content)
    * `/content/home/`
    * `/content/people/` (Must be set up for staff profiles)
    * `/content/publication/` (Must be set up for paper listings, ideally with `.bib` or similar data structure compatibility)
    * `/content/research/` (For project descriptions)
    * `/content/opportunities/` (For open positions)
    * `/content/resources/` (For open-source code/datasets)
* `/layouts/` (For custom templates, if the theme requires it)
* `/static/` (For images, PDFs, etc.)
* `/themes/` (The chosen theme)

### Task 3.3: Configure Deployment Action

1.  Create the directory: `.github/workflows/`
2.  Create a deployment YAML file (e.g., `hugo-deploy.yml`) inside it.
3.  The workflow must be configured to run on every `push` to the `main` branch and use a standard **Hugo Deploy Action** to generate and deploy the static files to the `gh-pages` branch for GitHub Pages hosting.

### Task 3.4: Create Initial Placeholder Content

Create placeholder files in the respective directories:

* `content/home/_index.md` (Main landing page content)
* `content/people/hong.md` (Dr. Hong's profile placeholder)
* `content/opportunities/open-positions.md` (Placeholder for open positions)
* `content/resources/_index.md` (Placeholder for open resources)

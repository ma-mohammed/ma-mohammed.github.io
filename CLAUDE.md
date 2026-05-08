# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bundle install                    # Install Ruby gem dependencies
bundle exec jekyll serve          # Serve locally at http://127.0.0.1:4000
bundle exec jekyll build          # Build to _site/ directory
JEKYLL_ENV=production bundle exec jekyll build  # Production build (used in CI)
```

Deployment is handled automatically via `.github/workflows/deploy.yml` on push to `main`. Manual deployment via `bin/deploy` builds then manages the `gh-pages` branch.

## Architecture

This is an **al-folio Jekyll theme** for an academic personal website. The key content areas are:

- `_pages/` — Top-level pages (about, cv, publications, projects, teaching, news)
- `_bibliography/papers.bib` — All publications in BibTeX format; rendered by `jekyll-scholar`
- `_data/cv.yml` — CV content structured as YAML
- `_data/coauthors.yml`, `_data/socials.yml`, `_data/venues.yml` — Metadata used in templates
- `_news/` — News/announcements collection
- `_projects/` — Project portfolio entries (markdown with frontmatter)

**Content rendering flow:**
1. BibTeX in `_bibliography/papers.bib` → processed by `jekyll-scholar` plugin (APA style, grouped by year) → rendered on publications page
2. `_data/cv.yml` → rendered by the `cv` layout into `_pages/cv.md`
3. Collections (`news`, `projects`) are configured in `_config.yml` and output as pages

**Templates:**
- `_layouts/` — Page-level Liquid templates (about, bib, cv, distill, post, page)
- `_includes/` — Reusable components (citation, news, projects, metadata, etc.)
- `_sass/` — SCSS source stylesheets

**Plugins** (in `_plugins/`): Custom Ruby plugins for publication processing, citation fetching (Google Scholar, InspireHEP), asset cache-busting, and utility functions.

**Third-party libraries** are loaded from CDN (Bootstrap, MathJax, Chart.js, D3, Leaflet, etc.) with SRI hashes configured in `_config.yml` under `third_party_libraries`.

## Key Configuration

`_config.yml` controls nearly everything:
- Site identity, social links, SEO metadata
- Jekyll Scholar settings (author name for highlighting: `"Abdalazeem"`, bibliography source, grouping)
- Which third-party JS/CSS libraries to load and their CDN URLs
- Layout options: dark mode, math rendering, lazy loading, medium zoom

To add a publication: add a BibTeX entry to `_bibliography/papers.bib`. Custom fields like `abbr`, `selected`, `preview`, `pdf`, `code`, `poster`, `slides`, `website` are supported in frontmatter-style BibTeX fields.

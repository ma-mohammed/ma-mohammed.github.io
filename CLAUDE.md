# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bundle install                    # Install Ruby gem dependencies
bundle exec jekyll serve          # Serve locally at http://127.0.0.1:4000
bundle exec jekyll build          # Build to _site/ directory
JEKYLL_ENV=production bundle exec jekyll build  # Production build (used in CI)
```

In PowerShell (this repo is developed on Windows), set the env var separately: `$env:JEKYLL_ENV='production'; bundle exec jekyll build`.

There is no test suite. Validation is `bundle exec jekyll build` — resolve any errors or warnings your change introduces, and preview affected pages locally.

## Deployment

Push to `main` triggers `.github/workflows/deploy.yml`, which:
1. Regenerates `_data/repositories.yml` by querying the GitHub API for public NARSLab org repos where `ma-mohammed` is a contributor — **local edits to `_data/repositories.yml` are overwritten on every deploy**
2. Builds with `JEKYLL_ENV=production`
3. Publishes `_site/` to the `gh-pages` branch (served at https://mabdalazeem.com via CNAME)

`bin/deploy` does a manual build-and-push to `gh-pages`. Never commit `_site/` — it is build output.

## Architecture

This is an **al-folio Jekyll theme** for an academic personal website. The key content areas are:

- `_pages/` — Top-level pages (about, cv, publications, projects, teaching, talks, repositories, news)
- `_bibliography/papers.bib` — All publications in BibTeX format; rendered by `jekyll-scholar`
- `_data/cv.yml` — CV content structured as YAML
- `_data/coauthors.yml`, `_data/socials.yml`, `_data/venues.yml` — Metadata used in templates
- `_news/` — News/announcements collection
- `_projects/` — Project portfolio entries (markdown with frontmatter)
- `CV/` (repo root) — LaTeX sources and PDFs for the downloadable CVs; separate from the site's CV page, which is rendered from `_data/cv.yml`

**Content rendering flow:**
1. BibTeX in `_bibliography/papers.bib` → processed by `jekyll-scholar` plugin (APA style, grouped by year) → rendered on publications page
2. `_data/cv.yml` → rendered by the `cv` layout into `_pages/cv.md`
3. Collections (`news`, `projects`) are configured in `_config.yml` and output as pages

**Templates:**
- `_layouts/` — Page-level Liquid templates (about, bib, cv, distill, post, page)
- `_includes/` — Reusable components (citation, news, projects, metadata, etc.)
- `_sass/` — SCSS source stylesheets; `_scripts/` — browser-side JS

**Plugins** (in `_plugins/`): Custom Ruby plugins for publication processing, citation fetching (Google Scholar, InspireHEP), asset cache-busting, and utility functions.

**Third-party libraries** are loaded from CDN (Bootstrap, MathJax, Chart.js, D3, Leaflet, etc.) with SRI hashes configured in `_config.yml` under `third_party_libraries`.

## Key Configuration

`_config.yml` controls nearly everything:
- Site identity, social links, SEO metadata
- Jekyll Scholar settings (author highlighting matches `last_name: [Abdalazeem]`, `first_name: [Mohammed, M.]`)
- Which third-party JS/CSS libraries to load and their CDN URLs
- Layout options: dark mode, math rendering, lazy loading, medium zoom

To add a publication: add a BibTeX entry to `_bibliography/papers.bib`. Custom fields like `abbr`, `selected`, `preview`, `pdf`, `code`, `poster`, `slides`, `website` are supported in frontmatter-style BibTeX fields.

## Conventions

- Two-space indentation in YAML, Liquid, SCSS, and Ruby; preserve YAML front matter at the top of Markdown content
- Collection entries follow existing numbered patterns: `_projects/6_project.md`, `_news/announcement_15.md`
- Lowercase, hyphenated asset filenames; static files go under `assets/`
- Commit messages are short and imperative (e.g. `Update _config.yml`)

# Repository Guidelines

## Project Structure & Module Organization

This repository is a Jekyll-based academic website. Edit page content in `_pages/`, project cards in `_projects/`, news posts in `_news/`, publications in `_bibliography/papers.bib`, and structured profile data in `_data/`. Shared Liquid components live in `_includes/` and page templates in `_layouts/`. Ruby extensions are under `_plugins/`; Sass partials and browser scripts are in `_sass/` and `_scripts/`. Put images, PDFs, fonts, and other static files under `assets/`. Jekyll generates `_site/`; treat it as build output rather than source.

## Build, Test, and Development Commands

- `bundle install` installs the Ruby dependencies declared in `Gemfile.lock`.
- `bundle exec jekyll serve` builds the site, watches for changes, and serves it at `http://127.0.0.1:4000`.
- `bundle exec jekyll build` performs the production-style build used as the primary validation check.
- `JEKYLL_ENV=production bundle exec jekyll build` enables production settings before deployment (in PowerShell: `$env:JEKYLL_ENV='production'`).

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the site and publishes `_site/` to `gh-pages`.

## Coding Style & Naming Conventions

Use two-space indentation in YAML, Liquid, SCSS, and Ruby where consistent with surrounding files. Preserve YAML front matter at the top of Markdown content. Prefer lowercase, descriptive, hyphenated asset names; follow the existing numbered patterns for collection entries, such as `_projects/6_project.md` and `_news/announcement_15.md`. Reuse includes and Sass variables instead of duplicating markup or colors. No repository-wide formatter is configured, so match the nearest existing code.

## Testing Guidelines

There is no dedicated automated test suite or coverage threshold. Before submitting, run `bundle exec jekyll build` and resolve all errors or warnings introduced by your change. Preview affected pages locally and check navigation, responsive layout, images, publication links, and downloads. For content-only changes, verify front matter and internal paths carefully.

## Commit & Pull Request Guidelines

Recent history uses short, imperative summaries such as `Create CNAME` and `Update _config.yml`. Keep each commit focused and name the affected content or behavior. Pull requests should explain the purpose, list the pages or data files changed, and note local build results. Link relevant issues when available and include before/after screenshots for visible layout or styling changes. Do not commit generated `_site/` content or credentials.

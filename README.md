# Mohammed Abdalazeem - Academic Website

Personal academic website built with Jekyll and deployed with GitHub Pages.

## What to edit most often

- Home page: `_pages/about.md`
- Publications list: `_bibliography/papers.bib`
- Projects: files in `_projects/`
- CV content: `_data/cv.yml`
- Teaching page: `_pages/teaching.md`
- News items: files in `_news/`

## Local preview

1. Install Ruby and Bundler.
2. Install dependencies:
   ```bash
   bundle install
   ```
3. Start local server:
   ```bash
   bundle exec jekyll serve
   ```
4. Open `http://127.0.0.1:4000`.

## Deployment

Push to `main`. The workflow at `.github/workflows/deploy.yml` builds and deploys automatically to GitHub Pages.

## Site structure

- `_pages/`: static pages and navigation entries
- `_projects/`: project cards/content
- `_bibliography/`: BibTeX publication source
- `_data/`: structured data (CV, socials, etc.)
- `assets/`: images, CSS, and JS

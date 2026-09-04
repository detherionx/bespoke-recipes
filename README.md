# Bespoke Recipes

A deliberately small, durable personal recipe library built from plain Markdown and published with GitHub Pages/Jekyll.

The collection is inspired by German Imbiss food, family cooking, and dishes encountered while travelling. Some recipes are reconstructions based on taste and cooking experience; they are not claims of possessing restaurant originals.

Every recipe carries a visible status:

- `tested` means the recipe was actually cooked and the recorded version worked.
- `developing` means further adjustments are expected.
- `stable` is reserved for recipes that have been cooked repeatedly and rarely need changes.

The raw files in [`_recipes`](./_recipes/) are intended to remain useful directly on GitHub. Each contains a self-contained plaintext shopping list, exact ingredients, practical cooking cues, lessons learned, and storage guidance.

## Repository structure

```text
.
├── README.md
├── _config.yml
├── index.md
├── favourites.md
├── about.md
├── _recipes/
├── _lebensmittel/
├── _layouts/
├── _includes/
└── assets/
```

Jekyll turns each Markdown file in `_recipes` into a recipe page and each file in `_lebensmittel` into a Lebensmittelkunde page. The home and favourites pages are generated from front matter, so a recipe only needs to be maintained in one place. The structured food-storage schema is documented in [`lebensmittelkunde/README.md`](./lebensmittelkunde/README.md).

## Enable GitHub Pages

1. Fork or clone this repository.
2. On GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and the `/ (root)` folder, then save.
5. GitHub will publish the site at `https://<username>.github.io/<repository>/` after the first Pages build completes.

If the repository name changes, update `baseurl` in `_config.yml`. For a user or organisation site named `<username>.github.io`, set `baseurl: ""`.

Native GitHub Pages publishing is sufficient; this repository intentionally has no custom deployment Action.

## Contributing / updating recipes

Edit the recipe's `.md` file in `_recipes` using GitHub's web editor, a phone, or any text editor. Keep the YAML front matter at the top and preserve the common section order:

1. Shopping List
2. Ingredients
3. Equipment, when it matters
4. Instructions
5. What to Look For
6. Notes / Lessons Learned
7. Storage / Reheating
8. Variations, when useful

Set `favourite: true` to show a recipe on the favourites page. Use a consistent category name so the automatic category filters group it correctly. Update `status` honestly when a cook reveals something new.

## Recipe front matter

```yaml
---
layout: recipe
title: "Recipe title"
subtitle: "Short description"
category: "German Imbiss"
origin: "Ruhrgebiet"
servings: "6–8"
prep_time: "20 Min."
cook_time: "1 Std."
total_time: "ca. 1 Std. 20 Min."
tags:
  - example
favourite: false
status: developing
---
```

Allowed working statuses are `tested`, `developing`, and `stable`.

## Design and privacy

The site is mobile-first, print-friendly, and dependency-light. Search and category filtering use a small vanilla JavaScript file. There are no trackers, advertisements, popups, external fonts, databases, or backend services.

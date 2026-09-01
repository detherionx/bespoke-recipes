---
layout: default
title: Rezepte
permalink: /
---

<section class="intro">
  <p class="eyebrow">Das persönliche Imbiss-Notizbuch</p>
  <h1>Rezepte, die beim Kochen besser werden.</h1>
  <p>Ohne Vorgeschichte: direkt zu Einkauf, Zutaten und Herd. <strong>Tested</strong> wurde gekocht; <strong>developing</strong> wird weiter verfeinert.</p>
</section>

<section class="controls" aria-label="Rezepte durchsuchen und filtern">
  <label for="recipe-search">Rezepte durchsuchen</label>
  <input id="recipe-search" type="search" placeholder="z. B. Kartoffel, Ruhrgebiet, Herbst …" autocomplete="off">
  <div class="filter-row" role="group" aria-label="Kategorie">
    <button class="filter-button is-active" type="button" data-category="all">Alle</button>
    {% assign categories = site.recipes | map: "category" | uniq | sort %}
    {% for category in categories %}<button class="filter-button" type="button" data-category="{{ category | escape }}">{{ category }}</button>{% endfor %}
  </div>
  <p id="search-status" class="search-status" aria-live="polite"></p>
</section>

<section class="category-section" aria-labelledby="categories-title">
  <div class="section-heading"><h2 id="categories-title">Kategorien</h2></div>
  <div class="category-grid">
    {% assign categories = site.recipes | map: "category" | uniq | sort %}
    {% for category in categories %}
      {% assign category_recipes = site.recipes | where: "category", category %}
      <button class="category-tile" type="button" data-category-jump="{{ category | escape }}">
        <span>{{ category }}</span>
        <small>{{ category_recipes.size }} {% if category_recipes.size == 1 %}Rezept{% else %}Rezepte{% endif %}</small>
      </button>
    {% endfor %}
  </div>
</section>

<section>
  <div class="section-heading">
    <h2>Favoriten</h2>
    <a href="{{ '/favourites/' | relative_url }}">Alle Favoriten</a>
  </div>
  <div class="recipe-grid favourites-grid">
    {% assign favourites = site.recipes | where: "favourite", true | sort: "title" %}
    {% for recipe in favourites %}{% include recipe-card.html recipe=recipe %}{% endfor %}
  </div>
</section>

<section>
  <div class="section-heading"><h2 id="all-recipes">Alle Rezepte</h2></div>
  <div id="recipe-grid" class="recipe-grid">
    {% assign recipes = site.recipes | sort: "title" %}
    {% for recipe in recipes %}{% include recipe-card.html recipe=recipe %}{% endfor %}
  </div>
  <p id="no-results" class="no-results" hidden>Kein Rezept passt zu dieser Suche.</p>
</section>

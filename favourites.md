---
layout: default
title: Favoriten
permalink: /favourites/
---

# Favoriten

Die Rezepte mit dem Stern – schnell wiedergefunden, wenn die Entscheidung schon gefallen ist.

<div class="recipe-grid">
  {% assign favourites = site.recipes | where: "favourite", true | sort: "title" %}
  {% for recipe in favourites %}{% include recipe-card.html recipe=recipe %}{% endfor %}
</div>

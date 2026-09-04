---
layout: default
title: "Was darf zusammen gelagert werden?"
permalink: /lebensmittelkunde/zusammen-lagern/
description: Mobile Kurzübersicht zu Ethylen, Lagergruppen und wichtigen Trennregeln.
---

<section class="intro">
  <p class="eyebrow">Lebensmittelkunde · Schnellreferenz</p>
  <h1>Was darf zusammen gelagert werden?</h1>
  <p>Gleicher Lagerort bedeutet nicht automatisch direkte Nachbarschaft. Diese Übersicht zeigt die wenigen Trennregeln, die im Haushalt wirklich einen Unterschied machen.</p>
</section>

## Ethylen-Produzenten

{% assign producers = site.lebensmittel | sort: "title" %}
<div class="food-grid">
{% for food in producers %}{% if food.ethylene.produces == true %}{% include food-card.html food=food %}{% endif %}{% endfor %}
</div>

Äpfel, Bananen, Birnen und reife Tomaten setzen Ethylen frei. Dieses natürliche Pflanzenhormon beziehungsweise Gas kann Reifung und Alterung benachbarter Ware beschleunigen. Die Lebensmittel sind deshalb weder gefährlich noch müssen sie von allem isoliert werden. Trennung ist vor allem bei ethylenempfindlicher Ware oder längerer Lagerdauer sinnvoll.

## Ethylen-empfindlich: besser getrennt

Besonders relevant sind Gurken und grünes Blattgemüse. Auch Karotten, Zucchini und Paprika werden in dieser Haushaltsübersicht vorsorglich von den oben genannten Nachreifern getrennt. Die einzelnen Seiten dokumentieren die jeweilige Empfindlichkeit und Ausnahmen.

<div class="food-grid">
{% assign sensitive_foods = site.lebensmittel | sort: "title" %}
{% for food in sensitive_foods %}{% if food.ethylene.sensitivity == "high" %}{% include food-card.html food=food %}{% endif %}{% endfor %}
</div>

## Gute praktische Lagergruppen

<div class="storage-groups">
  <section class="storage-group">
    <h3>Gemüsefach – relativ unproblematisch</h3>
    <p><a href="{{ '/lebensmittelkunde/karotte/' | relative_url }}">Karotten</a>, <a href="{{ '/lebensmittelkunde/zucchini/' | relative_url }}">Zucchini</a>, <a href="{{ '/lebensmittelkunde/paprika/' | relative_url }}">Paprika</a> und <a href="{{ '/lebensmittelkunde/gurke/' | relative_url }}">Gurke</a>.</p>
    <p>Vor Austrocknung schützen und von Äpfeln, Bananen, Birnen sowie sehr reifen Tomaten trennen. Gurken nicht an die besonders kalte Kühlschrankrückwand legen.</p>
  </section>
  <section class="storage-group">
    <h3>Kühl + dunkel + trocken</h3>
    <p><a href="{{ '/lebensmittelkunde/kartoffel/' | relative_url }}">Kartoffeln</a>, <a href="{{ '/lebensmittelkunde/zwiebel/' | relative_url }}">Zwiebeln</a> und <a href="{{ '/lebensmittelkunde/knoblauch/' | relative_url }}">Knoblauch</a> brauchen Luft statt geschlossener Plastikbeutel.</p>
    <div class="conflict-card"><strong>Kartoffeln + Zwiebeln: separat.</strong><br>Sie mögen einen ähnlichen Lagerbereich, sollen aber nicht direkt zusammen gelagert werden.</div>
  </section>
  <section class="storage-group">
    <h3>Ganze Winterkürbisse</h3>
    <p><a href="{{ '/lebensmittelkunde/kabocha/' | relative_url }}">Kabocha</a>, <a href="{{ '/lebensmittelkunde/hokkaido/' | relative_url }}">Hokkaido</a> und <a href="{{ '/lebensmittelkunde/butternut/' | relative_url }}">Butternut</a>: kühl, trocken und gut belüftet lagern.</p>
    <p>Nicht an feuchte Flächen stapeln und regelmäßig auf weiche Stellen prüfen. Angeschnittene Stücke gehören geschützt in den Kühlschrank.</p>
  </section>
</div>

## Bananen: Reifung und Fruchtfliegen

Bananen reifen bei Raumtemperatur. Unreife Bananen nicht standardmäßig kühlen; sind sie richtig reif, bremst der Kühlschrank die weitere Reifung. Die Schale kann dabei stark dunkel werden, obwohl das Fruchtfleisch noch verwendbar ist.

Eine komplett luftdichte Kunststoffbox bei Raumtemperatur ist keine gute Standardlösung. Bananen atmen weiter und geben Feuchtigkeit sowie Ethylen ab; in einem feuchten, geschlossenen Behälter leidet die Qualität und Schimmel wird begünstigt.

<div class="comparison-grid" aria-label="Drei Aufbewahrungsarten für Bananen">
  <section class="comparison-card"><h3>Offene Schale</h3><p><strong>Beste Lüftung</strong><br>Schlechtester Schutz vor Fruchtfliegen.</p></section>
  <section class="comparison-card"><h3>Luftdichte Box</h3><p><strong>Gute Fliegenbarriere</strong><br>Schlechtes Feuchtigkeits- und Gasmanagement.</p></section>
  <section class="comparison-card is-best"><h3>Belüftet + fliegendicht</h3><p><strong>Bester Kompromiss</strong><br>Feines Netz oder belüfteter Behälter mit fliegensicheren Öffnungen.</p></section>
</div>

### Bei Fruchtfliegenproblemen

- Kleinere Mengen kaufen und reife Bananen zeitnah essen oder kühlen.
- Überreifes oder beschädigtes Obst entfernen.
- Saft- und Obstreste auf benachbarten Flächen beseitigen.
- Lebensmittelabfälle regelmäßig entsorgen oder geschlossen halten.
- Einen feinmaschigen, belüfteten Speiseschutz verwenden.

Fruchtfliegen entstehen nicht spontan aus Obst. Sie werden von reifendem oder gärendem organischem Material angezogen. Die praktische Strategie lautet deshalb: Zugang verhindern, überreifes Material entfernen, Rückstände reinigen, Abfall kontrollieren und notwendige Belüftung erhalten.

## Quellenbasis

- [Bundeszentrum für Ernährung: Lebensmittel richtig lagern](https://www.bzfe.de/kueche-und-alltag/kochen/lebensmittel-richtig-lagern)
- [UC Davis: Cucumber – Lagerung und Ethylenempfindlichkeit](https://postharvest.ucdavis.edu/produce-facts-sheets/cucumber)
- [UC Davis: Pumpkin & Winter Squash](https://postharvest.ucdavis.edu/produce-facts-sheets/pumpkin-winter-squash)
- [Utah State University Extension: Bananas](https://extension.usu.edu/nutrition/research/bananas)
- [University of Minnesota Extension: Fruit flies](https://apps.extension.umn.edu/garden/diagnose/insect/indoor/flies/small/fruit-flies.html)

<p class="knowledge-actions"><a href="{{ '/lebensmittelkunde/' | relative_url }}">← Zum Lebensmittel-Schnellcheck</a></p>

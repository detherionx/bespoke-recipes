---
layout: default
title: Lebensmittelkunde
permalink: /lebensmittelkunde/
description: Schnelle, praktische Lagerhinweise für Obst und Gemüse im Haushalt.
---

<section class="intro knowledge-intro">
  <p class="eyebrow">Nach dem Einkauf</p>
  <h1>Wo kommt was hin?</h1>
  <p>Lagerort, Verpackung, Haltbarkeit und wichtige Nachbarschaftsregeln – kurz genug für die Küche, strukturiert genug für spätere Einkaufs- und Vorratsfragen.</p>
  <div class="knowledge-actions">
    <a href="{{ '/lebensmittelkunde/zusammen-lagern/' | relative_url }}">Was darf zusammen gelagert werden?</a>
  </div>
</section>

<section aria-labelledby="quick-title">
  <div class="section-heading"><h2 id="quick-title">Schnell-Check</h2></div>
  <div class="quick-grid">
    <article class="quick-item"><a href="{{ '/lebensmittelkunde/tomate/' | relative_url }}"><strong>Küche</strong><h3>Tomaten</h3><p>Reif gegebenenfalls in den Kühlschrank.</p></a></article>
    <article class="quick-item"><a href="{{ '/lebensmittelkunde/gurke/' | relative_url }}"><strong>Gemüsefach</strong><h3>Gurke</h3><p>Folie dran; weg von Ethylen-Produzenten.</p></a></article>
    <article class="quick-item"><a href="{{ '/lebensmittelkunde/karotte/' | relative_url }}"><strong>Gemüsefach</strong><h3>Karotten</h3><p>Vor Austrocknung schützen.</p></a></article>
    <article class="quick-item"><a href="{{ '/lebensmittelkunde/zucchini/' | relative_url }}"><strong>Gemüsefach</strong><h3>Zucchini</h3><p>Locker und geschützt lagern.</p></a></article>
    <article class="quick-item"><a href="{{ '/lebensmittelkunde/kartoffel/' | relative_url }}"><strong>Kühl · dunkel · luftig</strong><h3>Kartoffeln</h3><p>Nicht mit Zwiebeln lagern.</p></a></article>
    <article class="quick-item"><a href="{{ '/lebensmittelkunde/zwiebel/' | relative_url }}"><strong>Kühl · trocken · luftig</strong><h3>Zwiebeln</h3><p>Nicht mit Kartoffeln lagern.</p></a></article>
    <article class="quick-item"><a href="{{ '/lebensmittelkunde/apfel/' | relative_url }}"><strong>Kühl</strong><h3>Äpfel</h3><p>Ethylen-Produzent; empfindliches Gemüse trennen.</p></a></article>
    <article class="quick-item"><a href="{{ '/lebensmittelkunde/banane/' | relative_url }}"><strong>Küche</strong><h3>Bananen</h3><p>Ethylen und Fruchtfliegen beachten; nicht luftdicht einschließen.</p></a></article>
    <article class="quick-item"><a href="{{ '/lebensmittelkunde/kabocha/' | relative_url }}"><strong>Kühl · trocken · luftig</strong><h3>Kürbis, ganz</h3><p>Nach dem Anschnitt in den Kühlschrank.</p></a></article>
  </div>
</section>

<section aria-labelledby="all-foods-title">
  <div class="section-heading"><h2 id="all-foods-title">Alle Lebensmittel</h2></div>
  <div class="food-grid">
    {% assign foods = site.lebensmittel | sort: "title" %}
    {% for food in foods %}{% include food-card.html food=food %}{% endfor %}
  </div>
</section>

<p class="data-note">Die Angaben beschreiben typische Haushaltslagerung und Qualitätszeiträume. Ausgangsfrische, Sorte und tatsächliche Temperatur können die Dauer deutlich verändern.</p>

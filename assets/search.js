(function () {
  const search = document.querySelector('#recipe-search');
  const grid = document.querySelector('#recipe-grid');
  if (!search || !grid) return;

  const cards = Array.from(grid.querySelectorAll('.recipe-card'));
  const buttons = Array.from(document.querySelectorAll('.filter-button'));
  const categoryTiles = Array.from(document.querySelectorAll('.category-tile'));
  const status = document.querySelector('#search-status');
  const empty = document.querySelector('#no-results');
  let category = 'all';

  function normalise(value) {
    return value.toLocaleLowerCase('de-DE').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  function filterRecipes() {
    const query = normalise(search.value.trim());
    let visible = 0;
    cards.forEach((card) => {
      const matchesText = normalise(card.dataset.search || '').includes(query);
      const matchesCategory = category === 'all' || card.dataset.category === category;
      const show = matchesText && matchesCategory;
      card.hidden = !show;
      if (show) visible += 1;
    });
    status.textContent = `${visible} ${visible === 1 ? 'Rezept' : 'Rezepte'}`;
    empty.hidden = visible !== 0;
  }

  search.addEventListener('input', filterRecipes);
  buttons.forEach((button) => button.addEventListener('click', () => {
    category = button.dataset.category;
    buttons.forEach((item) => item.classList.toggle('is-active', item === button));
    filterRecipes();
  }));
  categoryTiles.forEach((tile) => tile.addEventListener('click', () => {
    category = tile.dataset.categoryJump;
    buttons.forEach((item) => item.classList.toggle('is-active', item.dataset.category === category));
    filterRecipes();
    document.querySelector('#all-recipes').scrollIntoView({ behavior: 'smooth' });
  }));
  filterRecipes();
}());

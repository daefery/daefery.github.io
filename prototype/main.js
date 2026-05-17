document.addEventListener('DOMContentLoaded', () => {
  // ── Project filter ──
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projCards = document.querySelectorAll('.projects-grid .proj-card');
  const featuredCards = document.querySelectorAll('.projects-featured .proj-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const allCards = [...projCards, ...featuredCards];
      allCards.forEach(card => {
        const cats = card.dataset.cat || '';
        if (filter === 'all' || cats.includes(filter)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
});

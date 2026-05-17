document.addEventListener('DOMContentLoaded', () => {
  // ── Project filter ──
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projCards = document.querySelectorAll('.projects-grid .proj-card');
  const featuredCards = document.querySelectorAll('.projects-featured .proj-card');
  const featuredWrapper = document.querySelector('.projects-featured');

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

      // Hide featured wrapper when all featured cards are hidden
      const anyFeaturedVisible = [...featuredCards].some(
        c => !c.classList.contains('hidden')
      );
      featuredWrapper.classList.toggle('all-hidden', !anyFeaturedVisible);
    });
  });

  // ── Active nav on scroll ──
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle(
            'nav-active',
            link.getAttribute('href') === `#${id}`
          );
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => observer.observe(s));
});

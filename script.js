/* ─────────────────────────────────────────
   HEADER: solid on scroll
───────────────────────────────────────── */
const header = document.querySelector('[data-header]');

function updateHeader() {
  header.classList.toggle('is-solid', window.scrollY > 24);
}
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

/* ─────────────────────────────────────────
   HAMBURGER MENU
───────────────────────────────────────── */
const menuToggle  = document.getElementById('menu-toggle');
const navLinks    = document.getElementById('nav-links');
const navBackdrop = document.getElementById('nav-backdrop');

function openMenu() {
  navLinks.classList.add('open');
  navBackdrop.classList.add('visible');
  menuToggle.classList.add('open');
  menuToggle.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  navLinks.classList.remove('open');
  navBackdrop.classList.remove('visible');
  menuToggle.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

menuToggle.addEventListener('click', () => {
  navLinks.classList.contains('open') ? closeMenu() : openMenu();
});

// Close on backdrop click
navBackdrop.addEventListener('click', closeMenu);

// Close when a nav link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// Close on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeMenu();
});

/* ─────────────────────────────────────────
   ANIMATE ON SCROLL (Intersection Observer)
───────────────────────────────────────── */
const animateEls = document.querySelectorAll('[data-animate]');

if ('IntersectionObserver' in window && animateEls.length) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Stagger siblings inside the same grid parent
          const siblings = entry.target.parentElement
            ? [...entry.target.parentElement.querySelectorAll('[data-animate]')]
            : [];
          const idx = siblings.indexOf(entry.target);
          const delay = idx >= 0 ? idx * 80 : 0;

          setTimeout(() => {
            entry.target.classList.add('in-view');
          }, delay);

          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  animateEls.forEach(el => observer.observe(el));
} else {
  // Fallback: show everything immediately
  animateEls.forEach(el => el.classList.add('in-view'));
}

/* ─────────────────────────────────────────
   ACTIVE NAV LINK (highlight on scroll)
───────────────────────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

function updateActiveNav() {
  const scrollY = window.scrollY + 100;
  let current = '';

  sections.forEach(section => {
    if (scrollY >= section.offsetTop) {
      current = section.id;
    }
  });

  navAnchors.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
  });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });
updateActiveNav();

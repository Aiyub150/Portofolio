
const header = document.querySelector('[data-header]');

function updateHeader() {
  header.classList.toggle('is-solid', window.scrollY > 24);
}
updateHeader();

(function initTyping() {
  const titleEl = document.getElementById('hero-title');
  const descEl  = document.getElementById('hero-desc');
  if (!titleEl || !descEl) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    try {
      const lines = JSON.parse(titleEl.dataset.lines || '[]');
      titleEl.innerHTML = lines.join('<br>');
    } catch (e) {
      titleEl.textContent = titleEl.getAttribute('aria-label') || '';
    }
    descEl.textContent = descEl.dataset.text || '';
    return;
  }

  const titleCursor = titleEl.querySelector('.typing-cursor');
  const descCursor  = descEl.querySelector('.typing-cursor');

  const wait = ms => new Promise(res => setTimeout(res, ms));

  function typeString(text, container, cursor, charDelay = 38) {
    return new Promise(resolve => {
      let i = 0;
      
      const textNode = document.createTextNode('');
      container.insertBefore(textNode, cursor);

      function nextChar() {
        if (i < text.length) {
          textNode.textContent += text[i];
          i++;
          setTimeout(nextChar, charDelay + Math.random() * 22); 
        } else {
          resolve();
        }
      }
      nextChar();
    });
  }

  async function runTyping() {
    
    await wait(780);

    let lines = [];
    try {
      lines = JSON.parse(titleEl.dataset.lines || '[]');
    } catch (e) {
      lines = [titleEl.getAttribute('aria-label') || ''];
    }

    for (let li = 0; li < lines.length; li++) {
      
      const txt = lines[li].replace(/&amp;/g, '&');

      await typeString(txt, titleEl, titleCursor, 55); 

      if (li < lines.length - 1) {
        titleEl.insertBefore(document.createElement('br'), titleCursor);
        await wait(120); 
      }
    }

    await wait(420);
    titleCursor.classList.add('cursor-done');

    await wait(300);

    const descText = descEl.dataset.text || '';
    await typeString(descText, descEl, descCursor, 18); 

    await wait(600);
    descCursor.classList.add('cursor-done');
  }

  runTyping();
})();

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

navBackdrop.addEventListener('click', closeMenu);
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMenu);
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeMenu();
});

const allSections = document.querySelectorAll('main section[id]');

function triggerSectionIntro(targetId) {
  const target = document.getElementById(targetId);
  if (!target) return;

  allSections.forEach(s => s.classList.remove('section-enter'));

  void target.offsetWidth;

  target.classList.add('section-enter');

  target.addEventListener('animationend', () => {
    target.classList.remove('section-enter');
  }, { once: true });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const hash = anchor.getAttribute('href').slice(1);
    if (hash) triggerSectionIntro(hash);
  });
});

const animateEls = document.querySelectorAll('[data-animate]');

if ('IntersectionObserver' in window && animateEls.length) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const siblings = entry.target.parentElement
            ? [...entry.target.parentElement.querySelectorAll('[data-animate]')]
            : [];
          const idx   = siblings.indexOf(entry.target);
          const delay = idx >= 0 ? idx * 80 : 0;
          setTimeout(() => entry.target.classList.add('in-view'), delay);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  animateEls.forEach(el => observer.observe(el));
} else {
  animateEls.forEach(el => el.classList.add('in-view'));
}

const sections    = document.querySelectorAll('section[id]');
const navAnchors  = document.querySelectorAll('.nav-links a[href^="#"]');
let   updateFabs   = () => {};
let   ticking     = false;

function onScroll() {
  if (!ticking) {
    requestAnimationFrame(() => {
      updateHeader();
      updateActiveNav();
      updateFabs();
      ticking = false;
    });
    ticking = true;
  }
}

function updateActiveNav() {
  const scrollY = window.scrollY + 100;
  let current = '';
  sections.forEach(section => {
    if (scrollY >= section.offsetTop) current = section.id;
  });
  navAnchors.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
  });
}

window.addEventListener('scroll', onScroll, { passive: true });
updateActiveNav();

(function initFab() {
  const fabTop = document.getElementById('fab-top');
  const fabWa  = document.querySelector('.fab-wa');
  if (!fabTop || !fabWa) return;

  updateFabs = function updateFloatingActions() {
    const visible = window.scrollY > 300;
    fabTop.classList.toggle('is-visible', visible);
    fabWa.classList.toggle('is-visible', visible);
  };

  updateFabs();

  fabTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

})();

(function initPanoramaSlider() {
  const swiperEl = document.querySelector('.pano-swiper');
  if (!swiperEl || typeof Swiper === 'undefined') return;

  const captionEl = document.getElementById('pano-caption');
  const titleEl   = document.getElementById('pano-caption-title');
  const descEl    = document.getElementById('pano-caption-desc');

  const originalSlides = [...swiperEl.querySelectorAll('.pano-slide')];
  const slideData = originalSlides.map(s => ({
    title: s.dataset.title || '',
    desc:  s.dataset.desc  || '',
  }));

  function updateCaption(realIndex) {
    const data = slideData[realIndex % slideData.length];
    if (!captionEl) return;
    captionEl.classList.add('is-fading');
    setTimeout(() => {
      titleEl.textContent = data.title;
      descEl.textContent  = data.desc;
      captionEl.classList.remove('is-fading');
    }, 220);
  }

  const swiper = new Swiper('.pano-swiper', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 1.3,
    spaceBetween: 24,
    speed: 700,
    grabCursor: true,

    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },

    navigation: {
      prevEl: '.pano-btn-prev',
      nextEl: '.pano-btn-next',
    },

    pagination: {
      el: '.pano-pagination',
      clickable: true,
    },

    keyboard: { enabled: true },

    breakpoints: {
      480:  { slidesPerView: 1.2, spaceBetween: 20 },
      768:  { slidesPerView: 1.4, spaceBetween: 28 },
      1080: { slidesPerView: 1.6, spaceBetween: 36 },
      1400: { slidesPerView: 1.8, spaceBetween: 44 },
    },

    on: {
      
      init(sw) {
        updateCaption(sw.realIndex);
      },
      
      realIndexChange(sw) {
        updateCaption(sw.realIndex);
      },
    },
  });
})();

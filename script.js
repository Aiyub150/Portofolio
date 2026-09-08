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
   TYPING INTRO — H1 lalu hero-desc
   Urutan:
     1. Tunggu delay awal (sync dengan stagger hero CSS)
     2. Ketik h1 baris per baris (tiap baris selesai, tambah <br>)
     3. Kursor h1 fade-out → kursor hero-desc muncul
     4. Ketik hero-desc karakter per karakter
     5. Kursor hero-desc fade-out

   Fallback: prefers-reduced-motion → tampilkan
   teks penuh langsung tanpa animasi.
───────────────────────────────────────── */
(function initTyping() {
  const titleEl = document.getElementById('hero-title');
  const descEl  = document.getElementById('hero-desc');
  if (!titleEl || !descEl) return;

  /* Hormat prefers-reduced-motion: langsung tampilkan teks */
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const lines = JSON.parse(titleEl.dataset.lines || '[]');
    titleEl.innerHTML = lines.join('<br>');

    descEl.textContent = descEl.dataset.text || '';
    return;
  }

  /* ── Kursor di masing-masing elemen ── */
  const titleCursor = titleEl.querySelector('.typing-cursor');
  const descCursor  = descEl.querySelector('.typing-cursor');

  /* ── Helper: promise-based delay ── */
  const wait = ms => new Promise(res => setTimeout(res, ms));

  /* ── Helper: ketik satu string karakter per karakter ──
     charDelay  : jeda antar karakter (ms)
     container  : elemen tempat karakter ditambahkan
     cursor     : elemen kursor yang selalu di akhir
  */
  function typeString(text, container, cursor, charDelay = 38) {
    return new Promise(resolve => {
      let i = 0;
      /* Simpan teks node terpisah agar kursor selalu di paling akhir */
      const textNode = document.createTextNode('');
      container.insertBefore(textNode, cursor);

      function nextChar() {
        if (i < text.length) {
          textNode.textContent += text[i];
          i++;
          setTimeout(nextChar, charDelay + Math.random() * 22); /* variasi kecil agar terasa alami */
        } else {
          resolve();
        }
      }
      nextChar();
    });
  }

  /* ── Main sequence ── */
  async function runTyping() {
    /* Tunggu sampai eyebrow selesai muncul (sync dengan delay CSS 150ms + durasi 600ms) */
    await wait(780);

    /* ── FASE 1: Ketik H1 baris per baris ── */
    const lines = JSON.parse(titleEl.dataset.lines || '[]');

    for (let li = 0; li < lines.length; li++) {
      /* Decode HTML entity &amp; → & sebelum diketik */
      const txt = lines[li].replace(/&amp;/g, '&');

      await typeString(txt, titleEl, titleCursor, 55); /* h1 sedikit lebih lambat, berkesan */

      /* Setelah baris terakhir tidak perlu <br> */
      if (li < lines.length - 1) {
        titleEl.insertBefore(document.createElement('br'), titleCursor);
        await wait(120); /* jeda sebentar sebelum baris berikutnya */
      }
    }

    /* Kursor h1 blink sebentar setelah selesai, lalu fade-out */
    await wait(420);
    titleCursor.classList.add('cursor-done');

    /* ── Jeda transisi antar elemen ── */
    await wait(300);

    /* ── FASE 2: Ketik hero-desc ── */
    const descText = descEl.dataset.text || '';
    await typeString(descText, descEl, descCursor, 18); /* desc lebih cepat karena panjang */

    /* Kursor desc blink sebentar lalu fade-out */
    await wait(600);
    descCursor.classList.add('cursor-done');
  }

  runTyping();
})();

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

navBackdrop.addEventListener('click', closeMenu);
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMenu);
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeMenu();
});

/* ─────────────────────────────────────────
   SECTION INTRO ANIMATION
   Saat pengunjung klik nav link, section
   tujuan mendapat class .section-enter
   yang men-trigger animasi halus via CSS.
───────────────────────────────────────── */
const allSections = document.querySelectorAll('main section[id]');

function triggerSectionIntro(targetId) {
  const target = document.getElementById(targetId);
  if (!target) return;

  // Hapus class dari semua section dulu
  allSections.forEach(s => s.classList.remove('section-enter'));

  // Void reflow agar animasi restart dengan benar
  void target.offsetWidth;

  target.classList.add('section-enter');

  // Bersihkan class setelah animasi selesai agar tidak mengganggu state lain
  target.addEventListener('animationend', () => {
    target.classList.remove('section-enter');
  }, { once: true });
}

// Pasang listener ke semua nav anchor + hero action buttons
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const hash = anchor.getAttribute('href').slice(1);
    if (hash) triggerSectionIntro(hash);
  });
});

/* ─────────────────────────────────────────
   ANIMATE ON SCROLL (Intersection Observer)
───────────────────────────────────────── */
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

/* ─────────────────────────────────────────
   ACTIVE NAV LINK + THROTTLED SCROLL
   Semua scroll handler digabung dalam satu
   listener dengan requestAnimationFrame
   agar tidak ada multiple scroll events.
───────────────────────────────────────── */
const sections    = document.querySelectorAll('section[id]');
const navAnchors  = document.querySelectorAll('.nav-links a[href^="#"]');
let   ticking     = false;

function onScroll() {
  if (!ticking) {
    requestAnimationFrame(() => {
      updateHeader();
      updateActiveNav();
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

// Ganti dua listener scroll terpisah dengan satu listener terpadu
window.removeEventListener('scroll', updateHeader);
window.addEventListener('scroll', onScroll, { passive: true });
updateActiveNav();

/* ─────────────────────────────────────────
   PANORAMA GALLERY — Swiper + 3D efek
   Cara menambah foto baru:
   Cukup duplikasi <div class="swiper-slide pano-slide"> di HTML,
   ubah src img, data-title, data-desc.
   JS dan CSS otomatis menyesuaikan — tidak perlu diubah.
───────────────────────────────────────── */
(function initPanoramaSlider() {
  const swiperEl = document.querySelector('.pano-swiper');
  if (!swiperEl || typeof Swiper === 'undefined') return;

  const captionEl = document.getElementById('pano-caption');
  const titleEl   = document.getElementById('pano-caption-title');
  const descEl    = document.getElementById('pano-caption-desc');

  /* Kumpulkan data title+desc dari slide ASLI (bukan clone Swiper) */
  const originalSlides = [...swiperEl.querySelectorAll('.pano-slide')];
  const slideData = originalSlides.map(s => ({
    title: s.dataset.title || '',
    desc:  s.dataset.desc  || '',
  }));

  /* Fungsi update caption dengan fade — pakai realIndex */
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
      /* Init — gunakan realIndex untuk dapat slide asli */
      init(sw) {
        updateCaption(sw.realIndex);
      },
      /* Setiap slide berubah — gunakan realIndex */
      realIndexChange(sw) {
        updateCaption(sw.realIndex);
      },
    },
  });
})();

/* ─── Plannr script.js ─── */

(function () {
  'use strict';

  const scrollContainer = document.getElementById('scroll-container');
  const nav             = document.getElementById('main-nav');
  const dots            = document.querySelectorAll('.dot');
  const dotsWrap        = document.getElementById('section-dots');
  const sections        = document.querySelectorAll('.snap-section');

  // Section index tracking
  let currentIndex = 0;

  /* ── Intersection Observer to detect which section is in view ── */
  const observerOptions = {
    root: scrollContainer,
    threshold: 0.45,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');

        // Find index of this section
        const idx = Array.from(sections).indexOf(entry.target);
        if (idx !== -1) {
          currentIndex = idx;
          updateDots(idx);
          updateNav(entry.target);
        }
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));

  /* ── Update navigation bar style ── */
  function updateNav(section) {
    const isDark =
      section.classList.contains('dark-section') ||
      section.id === 'footer';

    if (isDark) {
      nav.classList.add('nav--dark');
      dotsWrap.classList.add('dots--light');
    } else {
      nav.classList.remove('nav--dark');
      dotsWrap.classList.remove('dots--light');
    }
  }

  /* ── Update dot indicators ── */
  function updateDots(activeIdx) {
    dots.forEach((dot, i) => {
      dot.classList.toggle('dot--active', i === activeIdx);
    });
  }

  /* ── Dot click navigation ── */
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      sections[i].scrollIntoView({ behavior: 'smooth' });
    });
  });

  /* ── Feature strip links ── */
  const featureLinks = document.querySelectorAll('.nav-link');
  featureLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const target = link.getAttribute('href');
      if (target && target.startsWith('#')) {
        e.preventDefault();
        const el = document.querySelector(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* ── Hero CTA link ── */
  const heroCta = document.getElementById('hero-cta');
  if (heroCta) {
    heroCta.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById('start');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  }

  /* ── Dark CTA link ── */
  const darkCta = document.getElementById('dark-cta');
  if (darkCta) {
    darkCta.addEventListener('click', (e) => {
      e.preventDefault();
      // For demo: scroll back to hero
      sections[0].scrollIntoView({ behavior: 'smooth' });
    });
  }

  /* ── Keyboard navigation ── */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'PageDown') {
      e.preventDefault();
      const next = Math.min(currentIndex + 1, sections.length - 1);
      sections[next].scrollIntoView({ behavior: 'smooth' });
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
      e.preventDefault();
      const prev = Math.max(currentIndex - 1, 0);
      sections[prev].scrollIntoView({ behavior: 'smooth' });
    }
  });

  /* ── Touch / swipe support ── */
  let touchStartY = 0;
  scrollContainer.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  scrollContainer.addEventListener('touchend', (e) => {
    const delta = touchStartY - e.changedTouches[0].clientY;
    if (Math.abs(delta) > 50) {
      if (delta > 0) {
        const next = Math.min(currentIndex + 1, sections.length - 1);
        sections[next].scrollIntoView({ behavior: 'smooth' });
      } else {
        const prev = Math.max(currentIndex - 1, 0);
        sections[prev].scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, { passive: true });

  /* ── Initial: trigger hero animation ── */
  setTimeout(() => {
    sections[0].classList.add('in-view');
    updateDots(0);
    updateNav(sections[0]);
  }, 100);

})();

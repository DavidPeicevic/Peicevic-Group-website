/* ============================================================
   PEICEVIC GROUP — Main JavaScript
   Nav, scroll reveals, form interactions
   ============================================================ */

(function () {
  'use strict';

  // --- NAV SCROLL EFFECT ---
  const nav = document.querySelector('.nav');
  const scrollThreshold = 40;

  function handleNavScroll() {
    if (window.scrollY > scrollThreshold) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
  }

  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  // --- HAMBURGER MENU ---
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-menu__link');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      const isOpen = hamburger.classList.toggle('hamburger--active');
      mobileMenu.classList.toggle('mobile-menu--open');
      hamburger.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    mobileLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('hamburger--active');
        mobileMenu.classList.remove('mobile-menu--open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // --- SCROLL REVEAL ---
  const revealElements = document.querySelectorAll('.reveal');

  // Immediately show elements already in the viewport — prevents LCP penalty
  revealElements.forEach(function (el) {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('reveal--visible');
    }
  });

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    revealElements.forEach(function (el) {
      if (!el.classList.contains('reveal--visible')) {
        revealObserver.observe(el);
      }
    });
  } else {
    // Fallback: show all
    revealElements.forEach(function (el) {
      el.classList.add('reveal--visible');
    });
  }

  // --- ACTIVE NAV LINK ---
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav__link');

  navLinks.forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('nav__link--active');
    }
  });

  // Also set active for mobile menu
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu__link');
  mobileMenuLinks.forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.style.color = 'var(--cyan)';
    }
  });

  // --- FORM INTERACTION ---
  const form = document.querySelector('#order-form');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var btn = form.querySelector('.btn--neon');
      var originalText = btn.textContent;

      btn.textContent = 'Poslano!';
      btn.style.pointerEvents = 'none';

      setTimeout(function () {
        btn.textContent = originalText;
        btn.style.pointerEvents = '';
        form.reset();
      }, 2000);
    });
  }

  // --- SMOOTH SCROLL FOR ANCHOR LINKS ---
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;

      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

})();

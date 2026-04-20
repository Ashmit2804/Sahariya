/* ============================================================
   SAHARIYA DIGITAL ARCHIVE — main.js
   ============================================================ */

/* ─── NAV: hamburger toggle ─── */
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

/* Close menu when a link is clicked */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('navLinks').classList.remove('open');
    });
  });

  /* ─── Mark active nav link ─── */
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ─── Scroll fade-in via IntersectionObserver ─── */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach((el, i) => {
    /* Stagger siblings inside grids */
    const parent = el.parentElement;
    if (parent && (parent.classList.contains('grid-2') ||
                   parent.classList.contains('grid-3') ||
                   parent.classList.contains('grid-4') ||
                   parent.classList.contains('cards-grid') ||
                   parent.classList.contains('archive-grid') ||
                   parent.classList.contains('cv-grid'))) {
      const siblings = [...parent.children];
      const idx = siblings.indexOf(el);
      el.style.transitionDelay = `${idx * 0.08}s`;
    }
    io.observe(el);
  });

  /* ─── Nav: shrink on scroll ─── */
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    nav.style.height = window.scrollY > 60 ? '54px' : '64px';
  }, { passive: true });

  /* ─── Archive filter (archive.html only) ─── */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const archiveItems = document.querySelectorAll('.archive-item[data-category]');

  if (filterBtns.length && archiveItems.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.dataset.filter;
        archiveItems.forEach(item => {
          const show = cat === 'all' || item.dataset.category === cat;
          item.style.display = show ? '' : 'none';
        });
      });
    });
  }

  /* ─── Search (archive.html only) ─── */
  const searchInput = document.getElementById('archiveSearch');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const q = searchInput.value.toLowerCase();
      archiveItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(q) ? '' : 'none';
      });
    });
  }

  /* ─── Contact form (contact.html only) ─── */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      btn.textContent = 'Message Sent ✓';
      btn.disabled = true;
      btn.style.background = '#4A7A4A';
      setTimeout(() => {
        btn.textContent = 'Send Message';
        btn.disabled = false;
        btn.style.background = '';
        contactForm.reset();
      }, 3000);
    });
  }

  /* ─── Lightbox for gallery images ─── */
  const lightboxItems = document.querySelectorAll('[data-lightbox]');
  if (lightboxItems.length) {
    const overlay = document.createElement('div');
    overlay.id = 'lightbox';
    overlay.innerHTML = `
      <div id="lb-inner">
        <button id="lb-close" aria-label="Close">✕</button>
        <div id="lb-img"></div>
        <p id="lb-caption"></p>
      </div>`;
    document.body.appendChild(overlay);

    const lbImg = document.getElementById('lb-img');
    const lbCap = document.getElementById('lb-caption');

    lightboxItems.forEach(item => {
      item.style.cursor = 'zoom-in';
      item.addEventListener('click', () => {
        lbImg.innerHTML = item.innerHTML;
        lbCap.textContent = item.dataset.caption || '';
        overlay.classList.add('open');
      });
    });

    document.getElementById('lb-close').addEventListener('click', () => overlay.classList.remove('open'));
    overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.classList.remove('open'); });
  }
});

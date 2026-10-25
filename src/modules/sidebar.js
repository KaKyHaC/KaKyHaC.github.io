import { $, $$ } from '../utils/dom.js';
import { trackNavigationClick } from '../analytics.js';

export function trapFocus(e, container) {
  const focus = $$('a[href],button,input').filter(el => container.contains(el) && !el.disabled);
  if (!focus.length) return;
  const first = focus[0];
  const last = focus.at(-1);
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
}

export function initSidebar() {
  const sidebar = $('#sidebar');
  const menu = $('#mobile-menu-btn');
  const overlay = $('#mobile-overlay');
  const pin = $('#sidebar-pin');
  if (!sidebar || !menu || !overlay || !pin) return;

  let timer;
  const setExpanded = expanded => {
    sidebar.classList.toggle('expanded', expanded);
    pin.setAttribute('aria-expanded', String(expanded));
    if (!expanded && document.activeElement === pin) pin.blur();
  };

  const closeMobile = () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
    menu.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    menu.focus({ preventScroll: true });
  };

  pin.addEventListener('click', () => setExpanded(!sidebar.classList.contains('expanded')));
  sidebar.addEventListener('mouseleave', () => {
    timer = setTimeout(() => {
      if (!sidebar.matches(':focus-within') && !matchMedia('(hover: none)').matches) {
        setExpanded(false);
      }
    }, 150);
  });
  sidebar.addEventListener('mouseenter', () => clearTimeout(timer));

  menu.addEventListener('click', () => {
    const open = !sidebar.classList.contains('open');
    sidebar.classList.toggle('open', open);
    overlay.classList.toggle('active', open);
    menu.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) sidebar.querySelector('a')?.focus();
  });

  overlay.addEventListener('click', closeMobile);

  const returnToRoot = e => {
    if (location.pathname === '/' || location.pathname === '/index.html') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (location.hash) {
        history.replaceState(null, '', '/');
      }
      $$('.nav-link').forEach(a => a.classList.toggle('active', a.hash === '#about'));
      if (innerWidth <= 768) closeMobile();
    }
  };

  $('.sidebar-avatar-link')?.addEventListener('click', returnToRoot);
  $('.sidebar-name-link')?.addEventListener('click', returnToRoot);

  $$('.nav-link').forEach(a => a.addEventListener('click', () => {
    trackNavigationClick(a.hash.slice(1));
    if (innerWidth <= 768) closeMobile();
  }));

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      setExpanded(false);
      if (sidebar.classList.contains('open')) closeMobile();
    }
    if (e.key === 'Tab' && sidebar.classList.contains('open')) {
      trapFocus(e, sidebar);
    }
  });

  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) {
      $$('.nav-link').forEach(a => a.classList.toggle('active', a.hash === '#' + e.target.id));
    }
  }), { rootMargin: '-35% 0px -55%' });

  $$('main>section[id]').forEach(s => io.observe(s));
}

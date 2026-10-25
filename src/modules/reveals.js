import { $$ } from '../utils/dom.js';

export function observeReveals() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
    $$('.reveal').forEach(e => e.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  }), { threshold: 0.08 });
  $$('.reveal:not(.visible)').forEach(e => observer.observe(e));
}

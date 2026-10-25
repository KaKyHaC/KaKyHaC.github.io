import { DOMAIN_ORDER } from '../project-data.js';

let activeDomain = 'all';
const subscribers = new Set();

export function initDomain() {
  const params = new URLSearchParams(location.search);
  const domainParam = params.get('domain');
  if (domainParam && DOMAIN_ORDER.includes(domainParam)) {
    activeDomain = domainParam;
  } else if (!location.search && location.hash === '#projects') {
    try {
      const state = JSON.parse(sessionStorage.getItem('portfolioFilters') || '{}');
      if (DOMAIN_ORDER.includes(state.domain)) activeDomain = state.domain;
    } catch {}
  }
  return activeDomain;
}

export function getActiveDomain() {
  return activeDomain;
}

export function subscribeDomain(fn) {
  subscribers.add(fn);
  return () => subscribers.delete(fn);
}

export function setGlobalDomain(nextDomain, options = {}) {
  const validDomain = DOMAIN_ORDER.includes(nextDomain) ? nextDomain : 'all';
  activeDomain = validDomain;

  // Sync URL query params while preserving current hash and other params
  const params = new URLSearchParams(location.search);
  if (activeDomain !== 'all') {
    params.set('domain', activeDomain);
  } else {
    params.delete('domain');
  }

  const queryStr = params.toString();
  const currentHash = location.hash || '';
  const nextUrl = queryStr
    ? `${location.pathname}?${queryStr}${currentHash}`
    : `${location.pathname}${currentHash}`;
  history.replaceState(null, '', nextUrl);

  // Notify all subscribed sections
  subscribers.forEach(cb => {
    try {
      cb(activeDomain, options);
    } catch (err) {
      console.error('[Domain] Error notifying subscriber:', err);
    }
  });

  // Smooth scroll if a target is requested (e.g. from Directions)
  if (options.scrollTarget) {
    const el = document.querySelector(options.scrollTarget);
    if (el) {
      const isReduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
      el.scrollIntoView({ behavior: isReduced ? 'auto' : 'smooth' });
    }
  }
}

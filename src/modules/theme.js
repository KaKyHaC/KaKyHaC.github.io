import { $ } from '../utils/dom.js';
import { trackThemeSwitch } from '../analytics.js';
import { updateThemeLabel } from './copy.js';

export function initTheme() {
  const btn = $('#theme-toggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const light = document.documentElement.dataset.theme === 'light';
    if (light) {
      delete document.documentElement.dataset.theme;
      localStorage.setItem('theme', 'dark');
      trackThemeSwitch('dark');
    } else {
      document.documentElement.dataset.theme = 'light';
      localStorage.setItem('theme', 'light');
      trackThemeSwitch('light');
    }
    updateThemeLabel();
  });
  updateThemeLabel();
}

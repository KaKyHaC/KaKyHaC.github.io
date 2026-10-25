import { $, $$ } from '../utils/dom.js';
import { trackResumeDownload } from '../analytics.js';

export function initCvModal() {
  const dialog = $('#cv-dialog');
  if (!dialog) return;
  let trigger = null;
  const openModal = event => {
    trigger = event.currentTarget;
    const sidebar = $('#sidebar');
    if (window.innerWidth <= 768 && sidebar?.classList.contains('open')) {
      sidebar.classList.remove('open');
      $('#mobile-overlay')?.classList.remove('active');
      $('#mobile-menu-btn')?.setAttribute('aria-expanded', 'false');
    }
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    $('#cv-dialog-close')?.focus();
  };
  const closeModal = () => dialog.close();
  $('#sidebar-cv')?.addEventListener('click', openModal);
  $('#hero-cv')?.addEventListener('click', openModal);
  $('#cv-dialog-close')?.addEventListener('click', closeModal);
  dialog.addEventListener('click', event => { if (event.target === dialog) closeModal(); });
  dialog.addEventListener('close', () => {
    document.body.style.overflow = '';
    trigger?.focus();
  });
  dialog.addEventListener('keydown', event => {
    if (event.key !== 'Tab') return;
    const controls = [...dialog.querySelectorAll('button:not([disabled]), a[href]')];
    const first = controls[0], last = controls.at(-1);
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault(); last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault(); first.focus();
    }
  });
  $$('[data-track-cv]').forEach(button => button.addEventListener('click', () => {
    trackResumeDownload(button.dataset.trackCv || 'android');
    setTimeout(closeModal, 300);
  }));
}

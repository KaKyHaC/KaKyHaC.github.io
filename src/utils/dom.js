export const $ = s => document.querySelector(s);
export const $$ = s => [...document.querySelectorAll(s)];
export const safe = s => String(s ?? '').replace(/[&<>"]/g, c => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;'
}[c]));

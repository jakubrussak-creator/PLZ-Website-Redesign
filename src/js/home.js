import { initNavbar } from './navbar.js';
import { createPeekCarousel } from './carousel.js';

initNavbar();

// ---------- Persona switcher ----------
function initPersonaSwitcher() {
  const buttons = document.querySelectorAll('[data-persona-btn]');
  const detail = document.querySelector('[data-persona-detail]');
  if (!buttons.length || !detail) return;

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      buttons.forEach((b) => b.classList.remove('is-active'));
      buttons.forEach((b) => b.setAttribute('aria-pressed', 'false'));
      btn.classList.add('is-active');
      btn.setAttribute('aria-pressed', 'true');

      const key = btn.dataset.personaBtn;
      document.querySelectorAll('[data-persona-panel]').forEach((panel) => {
        panel.hidden = panel.dataset.personaPanel !== key;
      });
    });
  });
}
initPersonaSwitcher();

// ---------- Module card tooltip clamping (keeps tooltips on-screen) ----------
function clampTooltipPosition(event) {
  const card = event.target.closest('.module-card');
  if (!card) return;
  const tooltip = card.querySelector('.module-card__tooltip');
  if (!tooltip) return;
  tooltip.style.removeProperty('--tooltip-shift');
  const margin = 12;
  const rect = tooltip.getBoundingClientRect();
  let shift = 0;
  if (rect.left < margin) shift = margin - rect.left;
  else if (rect.right > window.innerWidth - margin) shift = window.innerWidth - margin - rect.right;
  if (shift) tooltip.style.setProperty('--tooltip-shift', `${shift}px`);
}
const desktopGrid = document.getElementById('modules-grid-desktop');
if (desktopGrid) {
  desktopGrid.addEventListener('mouseover', clampTooltipPosition);
  desktopGrid.addEventListener('focusin', clampTooltipPosition);
}

// ---------- Carousels (mobile Values + mobile Moduły + Testimonials) ----------
function setup(id, opts) {
  const viewport = document.querySelector(`[data-carousel="${id}"]`);
  if (!viewport) return;
  const track = viewport.querySelector('[data-carousel-track]');
  const wrapper = viewport.closest('[data-carousel-wrapper]');
  createPeekCarousel({
    viewport,
    track,
    slideSelector: ':scope > *',
    prevBtn: wrapper?.querySelector('[data-carousel-prev]'),
    nextBtn: wrapper?.querySelector('[data-carousel-next]'),
    dotsContainer: wrapper?.querySelector('[data-carousel-dots]'),
    gap: opts.gap,
    slideWidthRatio: opts.ratio,
    minSlideWidth: opts.min,
    maxSlideWidth: opts.max,
  });
}

setup('modules-mobile-1', { ratio: 0.62, gap: 12, max: 240 });
setup('modules-mobile-2', { ratio: 0.62, gap: 12, max: 240 });
setup('modules-mobile-3', { ratio: 0.62, gap: 12, max: 240 });
setup('testimonials', { ratio: window.innerWidth < 768 ? 0.86 : 0.92, gap: window.innerWidth < 768 ? 20 : 80, max: 800 });

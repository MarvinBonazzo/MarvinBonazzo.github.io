// Opening titles animate in on every page load (see .arrived rules in style.css).
(() => {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const root = document.documentElement;
  root.classList.add('arrived');
  setTimeout(() => root.classList.remove('arrived'), 3200);
})();

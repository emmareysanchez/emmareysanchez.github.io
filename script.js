(() => {
  const storage = { get: () => { try { return localStorage.getItem('emma-language'); } catch { return null; } }, set: value => { try { localStorage.setItem('emma-language', value); } catch {} } };
  const config = window.PORTFOLIO_CONFIG || {};
  const cv = document.getElementById('cv-button');
  const note = document.getElementById('cv-note');
  function setLanguage(lang) {
    lang = lang === 'es' ? 'es' : 'en';
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-en][data-es]').forEach(el => { el.innerHTML = el.dataset[lang]; });
    document.querySelectorAll('[data-label-en]').forEach(el => el.setAttribute('aria-label', el.dataset[lang === 'es' ? 'labelEs' : 'labelEn']));
    document.querySelectorAll('[data-lang]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === lang)));
    document.title = lang === 'es' ? 'Emma Rey Sánchez · Ingeniera en IA' : 'Emma Rey Sánchez · AI Engineer';
    document.querySelector('meta[name="description"]').content = lang === 'es' ? 'Emma Rey Sánchez — Ingeniera en inteligencia artificial. Proyectos de aprendizaje en grafos, PLN probabilístico, modelos de lenguaje e IA aplicada.' : 'Emma Rey Sánchez — Artificial Intelligence Engineer. Selected work in graph learning, probabilistic NLP, language models and applied AI.';
    storage.set(lang);
  }
  document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
  setLanguage(storage.get() || 'en');
  if (config.cvUrl && /^(https?:\/\/|\.?\.?\/|assets\/)/i.test(config.cvUrl)) {
    const link = document.createElement('a');
    link.className = cv.className; link.id = cv.id; link.href = config.cvUrl;
    link.innerHTML = cv.innerHTML; link.setAttribute('download', 'Emma-Rey-Sanchez-CV.pdf');
    if (/^https?:/i.test(config.cvUrl)) { link.target = '_blank'; link.rel = 'noopener noreferrer'; }
    cv.replaceWith(link); note.hidden = true;
  } else { cv.disabled = true; }
  document.getElementById('year').textContent = new Date().getFullYear();
  // Decorative only: no network requests, never hides the actual page from assistive tech.
  window.setTimeout(() => document.querySelector('.loader').classList.add('done'), matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 850);
})();

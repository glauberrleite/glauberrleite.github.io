/* =========================================================
   1º Ano do Alef · scripts
   - Navegação (menu mobile, rolagem suave, destaque)
   - Contagem regressiva
   - Linha do tempo "mês a mês"
   - Sugestões de presentes (dados em js/presentes.js)
   - Lightbox das fotos
   ========================================================= */

(function () {
  'use strict';

  /* ---------- Dados da festa ---------- */
  const PARTY_DATE = new Date('2026-10-10T18:30:00-03:00');

  // Legendas de cada mês (edite à vontade)
  const MONTHS = [
    { n: 1,  label: '1 mês',    note: 'Bem-vindo, Alef!' },
    { n: 2,  label: '2 meses',  note: 'Primeiras gargalhadas' },
    { n: 3,  label: '3 meses',  note: 'Dia de praia' },
    { n: 4,  label: '4 meses',  note: 'Olhar curioso' },
    { n: 5,  label: '5 meses',  note: 'Já sentadinho' },
    { n: 6,  label: '6 meses',  note: 'Meio aninho!' },
    { n: 7,  label: '7 meses',  note: 'Cada dia mais esperto' },
    { n: 8,  label: '8 meses',  note: 'Cheio de energia' },
    { n: 9,  label: '9 meses',  note: 'Charme de suéter' },
    { n: 10, label: '10 meses', note: 'Sorrisão pra câmera' },
    { n: 11, label: '11 meses', note: 'Quase um ano!' },
  ];

  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  /* ---------- Navegação ---------- */
  const nav = $('#nav');
  const navToggle = $('#navToggle');
  const navMenu = $('#navMenu');

  function closeMenu() {
    navMenu.classList.remove('is-open');
    navToggle.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  }

  navToggle.addEventListener('click', () => {
    const open = navMenu.classList.toggle('is-open');
    navToggle.classList.toggle('is-open', open);
    navToggle.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('menu-open', open);
  });

  $$('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id.length < 2) return;
      const target = $(id);
      if (!target) return;
      e.preventDefault();
      closeMenu();
      const offset = id === '#inicio' ? 0 : nav.offsetHeight - 1;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      history.replaceState(null, '', id);
    });
  });

  function onScroll() {
    nav.classList.toggle('is-scrolled', window.scrollY > 40);

    // destaca o link da seção visível
    const sections = $$('main section[id]');
    let current = '';
    const probe = window.scrollY + nav.offsetHeight + window.innerHeight * 0.35;
    sections.forEach((s) => { if (s.offsetTop <= probe) current = s.id; });
    $$('.nav__menu a').forEach((a) => {
      a.classList.toggle('is-active', a.getAttribute('href') === '#' + current);
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Contagem regressiva ---------- */
  const cd = {
    wrap: $('#countdown'),
    d: $('#cdDays'), h: $('#cdHours'), m: $('#cdMin'), s: $('#cdSec'),
  };
  const pad = (n) => String(n).padStart(2, '0');

  function tick() {
    const diff = PARTY_DATE - Date.now();
    if (diff <= 0) {
      cd.wrap.innerHTML = '<p class="countdown__done">🎉 É hoje! Vem comemorar com a gente!</p>';
      return;
    }
    const sec = Math.floor(diff / 1000);
    cd.d.textContent = Math.floor(sec / 86400);
    cd.h.textContent = pad(Math.floor((sec % 86400) / 3600));
    cd.m.textContent = pad(Math.floor((sec % 3600) / 60));
    cd.s.textContent = pad(sec % 60);
    setTimeout(tick, 1000);
  }
  tick();

  /* ---------- Linha do tempo ---------- */
  const timeline = $('#timeline');
  const photos = [];

  MONTHS.forEach((m, i) => {
    const src = `img/meses/${pad(m.n)}.jpg`;
    photos.push({ src, caption: `Alef com ${m.label}` });

    const item = document.createElement('article');
    item.className = 'tl-item';
    item.style.setProperty('--i', i);
    item.innerHTML = `
      <button class="tl-item__photo" type="button" data-index="${i}" aria-label="Ampliar foto: ${m.label}">
        <img src="${src}" alt="Alef com ${m.label}" loading="lazy" width="600" height="800">
      </button>
      <div class="tl-item__badge"><span>${m.n}</span><small>${m.n === 1 ? 'mês' : 'meses'}</small></div>
      <p class="tl-item__note">${m.note}</p>
    `;
    timeline.appendChild(item);
  });

  // 12º card: o aniversário
  const last = document.createElement('article');
  last.className = 'tl-item tl-item--party';
  last.style.setProperty('--i', MONTHS.length);
  last.innerHTML = `
    <a class="tl-item__photo tl-item__photo--party" href="#festa">
      <img src="img/tema/leao-teclado.jpg" alt="Leãozinho tocando teclado" loading="lazy" width="600" height="800">
      <span class="tl-item__party-text">A festa!<br><small>10/10/2026</small></span>
    </a>
    <div class="tl-item__badge tl-item__badge--party"><span>1</span><small>ano</small></div>
    <p class="tl-item__note">Vem comemorar com a gente 🎉</p>
  `;
  timeline.appendChild(last);

  // animação de entrada
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); }
      });
    }, { threshold: 0.15 });
    $$('.tl-item').forEach((el) => io.observe(el));
  } else {
    $$('.tl-item').forEach((el) => el.classList.add('is-visible'));
  }

  /* ---------- Lightbox ---------- */
  const lb = $('#lightbox');
  const lbImg = $('#lbImg');
  const lbCap = $('#lbCaption');
  let lbIndex = 0;

  function showLightbox(i) {
    lbIndex = (i + photos.length) % photos.length;
    lbImg.src = photos[lbIndex].src;
    lbImg.alt = photos[lbIndex].caption;
    lbCap.textContent = photos[lbIndex].caption;
    lb.classList.add('is-open');
    lb.setAttribute('aria-hidden', 'false');
    document.body.classList.add('menu-open');
  }
  function hideLightbox() {
    lb.classList.remove('is-open');
    lb.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('menu-open');
  }

  timeline.addEventListener('click', (e) => {
    const btn = e.target.closest('.tl-item__photo[data-index]');
    if (btn) showLightbox(Number(btn.dataset.index));
  });
  $('#lbClose').addEventListener('click', hideLightbox);
  $('#lbPrev').addEventListener('click', () => showLightbox(lbIndex - 1));
  $('#lbNext').addEventListener('click', () => showLightbox(lbIndex + 1));
  lb.addEventListener('click', (e) => { if (e.target === lb) hideLightbox(); });
  document.addEventListener('keydown', (e) => {
    if (!lb.classList.contains('is-open')) return;
    if (e.key === 'Escape') hideLightbox();
    if (e.key === 'ArrowLeft') showLightbox(lbIndex - 1);
    if (e.key === 'ArrowRight') showLightbox(lbIndex + 1);
  });

  // swipe no celular
  let touchX = null;
  lb.addEventListener('touchstart', (e) => { touchX = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) showLightbox(lbIndex + (dx < 0 ? 1 : -1));
    touchX = null;
  });

  /* ---------- Presentes (dados estáticos em js/presentes.js) ---------- */
  const gifts = $('#gifts');

  function escapeHtml(s) {
    return s.replace(/[&<>"']/g, (c) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
    }[c]));
  }

  // converte [texto](url), **negrito** e *itálico* dentro de um trecho já escapado
  function inlineMd(s) {
    return s
      .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/\*([^*]+)\*/g, '<em>$1</em>');
  }

  // embaralha (Fisher-Yates) pra cada visita ver uma ordem diferente
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function renderGifts({ intro, items }) {
    let html = '';
    if (intro.length) {
      html += `<div class="gifts__intro">${intro.map((p) => `<p>${inlineMd(escapeHtml(p))}</p>`).join('')}</div>`;
    }
    if (!items.length) {
      html += '<p class="gifts__empty">Ainda não temos sugestões cadastradas, mas a sua presença já é o melhor presente! 💛</p>';
    } else {
      const fallbackIcons = ['🎁', '🧸', '🎈', '🪀', '🧩'];
      // ordem aleatória a cada visita; os já comprados vão pro fim
      const ordered = shuffle(items.filter((it) => !it.bought)).concat(shuffle(items.filter((it) => it.bought)));
      html += '<ul class="gifts__list">';
      ordered.forEach((it, i) => {
        const icon = it.emoji || fallbackIcons[i % fallbackIcons.length];
        const name = escapeHtml(it.name);
        if (it.bought) {
          html += `<li class="gift gift--bought" aria-label="${name} (já comprado)">
               <span class="gift__icon">${icon}</span>
               <span class="gift__name"><s>${name}</s></span>
               <span class="gift__cta gift__cta--bought">Já comprado ✓</span>
             </li>`;
          return;
        }
        html += it.link
          ? `<li class="gift"><a class="gift__link" href="${escapeHtml(it.link)}" target="_blank" rel="noopener">
               <span class="gift__icon">${icon}</span>
               <span class="gift__name">${name}</span>
               <span class="gift__cta">Ver sugestão ↗</span>
             </a></li>`
          : `<li class="gift gift--nolink">
               <span class="gift__icon">${icon}</span>
               <span class="gift__name">${name}</span>
             </li>`;
      });
      html += '</ul>';
    }
    gifts.innerHTML = html;
  }

  renderGifts({
    intro: typeof GIFTS_INTRO !== 'undefined' ? GIFTS_INTRO : [],
    items: (typeof GIFTS !== 'undefined' ? GIFTS : []).map((g) => ({
      name: g.nome || '', emoji: (g.emoji || '').trim(), link: /^https?:\/\//i.test(g.link || '') ? g.link : '', bought: !!g.comprado,
    })).filter((g) => g.name),
  });
})();

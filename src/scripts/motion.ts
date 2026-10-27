// Motor de animaciones de la página.
// Solo agrega comportamiento: el HTML ya trae todo el contenido y los valores finales.

const root = document.documentElement;
const motionOn = () => root.classList.contains('motion');

/* ---------- Revelado al hacer scroll ---------- */
const revealTargets = document.querySelectorAll<HTMLElement>('[data-reveal], .split, [data-io], .hl');
// Los elementos que empiezan recortados con clip-path ('wipe', 'screen') casi no
// tienen área visible, así que IntersectionObserver no los detectaría: se observa a su padre.
const watched = new Map<Element, HTMLElement[]>();
const io = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      for (const el of watched.get(e.target) || []) {
        el.classList.add('is-in');
        if (el.dataset.count !== undefined) runCounter(el);
        el.querySelectorAll<HTMLElement>('[data-count]').forEach(runCounter);
      }
      io.unobserve(e.target);
      watched.delete(e.target);
    }
  },
  { threshold: 0.18, rootMargin: '0px 0px -8% 0px' },
);
function watch(el: HTMLElement) {
  const clipped = el.dataset.reveal === 'wipe' || el.dataset.reveal === 'screen';
  const target = clipped && el.parentElement ? el.parentElement : el;
  if (!watched.has(target)) {
    watched.set(target, []);
    io.observe(target);
  }
  watched.get(target)!.push(el);
}
revealTargets.forEach(watch);

/* ---------- Contadores numéricos ---------- */
const fmt = (n: number, dec: number) =>
  n.toLocaleString('en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec });

function runCounter(el: HTMLElement) {
  if (el.dataset.done) return;
  el.dataset.done = '1';
  if (!motionOn()) return; // el texto final ya está en el HTML
  const to = parseFloat(el.dataset.count || '0');
  const dec = parseInt(el.dataset.dec || '0', 10);
  const pre = el.dataset.pre || '';
  const suf = el.dataset.suf || '';
  const final = el.textContent;
  const dur = 1800;
  const t0 = performance.now();
  const step = (t: number) => {
    const p = Math.min(1, (t - t0) / dur);
    const eased = 1 - Math.pow(1 - p, 4);
    el.textContent = pre + fmt(to * eased, dec) + suf;
    if (p < 1) requestAnimationFrame(step);
    else el.textContent = final;
  };
  requestAnimationFrame(step);
}
document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
  if (!el.closest('[data-reveal], .split, [data-io], .hl')) watch(el);
});

/* ---------- Barra de progreso y parallax ---------- */
const bar = document.querySelector<HTMLElement>('.progress span');
const parallax = document.querySelectorAll<HTMLElement>('[data-parallax]');
let ticking = false;
function onScroll() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    const h = document.documentElement.scrollHeight - innerHeight;
    bar?.style.setProperty('--p', String(h > 0 ? scrollY / h : 0));
    if (motionOn()) {
      parallax.forEach((el) => {
        const speed = parseFloat(el.dataset.parallax || '0.2');
        const r = el.getBoundingClientRect();
        const mid = r.top + r.height / 2 - innerHeight / 2;
        el.style.transform = `translate3d(0, ${(-mid * speed).toFixed(1)}px, 0)`;
      });
    }
    document.body.classList.toggle('scrolled', scrollY > 40);
    ticking = false;
  });
}
addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ---------- Videos de fondo: solo se reproducen con animaciones activas ---------- */
const ambient = document.querySelectorAll<HTMLVideoElement>('video[data-ambient]');
function syncVideos() {
  ambient.forEach((v) => {
    if (motionOn()) {
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  });
}
// Pausa los videos de fondo que salen de pantalla (ahorra batería)
const vio = new IntersectionObserver((entries) => {
  for (const e of entries) {
    const v = e.target as HTMLVideoElement;
    if (e.isIntersecting && motionOn()) v.play().catch(() => {});
    else v.pause();
  }
});
ambient.forEach((v) => vio.observe(v));
syncVideos();

/* ---------- Botón de animaciones ---------- */
const toggle = document.querySelector<HTMLButtonElement>('.motion-toggle');
function paintToggle() {
  if (!toggle) return;
  const on = motionOn();
  toggle.setAttribute('aria-pressed', String(on));
  toggle.querySelector('.state')!.textContent = on ? 'activadas' : 'desactivadas';
}
toggle?.addEventListener('click', () => {
  const on = !motionOn();
  root.classList.toggle('motion', on);
  try {
    localStorage.setItem('ejez-motion', on ? 'on' : 'off');
  } catch {}
  if (on) {
    // lo que ya estaba visible se queda visible
    document.querySelectorAll<HTMLElement>('[data-reveal], .split, [data-io], .hl').forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < innerHeight) el.classList.add('is-in');
    });
  } else {
    parallax.forEach((el) => (el.style.transform = ''));
  }
  syncVideos();
  paintToggle();
});
paintToggle();

/* ---------- Navegación: sección activa ---------- */
const links = document.querySelectorAll<HTMLAnchorElement>('.nav-links a');
const sections = [...links].map((a) => document.querySelector<HTMLElement>(a.hash)).filter(Boolean) as HTMLElement[];
const nio = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      links.forEach((a) => a.classList.toggle('active', a.hash === `#${e.target.id}`));
    }
  },
  { rootMargin: '-45% 0px -50% 0px' },
);
sections.forEach((s) => nio.observe(s));

/* ---------- Menú móvil ---------- */
const menuBtn = document.querySelector<HTMLButtonElement>('.menu-btn');
const nav = document.querySelector<HTMLElement>('.nav');
menuBtn?.addEventListener('click', () => {
  const open = nav?.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(!!open));
});
links.forEach((a) =>
  a.addEventListener('click', () => {
    nav?.classList.remove('open');
    menuBtn?.setAttribute('aria-expanded', 'false');
  }),
);

/* ---------- Texto tipo terminal ---------- */
document.querySelectorAll<HTMLElement>('[data-type]').forEach((el) => {
  const full = el.textContent || '';
  if (!motionOn()) return;
  el.textContent = '';
  const tio = new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting) return;
    tio.disconnect();
    let i = 0;
    const tick = () => {
      el.textContent = full.slice(0, ++i);
      if (i < full.length && motionOn()) setTimeout(tick, 22 + Math.random() * 40);
      else el.textContent = full;
    };
    setTimeout(tick, parseInt(el.dataset.type || '0', 10));
  });
  tio.observe(el);
});

/* ---------- Texto que se "decodifica" (etiquetas tipo terminal) ---------- */
const glyphs = '#%&/\<>[]=+*01XZ';
document.querySelectorAll<HTMLElement>('.eyebrow, [data-scramble]').forEach((el) => {
  const final = el.textContent || '';
  const sio = new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting) return;
    sio.disconnect();
    if (!motionOn()) return;
    el.setAttribute('aria-label', final);
    let frame = 0;
    const total = 18;
    const tick = () => {
      frame++;
      const done = Math.floor((frame / total) * final.length);
      el.textContent = final
        .split('')
        .map((c, i) => (i < done || c === ' ' ? c : glyphs[(Math.random() * glyphs.length) | 0]))
        .join('');
      if (frame < total) setTimeout(tick, 40);
      else el.textContent = final;
    };
    tick();
  });
  sio.observe(el);
});

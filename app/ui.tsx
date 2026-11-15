'use client';

import { ArrowLeft, ArrowRight, Download, Menu, Plus, X } from 'lucide-react';
import { AnimatePresence, motion, MotionConfig, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from 'motion/react';
import { useCallback, useEffect, useState, type ReactNode } from 'react';
import { FAQ, GROUPS, RELEASES, shot, SHOTS, SHOWCASE, WAYS } from './data';

const ease = [0.22, 1, 0.36, 1] as const;

type Release = { url: string; version: string; size: string };
const FALLBACK: Release = { url: RELEASES, version: 'v1.2.0', size: '19 MB' };
let pending: Promise<Release> | undefined;

const loadRelease = () =>
  (pending ??= fetch('https://api.github.com/repos/thekirankumarv/SmartWallet-releases/releases/latest')
    .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
    .then((j: { tag_name: string; assets?: { name: string; size: number; browser_download_url: string }[] }) => {
      const apk = j.assets?.find((a) => a.name.endsWith('.apk'));
      return apk ? { url: apk.browser_download_url, version: j.tag_name, size: `${Math.round(apk.size / 1048576)} MB` } : FALLBACK;
    })
    .catch(() => FALLBACK));

export function useRelease() {
  const [rel, setRel] = useState(FALLBACK);
  useEffect(() => void loadRelease().then(setRel), []);
  return rel;
}

export function AndroidIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M2.5 18.5a9.5 9.5 0 0 1 19 0z" />
      <path d="M6.2 6.6 4.6 4.1M17.8 6.6l1.6-2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="8" cy="14" r="1.2" fill="var(--bg)" />
      <circle cx="16" cy="14" r="1.2" fill="var(--bg)" />
    </svg>
  );
}

export function DownloadButton({ big, label = 'Download for Android' }: { big?: boolean; label?: string }) {
  const { url, version, size } = useRelease();
  return (
    <a href={url} className={`btn btn-primary${big ? ' btn-big' : ''}`} data-download>
      <span className="btn-glow" aria-hidden />
      <AndroidIcon size={big ? 24 : 18} />
      <span className="btn-text">
        <span>{label}</span>
        {big && (
          <small>
            {version} · {size} · Free
          </small>
        )}
      </span>
      <Download size={big ? 20 : 16} className="btn-arrow" />
    </a>
  );
}

export function Phone({ id, alt, className = '', priority }: { id: string; alt?: string; className?: string; priority?: boolean }) {
  return (
    <div className={`phone ${className}`}>
      <img src={shot(id)} alt={alt ?? ''} loading={priority ? 'eager' : 'lazy'} decoding="async" draggable={false} />
    </div>
  );
}

export function Reveal({ children, delay = 0, y = 28, className }: { children: ReactNode; delay?: number; y?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.8, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

export function ScrollBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });
  return <motion.div className="scrollbar" style={{ scaleX }} />;
}

const LINKS = [
  ['Features', '#features'],
  ['Screens', '#screens'],
  ['Privacy', '#privacy'],
  ['Install', '#install'],
  ['FAQ', '#faq'],
] as const;

export function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setSolid(window.scrollY > 24);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  return (
    <header className={`nav${solid || open ? ' nav-solid' : ''}`}>
      <div className="wrap nav-row">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          <img src={`${process.env.NEXT_PUBLIC_BASE}/icon.webp`} alt="" width={32} height={32} />
          SmartWallet
        </a>
        <nav className="nav-links">
          {LINKS.map(([l, h]) => (
            <a key={h} href={h}>
              {l}
            </a>
          ))}
        </nav>
        <div className="nav-cta">
          <DownloadButton label="Download" />
        </div>
        <button className="nav-menu" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            className="nav-sheet"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease }}
          >
            {LINKS.map(([l, h]) => (
              <a key={h} href={h} onClick={() => setOpen(false)}>
                {l}
              </a>
            ))}
            <DownloadButton />
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

const HERO_CYCLE = ['01-home', '06-ask-answer', '13-bank-sms', '07-voice-guide'];

function Chip({ children, className, x, y, depth, delay }: { children: ReactNode; className: string; x: MotionValue<number>; y: MotionValue<number>; depth: number; delay: number }) {
  const tx = useTransform(x, (v) => v * depth);
  const ty = useTransform(y, (v) => v * depth);
  return (
    <motion.div className={`chip ${className}`} style={{ x: tx, y: ty }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay, duration: 0.7, ease }}
        className="chip-inner"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export function HeroVisual() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 18 });
  const sy = useSpring(my, { stiffness: 80, damping: 18 });
  const rotY = useTransform(sx, (v) => v * 10);
  const rotX = useTransform(sy, (v) => v * -8);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((n) => (n + 1) % HERO_CYCLE.length), 3200);
    return () => clearInterval(t);
  }, [reduce]);

  useEffect(() => {
    if (reduce) return;
    const move = (e: PointerEvent) => {
      mx.set((e.clientX / window.innerWidth) * 2 - 1);
      my.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener('pointermove', move);
    return () => window.removeEventListener('pointermove', move);
  }, [reduce, mx, my]);

  return (
    <div className="hero-visual">
      <div className="hero-halo" aria-hidden />
      <motion.div className="hero-stack" style={{ rotateX: rotX, rotateY: rotY }}>
        <motion.div className="hero-side hero-left" initial={{ opacity: 0, x: 60, rotate: 0 }} animate={{ opacity: 1, x: 0, rotate: -9 }} transition={{ delay: 0.35, duration: 1, ease }}>
          <Phone id="18-stats" alt="Monthly stats screen" priority />
        </motion.div>
        <motion.div className="hero-side hero-right" initial={{ opacity: 0, x: -60, rotate: 0 }} animate={{ opacity: 1, x: 0, rotate: 9 }} transition={{ delay: 0.45, duration: 1, ease }}>
          <Phone id="11-scan-review" alt="Bill scan results screen" priority />
        </motion.div>
        <motion.div className="hero-main" initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 1, ease }}>
          <div className="phone">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.img
                key={HERO_CYCLE[i]}
                src={shot(HERO_CYCLE[i])}
                alt="SmartWallet app screen"
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease }}
                draggable={false}
              />
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
      <Chip className="chip-a" x={sx} y={sy} depth={-26} delay={0.9}>
        <span className="chip-dot" style={{ background: 'var(--accent)' }}>🎙️</span>
        <span>
          <b>“Milk, 47, from cash”</b>
          <small>Voice entry · saved</small>
        </span>
      </Chip>
      <Chip className="chip-b" x={sx} y={sy} depth={22} delay={1.1}>
        <span className="chip-dot" style={{ background: 'var(--amber)' }}>🧾</span>
        <span>
          <b>Bill scanned</b>
          <small>8 items · ₹594.25</small>
        </span>
      </Chip>
      <Chip className="chip-c" x={sx} y={sy} depth={-16} delay={1.3}>
        <span className="chip-dot" style={{ background: 'var(--green)' }}>🔒</span>
        <span>
          <b>100% on your phone</b>
          <small>No account · no server</small>
        </span>
      </Chip>
    </div>
  );
}

export function Ways() {
  const [k, setK] = useState(0);
  const [auto, setAuto] = useState(true);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (!auto || reduce) return;
    const t = setTimeout(() => setK((n) => (n + 1) % WAYS.length), 7000);
    return () => clearTimeout(t);
  }, [k, auto, reduce]);
  const w = WAYS[k];
  return (
    <div className="ways">
      <div className="tabs" role="tablist">
        {WAYS.map((x, n) => (
          <button
            key={x.key}
            role="tab"
            aria-selected={n === k}
            className={`tab${n === k ? ' tab-on' : ''}`}
            onClick={() => {
              setK(n);
              setAuto(false);
            }}
            style={{ '--c': x.color } as React.CSSProperties}
          >
            {n === k && <motion.span layoutId="tab-pill" className="tab-pill" transition={{ type: 'spring', stiffness: 400, damping: 34 }} />}
            <x.icon size={18} />
            <span>{x.label}</span>
            {n === k && auto && !reduce && <motion.span key={k} className="tab-progress" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 7, ease: 'linear' }} />}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={w.key}
          className="way"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.5, ease }}
          style={{ '--c': w.color } as React.CSSProperties}
        >
          <div className="way-text">
            <span className="way-icon">
              <w.icon size={26} />
            </span>
            <h3>{w.title}</h3>
            <p>{w.body}</p>
          </div>
          <div className="way-phones">
            <motion.div initial={{ rotate: -2, x: 30, opacity: 0 }} animate={{ rotate: -6, x: 0, opacity: 1 }} transition={{ duration: 0.7, ease, delay: 0.1 }}>
              <Phone id={w.shots[0]} alt={`${w.label} screen`} />
            </motion.div>
            <motion.div initial={{ rotate: 2, x: -30, opacity: 0 }} animate={{ rotate: 5, x: 0, opacity: 1 }} transition={{ duration: 0.7, ease, delay: 0.2 }}>
              <Phone id={w.shots[1]} alt={`${w.label} result screen`} />
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export function Showcase() {
  const [active, setActive] = useState(0);
  return (
    <div className="showcase">
      <div className="showcase-list">
        {SHOWCASE.map((s, n) => (
          <motion.article
            key={s.shot}
            className={`show${n === active ? ' show-on' : ''}`}
            onViewportEnter={() => setActive(n)}
            viewport={{ margin: '-45% 0px -45% 0px' }}
          >
            <Reveal>
              <span className="kicker">{s.kicker}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <ul className="ticks">
                {s.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="show-phone-mobile">
              <Phone id={s.shot} alt={s.title} />
            </Reveal>
          </motion.article>
        ))}
      </div>
      <div className="showcase-stage">
        <div className="showcase-sticky">
          <div className="stage-glow" aria-hidden />
          <div className="phone phone-lg">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.img
                key={SHOWCASE[active].shot}
                src={shot(SHOWCASE[active].shot)}
                alt={SHOWCASE[active].title}
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -40, scale: 0.98 }}
                transition={{ duration: 0.55, ease }}
                draggable={false}
              />
            </AnimatePresence>
          </div>
          <div className="stage-dots" aria-hidden>
            {SHOWCASE.map((s, n) => (
              <span key={s.shot} className={n === active ? 'on' : ''} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Gallery() {
  const [group, setGroup] = useState<string>('All');
  const [open, setOpen] = useState<number>();
  const list = group === 'All' ? SHOTS : SHOTS.filter((s) => s.group === group);
  const [rail, setRail] = useState<HTMLDivElement | null>(null);

  const step = useCallback((d: number) => setOpen((o) => (o === undefined ? o : (o + d + list.length) % list.length)), [list.length]);

  useEffect(() => {
    if (open === undefined) return;
    const key = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(undefined);
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', key);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', key);
    };
  }, [open, step]);

  const scroll = (d: number) => rail?.scrollBy({ left: d * rail.clientWidth * 0.8, behavior: 'smooth' });

  return (
    <>
      <div className="filters">
        {['All', ...GROUPS].map((g) => (
          <button
            key={g}
            className={`filter${g === group ? ' filter-on' : ''}`}
            onClick={() => {
              setGroup(g);
              rail?.scrollTo({ left: 0, behavior: 'smooth' });
            }}
          >
            {g === group && <motion.span layoutId="filter-pill" className="filter-pill" transition={{ type: 'spring', stiffness: 400, damping: 34 }} />}
            <span>{g}</span>
          </button>
        ))}
      </div>
      <div className="rail-wrap">
        <button className="rail-arrow rail-prev" onClick={() => scroll(-1)} aria-label="Scroll left">
          <ArrowLeft size={20} />
        </button>
        <div className="rail" ref={setRail}>
          <AnimatePresence mode="popLayout">
            {list.map((s, n) => (
              <motion.button
                layout
                key={s.id}
                className="tile"
                onClick={() => setOpen(n)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease }}
                aria-label={`Open ${s.title}`}
              >
                <Phone id={s.id} alt={s.title} />
                <span className="tile-cap">
                  <small>{s.group}</small>
                  {s.title}
                </span>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
        <button className="rail-arrow rail-next" onClick={() => scroll(1)} aria-label="Scroll right">
          <ArrowRight size={20} />
        </button>
      </div>
      <AnimatePresence>
        {open !== undefined && list[open] && (
          <motion.div className="lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(undefined)} role="dialog" aria-modal aria-label={list[open].title}>
            <button className="lb-close" onClick={() => setOpen(undefined)} aria-label="Close">
              <X size={22} />
            </button>
            <button className="lb-nav lb-prev" onClick={(e) => (e.stopPropagation(), step(-1))} aria-label="Previous">
              <ArrowLeft size={22} />
            </button>
            <motion.figure
              key={list[open].id}
              className="lb-figure"
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4, ease }}
              onClick={(e) => e.stopPropagation()}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.4}
              onDragEnd={(_, i) => Math.abs(i.offset.x) > 80 && step(i.offset.x < 0 ? 1 : -1)}
            >
              <Phone id={list[open].id} alt={list[open].title} priority />
              <figcaption>
                <small>
                  {list[open].group} · {open + 1}/{list.length}
                </small>
                {list[open].title}
              </figcaption>
            </motion.figure>
            <button className="lb-nav lb-next" onClick={(e) => (e.stopPropagation(), step(1))} aria-label="Next">
              <ArrowRight size={22} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | undefined>(0);
  return (
    <div className="faq">
      {FAQ.map((f, n) => (
        <Reveal key={f.q} delay={n * 0.03} y={16}>
          <div className={`qa${open === n ? ' qa-on' : ''}`}>
            <button className="qa-q" onClick={() => setOpen(open === n ? undefined : n)} aria-expanded={open === n}>
              <span>{f.q}</span>
              <motion.span animate={{ rotate: open === n ? 45 : 0 }} transition={{ duration: 0.3, ease }} className="qa-icon">
                <Plus size={18} />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {open === n && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease }} className="qa-a">
                  <p>{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function Spotlight({ children, className = '', style }: { children: ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div
      className={`spot ${className}`}
      style={style}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
        e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
      }}
    >
      {children}
    </div>
  );
}

export function MotionRoot({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

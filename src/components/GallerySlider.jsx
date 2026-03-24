import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { mauImages } from '../images';

const images = mauImages.map(img => img.url);
const TOTAL = images.length;

function getCarouselSize(w) {
  if (w < 500)  return { step: 220, cardW: 185, cardH: 270, containerH: 360 };
  if (w < 768)  return { step: 280, cardW: 230, cardH: 340, containerH: 430 };
  return               { step: 350, cardW: 290, cardH: 420, containerH: 510 };
}

function useCarouselSize() {
  const [size, setSize] = useState(() => getCarouselSize(window.innerWidth));
  useEffect(() => {
    const handler = () => setSize(getCarouselSize(window.innerWidth));
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return size;
}

function mod(n, m) {
  return ((n % m) + m) % m;
}

function getConfig(offset) {
  const d = Math.abs(offset);
  if (d === 0)
    return {
      scale: 1.3,
      opacity: 1,
      zIndex: 10,
      shadow: '0 32px 72px rgba(44,40,37,0.2), 0 8px 24px rgba(44,40,37,0.1)',
    };
  if (d === 1)
    return {
      scale: 0.92,
      opacity: 0.62,
      zIndex: 5,
      shadow: '0 10px 28px rgba(44,40,37,0.1)',
    };
  return {
    scale: 0.72,
    opacity: 0.3,
    zIndex: 1,
    shadow: '0 4px 12px rgba(44,40,37,0.06)',
  };
}

function NavBtn({ onClick, children }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        width: 44,
        height: 44,
        borderRadius: '50%',
        border: '1px solid #C9A96E',
        background: hov ? '#C9A96E' : 'transparent',
        color: hov ? '#fff' : '#C9A96E',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'background 0.25s ease, color 0.25s ease',
        flexShrink: 0,
      }}
    >
      {children}
    </button>
  );
}

export function GallerySlider() {
  const [current, setCurrent] = useState(0);
  const { step, cardW, cardH, containerH } = useCarouselSize();

  const goNext = useCallback(() => setCurrent(c => mod(c + 1, TOTAL)), []);
  const goPrev = useCallback(() => setCurrent(c => mod(c - 1, TOTAL)), []);

  useEffect(() => {
    const id = setInterval(goNext, 4000);
    return () => clearInterval(id);
  }, [goNext]);

  return (
    <section
      style={{
        background: 'linear-gradient(180deg, #E9E7E3 0%, #EDEBE8 55%, #F2F1EE 100%)',
        padding: '88px 0 100px',
        overflow: 'hidden',
      }}
    >
      {/* ── Section header ── */}
      <motion.div
        style={{ textAlign: 'center', marginBottom: '68px', padding: '0 20px' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Eyebrow line */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 14,
            marginBottom: 16,
          }}
        >
          <div
            style={{
              width: 36,
              height: 1,
              background: 'linear-gradient(to left, #C9A96E, transparent)',
            }}
          />
          <span
            style={{
              fontFamily: 'Crimson Text, serif',
              fontSize: 11,
              letterSpacing: '0.32em',
              textTransform: 'uppercase',
              color: '#C9A96E',
            }}
          >
            Captured Moments
          </span>
          <div
            style={{
              width: 36,
              height: 1,
              background: 'linear-gradient(to right, #C9A96E, transparent)',
            }}
          />
        </div>

        {/* Title — single line, no wrap */}
        <h2
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(1.4rem, 3.8vw, 3.25rem)',
            fontWeight: 400,
            fontStyle: 'italic',
            color: '#2C2825',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            lineHeight: 1.2,
            margin: '0 0 16px',
            letterSpacing: '-0.01em',
          }}
        >
          A Glimpse of Our Story
        </h2>

        {/* Gold ornament */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
          }}
        >
          <div
            style={{ width: 24, height: 1, background: 'rgba(201,169,110,0.4)' }}
          />
          <span style={{ color: '#C9A96E', fontSize: 11, lineHeight: 1 }}>✦</span>
          <div
            style={{ width: 24, height: 1, background: 'rgba(201,169,110,0.4)' }}
          />
        </div>
      </motion.div>

      {/* ── Carousel track ── */}
      <div
        style={{
          position: 'relative',
          height: containerH,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <AnimatePresence>
          {[-2, -1, 0, 1, 2].map(offset => {
            const idx = mod(current + offset, TOTAL);
            const cfg = getConfig(offset);

            return (
              <motion.div
                key={idx}
                style={{
                  position: 'absolute',
                  width: cardW,
                  height: cardH,
                  borderRadius: 10,
                  overflow: 'hidden',
                  cursor: offset !== 0 ? 'pointer' : 'default',
                  willChange: 'transform',
                  boxShadow: cfg.shadow,
                }}
                initial={{ opacity: 0, scale: cfg.scale * 0.95 }}
                animate={{
                  x: offset * step,
                  scale: cfg.scale,
                  opacity: cfg.opacity,
                  zIndex: cfg.zIndex,
                }}
                exit={{ opacity: 0, scale: cfg.scale * 0.92, transition: { duration: 0.35 } }}
                transition={{
                  duration: 0.65,
                  ease: [0.4, 0, 0.2, 1],
                  opacity: { duration: 0.4 },
                }}
                onClick={() => {
                  if (offset < 0) goPrev();
                  else if (offset > 0) goNext();
                }}
              >
                {/* Photo */}
                <motion.img
                  src={images[idx]}
                  alt=""
                  draggable={false}
                  loading={Math.abs(offset) <= 1 ? 'eager' : 'lazy'}
                  decoding="async"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    userSelect: 'none',
                    pointerEvents: 'none',
                  }}
                  whileHover={{ scale: offset !== 0 ? 1.07 : 1.04 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                />

                {/* Subtle veil on inactive slides */}
                {offset !== 0 && (
                  <motion.div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(237,235,232,0.18)',
                      borderRadius: 10,
                      pointerEvents: 'none',
                    }}
                    whileHover={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* ── Navigation ── */}
      <motion.div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 20,
          marginTop: 52,
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <NavBtn onClick={goPrev}>
          <ChevronLeft size={16} strokeWidth={1.5} />
        </NavBtn>

        {/* Progress bar */}
        <div
          style={{
            width: 'clamp(120px, 30vw, 200px)',
            height: 2,
            borderRadius: 1,
            background: 'rgba(201,169,110,0.22)',
            overflow: 'hidden',
            flexShrink: 0,
          }}
        >
          <motion.div
            style={{ height: '100%', background: '#C9A96E', borderRadius: 1, originX: 0 }}
            animate={{ width: `${((current + 1) / TOTAL) * 100}%` }}
            transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
          />
        </div>

        <NavBtn onClick={goNext}>
          <ChevronRight size={16} strokeWidth={1.5} />
        </NavBtn>
      </motion.div>

      {/* Counter */}
      <p
        style={{
          textAlign: 'center',
          marginTop: 16,
          fontFamily: 'Crimson Text, serif',
          fontSize: 13,
          letterSpacing: '0.18em',
          color: '#9A8E83',
        }}
      >
        {String(current + 1).padStart(2, '0')} / {String(TOTAL).padStart(2, '0')}
      </p>
    </section>
  );
}

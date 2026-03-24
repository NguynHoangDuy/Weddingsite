import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { mauImages } from '../images';

const photos = mauImages.map(img => ({ id: img.id, url: img.url }));
const TOTAL = photos.length;
const PAGE = 12;

export function PhotoGallery() {
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [count, setCount] = useState(PAGE);
  const visible = photos.slice(0, count);

  const goNext = useCallback(
    () => setSelectedIdx(i => (i + 1) % TOTAL),
    []
  );
  const goPrev = useCallback(
    () => setSelectedIdx(i => (i - 1 + TOTAL) % TOTAL),
    []
  );

  // Keyboard navigation in lightbox
  useEffect(() => {
    if (selectedIdx === null) return;
    const onKey = e => {
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'Escape') setSelectedIdx(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedIdx, goNext, goPrev]);

  // Swipe navigation in lightbox
  const lbTouchX = useRef(null);
  const onLbTouchStart = useCallback(e => {
    lbTouchX.current = e.touches[0].clientX;
  }, []);
  const onLbTouchEnd = useCallback(e => {
    if (lbTouchX.current === null) return;
    const delta = lbTouchX.current - e.changedTouches[0].clientX;
    if (delta > 50) goNext();
    else if (delta < -50) goPrev();
    lbTouchX.current = null;
  }, [goNext, goPrev]);

  return (
    <section
      style={{
        background: 'linear-gradient(180deg, #F2F1EE 0%, #E9E7E3 100%)',
        padding: '88px 0 100px',
      }}
    >
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 24px' }}>

        {/* ── Header ── */}
        <motion.div
          style={{ textAlign: 'center', marginBottom: 72 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginBottom: 16 }}>
            <div style={{ width: 36, height: 1, background: 'linear-gradient(to left, #C9A96E, transparent)' }} />
            <span style={{ fontFamily: 'Crimson Text, serif', fontSize: 11, letterSpacing: '0.32em', textTransform: 'uppercase', color: '#C9A96E' }}>
              Our Memories
            </span>
            <div style={{ width: 36, height: 1, background: 'linear-gradient(to right, #C9A96E, transparent)' }} />
          </div>

          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 400,
            fontStyle: 'italic',
            color: '#2C2825',
            lineHeight: 1.2,
            margin: '0 0 16px',
          }}>
            Cherished Moments
          </h2>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
            <div style={{ width: 24, height: 1, background: 'rgba(201,169,110,0.4)' }} />
            <span style={{ color: '#C9A96E', fontSize: 11, lineHeight: 1 }}>✦</span>
            <div style={{ width: 24, height: 1, background: 'rgba(201,169,110,0.4)' }} />
          </div>
        </motion.div>

        {/* ── Masonry grid ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ResponsiveMasonry columnsCountBreakPoints={{ 0: 2, 640: 3, 1024: 4 }}>
            <Masonry gutter="14px">
              {visible.map((photo, index) => (
                <div
                  key={photo.id}
                  className="group"
                  style={{ position: 'relative', overflow: 'hidden', borderRadius: 8, cursor: 'pointer' }}
                  onClick={() => setSelectedIdx(index)}
                >
                  <img
                    src={photo.url}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    style={{
                      width: '100%', height: 'auto', display: 'block',
                      transition: 'transform 0.5s ease',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.07)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
                  />

                  {/* Hover overlay */}
                  <div
                    className="group-hover:opacity-100"
                    style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(to top, rgba(44,40,37,0.52) 0%, transparent 55%)',
                      opacity: 0,
                      transition: 'opacity 0.35s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      pointerEvents: 'none',
                    }}
                  >
                    <div style={{
                      width: 38, height: 38, borderRadius: '50%',
                      border: '1px solid rgba(255,255,255,0.65)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'rgba(255,255,255,0.85)',
                    }}>
                      <ZoomIn size={15} strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </motion.div>

        {/* ── Load More ── */}
        {count < TOTAL && (
          <div style={{ textAlign: 'center', marginTop: 52 }}>
            <button
              onClick={() => setCount(c => Math.min(c + PAGE, TOTAL))}
              style={{
                fontFamily: 'Crimson Text, serif',
                fontSize: 13,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#C9A96E',
                border: '1px solid #C9A96E',
                background: 'transparent',
                padding: '12px 36px',
                borderRadius: 2,
                cursor: 'pointer',
                transition: 'background 0.25s, color 0.25s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#C9A96E'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#C9A96E'; }}
            >
              Load More — {count} / {TOTAL}
            </button>
          </div>
        )}
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            style={{
              position: 'fixed', inset: 0, zIndex: 50,
              background: 'rgba(18,16,14,0.96)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: 'clamp(48px, 6vw, 64px) clamp(48px, 6vw, 64px) 16px',
              touchAction: 'pan-y',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelectedIdx(null)}
            onTouchStart={onLbTouchStart}
            onTouchEnd={onLbTouchEnd}
          >
            <button
              onClick={() => setSelectedIdx(null)}
              style={{
                position: 'absolute', top: 20, right: 20,
                width: 40, height: 40, borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.25)',
                background: 'transparent',
                color: 'rgba(255,255,255,0.6)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', zIndex: 10,
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.7)'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
            >
              <X size={16} strokeWidth={1.5} />
            </button>

            <p style={{
              position: 'absolute', top: 26, left: '50%', transform: 'translateX(-50%)',
              fontFamily: 'Crimson Text, serif',
              fontSize: 13, letterSpacing: '0.22em',
              color: 'rgba(255,255,255,0.38)',
              pointerEvents: 'none',
            }}>
              {String(selectedIdx + 1).padStart(2, '0')} / {String(TOTAL).padStart(2, '0')}
            </p>

            <button
              onClick={e => { e.stopPropagation(); goPrev(); }}
              style={{
                position: 'absolute', left: 'clamp(4px, 2vw, 16px)',
                width: 44, height: 44, borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.18)',
                background: 'transparent',
                color: 'rgba(255,255,255,0.55)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', zIndex: 10,
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'; e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; }}
            >
              <ChevronLeft size={20} strokeWidth={1.5} />
            </button>

            <AnimatePresence mode="wait">
              <motion.img
                key={selectedIdx}
                src={photos[selectedIdx].url}
                alt=""
                style={{
                  maxWidth: '100%',
                  maxHeight: '88vh',
                  objectFit: 'contain',
                  borderRadius: 6,
                  boxShadow: '0 32px 80px rgba(0,0,0,0.6)',
                }}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.22 }}
                onClick={e => e.stopPropagation()}
              />
            </AnimatePresence>

            <button
              onClick={e => { e.stopPropagation(); goNext(); }}
              style={{
                position: 'absolute', right: 'clamp(4px, 2vw, 16px)',
                width: 44, height: 44, borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.18)',
                background: 'transparent',
                color: 'rgba(255,255,255,0.55)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', zIndex: 10,
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'; e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; }}
            >
              <ChevronRight size={20} strokeWidth={1.5} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

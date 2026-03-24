import { motion } from 'motion/react';
const bannerImg = 'https://res.cloudinary.com/dcn03k9k3/image/upload/q_auto,f_auto/banner_kvxjzv.webp';
import { COUPLE, CEREMONY } from '../config/wedding';

export function HeroBanner() {
  return (
    <div
      className="relative w-full overflow-hidden flex items-center"
      style={{
        height: '100svh',
        minHeight: '560px',
        background: 'linear-gradient(180deg, #F2F1EE 0%, #E9E7E3 100%)',
      }}
    >
      {/* Blurred background layer */}
      <img
        src={bannerImg}
        alt=""
        aria-hidden="true"
        fetchpriority="low"
        decoding="async"
        className="absolute bottom-0 right-[2%] md:right-[2%] h-[120%] w-auto object-contain object-bottom select-none pointer-events-none"
        style={{
          mixBlendMode: 'multiply',
          filter: 'blur(28px)',
          opacity: 0.4,
          transform: 'scale(1.05)',
        }}
      />

      {/* Couple image — right side, pushed off-screen on mobile */}
      <motion.img
        src={bannerImg}
        alt={COUPLE.names}
        fetchpriority="high"
        decoding="async"
        className="absolute bottom-0 right-[-20%] sm:right-[-5%] md:right-[8%] h-[85%] sm:h-[95%] md:h-[110%] w-auto object-contain object-bottom select-none pointer-events-none"
        style={{ mixBlendMode: 'multiply' }}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      />

      {/* Text-protection gradient — stronger on mobile where image overlaps */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: 'linear-gradient(to right, rgba(242,241,238,0.98) 0%, rgba(242,241,238,0.96) 35%, rgba(242,241,238,0.55) 60%, transparent 100%)',
        }}
      />

      {/* Content — left side */}
      <div className="relative z-[2] flex flex-col justify-center px-8 sm:px-10 md:px-20 lg:px-32 w-full max-w-3xl">

        {/* Eyebrow */}
        <motion.div
          className="flex items-center gap-3 mb-6 md:mb-8"
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="w-8 h-px" style={{ background: '#C9A96E' }} />
          <span
            className="text-[11px] tracking-[0.3em] uppercase"
            style={{ color: '#C9A96E', fontFamily: 'Crimson Text, serif' }}
          >
            Wedding Day
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="leading-[1.1] mb-5"
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2.4rem, 5.5vw, 5.5rem)',
            color: '#2C2825',
          }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
        >
          Forever
          <br />
          <em style={{ fontStyle: 'italic', color: '#5C5047' }}>{COUPLE.names}</em>
        </motion.h1>

        {/* Gold divider */}
        <motion.div
          className="flex items-center gap-3 mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.65 }}
        >
          <div className="h-px w-14" style={{ background: 'linear-gradient(to right, #C9A96E, transparent)' }} />
          <span style={{ color: '#C9A96E', fontSize: 13 }}>✦</span>
        </motion.div>

        {/* Date */}
        <motion.p
          className="text-xs tracking-[0.25em] uppercase mb-3"
          style={{ color: '#9A8E83' }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
        >
          {CEREMONY.date}
        </motion.p>

        {/* Tagline */}
        <motion.p
          className="text-base leading-relaxed mb-10"
          style={{ fontFamily: 'Crimson Text, serif', color: '#7A6E66', maxWidth: 340 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
        >
          {COUPLE.tagline}
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-8 sm:left-10 md:left-16 lg:left-24 flex items-center gap-3 z-[2]"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 3, delay: 1.5, repeat: Infinity, repeatDelay: 1 }}
      >
        <div className="w-px h-10" style={{ background: 'linear-gradient(to bottom, transparent, #C9A96E)' }} />
        <p className="text-[10px] tracking-[0.3em] uppercase" style={{ color: '#B0A396' }}>Scroll</p>
      </motion.div>
    </div>
  );
}

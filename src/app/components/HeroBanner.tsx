import { motion } from 'motion/react';
import { abImages } from '../images';

export function HeroBanner() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Blur */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${abImages[10]?.url}')`,
          filter: 'blur(3px)',
          transform: 'scale(1.1)',
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      
      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="space-y-6"
        >
          {/* Couple Names */}
          <motion.h1 
            className="font-serif text-6xl md:text-8xl text-white drop-shadow-2xl tracking-wide"
            style={{ fontFamily: 'Playfair Display, serif' }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            Emma & James
          </motion.h1>
          
          {/* Decorative Divider */}
          <motion.div
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 'auto' }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="h-[1px] w-16 bg-white/60" />
            <div className="text-white/80 text-2xl">♥</div>
            <div className="h-[1px] w-16 bg-white/60" />
          </motion.div>
          
          {/* Wedding Date */}
          <motion.p 
            className="text-2xl md:text-3xl text-white/95 tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            JUNE 15, 2026
          </motion.p>
          
          {/* Tagline */}
          <motion.p 
            className="text-lg md:text-xl text-white/90 italic max-w-2xl font-light"
            style={{ fontFamily: 'Crimson Text, serif' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            Two hearts, one beautiful journey
          </motion.p>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5
          }}
        >
          <div className="text-white/70 text-sm tracking-widest">SCROLL</div>
          <div className="w-[1px] h-12 bg-white/40 mx-auto mt-2" />
        </motion.div>
      </div>
    </div>
  );
}
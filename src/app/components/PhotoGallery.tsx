import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Masonry from 'react-responsive-masonry';
import { X } from 'lucide-react';

const photos = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1772241824154-ce6e7c985ff9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2VyZW1vbnklMjBlbGVnYW50JTIwY291cGxlfGVufDF8fHx8MTc3NDE0ODI5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    caption: 'Our Beautiful Ceremony'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1768777270963-8289ea9d870d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmVjZXB0aW9uJTIwZGVjb3JhdGlvbiUyMGZsb3dlcnN8ZW58MXx8fHwxNzc0MTQ4Mjk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    caption: 'Reception Details'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1765615201173-0ea7dcadc4bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY291cGxlJTIwZGFuY2luZyUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc3NDE0ODI5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    caption: 'First Dance'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1737619043903-0668dc6d5b19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmluZ3MlMjBib3VxdWV0JTIwZGV0YWlsc3xlbnwxfHx8fDE3NzQxNDgyOTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    caption: 'The Rings'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1578013161233-99253c8e4caa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkZSUyMGdyb29tJTIwb3V0ZG9vciUyMG5hdHVyZXxlbnwxfHx8fDE3NzQxNDgyOTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    caption: 'Nature Portraits'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1696271026697-4f8da917e0d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwdmVudWUlMjBzdW5zZXQlMjBnb2xkZW4lMjBob3VyfGVufDF8fHx8MTc3NDE0ODMwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    caption: 'Golden Hour Magic'
  }
];

export function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);

  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-white to-pink-50/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 
            className="font-serif text-5xl md:text-6xl mb-4 text-gray-800"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Our Memories
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-[1px] w-20 bg-rose-300" />
            <div className="text-rose-400 text-xl">♥</div>
            <div className="h-[1px] w-20 bg-rose-300" />
          </div>
        </motion.div>

        {/* Masonry Gallery */}
        <Masonry columnsCount={3} gutter="1rem" className="masonry-grid">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedPhoto(photo)}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={photo.url}
                alt={photo.caption}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <p className="text-white text-lg font-light tracking-wide">{photo.caption}</p>
              </div>
            </motion.div>
          ))}
        </Masonry>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-10"
              onClick={() => setSelectedPhoto(null)}
            >
              <X size={32} />
            </button>
            
            <motion.div
              className="max-w-5xl max-h-[90vh] relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.caption}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />
              <p className="text-white text-center mt-6 text-xl font-light tracking-wide">
                {selectedPhoto.caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

import { HeroBanner } from './components/HeroBanner';
import { CountdownTimer } from './components/CountdownTimer';
import { GallerySlider } from './components/GallerySlider';
import { WeddingDetails } from './components/WeddingDetails';
import { PhotoGallery } from './components/PhotoGallery';
import { MusicToggle } from './components/MusicToggle';
import { SectionDivider } from './components/SectionDivider';
import { COUPLE } from './config/wedding';

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <HeroBanner />
      <CountdownTimer />
<GallerySlider />
      <WeddingDetails />
      <PhotoGallery />

      <footer className="bg-gradient-to-t from-rose-50 to-white py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <SectionDivider />
          <h3
            className="text-3xl md:text-4xl mt-6 mb-4 text-gray-800"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {COUPLE.names}
          </h3>
          <p className="text-gray-600 mb-2">April 04-05, 2026</p>
          <p className="text-gray-500 text-sm italic">"{COUPLE.quote}"</p>
          <div className="mt-8 text-gray-400 text-sm">{COUPLE.hashtag}</div>
        </div>
      </footer>

      <MusicToggle />
    </div>
  );
}

import { HeroBanner } from './components/HeroBanner';
import { PhotoGallery } from './components/PhotoGallery';
import { WeddingDetails } from './components/WeddingDetails';
import { CountdownTimer } from './components/CountdownTimer';
import { MusicToggle } from './components/MusicToggle';
import { OurStorySlider } from './components/OurStorySlider';

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Banner with Background Blur Effect */}
      <HeroBanner />
      
      {/* Countdown Timer */}
      <CountdownTimer />
      
      {/* Our Love Story Slider */}
      <OurStorySlider />
      
      {/* Wedding Details Section */}
      <WeddingDetails />
      
      {/* Photo Gallery with Masonry Layout */}
      <PhotoGallery />
      
      {/* Footer */}
      <footer className="bg-gradient-to-t from-rose-50 to-white py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-20 bg-rose-300" />
            <div className="text-rose-400 text-2xl">♥</div>
            <div className="h-[1px] w-20 bg-rose-300" />
          </div>
          <h3 
            className="text-3xl md:text-4xl mb-4 text-gray-800"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Emma & James
          </h3>
          <p className="text-gray-600 mb-2">June 15, 2026</p>
          <p className="text-gray-500 text-sm italic">
            "Love is not about how many days, months, or years you have been together.<br />
            Love is about how much you love each other every single day."
          </p>
          <div className="mt-8 text-gray-400 text-sm">
            #EmmaAndJames2026
          </div>
        </div>
      </footer>
      
      {/* Background Music Toggle */}
      <MusicToggle />
    </div>
  );
}
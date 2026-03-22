import { useRef } from 'react';
import Slider from 'react-slick';
import { motion } from 'motion/react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const storySlides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1679152836379-e51b48cc71fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwZmlyc3QlMjBkYXRlJTIwY29mZmVlJTIwcm9tYW50aWN8ZW58MXx8fHwxNzc0MTQ4NjQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1768508663535-6ce5c952795b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwbG92ZSUyMHN0b3J5JTIwcm9tYW50aWMlMjBtb21lbnRzfGVufDF8fHx8MTc3NDE0ODY0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1564591167348-6a45f42dc223?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY291cGxlJTIwdHJhdmVsaW5nJTIwYWR2ZW50dXJlfGVufDF8fHx8MTc3NDE0ODY0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1611785668525-061a2b077355?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcHJvcG9zYWwlMjBlbmdhZ2VtZW50JTIwcmluZ3xlbnwxfHx8fDE3NzQxNDg2NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function OurStorySlider() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)',
    pauseOnHover: false,
    arrows: false,
  };

  return (
    <section className="py-0 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Slider */}
        <div className="w-full">
          <Slider ref={sliderRef} {...settings}>
            {storySlides.map((slide) => (
              <div key={slide.id}>
                <div className="relative h-[400px] md:h-[600px] lg:h-[700px]">
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('${slide.image}')`,
                    }}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </motion.div>
    </section>
  );
}

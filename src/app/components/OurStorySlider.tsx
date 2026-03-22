import { useRef } from 'react';
import Slider from 'react-slick';
import { motion } from 'motion/react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { abImages, mauImages } from '../images';

const storySlides = [
  { id: 1, image: abImages[0]?.url },
  { id: 2, image: mauImages[0]?.url },
  { id: 3, image: abImages[2]?.url },
  { id: 4, image: mauImages[2]?.url }
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

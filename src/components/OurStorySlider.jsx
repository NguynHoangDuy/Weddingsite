import { useRef } from 'react';
import Slider from 'react-slick';
import { motion } from 'motion/react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { mauImages } from '../images';

const slides = [
  mauImages[0]?.url,
  mauImages[1]?.url,
  mauImages[2]?.url,
  mauImages[3]?.url,
];

const sliderSettings = {
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

export function OurStorySlider() {
  const sliderRef = useRef(null);

  return (
    <section className="overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Slider ref={sliderRef} {...sliderSettings}>
          {slides.map((url, index) => (
            <div key={index}>
              <div className="relative h-[400px] md:h-[600px] lg:h-[700px] overflow-hidden">
                <img
                  src={url}
                  alt=""
                  loading={index === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block',
                  }}
                />
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>
    </section>
  );
}

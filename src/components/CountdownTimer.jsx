import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { WEDDING_DATE } from '../config/wedding';
import { SectionDivider } from './SectionDivider';

const WEDDING_TIMESTAMP = WEDDING_DATE.getTime();

function getTimeLeft() {
  const diff = WEDDING_TIMESTAMP - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Minutes' },
    { value: timeLeft.seconds, label: 'Seconds' },
  ];

  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-white to-rose-50/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="font-serif text-4xl md:text-5xl text-gray-800"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Counting Down to Forever
          </h2>
          <SectionDivider />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {units.map((unit, index) => (
            <motion.div
              key={unit.label}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-center">
                <motion.div
                  key={unit.value}
                  className="text-4xl md:text-6xl bg-gradient-to-br from-rose-400 to-pink-400 bg-clip-text text-transparent mb-2"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {String(unit.value).padStart(2, '0')}
                </motion.div>
                <div className="text-gray-600 text-sm md:text-base tracking-wider uppercase">
                  {unit.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

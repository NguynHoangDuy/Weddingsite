import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, Church, Utensils } from 'lucide-react';

export function WeddingDetails() {
  return (
    <section className="py-24 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 
            className="font-serif text-5xl md:text-6xl mb-4 text-gray-800"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Wedding Details
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto font-light">
            We would be honored to have you join us on our special day
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-[1px] w-20 bg-rose-300" />
            <div className="text-rose-400 text-xl">♥</div>
            <div className="h-[1px] w-20 bg-rose-300" />
          </div>
        </motion.div>

        {/* Schedule Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Ceremony */}
          <motion.div
            className="bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-rose-400 text-white p-3 rounded-full">
                <Church size={24} />
              </div>
              <h3 className="text-2xl text-gray-800" style={{ fontFamily: 'Playfair Display, serif' }}>
                Ceremony
              </h3>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start gap-3">
                <Calendar size={20} className="text-rose-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Date</p>
                  <p className="text-gray-600">Saturday, June 15th, 2026</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock size={20} className="text-rose-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Time</p>
                  <p className="text-gray-600">4:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-rose-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-gray-600">St. Mary's Cathedral</p>
                  <p className="text-gray-600 text-sm">123 Garden Avenue, Oakville</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Reception */}
          <motion.div
            className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-amber-400 text-white p-3 rounded-full">
                <Utensils size={24} />
              </div>
              <h3 className="text-2xl text-gray-800" style={{ fontFamily: 'Playfair Display, serif' }}>
                Reception
              </h3>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start gap-3">
                <Calendar size={20} className="text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Date</p>
                  <p className="text-gray-600">Saturday, June 15th, 2026</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock size={20} className="text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Time</p>
                  <p className="text-gray-600">6:30 PM - 11:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-gray-600">The Grand Ballroom</p>
                  <p className="text-gray-600 text-sm">456 Riverside Drive, Oakville</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

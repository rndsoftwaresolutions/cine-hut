import { ScrollReveal } from '../components/ScrollReveal';
import { ImageWithFallback } from '../components/ui-components/ImageWithFallback';
import { motion } from 'motion/react';

export default function Clients() {
  const clients = [
    'NETFLIX', 'HBO', 'SONY', 'WARNER BROS', 'UNIVERSAL', 'PARAMOUNT',
    'A24', 'MIRAMAX', 'LIONSGATE', 'FOX', 'MGM', 'DREAMWORKS',
    'DISNEY', 'AMAZON PRIME', 'APPLE TV+', 'HULU', 'PEACOCK', 'MAX'
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1573497619860-6d82917e4ec8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Our Clients"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2d2621]/80 to-[#2d2621]/60" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl mb-6 text-[#f9f5f3]"
            style={{ fontFamily: 'var(--font-cinematic)' }}
          >
            Our Clients
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-[#e8dcd1]"
          >
            Trusted by the world's leading entertainment brands
          </motion.p>
        </div>
      </section>

      {/* Client Grid */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <p className="text-xl text-[#6b5d54] max-w-3xl mx-auto leading-relaxed">
              We are proud to partner with industry leaders who trust us to bring their stories to life with creativity, excellence, and cinematic impact.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clients.map((client, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex items-center justify-center p-8 bg-[#f3ece5] rounded-sm hover:bg-[#e8dcd1] hover:shadow-lg transition-all duration-300"
                >
                  <span
                    className="text-xl md:text-2xl tracking-wider text-[#6b5d54] text-center"
                    style={{ fontFamily: 'var(--font-cinematic)' }}
                  >
                    {client}
                  </span>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-[#d4a574] to-[#c17043]">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <div className="text-6xl text-[#2d2621] mb-6" style={{ fontFamily: 'var(--font-script)' }}>"</div>
            <p className="text-2xl md:text-3xl text-[#2d2621] mb-6 leading-relaxed" style={{ fontFamily: 'var(--font-cinematic)' }}>
              CINE HUT transformed our vision into a cinematic masterpiece. Their attention to detail and creative excellence is unmatched.
            </p>
            <p className="text-lg text-[#3a332e]">— Creative Director, Leading Studio</p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

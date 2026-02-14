import { ScrollReveal } from '../components/ScrollReveal';
import { ImageWithFallback } from '../components/ui-components/ImageWithFallback';
import { motion } from 'motion/react';
import { Award, Users, Target, Heart } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We pursue perfection in every frame, every story, every detail.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Your vision combined with our expertise creates magic.',
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge techniques and creativity.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We live and breathe cinema, bringing authentic emotion to every project.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1709316131422-35a5fb1e9eb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="About Cine Hut"
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
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-[#e8dcd1]"
          >
            Crafting cinematic excellence since the beginning
          </motion.p>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="bg-[#f3ece5] p-12 rounded-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl mb-2 text-[#6b5d54]">Company Name</h3>
                  <p className="text-2xl" style={{ fontFamily: 'var(--font-cinematic)' }}>CINE HUT</p>
                </div>
                <div>
                  <h3 className="text-xl mb-2 text-[#6b5d54]">Founder & Managing Director</h3>
                  <p className="text-2xl" style={{ fontFamily: 'var(--font-cinematic)' }}>Alex Morgan</p>
                </div>
              </div>
              <div className="border-t border-[#d4a574] pt-8">
                <h3 className="text-xl mb-2 text-[#6b5d54]">Address</h3>
                <p className="text-lg">123 Film Street, Creative District</p>
                <p className="text-lg">City, State 12345</p>
                <p className="text-lg mt-4">Phone: +1 (555) 123-4567</p>
                <p className="text-lg">Email: hello@cinehut.com</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-4 bg-[#2d2621]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollReveal>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-[#d4a574] rounded-sm" />
                <div className="relative bg-[#3a332e] p-12 rounded-sm">
                  <h2 className="text-4xl mb-6 text-[#f9f5f3]" style={{ fontFamily: 'var(--font-cinematic)' }}>
                    Our Mission
                  </h2>
                  <p className="text-lg text-[#e8dcd1] leading-relaxed">
                    To empower storytellers and brands with world-class cinematic production, training, and creative services that inspire, engage, and drive meaningful impact. We believe every story deserves to be told with artistry, authenticity, and excellence.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-24 h-24 border-4 border-[#d4a574] rounded-sm" />
                <div className="relative bg-[#3a332e] p-12 rounded-sm">
                  <h2 className="text-4xl mb-6 text-[#f9f5f3]" style={{ fontFamily: 'var(--font-cinematic)' }}>
                    Our Vision
                  </h2>
                  <p className="text-lg text-[#e8dcd1] leading-relaxed">
                    To become the most trusted creative partner globally, setting new standards in film production and creative innovation. We envision a world where powerful stories transcend boundaries and create lasting change.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-5xl mb-4" style={{ fontFamily: 'var(--font-cinematic)' }}>
              Our Core Values
            </h2>
            <p className="text-xl text-[#6b5d54]">
              The principles that guide everything we create
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="text-center p-8 bg-[#f3ece5] rounded-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#d4a574] rounded-full mb-6">
                    <value.icon className="text-[#2d2621]" size={32} />
                  </div>
                  <h3 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-cinematic)' }}>
                    {value.title}
                  </h3>
                  <p className="text-[#6b5d54] leading-relaxed">{value.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-[#d4a574] to-[#c17043]">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-5xl mb-6 text-[#2d2621]" style={{ fontFamily: 'var(--font-cinematic)' }}>
              Meet Our Creative Force
            </h2>
            <p className="text-xl text-[#3a332e] mb-8 leading-relaxed">
              A passionate team of filmmakers, creatives, and storytellers dedicated to bringing your vision to life with unparalleled artistry and technical excellence.
            </p>
            <div className="inline-block px-8 py-3 bg-[#2d2621] text-[#f9f5f3] rounded-sm">
              <span className="text-4xl" style={{ fontFamily: 'var(--font-cinematic)' }}>50+</span>
              <p className="text-sm mt-1">Creative Professionals</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

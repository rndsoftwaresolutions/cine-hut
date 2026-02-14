import { motion } from 'motion/react';
import { Link } from 'react-router';
import { AnimatedText } from '../components/AnimatedText';
import { ScrollReveal } from '../components/ScrollReveal';
import { ImageWithFallback } from '../components/ui-components/ImageWithFallback';
import { Film, Video, Palette, Globe, ArrowRight, Play } from 'lucide-react';

export default function Home() {
  const services = [
    {
      icon: Film,
      title: 'Film & Video Production',
      description: 'Professional cinematic storytelling from concept to final cut',
      video: 'https://images.unsplash.com/photo-1638961837480-5aee8a8f90cd',
    },
    {
      icon: Video,
      title: 'Film & Video Training',
      description: 'Master the art of filmmaking with industry experts',
      video: 'https://images.unsplash.com/photo-1604145499537-ccb7d82d3fa7',
    },
    {
      icon: Palette,
      title: 'Creative Services',
      description: 'Motion graphics, animation, and visual storytelling',
      video: 'https://images.unsplash.com/photo-1709316131422-35a5fb1e9eb2',
    },
    {
      icon: Globe,
      title: 'Digital & Marketing',
      description: 'Strategic digital campaigns that amplify your message',
      video: 'https://images.unsplash.com/photo-1573497619860-6d82917e4ec8',
    },
  ];

  // const clients = [
  //   'NETFLIX', 'HBO', 'SONY', 'WARNER', 'UNIVERSAL', 'PARAMOUNT',
  //   'A24', 'MIRAMAX', 'LIONSGATE', 'FOX', 'MGM', 'DREAMWORKS'
  // ];

  const clients = [
    {
      name: "Netflix",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    },
    {
      name: "Warner Bros",
      logo: "https://logos-world.net/wp-content/uploads/2021/11/Warner-Brothers-Symbol.png",
    },
    {
      name: "Sony Pictures",
      logo: "https://1000logos.net/wp-content/uploads/2021/05/Sony-logo.png",
    },
    {
      name: "Universal",
      logo: "https://logos-world.net/wp-content/uploads/2021/11/Universal-Logo.png",
    },
    {
      name: "Paramount",
      logo: "https://upload.wikimedia.org/wikipedia/en/1/1e/Paramount_Global.svg",
    },
    {
      name: "A24",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/b7/A24_logo.svg",
    },
    {
      name: "MIRAMAX",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjB_tH_PIQ_cukmGL247FUmKqLiVa0qrzasQ&s",
    },
    {
      name: "HBO",
      logo: "https://images.seeklogo.com/logo-png/6/1/hbo-logo-png_seeklogo-65764.png",
    },
    {
      name: "FOX",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Fox_Movies_Premium_logo.svg/960px-Fox_Movies_Premium_logo.svg.png",
    },
    {
      name: "MGM",
      logo: "https://www.hatchwise.com/wp-content/uploads/2024/08/image.png",
    },
    {
      name: "DREAMWORKS",
      logo: "https://cdn.freebiesupply.com/logos/large/2x/dreamworks-animation-logo-png-transparent.png",
    },
    {
      name: "LIONSGATE",
      logo: "data:image/jpeg;base64,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",
    },
  ];


  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1638961837480-5aee8a8f90cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Cinematic background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2d2621]/70 via-[#2d2621]/50 to-[#f9f5f3]" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-8xl mb-6 text-[#f9f5f3]" style={{ fontFamily: 'var(--font-cinematic)' }}>
              <AnimatedText text="Cinematic Stories." delay={0.3} />
            </h1>
            <h2 className="text-4xl md:text-6xl mb-8 text-[#d4a574]" style={{ fontFamily: 'var(--font-cinematic)' }}>
              <AnimatedText text="Creative Impact." delay={0.8} />
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="text-xl md:text-2xl text-[#e8dcd1] mb-12 leading-relaxed"
          >
            Digital Excellence. Live Events.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/services"
              className="group px-8 py-4 bg-[#d4a574] text-[#2d2621] rounded-sm hover:bg-[#c17043] transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <span>View Our Work</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-transparent border-2 border-[#d4a574] text-[#f9f5f3] rounded-sm hover:bg-[#d4a574] hover:text-[#2d2621] transition-all duration-300"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-[#d4a574] rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-[#d4a574] rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* LEFT SIDE - Image Collage */}
            <ScrollReveal>
              <div className="relative">
                <div className="grid grid-cols-2 gap-6">

                  {/* Column 1 */}
                  <div className="space-y-6">
                    <div className="relative overflow-hidden shadow-2xl shadow-[#d4a574]/10 group transition-all duration-500 hover:-translate-y-2">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1631387019069-2ff599943f9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                        alt="Cinematographer"
                        className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2d2621]/50 via-transparent to-transparent opacity-80" />
                    </div>

                    <div className="relative overflow-hidden shadow-2xl shadow-[#d4a574]/10 group transition-all duration-500 hover:-translate-y-2">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1759784120360-8b5044b71f47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                        alt="Studio Equipment"
                        className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2d2621]/50 via-transparent to-transparent opacity-80" />
                    </div>
                  </div>

                  {/* Column 2 */}
                  <div className="space-y-6 pt-16">
                    <div className="relative overflow-hidden shadow-2xl shadow-[#d4a574]/10 group transition-all duration-500 hover:-translate-y-2">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1744686912094-5a25e7c329b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                        alt="Post Production"
                        className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2d2621]/50 via-transparent to-transparent opacity-80" />
                    </div>

                    <div className="relative overflow-hidden shadow-2xl shadow-[#d4a574]/10 group transition-all duration-500 hover:-translate-y-2">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1600275669283-4bf2bb8a990c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                        alt="Professional Team"
                        className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2d2621]/50 via-transparent to-transparent opacity-80" />
                    </div>
                  </div>

                </div>

                {/* Subtle Decorative Accent */}
                <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-[#d4a574]/30 pointer-events-none" />
              </div>
            </ScrollReveal>


            {/* RIGHT SIDE - Your Original Content */}
            <ScrollReveal delay={0.2}>
              <div>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 60 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="h-1 bg-[#d4a574] mb-6"
                />
                <h2
                  className="text-5xl mb-6"
                  style={{ fontFamily: "var(--font-cinematic)" }}
                >
                  Where Vision Meets Cinema
                </h2>

                <p className="text-lg text-[#6b5d54] leading-relaxed mb-6">
                  At CINE HUT, we don't just create videos—we craft cinematic experiences
                  that move hearts and drive impact. With decades of combined expertise
                  in film production, creative services, and digital innovation, we
                  bring your stories to life with unmatched artistry and precision.
                </p>

                <p className="text-lg text-[#6b5d54] leading-relaxed mb-8">
                  From concept to final cut, from training to transformation, we are
                  your creative partner in every frame of your journey.
                </p>

                <Link
                  to="/about"
                  className="group inline-flex items-center space-x-2 text-[#d4a574] hover:text-[#c17043] transition-colors"
                >
                  <span className="text-lg">Read Our Story</span>
                  <ArrowRight
                    className="group-hover:translate-x-2 transition-transform"
                    size={20}
                  />
                </Link>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-24 px-4 bg-[#f3ece5]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2
              className="text-5xl mb-4"
              style={{ fontFamily: "var(--font-cinematic)" }}
            >
              Our Craft
            </h2>
            <p className="text-xl text-[#6b5d54]">
              Comprehensive creative solutions for every vision
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group relative bg-[#f9f5f3] rounded-sm overflow-hidden 
             shadow-md hover:shadow-xl transition-all duration-300 
             flex flex-col h-full"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={service.video}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2d2621] to-transparent opacity-60" />
                    <service.icon
                      className="absolute top-4 right-4 text-[#d4a574]"
                      size={32}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3
                      className="text-xl mb-3"
                      style={{ fontFamily: "var(--font-cinematic)" }}
                    >
                      {service.title}
                    </h3>

                    <p className="text-[#6b5d54] mb-6 flex-grow">
                      {service.description}
                    </p>

                    {/* Learn More always at bottom */}
                    <div className="flex items-center text-[#d4a574] group-hover:text-[#c17043] transition-colors mt-auto">
                      <span className="text-sm">Learn More</span>
                      <ArrowRight
                        className="ml-2 group-hover:translate-x-1 transition-transform"
                        size={16}
                      />
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          {/* View All Services Button */}
          <ScrollReveal>
            <div className="flex justify-center mt-16">
              <Link to="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-10 py-4 border border-[#d4a574] text-[#2d2621] bg-transparent
                   font-medium tracking-wide transition-all duration-300
                   hover:bg-[#d4a574] hover:text-white
                   shadow-sm hover:shadow-lg cursor-pointer"
                  style={{ fontFamily: "var(--font-cinematic)" }}
                >
                  View All Services
                </motion.button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>


      {/* Clients Section */}
      <section className="py-24 px-4 bg-[#f3ece5] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">

          <ScrollReveal className="text-center mb-16">
            <h2
              className="text-5xl mb-4"
              style={{ fontFamily: "var(--font-cinematic)" }}
            >
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-[#6b5d54]">
              Proud partners with the world’s leading studios
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10">
            {clients.map((client, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="group relative flex items-center justify-center p-8 
                       bg-white/40 backdrop-blur-sm
                       border border-[#d4a574]/20
                       shadow-lg shadow-[#d4a574]/5
                       transition-all duration-300
                       hover:border-[#d4a574]/60
                       hover:shadow-xl hover:shadow-[#d4a574]/20"
                >
                  <ImageWithFallback
                    src={client.logo}
                    alt={client.name}
                    className="h-12 object-contain grayscale opacity-70 
                         group-hover:grayscale-0 group-hover:opacity-100
                         transition-all duration-500"
                  />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Subtle Decorative Accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-1 bg-[#d4a574]" />
      </section>


      {/* Showreel Section */}
      <section className="py-24 px-4 bg-[#2d2621]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-5xl mb-4 text-[#f9f5f3]" style={{ fontFamily: 'var(--font-cinematic)' }}>
              Our Showreel
            </h2>
            <p className="text-xl text-[#e8dcd1]">
              Experience the magic of our work
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="relative aspect-video rounded-sm overflow-hidden group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1604145499537-ccb7d82d3fa7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                alt="Showreel"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#2d2621]/40 group-hover:bg-[#2d2621]/30 transition-colors flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 bg-[#d4a574] rounded-full flex items-center justify-center text-[#2d2621] shadow-2xl"
                >
                  <Play size={32} fill="currentColor" />
                </motion.button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-24 px-4 bg-gradient-to-br from-[#d4a574] to-[#c17043]">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-5xl md:text-6xl mb-6 text-[#2d2621]" style={{ fontFamily: 'var(--font-cinematic)' }}>
              Let's Turn Your Vision Into Cinema
            </h2>
            <p className="text-xl text-[#3a332e] mb-10 leading-relaxed">
              Every great film starts with a conversation. Let's create something extraordinary together.
            </p>
            <Link
              to="/contact"
              className="inline-block px-12 py-5 bg-[#2d2621] text-[#f9f5f3] rounded-sm hover:bg-[#3a332e] transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
            >
              Get In Touch
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

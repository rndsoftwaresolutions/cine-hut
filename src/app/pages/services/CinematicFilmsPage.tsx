import { Navigation } from '../../components/Navigation';
import { Hero } from '../../components/Hero';
import { ProcessTimeline } from '../../components/ProcessTimeline';
import { FeatureCards } from '../../components/FeatureCards';
import { MasonryGallery } from '../../components/MasonryGallery';
import { CTABanner } from '../../components/CTABanner';
import { MobileStickyCTA } from '../../components/MobileStickyCTA';
import { motion } from 'motion/react';
import { Target, Users, Zap, Palette, Clock, Lightbulb, Film, FileText, Clapperboard, Scissors, Package } from 'lucide-react';

export function CinematicFilmsPage() {
  const processSteps = [
    { number: '01', title: 'Concept Development', icon: Lightbulb },
    { number: '02', title: 'Script & Storyboarding', icon: FileText },
    { number: '03', title: 'Production & Direction', icon: Clapperboard },
    { number: '04', title: 'Post Production', icon: Scissors },
    { number: '05', title: 'Final Delivery', icon: Package },
  ];

  const features = [
    {
      icon: Target,
      title: 'End-to-End Production',
      description: 'Complete production services from concept to final delivery, ensuring seamless execution at every stage.',
    },
    {
      icon: Users,
      title: 'Expert Creative Team',
      description: 'Award-winning directors, cinematographers, and editors bringing decades of combined experience.',
    },
    {
      icon: Zap,
      title: 'Latest Equipment',
      description: 'State-of-the-art cameras, lighting, and post-production tools for unmatched visual quality.',
    },
    {
      icon: Palette,
      title: 'Unique Storytelling',
      description: 'Every project is crafted with a distinctive narrative voice that resonates with your audience.',
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'Professional project management ensuring on-time completion without compromising quality.',
    },
  ];

  const galleryItems = [
    {
      id: '1',
      image: 'https://images.unsplash.com/photo-1622829118151-1cfabdf11a68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      type: 'image' as const,
      caption: 'Professional Cinema Camera Setup',
    },
    {
      id: '2',
      image: 'https://images.unsplash.com/photo-1695114584354-13e1910d491b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      type: 'video' as const,
      caption: 'Cinematic Scene Capture',
    },
    {
      id: '3',
      image: 'https://images.unsplash.com/photo-1645048984874-f8078b0467e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      type: 'image' as const,
      caption: 'Documentary Filmmaker at Work',
    },
    {
      id: '4',
      image: 'https://images.unsplash.com/photo-1709316131422-35a5fb1e9eb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      type: 'image' as const,
      caption: 'Behind the Scenes',
    },
    {
      id: '5',
      image: 'https://images.unsplash.com/photo-1640127249308-098702574176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      type: 'video' as const,
      caption: 'Cinema Theater Preview',
    },
    {
      id: '6',
      image: 'https://images.unsplash.com/photo-1622829118151-1cfabdf11a68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      type: 'image' as const,
      caption: 'Film Production Excellence',
    },
  ];

  return (
    <div className="min-h-screen page-transition">
      <Navigation />

      {/* Hero Section */}
      <Hero
        title="Cinematic & Documentary Films"
        subtitle="Stories That Move Hearts. Visuals That Inspire Minds."
        backgroundImage="https://images.unsplash.com/photo-1622829118151-1cfabdf11a68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
        primaryCTA="View Our Work"
        secondaryCTA="Discuss Your Film"
      />

      {/* What Are Cinematic & Documentary Films Section */}
      <section className="py-20 bg-[#F6EFE9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#1A1412] mb-8 gold-underline">
                What Are Cinematic & Documentary Films?
              </h2>

              <div className="space-y-6 font-['Inter'] text-lg text-[#1A1412]/80 leading-relaxed">
                <p>
                  <strong className="text-[#C56A2D]">Cinematic & Documentary Films</strong> are powerful visual narratives crafted with artistic precision and authentic storytelling.
                </p>

                <p>
                  <strong className="text-[#C56A2D]">Cinematic films</strong> focus on dramatic visuals, emotional depth, and immersive storytelling — designed to captivate audiences through compelling direction, lighting, and composition.
                </p>

                <p>
                  <strong className="text-[#C56A2D]">Documentary films</strong> present real stories, real people, and real impact. They blend truth with creativity, capturing moments that inform, inspire, and influence society.
                </p>

                <p className="text-[#1A1412] font-medium pt-4">
                  At CINE HUT, we combine cinematic excellence with documentary authenticity to create stories that leave lasting impressions.
                </p>
              </div>
            </motion.div>

            {/* Image with Parallax */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-warm-lg film-grain">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src="https://images.unsplash.com/photo-1695114584354-13e1910d491b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                  alt="Cinematic storytelling"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1412]/30 to-transparent" />
              </div>

              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#C56A2D] rounded-full opacity-20 blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visual Showcase */}
      <MasonryGallery items={galleryItems} />

      {/* Video Section */}
      <section className="py-20 bg-[#1A1412]">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden shadow-warm-lg"
          >
            <div className="aspect-video bg-[#2C1F1A] flex items-center justify-center relative group">
              <img
                src="https://images.unsplash.com/photo-1640127249308-098702574176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                alt="Cinematic reel"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#1A1412]/60 group-hover:bg-[#1A1412]/40 transition-all duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-[#C56A2D] flex items-center justify-center group-hover:scale-110 transition-transform duration-500 cursor-pointer">
                  <Film className="w-10 h-10 text-white" />
                </div>
              </div>
              {/* Border Frame */}
              <div className="absolute inset-4 border-2 border-[#C8A96A]/30 pointer-events-none" />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-8 font-['Inter'] text-white/80 text-lg"
          >
            Watch Our Latest Cinematic Production Reel
          </motion.p>
        </div>
      </section>

      {/* Process Timeline */}
      <ProcessTimeline steps={processSteps} />

      {/* Why Choose Us */}
      <FeatureCards features={features} title="Why Choose Us" />

      {/* CTA Banner */}
      <CTABanner
        title="Ready To Tell Your Story?"
        primaryButtonText="Start Your Film Project"
        secondaryButtonText="Call +91-77920 23344"
      />

      {/* Mobile Sticky CTA */}
      {/* <MobileStickyCTA /> */}

      {/* Footer */}
      {/* <footer className="py-12 bg-[#1A1412] border-t border-[#C56A2D]/20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Film className="w-8 h-8 text-[#C56A2D]" />
            <span className="font-['Playfair_Display'] text-2xl text-white">CINE HUT</span>
          </div>
          <p className="font-['Inter'] text-white/60 mb-2">
            Transforming Stories Into Visual Experiences
          </p>
          <p className="font-['Inter'] text-white/60">
            © 2026 CINE HUT. All rights reserved.
          </p>
        </div>
      </footer> */}
    </div>
  );
}
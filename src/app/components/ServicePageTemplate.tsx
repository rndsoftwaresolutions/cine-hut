import { Navigation } from './Navigation';
import { Hero } from './Hero';
import { ProcessTimeline } from './ProcessTimeline';
import {FeatureCards} from './FeatureCards';
import { CTABanner } from './CTABanner';
import { MobileStickyCTA } from './MobileStickyCTA';
import { motion } from 'motion/react';
import { Film } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface ServicePageTemplateProps {
  title: string;
  subtitle: string;
  heroImage: string;
  description: string[];
  features: Array<{
    icon: LucideIcon;
    title: string;
    description: string;
  }>;
  processSteps: Array<{
    number: string;
    title: string;
    icon: LucideIcon;
  }>;
  showcaseImage: string;
}

export function ServicePageTemplate({
  title,
  subtitle,
  heroImage,
  description,
  features,
  processSteps,
  showcaseImage,
}: ServicePageTemplateProps) {
  return (
    <div className="min-h-screen page-transition">
      <Navigation />

      {/* Hero Section */}
      <Hero
        title={title}
        subtitle={subtitle}
        backgroundImage={heroImage}
        primaryCTA="Get Started"
        secondaryCTA="Contact Us"
      />

      {/* About This Service Section */}
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
              <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#1A1412] mb-8">
                About This Service
              </h2>

              <div className="space-y-6 font-['Inter'] text-lg text-[#1A1412]/80 leading-relaxed">
                {description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </motion.div>

            {/* Image */}
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
                  src={showcaseImage}
                  alt={title}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1412]/30 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#C56A2D] rounded-full opacity-20 blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <ProcessTimeline steps={processSteps} />

      {/* Features */}
      <FeatureCards features={features} title="Why Choose Us" />

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Get Started?"
        primaryButtonText="Start Your Project"
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
import { ScrollReveal } from '../components/ScrollReveal';
import { ImageWithFallback } from '../components/ui-components/ImageWithFallback';
import { motion } from 'motion/react';
import { Briefcase, Mail } from 'lucide-react';

export default function Career() {
  const openings = [
    {
      title: 'Senior Cinematographer',
      department: 'Production',
      type: 'Full-Time',
      location: 'On-Site',
    },
    {
      title: 'Video Editor',
      department: 'Post-Production',
      type: 'Full-Time',
      location: 'Hybrid',
    },
    {
      title: 'Motion Graphics Designer',
      department: 'Creative',
      type: 'Full-Time',
      location: 'Remote',
    },
    {
      title: 'Film Production Intern',
      department: 'Production',
      type: 'Internship',
      location: 'On-Site',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1604145499537-ccb7d82d3fa7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Join Our Team"
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
            Join the Creative Force
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-[#e8dcd1]"
          >
            Be part of a team that's redefining cinematic excellence
          </motion.p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-5xl mb-6" style={{ fontFamily: 'var(--font-cinematic)' }}>
              Why CINE HUT?
            </h2>
            <p className="text-xl text-[#6b5d54] max-w-3xl mx-auto leading-relaxed">
              We believe in nurturing talent, fostering creativity, and creating an environment where every team member can thrive and grow.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal>
              <div className="p-8 bg-[#f3ece5] rounded-sm">
                <h3 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-cinematic)' }}>Creative Freedom</h3>
                <p className="text-[#6b5d54]">Express your vision and push creative boundaries on every project.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="p-8 bg-[#f3ece5] rounded-sm">
                <h3 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-cinematic)' }}>Growth Opportunities</h3>
                <p className="text-[#6b5d54]">Continuous learning and career advancement in a dynamic industry.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="p-8 bg-[#f3ece5] rounded-sm">
                <h3 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-cinematic)' }}>Industry Impact</h3>
                <p className="text-[#6b5d54]">Work on projects that shape culture and inspire audiences worldwide.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 px-4 bg-[#f3ece5]">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-5xl mb-4" style={{ fontFamily: 'var(--font-cinematic)' }}>
              Open Positions
            </h2>
            <p className="text-xl text-[#6b5d54]">
              Explore current opportunities to join our team
            </p>
          </ScrollReveal>

          <div className="space-y-6">
            {openings.map((job, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="p-8 bg-[#f9f5f3] rounded-sm hover:shadow-lg transition-all duration-300 border-l-4 border-[#d4a574]"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-2xl mb-2" style={{ fontFamily: 'var(--font-cinematic)' }}>
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 text-sm text-[#6b5d54]">
                        <span className="flex items-center space-x-1">
                          <Briefcase size={16} />
                          <span>{job.department}</span>
                        </span>
                        <span>•</span>
                        <span>{job.type}</span>
                        <span>•</span>
                        <span>{job.location}</span>
                      </div>
                    </div>
                    <a
                      href={`mailto:careers@cinehut.com?subject=Application for ${job.title}`}
                      className="inline-flex items-center space-x-2 px-6 py-3 bg-[#d4a574] text-[#2d2621] rounded-sm hover:bg-[#c17043] transition-colors"
                    >
                      <Mail size={20} />
                      <span>Apply Now</span>
                    </a>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-gradient-to-br from-[#d4a574] to-[#c17043]">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-5xl mb-6 text-[#2d2621]" style={{ fontFamily: 'var(--font-cinematic)' }}>
              Don't See the Right Role?
            </h2>
            <p className="text-xl text-[#3a332e] mb-8">
              We're always looking for talented individuals. Send us your portfolio and let's talk.
            </p>
            <a
              href="mailto:careers@cinehut.com"
              className="inline-block px-12 py-5 bg-[#2d2621] text-[#f9f5f3] rounded-sm hover:bg-[#3a332e] transition-colors shadow-lg"
            >
              Get In Touch
            </a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

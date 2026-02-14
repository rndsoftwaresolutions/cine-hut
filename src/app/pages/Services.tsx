// import { ScrollReveal } from '../components/ScrollReveal';
// import { ImageWithFallback } from '../components/ui-components/ImageWithFallback';
// import { motion } from 'motion/react';
// import {
//   Film,
//   Video,
//   Camera,
//   Clapperboard,
//   GraduationCap,
//   BookOpen,
//   Users,
//   Award,
//   Palette,
//   Wand2,
//   Sparkles,
//   Layers,
//   Globe,
//   TrendingUp,
//   Share2,
//   BarChart,
// } from 'lucide-react';

// export default function Services() {
//   const filmProduction = [
//     { icon: Film, title: 'Corporate Films', description: 'Professional brand storytelling' },
//     { icon: Camera, title: 'Commercials', description: 'High-impact advertising content' },
//     { icon: Clapperboard, title: 'Documentaries', description: 'Authentic narrative films' },
//     { icon: Video, title: 'Music Videos', description: 'Creative visual experiences' },
//   ];

//   const training = [
//     { icon: GraduationCap, title: 'Filmmaking Courses', description: 'Comprehensive production training' },
//     { icon: BookOpen, title: 'Cinematography Workshop', description: 'Master visual storytelling' },
//     { icon: Users, title: 'Corporate Training', description: 'Media skills for teams' },
//     { icon: Award, title: 'Certification Programs', description: 'Industry-recognized credentials' },
//   ];

//   const creative = [
//     { icon: Palette, title: 'Motion Graphics', description: 'Dynamic visual animations' },
//     { icon: Wand2, title: '2D/3D Animation', description: 'Stunning animated content' },
//     { icon: Sparkles, title: 'VFX & Post-Production', description: 'Cinematic finishing touches' },
//     { icon: Layers, title: 'Graphic Design', description: 'Visual brand identity' },
//   ];

//   const digital = [
//     { icon: Globe, title: 'Social Media Management', description: 'Strategic content campaigns' },
//     { icon: TrendingUp, title: 'Digital Marketing', description: 'Data-driven growth strategies' },
//     { icon: Share2, title: 'Content Strategy', description: 'Engaging narrative planning' },
//     { icon: BarChart, title: 'Analytics & Insights', description: 'Performance optimization' },
//   ];

//   return (
//     <div>
//       {/* Hero */}
//       <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0">
//           <ImageWithFallback
//             src="https://images.unsplash.com/photo-1638961837480-5aee8a8f90cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
//             alt="Services"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-[#2d2621]/80 to-[#2d2621]/60" />
//         </div>

//         <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-6xl md:text-7xl mb-6 text-[#f9f5f3]"
//             style={{ fontFamily: 'var(--font-cinematic)' }}
//           >
//             Our Services
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-xl text-[#e8dcd1]"
//           >
//             Comprehensive creative solutions for every vision
//           </motion.p>
//         </div>
//       </section>

//       {/* Film & Video Production */}
//       <section className="py-24 px-4">
//         <div className="max-w-7xl mx-auto">
//           <ScrollReveal className="mb-12">
//             <div className="flex items-center space-x-4 mb-4">
//               <Film className="text-[#d4a574]" size={48} />
//               <h2 className="text-5xl" style={{ fontFamily: 'var(--font-cinematic)' }}>
//                 Film & Video Production
//               </h2>
//             </div>
//             <p className="text-xl text-[#6b5d54] max-w-3xl">
//               From concept to final cut, we bring your stories to life with cinematic excellence and creative vision that captivates audiences.
//             </p>
//           </ScrollReveal>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {filmProduction.map((service, index) => (
//               <ScrollReveal key={index} delay={index * 0.1}>
//                 <motion.div
//                   whileHover={{ y: -5 }}
//                   className="p-6 bg-[#f3ece5] rounded-sm hover:shadow-lg transition-all duration-300"
//                 >
//                   <service.icon className="text-[#d4a574] mb-4" size={36} />
//                   <h3 className="text-xl mb-2" style={{ fontFamily: 'var(--font-cinematic)' }}>
//                     {service.title}
//                   </h3>
//                   <p className="text-[#6b5d54]">{service.description}</p>
//                 </motion.div>
//               </ScrollReveal>
//             ))}
//           </div>

//           <ScrollReveal delay={0.4} className="mt-12">
//             <div className="relative h-96 rounded-sm overflow-hidden">
//               <ImageWithFallback
//                 src="https://images.unsplash.com/photo-1638961837480-5aee8a8f90cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
//                 alt="Film Production"
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#2d2621]/60 to-transparent" />
//             </div>
//           </ScrollReveal>
//         </div>
//       </section>

//       {/* Film & Video Training */}
//       <section className="py-24 px-4 bg-[#f3ece5]">
//         <div className="max-w-7xl mx-auto">
//           <ScrollReveal className="mb-12">
//             <div className="flex items-center space-x-4 mb-4">
//               <GraduationCap className="text-[#d4a574]" size={48} />
//               <h2 className="text-5xl" style={{ fontFamily: 'var(--font-cinematic)' }}>
//                 Film & Video Training
//               </h2>
//             </div>
//             <p className="text-xl text-[#6b5d54] max-w-3xl">
//               Master the art of filmmaking with industry experts. Our comprehensive training programs equip you with skills for success.
//             </p>
//           </ScrollReveal>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {training.map((service, index) => (
//               <ScrollReveal key={index} delay={index * 0.1}>
//                 <motion.div
//                   whileHover={{ y: -5 }}
//                   className="p-6 bg-[#f9f5f3] rounded-sm hover:shadow-lg transition-all duration-300"
//                 >
//                   <service.icon className="text-[#d4a574] mb-4" size={36} />
//                   <h3 className="text-xl mb-2" style={{ fontFamily: 'var(--font-cinematic)' }}>
//                     {service.title}
//                   </h3>
//                   <p className="text-[#6b5d54]">{service.description}</p>
//                 </motion.div>
//               </ScrollReveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Creative Services */}
//       <section className="py-24 px-4">
//         <div className="max-w-7xl mx-auto">
//           <ScrollReveal className="mb-12">
//             <div className="flex items-center space-x-4 mb-4">
//               <Palette className="text-[#d4a574]" size={48} />
//               <h2 className="text-5xl" style={{ fontFamily: 'var(--font-cinematic)' }}>
//                 Creative Services
//               </h2>
//             </div>
//             <p className="text-xl text-[#6b5d54] max-w-3xl">
//               Elevate your brand with stunning motion graphics, animation, and visual storytelling that leaves a lasting impression.
//             </p>
//           </ScrollReveal>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {creative.map((service, index) => (
//               <ScrollReveal key={index} delay={index * 0.1}>
//                 <motion.div
//                   whileHover={{ y: -5 }}
//                   className="p-6 bg-[#f3ece5] rounded-sm hover:shadow-lg transition-all duration-300"
//                 >
//                   <service.icon className="text-[#d4a574] mb-4" size={36} />
//                   <h3 className="text-xl mb-2" style={{ fontFamily: 'var(--font-cinematic)' }}>
//                     {service.title}
//                   </h3>
//                   <p className="text-[#6b5d54]">{service.description}</p>
//                 </motion.div>
//               </ScrollReveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Digital & Marketing */}
//       <section className="py-24 px-4 bg-[#2d2621]">
//         <div className="max-w-7xl mx-auto">
//           <ScrollReveal className="mb-12">
//             <div className="flex items-center space-x-4 mb-4">
//               <Globe className="text-[#d4a574]" size={48} />
//               <h2 className="text-5xl text-[#f9f5f3]" style={{ fontFamily: 'var(--font-cinematic)' }}>
//                 Digital & Marketing
//               </h2>
//             </div>
//             <p className="text-xl text-[#e8dcd1] max-w-3xl">
//               Strategic digital campaigns that amplify your message and drive measurable results across all platforms.
//             </p>
//           </ScrollReveal>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
//             {digital.map((service, index) => (
//               <ScrollReveal key={index} delay={index * 0.1}>
//                 <motion.div
//                   whileHover={{ y: -5 }}
//                   className="p-6 bg-[#3a332e] rounded-sm hover:shadow-lg transition-all duration-300"
//                 >
//                   <service.icon className="text-[#d4a574] mb-4" size={36} />
//                   <h3 className="text-xl mb-2 text-[#f9f5f3]" style={{ fontFamily: 'var(--font-cinematic)' }}>
//                     {service.title}
//                   </h3>
//                   <p className="text-[#e8dcd1]">{service.description}</p>
//                 </motion.div>
//               </ScrollReveal>
//             ))}
//           </div>

//           <ScrollReveal delay={0.4}>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//               <div className="p-8 border-2 border-[#d4a574] rounded-sm">
//                 <div className="text-5xl text-[#d4a574] mb-2" style={{ fontFamily: 'var(--font-cinematic)' }}>10M+</div>
//                 <p className="text-[#e8dcd1]">Total Reach</p>
//               </div>
//               <div className="p-8 border-2 border-[#d4a574] rounded-sm">
//                 <div className="text-5xl text-[#d4a574] mb-2" style={{ fontFamily: 'var(--font-cinematic)' }}>500+</div>
//                 <p className="text-[#e8dcd1]">Campaigns Delivered</p>
//               </div>
//               <div className="p-8 border-2 border-[#d4a574] rounded-sm">
//                 <div className="text-5xl text-[#d4a574] mb-2" style={{ fontFamily: 'var(--font-cinematic)' }}>98%</div>
//                 <p className="text-[#e8dcd1]">Client Satisfaction</p>
//               </div>
//             </div>
//           </ScrollReveal>
//         </div>
//       </section>
//     </div>
//   );
// }

import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { ServiceCard } from '../components/ServiceCard';
import { MobileStickyCTA } from '../components/MobileStickyCTA';
import {
  Film,
  Calendar,
  Trophy,
  Cpu,
  Heart,
  Palette,
  Sparkles,
  Share2,
  FileText,
  Video,
  Megaphone,
  TrendingUp,
} from 'lucide-react';

export default function ServicesPage() {
  const filmVideoServices = [
    {
      title: 'Cinematic & Documentary Films',
      icon: Film,
      image: 'https://images.unsplash.com/photo-1622829118151-1cfabdf11a68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      link: '/services/cinematic-films',
    },
    {
      title: 'Event Coverage & Management',
      icon: Calendar,
      image: 'https://images.unsplash.com/photo-1763280290224-1b7ed510a31e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      link: '/services/event-coverage',
    },
    {
      title: 'Drone Photography & Videography',
      icon: Video,
      image: 'https://images.unsplash.com/photo-1668836733970-9ed7e53cd2ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      link: '/services/drone-photography',
    },
    {
      title: 'Sports Event Coverage',
      icon: Trophy,
      image: 'https://images.unsplash.com/photo-1729871337531-249297613423?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      link: '/services/sports-event',
    },
    {
      title: 'AI Video & Animation',
      icon: Cpu,
      image: 'https://images.unsplash.com/photo-1701696934136-86ffdc37b892?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      link: '/services/ai-video',
    },
    {
      title: 'Wedding Films',
      icon: Heart,
      image: 'https://images.unsplash.com/photo-1767986012138-d02276728368?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      link: '/services/wedding-films',
    },
  ];

  const creativeServices = [
    {
      title: 'Graphic Design',
      icon: Palette,
      image: 'https://images.unsplash.com/photo-1512645592367-97ba8a9d4035?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      link: '/services/graphic-design',
    },
    {
      title: 'Motion Graphics & Fine Art',
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1695114584354-13e1910d491b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      link: '/services/motion-graphics',
    },
  ];

  const digitalServices = [
    {
      title: 'Social Media Marketing',
      icon: Share2,
      image: 'https://images.unsplash.com/photo-1640725804478-ebf80960a3f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      link: '/services/social-media',
    },
    {
      title: 'Content Creation',
      icon: FileText,
      image: 'https://images.unsplash.com/photo-1709316131422-35a5fb1e9eb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      link: '/services/content-creation',
    },
    {
      title: 'PR & Branding',
      icon: Megaphone,
      image: 'https://images.unsplash.com/photo-1645048984874-f8078b0467e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      link: '/services/pr-branding',
    },
    {
      title: 'Online Campaign Management',
      icon: TrendingUp,
      image: 'https://images.unsplash.com/photo-1640127249308-098702574176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      link: '/services/online-campaign',
    },
  ];

  return (
    <div className="min-h-screen page-transition">
      <Navigation />

      {/* Hero Section */}
      <Hero
        title="Our Creative Services"
        subtitle="Transforming Stories Into Visual Experiences"
        backgroundImage="https://images.unsplash.com/photo-1622829118151-1cfabdf11a68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
        primaryCTA="Start Your Project"
      />

      {/* Film & Video Production Section */}
      <section className="py-20 bg-[#F6EFE9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-5xl md:text-6xl text-[#1A1412] mb-4">
              Film & Video Production
            </h2>
            <p className="font-['Inter'] text-xl text-[#1A1412]/70 max-w-3xl mx-auto">
              Premium cinematic experiences crafted with passion and precision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filmVideoServices.map((service, index) => (
              <ServiceCard
                key={service.link}
                {...service}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Creative Services Section */}
      <section className="py-20 bg-[#1A1412]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-5xl md:text-6xl text-white mb-4">
              Creative Services
            </h2>
            <p className="font-['Inter'] text-xl text-white/70 max-w-3xl mx-auto">
              Artistic excellence meets innovative design
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {creativeServices.map((service, index) => (
              <ServiceCard
                key={service.link}
                {...service}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Digital & Marketing Services Section */}
      <section className="py-20 bg-[#F6EFE9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-5xl md:text-6xl text-[#1A1412] mb-4">
              Digital & Marketing
            </h2>
            <p className="font-['Inter'] text-xl text-[#1A1412]/70 max-w-3xl mx-auto">
              Strategic digital solutions that amplify your brand
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {digitalServices.map((service, index) => (
              <ServiceCard
                key={service.link}
                {...service}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

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

      {/* Mobile Sticky CTA */}
      {/* <MobileStickyCTA /> */}
    </div>
  );
}

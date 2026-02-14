import { Link } from 'react-router';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';

interface ServiceCardProps {
  title: string;
  icon: LucideIcon;
  image: string;
  link: string;
  delay?: number;
}

export function ServiceCard({ title, icon: Icon, image, link, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <Link to={link} className="group block relative h-96 rounded-2xl overflow-hidden shadow-warm hover:shadow-warm-lg transition-all duration-500">
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.6 }}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* Warm Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1412] via-[#1A1412]/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

          {/* Film Grain */}
          <div className="absolute inset-0 film-grain" />

          {/* Content */}
          <div className="absolute inset-0 p-8 flex flex-col justify-between">
            {/* Icon */}
            <div className="self-start">
              <div className="w-14 h-14 rounded-full bg-[#C56A2D]/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-[#C56A2D]/30 transition-colors duration-500">
                <Icon className="w-7 h-7 text-[#C8A96A]" />
              </div>
            </div>

            {/* Title and Arrow */}
            <div>
              <h3 className="font-['Playfair_Display'] text-3xl text-white mb-4 transition-transform duration-500 group-hover:translate-x-2">
                {title}
              </h3>
              <div className="flex items-center gap-2 text-[#C8A96A] transition-all duration-500 group-hover:gap-4">
                <span className="font-['Inter'] text-sm tracking-wider">EXPLORE</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Glow Border on Hover */}
          <div className="absolute inset-0 border-2 border-[#C56A2D] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
        </motion.div>
      </Link>
    </motion.div>
  );
}

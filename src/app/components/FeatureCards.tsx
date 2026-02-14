import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureCardsProps {
  features: Feature[];
  title?: string;
}

export function FeatureCards({ features, title = "Why Choose Us" }: FeatureCardsProps) {
  return (
    <div className="py-20 bg-[#1A1412]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-['Playfair_Display'] text-5xl md:text-6xl text-white text-center mb-16"
        >
          {title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group glass-dark p-8 rounded-2xl hover:border-[#C8A96A] transition-all duration-500 hover:-translate-y-2 shadow-warm hover:shadow-warm-lg"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-[#C56A2D]/20 flex items-center justify-center mb-6 group-hover:bg-[#C56A2D]/30 group-hover:scale-110 transition-all duration-500">
                  <Icon className="w-8 h-8 text-[#C8A96A]" />
                </div>

                {/* Title */}
                <h3 className="font-['Playfair_Display'] text-2xl text-white mb-4 group-hover:text-[#C8A96A] transition-colors duration-500">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="font-['Inter'] text-white/80 leading-relaxed">
                  {feature.description}
                </p>

                {/* Gold Line Accent */}
                <div className="mt-6 h-1 bg-[#C8A96A]/20 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                    className="h-full bg-[#C8A96A]"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

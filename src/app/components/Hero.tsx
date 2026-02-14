import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  primaryCTA?: string;
  secondaryCTA?: string;
  onPrimaryCTA?: () => void;
  onSecondaryCTA?: () => void;
}

export function Hero({
  title,
  subtitle,
  backgroundImage,
  primaryCTA,
  secondaryCTA,
  onPrimaryCTA,
  onSecondaryCTA,
}: HeroProps) {
  const [startAnimation, setStartAnimation] = useState(false);

  // Delay heavy background animation slightly after mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        initial={{ scale: 1 }}
        animate={startAnimation ? { scale: 1.05 } : { scale: 1 }}
        transition={{
          duration: 18,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
      </motion.div>

      {/* Dark Warm Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1412] via-[#1A1412]/70 to-[#1A1412]/40" />

      {/* Film Grain */}
      <div className="absolute inset-0 film-grain pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="font-['Playfair_Display'] text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-wide"
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-['Inter'] text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto"
        >
          {subtitle}
        </motion.p>

        {/* CTAs */}
        {(primaryCTA || secondaryCTA) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {primaryCTA && (
              <button
                onClick={onPrimaryCTA}
                className="group px-8 py-4 bg-[#C56A2D] text-white rounded-full font-['Inter'] 
                           flex items-center gap-3 
                           hover:bg-[#C8A96A] transition-all 
                           shadow-lg hover:shadow-xl 
                           relative overflow-hidden"
              >
                <span className="relative z-10">{primaryCTA}</span>
                <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 btn-shimmer" />
              </button>
            )}

            {secondaryCTA && (
              <button
                onClick={onSecondaryCTA}
                className="px-8 py-4 bg-transparent text-white 
                           border-2 border-white/30 rounded-full 
                           font-['Inter'] 
                           hover:border-[#C8A96A] hover:text-[#C8A96A] 
                           transition-all backdrop-blur-sm"
              >
                {secondaryCTA}
              </button>
            )}
          </motion.div>
        )}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>

    </div>
  );
}

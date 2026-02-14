import { motion } from "motion/react";
import { Phone, ArrowRight } from "lucide-react";

interface CTABannerProps {
  title: string;
  primaryButtonText: string;
  secondaryButtonText?: string;
  phoneNumber?: string;
}

export function CTABanner({
  title,
  primaryButtonText,
  secondaryButtonText,
  phoneNumber = "+91-77920 23344",
}: CTABannerProps) {
  return (
    <div className="relative py-24 overflow-hidden bg-white">

      {/* Soft Gold Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 0% 0%, rgba(212,165,116,0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 100% 100%, rgba(212,165,116,0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 0% 0%, rgba(212,165,116,0.15) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute inset-0"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-['Playfair_Display'] text-4xl md:text-6xl text-[#2d2621] mb-12"
        >
          {title}
        </motion.h2>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* Primary Button (Gold Filled) */}
          <button className="group px-8 py-4 bg-[#d4a574] text-[#1A1412] 
                             rounded-full font-['Inter'] font-medium 
                             flex items-center gap-3 
                             hover:bg-[#c17043] 
                             transition-all duration-300 
                             shadow-lg shadow-[#d4a574]/30 
                             hover:scale-105 relative overflow-hidden">
            <span className="relative z-10">{primaryButtonText}</span>
            <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </button>

          {/* Secondary Button */}
          {secondaryButtonText && (
            <a
              href={`tel:${phoneNumber.replace(/\s|-/g, "")}`}
              className="px-8 py-4 bg-transparent 
                         border border-[#2d2621]/20 
                         text-[#2d2621] 
                         rounded-full font-['Inter'] font-medium 
                         flex items-center gap-3 
                         hover:border-[#d4a574]
                         hover:text-[#d4a574]
                         transition-all duration-300 
                         hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              {secondaryButtonText}
            </a>
          )}
        </motion.div>

        {/* Phone Number */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-[#6b5d54] font-['Inter'] text-lg"
        >
          {phoneNumber}
        </motion.p>
      </div>
    </div>
  );
}

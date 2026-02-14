import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface TimelineStep {
  number: string;
  title: string;
  icon: LucideIcon;
}

interface ProcessTimelineProps {
  steps: TimelineStep[];
}

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  const [revealed, setRevealed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setRevealed(true);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-28 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-['Playfair_Display'] text-5xl md:text-6xl text-[#2d2621] text-center mb-20"
        >
          Our Process
        </motion.h2>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">

          {/* Elegant Line */}
          <div className="absolute top-16 left-0 right-0 h-[2px] bg-[#d4a574]/20">
            <motion.div
              initial={{ width: 0 }}
              animate={revealed ? { width: "100%" } : {}}
              transition={{ duration: 1.8 }}
              className="h-full bg-[#d4a574]"
            />
          </div>

          <div className="grid grid-cols-5 gap-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={revealed ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Icon Circle */}
                  <div className="relative w-24 h-24 mb-6 flex items-center justify-center
                                  rounded-full border border-[#d4a574]/30
                                  bg-white shadow-lg
                                  transition-all duration-500
                                  group-hover:shadow-xl
                                  group-hover:border-[#d4a574]
                                  group-hover:-translate-y-2">

                    <Icon className="w-10 h-10 text-[#d4a574]" />

                    {/* Soft Glow */}
                    <div className="absolute inset-0 rounded-full bg-[#d4a574]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Step Number */}
                  <div className="font-['Playfair_Display'] text-3xl text-[#d4a574] mb-2">
                    {step.number}
                  </div>

                  {/* Title */}
                  <h3 className="font-['Inter'] font-medium text-[#2d2621] group-hover:text-[#d4a574] transition-colors">
                    {step.title}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-6"
              >
                <div className="w-16 h-16 rounded-full border border-[#d4a574]/30
                                flex items-center justify-center bg-white shadow-md">
                  <Icon className="w-8 h-8 text-[#d4a574]" />
                </div>

                <div>
                  <div className="font-['Playfair_Display'] text-xl text-[#d4a574] mb-1">
                    {step.number}
                  </div>
                  <h3 className="font-['Inter'] font-medium text-[#2d2621]">
                    {step.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

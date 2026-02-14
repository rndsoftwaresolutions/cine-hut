import { ScrollReveal } from '../components/ScrollReveal';
import { motion } from 'motion/react';

export default function Terms() {
  return (
    <div>
      <section className="py-24 px-4 bg-gradient-to-br from-[#d4a574] to-[#c17043]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl mb-6 text-[#2d2621]"
            style={{ fontFamily: 'var(--font-cinematic)' }}
          >
            Terms of Service
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-[#3a332e]"
          >
            Last updated: February 10, 2026
          </motion.p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="prose prose-lg max-w-none text-[#2d2621]">
              <h2 style={{ fontFamily: 'var(--font-cinematic)' }}>Agreement to Terms</h2>
              <p className="text-[#6b5d54] leading-relaxed">
                By accessing or using CINE HUT's services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
              </p>

              <h2 style={{ fontFamily: 'var(--font-cinematic)' }}>Use of Services</h2>
              <p className="text-[#6b5d54] leading-relaxed">
                You may use our services only for lawful purposes and in accordance with these Terms. You agree not to use our services in any way that violates any applicable law or regulation.
              </p>

              <h2 style={{ fontFamily: 'var(--font-cinematic)' }}>Intellectual Property</h2>
              <p className="text-[#6b5d54] leading-relaxed">
                All content, features, and functionality of our services are owned by CINE HUT and are protected by international copyright, trademark, and other intellectual property laws.
              </p>

              <h2 style={{ fontFamily: 'var(--font-cinematic)' }}>Limitation of Liability</h2>
              <p className="text-[#6b5d54] leading-relaxed">
                CINE HUT shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.
              </p>

              <h2 style={{ fontFamily: 'var(--font-cinematic)' }}>Contact Information</h2>
              <p className="text-[#6b5d54] leading-relaxed">
                For questions about these Terms, please contact us at legal@cinehut.com.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

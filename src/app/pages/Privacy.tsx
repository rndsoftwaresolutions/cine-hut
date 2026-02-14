import { ScrollReveal } from '../components/ScrollReveal';
import { motion } from 'motion/react';

export default function Privacy() {
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
            Privacy Policy
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
              <h2 style={{ fontFamily: 'var(--font-cinematic)' }}>Introduction</h2>
              <p className="text-[#6b5d54] leading-relaxed">
                CINE HUT ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>

              <h2 style={{ fontFamily: 'var(--font-cinematic)' }}>Information We Collect</h2>
              <p className="text-[#6b5d54] leading-relaxed">
                We collect information that you provide directly to us, including name, email address, phone number, and any other information you choose to provide when contacting us or using our services.
              </p>

              <h2 style={{ fontFamily: 'var(--font-cinematic)' }}>How We Use Your Information</h2>
              <p className="text-[#6b5d54] leading-relaxed">
                We use the information we collect to provide, maintain, and improve our services, to communicate with you, to respond to your inquiries, and to send you marketing communications (with your consent).
              </p>

              <h2 style={{ fontFamily: 'var(--font-cinematic)' }}>Data Security</h2>
              <p className="text-[#6b5d54] leading-relaxed">
                We implement appropriate technical and organizational measures to protect the security of your personal information. However, please note that no method of transmission over the internet is 100% secure.
              </p>

              <h2 style={{ fontFamily: 'var(--font-cinematic)' }}>Contact Us</h2>
              <p className="text-[#6b5d54] leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at privacy@cinehut.com.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

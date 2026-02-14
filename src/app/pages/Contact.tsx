import { ScrollReveal } from '../components/ScrollReveal';
import { ImageWithFallback } from '../components/ui-components/ImageWithFallback';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Send, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div>
      {/* Hero */}
      <section className="py-24 px-4 bg-gradient-to-br from-[#d4a574] to-[#c17043]">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl mb-6 text-[#2d2621]"
            style={{ fontFamily: 'var(--font-cinematic)' }}
          >
            Let's Create Together
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-[#3a332e] max-w-2xl mx-auto"
          >
            Have a project in mind? We'd love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Contact Info */}
            <ScrollReveal>
              <div>
                <h2 className="text-4xl mb-8" style={{ fontFamily: 'var(--font-cinematic)' }}>
                  Get In Touch
                </h2>
                <p className="text-lg text-[#6b5d54] mb-12 leading-relaxed">
                  Whether you have a project idea, need a quote, or just want to say hello, we're here to help bring your vision to life.
                </p>

                <div className="space-y-6 mb-12">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#d4a574] rounded-sm flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-[#2d2621]" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl mb-1" style={{ fontFamily: 'var(--font-cinematic)' }}>Address</h3>
                      <p className="text-[#6b5d54]">123 Film Street, Creative District</p>
                      <p className="text-[#6b5d54]">City, State 12345</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#d4a574] rounded-sm flex items-center justify-center flex-shrink-0">
                      <Phone className="text-[#2d2621]" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl mb-1" style={{ fontFamily: 'var(--font-cinematic)' }}>Phone</h3>
                      <p className="text-[#6b5d54]">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#d4a574] rounded-sm flex items-center justify-center flex-shrink-0">
                      <Mail className="text-[#2d2621]" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl mb-1" style={{ fontFamily: 'var(--font-cinematic)' }}>Email</h3>
                      <p className="text-[#6b5d54]">hello@cinehut.com</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl mb-4" style={{ fontFamily: 'var(--font-cinematic)' }}>Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="w-12 h-12 bg-[#d4a574] rounded-sm flex items-center justify-center hover:bg-[#c17043] transition-colors">
                      <Facebook className="text-[#2d2621]" size={20} />
                    </a>
                    <a href="#" className="w-12 h-12 bg-[#d4a574] rounded-sm flex items-center justify-center hover:bg-[#c17043] transition-colors">
                      <Instagram className="text-[#2d2621]" size={20} />
                    </a>
                    <a href="#" className="w-12 h-12 bg-[#d4a574] rounded-sm flex items-center justify-center hover:bg-[#c17043] transition-colors">
                      <Youtube className="text-[#2d2621]" size={20} />
                    </a>
                    <a href="#" className="w-12 h-12 bg-[#d4a574] rounded-sm flex items-center justify-center hover:bg-[#c17043] transition-colors">
                      <Linkedin className="text-[#2d2621]" size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: Contact Form */}
            <ScrollReveal delay={0.2}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#d4a574]/10 to-[#c17043]/10 rounded-sm" />
                <form onSubmit={handleSubmit} className="relative p-8 bg-[#f3ece5] rounded-sm">
                  <h3 className="text-3xl mb-6" style={{ fontFamily: 'var(--font-cinematic)' }}>
                    Send Us a Message
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block mb-2 text-[#2d2621]">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-[#f9f5f3] border border-[#e8dcd1] rounded-sm focus:outline-none focus:ring-2 focus:ring-[#d4a574]"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block mb-2 text-[#2d2621]">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-[#f9f5f3] border border-[#e8dcd1] rounded-sm focus:outline-none focus:ring-2 focus:ring-[#d4a574]"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block mb-2 text-[#2d2621]">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-[#f9f5f3] border border-[#e8dcd1] rounded-sm focus:outline-none focus:ring-2 focus:ring-[#d4a574]"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block mb-2 text-[#2d2621]">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 bg-[#f9f5f3] border border-[#e8dcd1] rounded-sm focus:outline-none focus:ring-2 focus:ring-[#d4a574] resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full px-8 py-4 bg-[#d4a574] text-[#2d2621] rounded-sm hover:bg-[#c17043] transition-colors flex items-center justify-center space-x-2 shadow-lg"
                    >
                      <span>Send Message</span>
                      <Send size={20} />
                    </motion.button>
                  </div>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96">
        <div className="w-full h-full bg-[#e8dcd1] flex items-center justify-center">
          <p className="text-2xl text-[#6b5d54]" style={{ fontFamily: 'var(--font-cinematic)' }}>
            Map Location
          </p>
        </div>
      </section>
    </div>
  );
}

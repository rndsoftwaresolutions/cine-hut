import { Link } from 'react-router';
import { Facebook, Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#3a332e] text-[#f9f5f3] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <h3 className="text-xl mb-4" style={{ fontFamily: 'var(--font-cinematic)' }}>CINE HUT</h3>
            <p className="text-[#e8dcd1] text-sm leading-relaxed mb-4">
              Crafting cinematic stories that resonate. Your creative partner in film production, training, and digital excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#d4a574] hover:text-[#c17043] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-[#d4a574] hover:text-[#c17043] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-[#d4a574] hover:text-[#c17043] transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-[#d4a574] hover:text-[#c17043] transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4" style={{ fontFamily: 'var(--font-cinematic)' }}>Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-[#e8dcd1] hover:text-[#d4a574] transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-[#e8dcd1] hover:text-[#d4a574] transition-colors">Services</Link></li>
              <li><Link to="/clients" className="text-[#e8dcd1] hover:text-[#d4a574] transition-colors">Clients</Link></li>
              <li><Link to="/career" className="text-[#e8dcd1] hover:text-[#d4a574] transition-colors">Career</Link></li>
              <li><Link to="/blog" className="text-[#e8dcd1] hover:text-[#d4a574] transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4" style={{ fontFamily: 'var(--font-cinematic)' }}>Services</h4>
            <ul className="space-y-2 text-sm text-[#e8dcd1]">
              <li>Film Production</li>
              <li>Video Training</li>
              <li>Creative Services</li>
              <li>Digital Marketing</li>
              <li>Live Events</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4" style={{ fontFamily: 'var(--font-cinematic)' }}>Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2 text-[#e8dcd1]">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>123 Film Street, Creative District, City, 12345</span>
              </li>
              <li className="flex items-center space-x-2 text-[#e8dcd1]">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-[#e8dcd1]">
                <Mail size={16} />
                <span>hello@cinehut.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#6b5d54] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-[#e8dcd1]">
          <p>&copy; 2026 CINE HUT. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-[#d4a574] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#d4a574] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

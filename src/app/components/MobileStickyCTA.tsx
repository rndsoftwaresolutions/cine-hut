import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

export function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling 300px
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`mobile-sticky-cta ${visible ? 'visible' : ''}`}>
      <div className="glass-dark p-4 border-t border-[#C56A2D]/30">
        <a
          href="tel:+917792023344"
          className="flex items-center justify-center gap-3 w-full py-4 bg-[#C56A2D] text-white rounded-full font-['Inter'] font-medium hover:bg-[#C8A96A] transition-all shadow-warm-lg"
        >
          <Phone className="w-5 h-5" />
          <span>Call +91-77920 23344</span>
        </a>
      </div>
    </div>
  );
}

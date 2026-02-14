import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Home, Film } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Film className="mx-auto mb-8 text-[#d4a574]" size={80} />
          <h1 className="text-9xl mb-4 text-[#d4a574]" style={{ fontFamily: 'var(--font-cinematic)' }}>
            404
          </h1>
          <h2 className="text-4xl mb-6" style={{ fontFamily: 'var(--font-cinematic)' }}>
            Scene Not Found
          </h2>
          <p className="text-xl text-[#6b5d54] mb-12">
            This page seems to have been cut from the final edit. Let's get you back on track.
          </p>
          <Link
            to="/"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-[#d4a574] text-[#2d2621] rounded-sm hover:bg-[#c17043] transition-colors shadow-lg"
          >
            <Home size={20} />
            <span>Back to Home</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

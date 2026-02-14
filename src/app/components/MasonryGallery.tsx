import Masonry from 'react-responsive-masonry';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { useState } from 'react';

interface GalleryItem {
  id: string;
  image: string;
  type: 'image' | 'video';
  caption?: string;
}

interface MasonryGalleryProps {
  items: GalleryItem[];
}

export function MasonryGallery({ items }: MasonryGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div className="py-20 bg-[#F6EFE9]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-['Playfair_Display'] text-5xl md:text-6xl text-[#1A1412] text-center mb-16"
        >
          Visual Showcase
        </motion.h2>

        <Masonry columnsCount={3} gutter="20px">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-xl shadow-warm hover:shadow-warm-lg transition-all duration-500 cursor-pointer"
              onClick={() => setLightboxIndex(index)}
            >
              <img
                src={item.image}
                alt={item.caption || `Gallery item ${index + 1}`}
                className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-[#1A1412]/0 group-hover:bg-[#1A1412]/60 transition-all duration-500" />

              {/* Film Grain */}
              <div className="absolute inset-0 film-grain opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Play Icon for Videos */}
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#C56A2D]/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
                    <Play className="w-8 h-8 text-white fill-white" />
                  </div>
                </div>
              )}

              {/* Caption */}
              {item.caption && (
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="font-['Inter'] text-white text-sm">{item.caption}</p>
                </div>
              )}

              {/* Gold Border on Hover */}
              <div className="absolute inset-0 border-2 border-[#C8A96A] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
            </motion.div>
          ))}
        </Masonry>

        {/* Lightbox (Simple Implementation) */}
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 text-white text-4xl hover:text-[#C56A2D] transition-colors"
            >
              ×
            </button>
            <img
              src={items[lightboxIndex].image}
              alt={items[lightboxIndex].caption || 'Gallery'}
              className="max-w-full max-h-full object-contain rounded-xl border-2 border-[#C56A2D]"
            />
          </div>
        )}
      </div>
    </div>
  );
}

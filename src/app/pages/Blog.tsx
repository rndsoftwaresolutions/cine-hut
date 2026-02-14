import { ScrollReveal } from '../components/ScrollReveal';
import { ImageWithFallback } from '../components/ui-components/ImageWithFallback';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Clock, Calendar } from 'lucide-react';
import { blogPosts } from '../data/blogData';

export default function Blog() {
  const categories = ['All', 'Filmmaking', 'Post-Production', 'Case Study', 'Technology'];

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
            Stories & Insights
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-[#3a332e] max-w-2xl mx-auto"
          >
            Exploring the art, craft, and business of cinematic storytelling
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 bg-[#f3ece5] sticky top-20 z-30 border-b border-[#e8dcd1]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 bg-[#f9f5f3] hover:bg-[#d4a574] hover:text-[#2d2621] rounded-sm transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <Link to={`/blog/${blogPosts[0].id}`}>
              <motion.div
                whileHover={{ y: -5 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-[#f3ece5] rounded-sm overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-96 lg:h-auto overflow-hidden">
                  <ImageWithFallback
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <div className="p-12 flex flex-col justify-center">
                  <span className="inline-block px-4 py-1 bg-[#d4a574] text-[#2d2621] rounded-sm text-sm mb-4 w-fit">
                    Featured
                  </span>
                  <h2 className="text-4xl mb-4" style={{ fontFamily: 'var(--font-cinematic)' }}>
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-lg text-[#6b5d54] mb-6 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center space-x-6 text-sm text-[#6b5d54]">
                    <span className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>{blogPosts[0].date}</span>
                    </span>
                    <span className="flex items-center space-x-2">
                      <Clock size={16} />
                      <span>{blogPosts[0].readTime}</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <ScrollReveal key={post.id} delay={index * 0.1}>
                <Link to={`/blog/${post.id}`}>
                  <motion.article
                    whileHover={{ y: -8 }}
                    className="bg-[#f3ece5] rounded-sm overflow-hidden hover:shadow-lg transition-all duration-300"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <ImageWithFallback
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      />
                      <span className="absolute top-4 left-4 px-3 py-1 bg-[#d4a574] text-[#2d2621] rounded-sm text-sm">
                        {post.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl mb-3" style={{ fontFamily: 'var(--font-cinematic)' }}>
                        {post.title}
                      </h3>
                      <p className="text-[#6b5d54] mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-[#6b5d54]">
                        <span className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>{post.date}</span>
                        </span>
                        <span>•</span>
                        <span className="flex items-center space-x-1">
                          <Clock size={14} />
                          <span>{post.readTime}</span>
                        </span>
                      </div>
                    </div>
                  </motion.article>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

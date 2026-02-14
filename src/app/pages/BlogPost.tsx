import { useParams, Link } from 'react-router';
import { ScrollReveal } from '../components/ScrollReveal';
import { ImageWithFallback } from '../components/ui-components/ImageWithFallback';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, Calendar, Share2 } from 'lucide-react';
import { blogPosts } from '../data/blogData';

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4" style={{ fontFamily: 'var(--font-cinematic)' }}>Post Not Found</h1>
          <Link to="/blog" className="text-[#d4a574] hover:text-[#c17043]">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2d2621]/50 to-[#2d2621]" />
        </div>

        <div className="relative z-10 w-full px-4 pb-16">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1 bg-[#d4a574] text-[#2d2621] rounded-sm text-sm mb-4">
                {post.category}
              </span>
              <h1 className="text-5xl md:text-6xl mb-6 text-[#f9f5f3]" style={{ fontFamily: 'var(--font-cinematic)' }}>
                {post.title}
              </h1>
              <div className="flex items-center space-x-6 text-[#e8dcd1]">
                <span className="flex items-center space-x-2">
                  <Calendar size={16} />
                  <span>{post.date}</span>
                </span>
                <span className="flex items-center space-x-2">
                  <Clock size={16} />
                  <span>{post.readTime}</span>
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <Link
              to="/blog"
              className="inline-flex items-center space-x-2 text-[#d4a574] hover:text-[#c17043] mb-8"
            >
              <ArrowLeft size={20} />
              <span>Back to Blog</span>
            </Link>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-[#6b5d54] leading-relaxed mb-8">
                {post.excerpt}
              </p>
              <div className="text-[#2d2621] leading-relaxed whitespace-pre-line">
                {post.content}
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-[#e8dcd1] flex items-center justify-between">
              <button className="flex items-center space-x-2 px-6 py-3 bg-[#d4a574] text-[#2d2621] rounded-sm hover:bg-[#c17043] transition-colors">
                <Share2 size={20} />
                <span>Share Article</span>
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 px-4 bg-[#f3ece5]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl mb-12 text-center" style={{ fontFamily: 'var(--font-cinematic)' }}>
              Related Articles
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.filter(p => p.id !== id).slice(0, 3).map((relatedPost, index) => (
              <ScrollReveal key={relatedPost.id} delay={index * 0.1}>
                <Link to={`/blog/${relatedPost.id}`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-[#f9f5f3] rounded-sm overflow-hidden hover:shadow-lg transition-all duration-300"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <ImageWithFallback
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl mb-2" style={{ fontFamily: 'var(--font-cinematic)' }}>
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-[#6b5d54]">{relatedPost.readTime}</p>
                    </div>
                  </motion.div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

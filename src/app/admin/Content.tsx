import { motion } from 'motion/react';
import { Plus, Edit, Trash2, Eye } from 'lucide-react';

export default function Content() {
  const blogPosts = [
    {
      id: 1,
      title: 'The Art of Cinematic Storytelling',
      category: 'Filmmaking',
      status: 'published',
      views: 1243,
      date: '2026-02-05',
    },
    {
      id: 2,
      title: 'Mastering Color Grading',
      category: 'Post-Production',
      status: 'published',
      views: 892,
      date: '2026-01-28',
    },
    {
      id: 3,
      title: 'Behind the Scenes: Commercial Shoot',
      category: 'Case Study',
      status: 'draft',
      views: 0,
      date: '2026-02-10',
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl mb-2" style={{ fontFamily: 'var(--font-cinematic)' }}>
            Content Management
          </h1>
          <p className="text-[#6b5d54]">Manage blog posts, videos, and media</p>
        </div>
        <button className="flex items-center space-x-2 px-6 py-3 bg-[#d4a574] text-[#2d2621] rounded-sm hover:bg-[#c17043] transition-colors">
          <Plus size={20} />
          <span>New Post</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex space-x-2 mb-6 border-b border-[#e8dcd1]">
        {['Blog Posts', 'Videos', 'Media Library'].map((tab) => (
          <button
            key={tab}
            className={`px-6 py-3 transition-colors ${
              tab === 'Blog Posts'
                ? 'border-b-2 border-[#d4a574] text-[#2d2621]'
                : 'text-[#6b5d54] hover:text-[#2d2621]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Blog Posts Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-sm shadow-sm overflow-hidden"
      >
        <table className="w-full">
          <thead className="bg-[#f3ece5]">
            <tr>
              <th className="px-6 py-4 text-left">Title</th>
              <th className="px-6 py-4 text-left">Category</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-left">Views</th>
              <th className="px-6 py-4 text-left">Date</th>
              <th className="px-6 py-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogPosts.map((post, index) => (
              <motion.tr
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="border-b border-[#e8dcd1] hover:bg-[#f9f5f3] transition-colors"
              >
                <td className="px-6 py-4">
                  <span style={{ fontFamily: 'var(--font-cinematic)' }}>{post.title}</span>
                </td>
                <td className="px-6 py-4 text-[#6b5d54]">{post.category}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-sm text-sm capitalize ${
                      post.status === 'published'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {post.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-[#6b5d54]">
                  <span className="flex items-center space-x-1">
                    <Eye size={16} />
                    <span>{post.views}</span>
                  </span>
                </td>
                <td className="px-6 py-4 text-[#6b5d54]">{post.date}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <button className="text-[#d4a574] hover:text-[#c17043]">
                      <Edit size={18} />
                    </button>
                    <button className="text-red-500 hover:text-red-700">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
}

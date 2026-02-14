import { motion } from 'motion/react';
import { Search, Download, Check, X } from 'lucide-react';

export default function CareerApplications() {
  const applications = [
    {
      id: 1,
      name: 'John Smith',
      position: 'Senior Cinematographer',
      email: 'john@example.com',
      phone: '+1 (555) 123-4567',
      date: '2026-02-08',
      status: 'new',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      position: 'Video Editor',
      email: 'sarah@example.com',
      phone: '+1 (555) 234-5678',
      date: '2026-02-07',
      status: 'reviewed',
    },
    {
      id: 3,
      name: 'Michael Chen',
      position: 'Motion Graphics Designer',
      email: 'michael@example.com',
      phone: '+1 (555) 345-6789',
      date: '2026-02-06',
      status: 'shortlisted',
    },
    {
      id: 4,
      name: 'Emma Davis',
      position: 'Film Production Intern',
      email: 'emma@example.com',
      phone: '+1 (555) 456-7890',
      date: '2026-02-05',
      status: 'new',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'reviewed': return 'bg-yellow-100 text-yellow-800';
      case 'shortlisted': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl mb-2" style={{ fontFamily: 'var(--font-cinematic)' }}>
          Career Applications
        </h1>
        <p className="text-[#6b5d54]">Review and manage job applications</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-sm shadow-sm border-l-4 border-[#d4a574]"
        >
          <p className="text-[#6b5d54] mb-2">Total Applications</p>
          <p className="text-3xl" style={{ fontFamily: 'var(--font-cinematic)' }}>24</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white p-6 rounded-sm shadow-sm border-l-4 border-blue-500"
        >
          <p className="text-[#6b5d54] mb-2">New</p>
          <p className="text-3xl" style={{ fontFamily: 'var(--font-cinematic)' }}>8</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-6 rounded-sm shadow-sm border-l-4 border-green-500"
        >
          <p className="text-[#6b5d54] mb-2">Shortlisted</p>
          <p className="text-3xl" style={{ fontFamily: 'var(--font-cinematic)' }}>6</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white p-6 rounded-sm shadow-sm border-l-4 border-yellow-500"
        >
          <p className="text-[#6b5d54] mb-2">Under Review</p>
          <p className="text-3xl" style={{ fontFamily: 'var(--font-cinematic)' }}>10</p>
        </motion.div>
      </div>

      {/* Search */}
      <div className="mb-6 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6b5d54]" size={20} />
        <input
          type="text"
          placeholder="Search applications..."
          className="w-full pl-10 pr-4 py-3 bg-white border border-[#e8dcd1] rounded-sm focus:outline-none focus:ring-2 focus:ring-[#d4a574]"
        />
      </div>

      {/* Applications Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-sm shadow-sm overflow-hidden"
      >
        <table className="w-full">
          <thead className="bg-[#f3ece5]">
            <tr>
              <th className="px-6 py-4 text-left">Name</th>
              <th className="px-6 py-4 text-left">Position</th>
              <th className="px-6 py-4 text-left">Contact</th>
              <th className="px-6 py-4 text-left">Date</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, index) => (
              <motion.tr
                key={app.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="border-b border-[#e8dcd1] hover:bg-[#f9f5f3] transition-colors"
              >
                <td className="px-6 py-4">
                  <span style={{ fontFamily: 'var(--font-cinematic)' }}>{app.name}</span>
                </td>
                <td className="px-6 py-4 text-[#6b5d54]">{app.position}</td>
                <td className="px-6 py-4">
                  <div className="text-sm text-[#6b5d54]">
                    <p>{app.email}</p>
                    <p>{app.phone}</p>
                  </div>
                </td>
                <td className="px-6 py-4 text-[#6b5d54]">{app.date}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-sm text-sm capitalize ${getStatusColor(app.status)}`}>
                    {app.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <button className="text-[#d4a574] hover:text-[#c17043]" title="Download Resume">
                      <Download size={18} />
                    </button>
                    <button className="text-green-600 hover:text-green-800" title="Shortlist">
                      <Check size={18} />
                    </button>
                    <button className="text-red-500 hover:text-red-700" title="Reject">
                      <X size={18} />
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

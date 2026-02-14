import { motion } from 'motion/react';
import { useState } from 'react';
import { Plus, Search, Filter } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      name: 'Netflix Brand Film',
      client: 'Netflix',
      status: 'ongoing',
      budget: '$45,000',
      deadline: '2026-03-15',
      progress: 75,
    },
    {
      id: 2,
      name: 'Sony Commercial',
      client: 'Sony',
      status: 'completed',
      budget: '$32,000',
      deadline: '2026-02-28',
      progress: 100,
    },
    {
      id: 3,
      name: 'HBO Documentary',
      client: 'HBO',
      status: 'ongoing',
      budget: '$68,000',
      deadline: '2026-04-20',
      progress: 45,
    },
    {
      id: 4,
      name: 'Warner Bros Promo',
      client: 'Warner Bros',
      status: 'new',
      budget: '$28,000',
      deadline: '2026-03-01',
      progress: 15,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'ongoing': return 'bg-[#d4a574] text-[#2d2621]';
      case 'completed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl mb-2" style={{ fontFamily: 'var(--font-cinematic)' }}>
            Projects
          </h1>
          <p className="text-[#6b5d54]">Manage all your production projects</p>
        </div>
        <button className="flex items-center space-x-2 px-6 py-3 bg-[#d4a574] text-[#2d2621] rounded-sm hover:bg-[#c17043] transition-colors">
          <Plus size={20} />
          <span>New Project</span>
        </button>
      </div>

      {/* Filters */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6b5d54]" size={20} />
          <input
            type="text"
            placeholder="Search projects..."
            className="w-full pl-10 pr-4 py-3 bg-white border border-[#e8dcd1] rounded-sm focus:outline-none focus:ring-2 focus:ring-[#d4a574]"
          />
        </div>
        <button className="flex items-center space-x-2 px-4 py-3 bg-white border border-[#e8dcd1] rounded-sm hover:bg-[#f3ece5] transition-colors">
          <Filter size={20} />
          <span>Filter</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex space-x-2 mb-6 border-b border-[#e8dcd1]">
        {['all', 'new', 'ongoing', 'completed'].map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-6 py-3 capitalize transition-colors ${
              filter === tab
                ? 'border-b-2 border-[#d4a574] text-[#2d2621]'
                : 'text-[#6b5d54] hover:text-[#2d2621]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Projects Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-sm shadow-sm overflow-hidden"
      >
        <table className="w-full">
          <thead className="bg-[#f3ece5]">
            <tr>
              <th className="px-6 py-4 text-left">Project Name</th>
              <th className="px-6 py-4 text-left">Client</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-left">Budget</th>
              <th className="px-6 py-4 text-left">Deadline</th>
              <th className="px-6 py-4 text-left">Progress</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <motion.tr
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="border-b border-[#e8dcd1] hover:bg-[#f9f5f3] transition-colors cursor-pointer"
              >
                <td className="px-6 py-4">
                  <span style={{ fontFamily: 'var(--font-cinematic)' }}>{project.name}</span>
                </td>
                <td className="px-6 py-4 text-[#6b5d54]">{project.client}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-sm text-sm capitalize ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-[#6b5d54]">{project.budget}</td>
                <td className="px-6 py-4 text-[#6b5d54]">{project.deadline}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 bg-[#e8dcd1] rounded-full h-2">
                      <div
                        className="bg-[#d4a574] h-full rounded-full"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                    <span className="text-sm text-[#6b5d54]">{project.progress}%</span>
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

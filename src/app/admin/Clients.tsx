import { motion } from 'motion/react';
import { Plus, Search, Mail, Phone } from 'lucide-react';

export default function Clients() {
  const clients = [
    {
      id: 1,
      name: 'Netflix',
      contact: 'Sarah Johnson',
      email: 'sarah@netflix.com',
      phone: '+1 (555) 123-4567',
      projects: 5,
      totalSpent: '$145,000',
    },
    {
      id: 2,
      name: 'Sony Pictures',
      contact: 'Michael Chen',
      email: 'michael@sony.com',
      phone: '+1 (555) 234-5678',
      projects: 3,
      totalSpent: '$98,000',
    },
    {
      id: 3,
      name: 'HBO',
      contact: 'Emma Davis',
      email: 'emma@hbo.com',
      phone: '+1 (555) 345-6789',
      projects: 7,
      totalSpent: '$215,000',
    },
    {
      id: 4,
      name: 'Warner Bros',
      contact: 'David Wilson',
      email: 'david@warnerbros.com',
      phone: '+1 (555) 456-7890',
      projects: 4,
      totalSpent: '$132,000',
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl mb-2" style={{ fontFamily: 'var(--font-cinematic)' }}>
            Clients
          </h1>
          <p className="text-[#6b5d54]">Manage your client relationships</p>
        </div>
        <button className="flex items-center space-x-2 px-6 py-3 bg-[#d4a574] text-[#2d2621] rounded-sm hover:bg-[#c17043] transition-colors">
          <Plus size={20} />
          <span>Add Client</span>
        </button>
      </div>

      {/* Search */}
      <div className="mb-6 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6b5d54]" size={20} />
        <input
          type="text"
          placeholder="Search clients..."
          className="w-full pl-10 pr-4 py-3 bg-white border border-[#e8dcd1] rounded-sm focus:outline-none focus:ring-2 focus:ring-[#d4a574]"
        />
      </div>

      {/* Clients Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {clients.map((client, index) => (
          <motion.div
            key={client.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="bg-white p-6 rounded-sm shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-[#d4a574]"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-2xl mb-1" style={{ fontFamily: 'var(--font-cinematic)' }}>
                  {client.name}
                </h2>
                <p className="text-[#6b5d54]">{client.contact}</p>
              </div>
              <div className="text-right">
                <p className="text-2xl text-[#d4a574]" style={{ fontFamily: 'var(--font-cinematic)' }}>
                  {client.projects}
                </p>
                <p className="text-sm text-[#6b5d54]">Projects</p>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center space-x-2 text-[#6b5d54]">
                <Mail size={16} />
                <span className="text-sm">{client.email}</span>
              </div>
              <div className="flex items-center space-x-2 text-[#6b5d54]">
                <Phone size={16} />
                <span className="text-sm">{client.phone}</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#e8dcd1]">
              <div>
                <p className="text-sm text-[#6b5d54]">Total Spent</p>
                <p className="text-xl" style={{ fontFamily: 'var(--font-cinematic)' }}>
                  {client.totalSpent}
                </p>
              </div>
              <button className="px-4 py-2 bg-[#f3ece5] text-[#2d2621] rounded-sm hover:bg-[#e8dcd1] transition-colors">
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

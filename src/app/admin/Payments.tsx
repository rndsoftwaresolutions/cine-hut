import { motion } from 'motion/react';
import { Download, Search, Check, Clock } from 'lucide-react';

export default function Payments() {
  const payments = [
    {
      id: 1,
      invoice: 'INV-2026-001',
      client: 'Netflix',
      project: 'Brand Film',
      amount: '$45,000',
      status: 'paid',
      date: '2026-02-05',
    },
    {
      id: 2,
      invoice: 'INV-2026-002',
      client: 'Sony Pictures',
      project: 'Commercial',
      amount: '$32,000',
      status: 'paid',
      date: '2026-02-08',
    },
    {
      id: 3,
      invoice: 'INV-2026-003',
      client: 'HBO',
      project: 'Documentary',
      amount: '$68,000',
      status: 'pending',
      date: '2026-02-10',
    },
    {
      id: 4,
      invoice: 'INV-2026-004',
      client: 'Warner Bros',
      project: 'Promo Video',
      amount: '$28,000',
      status: 'pending',
      date: '2026-02-10',
    },
  ];

  const stats = [
    { label: 'Total Revenue', value: '$173,000', color: '#d4a574' },
    { label: 'Paid', value: '$77,000', color: '#5d6b4d' },
    { label: 'Pending', value: '$96,000', color: '#c17043' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl mb-2" style={{ fontFamily: 'var(--font-cinematic)' }}>
          Payments
        </h1>
        <p className="text-[#6b5d54]">Track invoices and payment status</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-sm shadow-sm border-l-4"
            style={{ borderColor: stat.color }}
          >
            <p className="text-[#6b5d54] mb-2">{stat.label}</p>
            <p className="text-3xl" style={{ fontFamily: 'var(--font-cinematic)' }}>
              {stat.value}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Search */}
      <div className="mb-6 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6b5d54]" size={20} />
        <input
          type="text"
          placeholder="Search invoices..."
          className="w-full pl-10 pr-4 py-3 bg-white border border-[#e8dcd1] rounded-sm focus:outline-none focus:ring-2 focus:ring-[#d4a574]"
        />
      </div>

      {/* Payments Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-sm shadow-sm overflow-hidden"
      >
        <table className="w-full">
          <thead className="bg-[#f3ece5]">
            <tr>
              <th className="px-6 py-4 text-left">Invoice</th>
              <th className="px-6 py-4 text-left">Client</th>
              <th className="px-6 py-4 text-left">Project</th>
              <th className="px-6 py-4 text-left">Amount</th>
              <th className="px-6 py-4 text-left">Date</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <motion.tr
                key={payment.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="border-b border-[#e8dcd1] hover:bg-[#f9f5f3] transition-colors"
              >
                <td className="px-6 py-4">
                  <span style={{ fontFamily: 'var(--font-cinematic)' }}>{payment.invoice}</span>
                </td>
                <td className="px-6 py-4 text-[#6b5d54]">{payment.client}</td>
                <td className="px-6 py-4 text-[#6b5d54]">{payment.project}</td>
                <td className="px-6 py-4">
                  <span style={{ fontFamily: 'var(--font-cinematic)' }}>{payment.amount}</span>
                </td>
                <td className="px-6 py-4 text-[#6b5d54]">{payment.date}</td>
                <td className="px-6 py-4">
                  <span
                    className={`flex items-center space-x-1 px-3 py-1 rounded-sm text-sm w-fit ${
                      payment.status === 'paid'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {payment.status === 'paid' ? <Check size={14} /> : <Clock size={14} />}
                    <span className="capitalize">{payment.status}</span>
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="flex items-center space-x-1 text-[#d4a574] hover:text-[#c17043]">
                    <Download size={16} />
                    <span className="text-sm">Download</span>
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
}

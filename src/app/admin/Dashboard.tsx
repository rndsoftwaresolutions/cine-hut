import { motion } from 'motion/react';
import {
  TrendingUp,
  FolderOpen,
  Users,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Dashboard() {
  const stats = [
    {
      label: 'Total Revenue',
      value: '$245,800',
      change: '+12.5%',
      positive: true,
      icon: DollarSign,
      color: '#d4a574',
    },
    {
      label: 'Active Projects',
      value: '18',
      change: '+3',
      positive: true,
      icon: FolderOpen,
      color: '#c17043',
    },
    {
      label: 'Total Clients',
      value: '42',
      change: '+8',
      positive: true,
      icon: Users,
      color: '#5d6b4d',
    },
    {
      label: 'Pending Leads',
      value: '12',
      change: '-2',
      positive: false,
      icon: TrendingUp,
      color: '#8b4f47',
    },
  ];

  const revenueData = [
    { month: 'Jan', revenue: 18000 },
    { month: 'Feb', revenue: 22000 },
    { month: 'Mar', revenue: 19000 },
    { month: 'Apr', revenue: 25000 },
    { month: 'May', revenue: 28000 },
    { month: 'Jun', revenue: 31000 },
  ];

  const projectsData = [
    { month: 'Jan', completed: 8, ongoing: 5 },
    { month: 'Feb', completed: 6, ongoing: 7 },
    { month: 'Mar', completed: 10, ongoing: 6 },
    { month: 'Apr', completed: 9, ongoing: 8 },
    { month: 'May', completed: 7, ongoing: 9 },
    { month: 'Jun', completed: 11, ongoing: 7 },
  ];

  const recentProjects = [
    { name: 'Netflix Brand Film', client: 'Netflix', status: 'In Progress', progress: 75 },
    { name: 'Sony Commercial', client: 'Sony', status: 'Review', progress: 90 },
    { name: 'HBO Documentary', client: 'HBO', status: 'In Progress', progress: 45 },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl mb-2" style={{ fontFamily: 'var(--font-cinematic)' }}>
          Dashboard
        </h1>
        <p className="text-[#6b5d54]">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="bg-white p-6 rounded-sm shadow-sm hover:shadow-md transition-all duration-300 border-l-4"
            style={{ borderColor: stat.color }}
          >
            <div className="flex items-start justify-between mb-4">
              <div
                className="w-12 h-12 rounded-sm flex items-center justify-center"
                style={{ backgroundColor: `${stat.color}20` }}
              >
                <stat.icon style={{ color: stat.color }} size={24} />
              </div>
              <div className={`flex items-center space-x-1 text-sm ${stat.positive ? 'text-green-600' : 'text-red-600'}`}>
                {stat.positive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                <span>{stat.change}</span>
              </div>
            </div>
            <div>
              <p className="text-[#6b5d54] text-sm mb-1">{stat.label}</p>
              <p className="text-3xl" style={{ fontFamily: 'var(--font-cinematic)' }}>
                {stat.value}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white p-6 rounded-sm shadow-sm"
        >
          <h2 className="text-2xl mb-6" style={{ fontFamily: 'var(--font-cinematic)' }}>
            Revenue Trend
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e8dcd1" />
              <XAxis dataKey="month" stroke="#6b5d54" />
              <YAxis stroke="#6b5d54" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#f9f5f3',
                  border: '1px solid #e8dcd1',
                  borderRadius: '4px',
                }}
              />
              <Line type="monotone" dataKey="revenue" stroke="#d4a574" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white p-6 rounded-sm shadow-sm"
        >
          <h2 className="text-2xl mb-6" style={{ fontFamily: 'var(--font-cinematic)' }}>
            Projects Overview
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={projectsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e8dcd1" />
              <XAxis dataKey="month" stroke="#6b5d54" />
              <YAxis stroke="#6b5d54" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#f9f5f3',
                  border: '1px solid #e8dcd1',
                  borderRadius: '4px',
                }}
              />
              <Bar dataKey="completed" fill="#d4a574" />
              <Bar dataKey="ongoing" fill="#c17043" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Recent Projects */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white p-6 rounded-sm shadow-sm"
      >
        <h2 className="text-2xl mb-6" style={{ fontFamily: 'var(--font-cinematic)' }}>
          Recent Projects
        </h2>
        <div className="space-y-4">
          {recentProjects.map((project, index) => (
            <div key={index} className="p-4 bg-[#f9f5f3] rounded-sm">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="text-lg" style={{ fontFamily: 'var(--font-cinematic)' }}>
                    {project.name}
                  </h3>
                  <p className="text-sm text-[#6b5d54]">{project.client}</p>
                </div>
                <span className="px-3 py-1 bg-[#d4a574] text-[#2d2621] rounded-sm text-sm">
                  {project.status}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-1 bg-[#e8dcd1] rounded-full h-2">
                  <div
                    className="bg-[#d4a574] h-full rounded-full transition-all duration-500"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
                <span className="text-sm text-[#6b5d54]">{project.progress}%</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

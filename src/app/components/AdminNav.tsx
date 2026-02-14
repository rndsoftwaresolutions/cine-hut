import { Link, useLocation } from 'react-router';
import { motion } from 'motion/react';
import {
  LayoutDashboard,
  FolderOpen,
  Users,
  DollarSign,
  FileText,
  Briefcase,
  Settings,
  LogOut,
  Film,
} from 'lucide-react';

export function AdminNav() {
  const location = useLocation();

  const navItems = [
    { path: '/admin', icon: LayoutDashboard, label: 'Dashboard', exact: true },
    { path: '/admin/projects', icon: FolderOpen, label: 'Projects' },
    { path: '/admin/clients', icon: Users, label: 'Clients' },
    { path: '/admin/payments', icon: DollarSign, label: 'Payments' },
    { path: '/admin/content', icon: FileText, label: 'Content' },
    { path: '/admin/career', icon: Briefcase, label: 'Career Apps' },
    { path: '/admin/settings', icon: Settings, label: 'Settings' },
  ];

  const isActive = (path: string, exact?: boolean) => {
    if (exact) {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="w-64 h-screen bg-[#f3ece5] border-r border-[#e8dcd1] fixed left-0 top-0 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-[#e8dcd1]">
        <Link to="/" className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-[#d4a574] rounded-sm flex items-center justify-center">
            <Film className="text-[#2d2621]" size={24} />
          </div>
          <div>
            <h1 className="text-xl font-bold" style={{ fontFamily: 'var(--font-cinematic)' }}>
              CINE HUT
            </h1>
            <p className="text-xs text-[#6b5d54]">Admin Panel</p>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path, item.exact);

            return (
              <Link
                key={item.path}
                to={item.path}
                className="relative"
              >
                <motion.div
                  whileHover={{ x: 4 }}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-sm transition-colors ${
                    active
                      ? 'bg-[#d4a574] text-[#2d2621]'
                      : 'text-[#6b5d54] hover:bg-[#e8dcd1]'
                  }`}
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-[#e8dcd1]">
        <button className="w-full flex items-center space-x-3 px-4 py-3 text-[#6b5d54] hover:bg-[#e8dcd1] rounded-sm transition-colors">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}

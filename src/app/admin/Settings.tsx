import { motion } from 'motion/react';
import { Save, Building, Mail, Shield, Bell, User } from 'lucide-react';

export default function Settings() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl mb-2" style={{ fontFamily: 'var(--font-cinematic)' }}>
          Settings
        </h1>
        <p className="text-[#6b5d54]">Manage your account and application settings</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Settings Menu */}
        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-sm shadow-sm p-4"
          >
            <nav className="space-y-1">
              {[
                { icon: Building, label: 'Company Details', active: true },
                { icon: User, label: 'Profile', active: false },
                { icon: Mail, label: 'Email Settings', active: false },
                { icon: Shield, label: 'Security', active: false },
                { icon: Bell, label: 'Notifications', active: false },
              ].map((item, index) => (
                <button
                  key={index}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-sm transition-colors ${
                    item.active
                      ? 'bg-[#d4a574] text-[#2d2621]'
                      : 'text-[#6b5d54] hover:bg-[#f3ece5]'
                  }`}
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </motion.div>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-sm shadow-sm p-8"
          >
            <h2 className="text-2xl mb-6" style={{ fontFamily: 'var(--font-cinematic)' }}>
              Company Details
            </h2>

            <form className="space-y-6">
              <div>
                <label htmlFor="companyName" className="block mb-2 text-[#2d2621]">
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  defaultValue="CINE HUT"
                  className="w-full px-4 py-3 bg-[#f9f5f3] border border-[#e8dcd1] rounded-sm focus:outline-none focus:ring-2 focus:ring-[#d4a574]"
                />
              </div>

              <div>
                <label htmlFor="tagline" className="block mb-2 text-[#2d2621]">
                  Tagline
                </label>
                <input
                  type="text"
                  id="tagline"
                  defaultValue="Film Production & Creative Studio"
                  className="w-full px-4 py-3 bg-[#f9f5f3] border border-[#e8dcd1] rounded-sm focus:outline-none focus:ring-2 focus:ring-[#d4a574]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-[#2d2621]">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  defaultValue="hello@cinehut.com"
                  className="w-full px-4 py-3 bg-[#f9f5f3] border border-[#e8dcd1] rounded-sm focus:outline-none focus:ring-2 focus:ring-[#d4a574]"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block mb-2 text-[#2d2621]">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  defaultValue="+1 (555) 123-4567"
                  className="w-full px-4 py-3 bg-[#f9f5f3] border border-[#e8dcd1] rounded-sm focus:outline-none focus:ring-2 focus:ring-[#d4a574]"
                />
              </div>

              <div>
                <label htmlFor="address" className="block mb-2 text-[#2d2621]">
                  Address
                </label>
                <textarea
                  id="address"
                  rows={3}
                  defaultValue="123 Film Street, Creative District, City, State 12345"
                  className="w-full px-4 py-3 bg-[#f9f5f3] border border-[#e8dcd1] rounded-sm focus:outline-none focus:ring-2 focus:ring-[#d4a574] resize-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="founder" className="block mb-2 text-[#2d2621]">
                    Founder
                  </label>
                  <input
                    type="text"
                    id="founder"
                    defaultValue="Alex Morgan"
                    className="w-full px-4 py-3 bg-[#f9f5f3] border border-[#e8dcd1] rounded-sm focus:outline-none focus:ring-2 focus:ring-[#d4a574]"
                  />
                </div>

                <div>
                  <label htmlFor="founded" className="block mb-2 text-[#2d2621]">
                    Founded Year
                  </label>
                  <input
                    type="text"
                    id="founded"
                    defaultValue="2015"
                    className="w-full px-4 py-3 bg-[#f9f5f3] border border-[#e8dcd1] rounded-sm focus:outline-none focus:ring-2 focus:ring-[#d4a574]"
                  />
                </div>
              </div>

              <div className="flex justify-end pt-6">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="flex items-center space-x-2 px-8 py-3 bg-[#d4a574] text-[#2d2621] rounded-sm hover:bg-[#c17043] transition-colors shadow-md"
                >
                  <Save size={20} />
                  <span>Save Changes</span>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

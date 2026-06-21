import { motion } from 'motion/react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import { Users, BarChart3, Settings, Shield } from 'lucide-react';

export default function Admin() {
  const { user, isAdmin } = useAuth();

  // Redirect if not logged in or not admin
  if (!user || (!isAdmin && user.role !== 'admin')) {
    // Note: Usually you might want to show a 403 or redirect to dashboard
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="flex flex-col w-full py-10 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-display font-bold mb-2 flex items-center">
              <Shield className="w-8 h-8 text-brand-gold mr-3" />
              Admin Portal
            </h1>
            <p className="text-gray-400">Manage users, signals, and platform settings.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          {[
            { title: "Total Users", value: "10,245", icon: Users },
            { title: "Active VIPs", value: "1,832", icon: Shield },
            { title: "Signals Today", value: "12", icon: BarChart3 },
            { title: "System Status", value: "Online", icon: Settings },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-6 rounded-xl"
            >
              <div className="flex justify-between items-start mb-4">
                <p className="text-sm text-gray-400 font-medium">{stat.title}</p>
                <stat.icon className="w-5 h-5 text-gray-500" />
              </div>
              <h3 className="text-2xl font-bold">{stat.value}</h3>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-panel p-6 rounded-2xl"
          >
            <h2 className="text-xl font-bold mb-6">Quick Actions</h2>
            <div className="space-y-4">
              <button className="w-full text-left p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-between">
                <span className="font-medium">Post New Signal</span>
                <span className="text-xs bg-brand-blue/20 text-brand-blue px-2 py-1 rounded">Action</span>
              </button>
              <button className="w-full text-left p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-between">
                <span className="font-medium">Publish Blog Article</span>
                <span className="text-xs bg-brand-blue/20 text-brand-blue px-2 py-1 rounded">Action</span>
              </button>
              <button className="w-full text-left p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-between">
                <span className="font-medium">Manage Academy Courses</span>
                <span className="text-xs bg-brand-blue/20 text-brand-blue px-2 py-1 rounded">Action</span>
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass-panel p-6 rounded-2xl"
          >
            <h2 className="text-xl font-bold mb-6">Recent User Activity</h2>
            <div className="space-y-4">
              {[1,2,3,4].map((_, i) => (
                <div key={i} className="flex justify-between items-center py-3 border-b border-white/5 last:border-0 last:pb-0">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-white/10" />
                    <div>
                      <p className="text-sm font-medium">New Registration</p>
                      <p className="text-xs text-gray-500">user_{1000 + i}@gmail.com</p>
                    </div>
                  </div>
                  <span className="text-xs text-brand-blue">{i * 15} mins ago</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
}

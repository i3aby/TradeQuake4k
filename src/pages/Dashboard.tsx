import { motion } from 'motion/react';
import { useAuth } from '../context/AuthContext';
import { Navigate, Link } from 'react-router-dom';
import { ShieldAlert, User, BookOpen, Crown, Send, Bell } from 'lucide-react';

export default function Dashboard() {
  const { user, isAuthenticated, isVip } = useAuth();

  if (!isAuthenticated || !user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="flex flex-col w-full py-10 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">Welcome back, {user.name}</h1>
            <p className="text-gray-400">Here's your trading overview and academy progress.</p>
          </div>
          <div className="mt-6 md:mt-0 flex gap-4">
            <Link to="/vip" className="px-5 py-2.5 rounded-lg bg-brand-gold text-brand-black font-semibold hover:bg-yellow-400 transition-colors flex items-center">
              <Crown className="w-4 h-4 mr-2" /> Upgrade Plan
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* VIP Status Panel */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-panel p-6 md:p-8 rounded-2xl relative overflow-hidden"
            >
              {isVip ? (
                <>
                  <div className="absolute top-0 right-0 p-6 opacity-10">
                    <Crown className="w-32 h-32 text-brand-gold" />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center">
                        <Crown className="w-5 h-5 text-brand-gold" />
                      </div>
                      <h3 className="text-xl font-bold text-brand-gold">VIP Active</h3>
                    </div>
                    <p className="text-gray-300 mb-6 max-w-lg">You have full access to premium signals, mentorship, and advanced educational content.</p>
                    <a href="https://t.me/Tradeqauke/4" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-brand-blue/10 text-brand-blue rounded-lg hover:bg-brand-blue/20 transition-colors font-medium">
                      <Send className="w-4 h-4 mr-2" /> Access VIP Channel
                    </a>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                      <ShieldAlert className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">VIP Membership Required</h3>
                      <p className="text-gray-400 mb-6 font-medium">You need an active VIP subscription to access live signals and premium content.</p>
                      <div className="flex flex-wrap gap-4">
                        <Link to="/vip" className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors">
                          View Plans
                        </Link>
                        <a href="https://t.me/moneykickz" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-lg bg-brand-blue text-brand-black hover:bg-blue-400 font-semibold transition-colors flex items-center">
                          Contact Admin
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </motion.div>

            {/* Academy Progress */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-panel p-6 md:p-8 rounded-2xl"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold flex items-center">
                  <BookOpen className="w-5 h-5 mr-3 text-brand-blue" />
                  Learning Progress
                </h3>
                <Link to="/academy" className="text-sm text-brand-blue hover:text-blue-400">Go to Academy</Link>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-white">Beginner Course</span>
                    <span className="text-brand-blue">45%</span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-2">
                    <div className="bg-brand-blue h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-gray-400">Intermediate Course</span>
                    <span className="text-gray-500">0%</span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-2">
                    <div className="bg-brand-blue/30 h-2 rounded-full" style={{ width: '0%' }}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            
            {/* Profile Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-panel p-6 rounded-2xl"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-brand-blue/20 flex items-center justify-center border-2 border-brand-blue/30">
                  <User className="w-8 h-8 text-brand-blue" />
                </div>
                <div>
                  <h4 className="font-bold">{user.name}</h4>
                  <p className="text-sm text-gray-400">{user.email}</p>
                  <span className="inline-block mt-1 px-2 py-0.5 rounded text-[10px] uppercase font-bold bg-white/10 text-gray-300">
                    {user.role} plan
                  </span>
                </div>
              </div>
              <div className="pt-4 border-t border-white/5 space-y-3">
                <button className="w-full text-left px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded transition-colors">Account Settings</button>
                <button className="w-full text-left px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded transition-colors">Notification Preferences</button>
                <a
                  href="https://www.instagram.com/tradequake4k?igsh=MTZjZ285aXp5cnd0Ng%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center px-3 py-2 text-sm text-gray-400 hover:text-pink-500 hover:bg-pink-500/10 rounded transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                  Follow on Instagram
                </a>
              </div>
            </motion.div>

            {/* Signal Notifications */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-panel p-6 rounded-2xl"
            >
              <h3 className="font-bold flex items-center mb-4">
                <Bell className="w-4 h-4 mr-2 text-brand-gold" />
                Recent Alerts
              </h3>
              {isVip ? (
                  <div className="space-y-4">
                   {[
                     { pair: 'EUR/USD OTC', action: 'CALL', time: '10 mins ago', success: true },
                     { pair: 'GBP/JPY', action: 'PUT', time: '1 hour ago', success: true },
                     { pair: 'AUD/USD', action: 'CALL', time: '3 hours ago', success: false },
                   ].map((signal, i) => (
                     <div key={i} className={`flex items-center justify-between p-3 bg-white/5 rounded-lg border-l-2 ${signal.action === 'CALL' ? 'border-[#00BFFF]' : 'border-[#FFD700]'}`}>
                        <div>
                          <div className="text-xs font-bold">{signal.pair}</div>
                          <div className="text-[10px] opacity-40 uppercase">{signal.time}</div>
                        </div>
                        <div className="text-right">
                          <div className={`text-xs font-bold ${signal.action === 'CALL' ? 'signal-win' : 'signal-lose'}`}>
                            {signal.action} {signal.action === 'CALL' ? '▲' : '▼'}
                          </div>
                          <div className="text-[10px] opacity-40 uppercase">
                            {signal.success ? 'Success 92%' : 'Failed'}
                          </div>
                        </div>
                     </div>
                   ))}
                 </div>
              ) : (
                <div className="text-center py-6">
                  <p className="text-sm text-gray-500 mb-3">VIP access required to view recent signals.</p>
                  <Link to="/vip" className="text-sm text-brand-blue hover:text-blue-400 font-medium">Upgrade now</Link>
                </div>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}

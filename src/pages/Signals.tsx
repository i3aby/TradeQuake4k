import { motion } from 'motion/react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Target, CheckCircle2, TrendingUp, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const data = [
  { name: 'Week 1', winRate: 82, signals: 45 },
  { name: 'Week 2', winRate: 85, signals: 52 },
  { name: 'Week 3', winRate: 81, signals: 48 },
  { name: 'Week 4', winRate: 88, signals: 55 },
  { name: 'Week 5', winRate: 86, signals: 50 },
  { name: 'Week 6', winRate: 89, signals: 58 },
];

export default function Signals() {
  return (
    <div className="flex flex-col w-full py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Signal <span className="text-gradient">Performance</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400"
          >
            Transparency is our priority. View our historical signal performance and monthly analytics.
          </motion.p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: "Overall Win Rate", value: "85.4%", icon: Target },
            { label: "Total Signals (30d)", value: "215", icon: BarChart },
            { label: "Profitable Days", value: "26/30", icon: CheckCircle2 },
            { label: "Avg. ROI per Trade", value: "+82%", icon: TrendingUp },
          ].map((stat, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 + (i * 0.1) }}
               className="glass-panel p-6 rounded-xl flex items-center space-x-4"
             >
               <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0">
                 <stat.icon className="w-5 h-5 text-brand-blue" />
               </div>
               <div>
                 <p className="text-xs text-gray-400 font-medium mb-1">{stat.label}</p>
                 <p className="text-xl font-bold">{stat.value}</p>
               </div>
             </motion.div>
          ))}
        </div>

        {/* Chart Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-panel p-6 md:p-8 rounded-2xl mb-16"
        >
          <h3 className="text-2xl font-bold mb-8">Win Rate Trend (Last 6 Weeks)</h3>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorWinRate" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00BFFF" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#00BFFF" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="#666" tick={{ fill: '#888' }} />
                <YAxis domain={['dataMin - 5', 'dataMax + 5']} stroke="#666" tick={{ fill: '#888' }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1A1A1A', borderColor: '#333', borderRadius: '8px' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area type="monotone" dataKey="winRate" stroke="#00BFFF" strokeWidth={3} fillOpacity={1} fill="url(#colorWinRate)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <div className="text-center">
          <Link to="/vip" className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-brand-blue text-brand-black font-semibold text-lg hover:bg-blue-400 transition-all shadow-[0_0_20px_rgba(0,191,255,0.3)]">
            Access Premium Signals
          </Link>
        </div>

      </div>
    </div>
  );
}

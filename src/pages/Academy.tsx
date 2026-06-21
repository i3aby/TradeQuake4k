import { motion } from 'motion/react';
import { BookOpen, Award, TrendingUp, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Academy() {
  return (
    <div className="flex flex-col w-full py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Quake Trade <span className="text-gradient">Academy</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400"
          >
            From basics to advanced price action. Master the markets with our comprehensive trading education.
          </motion.p>
        </div>

        {/* Features Row */}
        <div className="flex flex-wrap justify-center gap-6 mb-20 text-sm font-medium text-gray-300">
          <span className="flex items-center"><Award className="w-4 h-4 mr-2 text-brand-blue" /> Certificates</span>
          <span className="flex items-center"><PlayCircle className="w-4 h-4 mr-2 text-brand-blue" /> Video Lessons</span>
          <span className="flex items-center"><TrendingUp className="w-4 h-4 mr-2 text-brand-blue" /> Progress Tracking</span>
          <span className="flex items-center"><BookOpen className="w-4 h-4 mr-2 text-brand-blue" /> Student Dashboard</span>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Beginner Course */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-panel p-8 rounded-2xl flex flex-col"
          >
            <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6">
              <span className="text-xl font-bold">1</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Beginner Course</h3>
            <p className="text-sm text-gray-400 mb-6 flex-grow">Perfect for complete beginners. Learn the absolute fundamentals of trading.</p>
            
            <ul className="space-y-3 mb-8">
              {['Trading Basics', 'Platform Setup', 'Candlestick Patterns'].map((item, i) => (
                <li key={i} className="flex items-center text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mr-3" />
                  {item}
                </li>
              ))}
            </ul>
            
            <Link to="/login" className="w-full py-3 rounded-lg bg-white/5 hover:bg-white/10 text-center font-medium transition-colors">
              Start Learning
            </Link>
          </motion.div>

          {/* Intermediate Course */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-panel border-brand-blue/30 relative p-8 rounded-2xl flex flex-col transform md:-translate-y-4 shadow-[0_0_30px_rgba(0,191,255,0.15)]"
          >
            <div className="absolute top-0 right-0 px-3 py-1 bg-brand-blue text-brand-black text-xs font-bold rounded-bl-lg rounded-tr-2xl">
              POPULAR
            </div>
            <div className="w-12 h-12 rounded-lg bg-brand-blue/10 flex items-center justify-center mb-6">
              <span className="text-xl font-bold text-brand-blue">2</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Intermediate Course</h3>
            <p className="text-sm text-gray-400 mb-6 flex-grow">Elevate your strategy. Understand market dynamics and manage your risk effectively.</p>
            
            <ul className="space-y-3 mb-8">
              {['Support & Resistance', 'Trend Analysis', 'Risk Management'].map((item, i) => (
                <li key={i} className="flex items-center text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mr-3" />
                  {item}
                </li>
              ))}
            </ul>
            
            <Link to="/login" className="w-full py-3 rounded-lg bg-brand-blue text-brand-black hover:bg-blue-400 text-center font-semibold transition-colors">
              Start Learning
            </Link>
          </motion.div>

          {/* Advanced Course */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-panel p-8 rounded-2xl flex flex-col"
          >
            <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6">
              <span className="text-xl font-bold">3</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Advanced Course</h3>
            <p className="text-sm text-gray-400 mb-6 flex-grow">Master institutional concepts and precision entries for maximum profitability.</p>
            
            <ul className="space-y-3 mb-8">
              {['Price Action', 'Market Structure', 'Advanced Concepts'].map((item, i) => (
                <li key={i} className="flex items-center text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mr-3" />
                  {item}
                </li>
              ))}
            </ul>
            
            <Link to="/login" className="w-full py-3 rounded-lg bg-white/5 hover:bg-white/10 text-center font-medium transition-colors">
              Start Learning
            </Link>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

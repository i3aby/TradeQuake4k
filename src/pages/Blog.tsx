import { motion } from 'motion/react';
import { ArrowRight, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    title: '5 Habits of Highly Successful Traders',
    category: 'Trading Psychology',
    excerpt: 'Discover the routine and mindset that separates professional traders from the rest. It is not just about strategy, it is about discipline.',
    date: 'Jun 12, 2026',
    author: 'Quake Trade Team',
    readTime: '4 min read'
  },
  {
    title: 'Understanding Quotex Market Geometry',
    category: 'Market Analysis',
    excerpt: 'A deep dive into structural patterns and how market geometry can predict the next major move with high precision.',
    date: 'May 08, 2026',
    author: 'Quake Trade Admin',
    readTime: '7 min read'
  },
  {
    title: 'Risk Management Strategy 101',
    category: 'Trading Guides',
    excerpt: 'If you want to survive the markets, you need to manage your capital. Here is the framework we use to protect our portfolios.',
    date: 'Apr 29, 2026',
    author: 'Quake Trade Mentor',
    readTime: '5 min read'
  }
];

export default function Blog() {
  return (
    <div className="flex flex-col w-full py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Quake Trade <span className="text-gradient">Insights</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400"
          >
            Trading guides, market analysis, strategy articles, and psychological content to keep you sharp.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <motion.article 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (i * 0.1) }}
              className="glass-panel p-6 rounded-2xl flex flex-col group cursor-pointer"
            >
              <div className="mb-4">
                <span className="text-xs font-bold px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full">
                  {post.category}
                </span>
              </div>
              <h2 className="text-2xl font-bold mb-3 group-hover:text-brand-blue transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                <div className="flex flex-col space-y-1">
                  <div className="flex items-center text-xs text-gray-400">
                    <User className="w-3 h-3 mr-1" /> {post.author}
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <Clock className="w-3 h-3 mr-1" /> {post.date} · {post.readTime}
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-blue group-hover:text-brand-black transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}

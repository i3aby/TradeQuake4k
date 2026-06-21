import { motion } from 'motion/react';
import { ArrowRight, BarChart2, Shield, Users, Zap, PlayCircle, Star, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
              <span>Premium Quotex Signals</span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-8"
          >
            Trade Smarter with <br className="hidden md:block" />
            <span className="text-gradient">Quake Trade</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Get high-quality Quotex trading signals, expert market analysis, trading education, mentorship, and access to a growing trading community.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <a
              href="https://t.me/Tradeqauke/4"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl btn-primary text-black font-bold uppercase tracking-wide flex items-center justify-center group"
            >
              Join Community
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              to="/academy"
              className="w-full sm:w-auto px-8 py-4 rounded-xl btn-outline font-bold uppercase tracking-wide flex items-center justify-center group"
            >
              Start Learning
              <PlayCircle className="ml-2 w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-bg-secondary border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center">
            {[
              { label: "Community Members", value: "10,000+", icon: Users },
              { label: "Signal Accuracy", value: "85%+", icon: BarChart2 },
              { label: "Students Trained", value: "5,000+", icon: Shield },
              { label: "Support Given", value: "24/7", icon: Zap },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center p-6 glass-panel rounded-2xl relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <stat.icon className="w-8 h-8 text-brand-blue mb-4" />
                <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-sm text-gray-400 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Our Services</h2>
            <p className="text-gray-400">Comprehensive resources, precision signals, and expert mentorship to elevate your trading game.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Quotex Signals",
                desc: "Real-Time Signals, Market Direction Analysis, Trend Confirmation, Signal Explanations",
                icon: BarChart2
              },
              {
                title: "Trading Education",
                desc: "Beginner to Advanced Learning, Risk Management, Technical Analysis, Psychology",
                icon: PlayCircle
              },
              {
                title: "Mentorship",
                desc: "Live Sessions, Trade Reviews, Personal Guidance, Strategy Development",
                icon: Shield
              },
              {
                title: "Community",
                desc: "Telegram Access, Daily Updates, Market Discussions, Member Support",
                icon: Users
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-panel p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-brand-blue/10 flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-brand-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials (Simple) */}
      <section className="py-24 bg-bg-secondary border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Success Stories</h2>
            <p className="text-gray-400">See what our community members are saying.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Tariq K.", text: "Quake Trade signals completely changed my Quotex game. The precision is unmatched." },
              { name: "Maryam K.", text: "The educational content is pure gold. I finally understand market structure." },
              { name: "Tayyab K.", text: "Best community in trading. The mentors actually care about your success." }
            ].map((testimony, i) => (
              <div key={i} className="glass-panel p-8 rounded-2xl relative">
                <div className="flex text-brand-gold mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimony.text}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-brand-blue/20 flex items-center justify-center text-brand-blue font-bold">
                    {testimony.name.charAt(0)}
                  </div>
                  <span className="ml-3 font-medium">{testimony.name}</span>
                  <CheckCircle2 className="w-4 h-4 ml-2 text-brand-blue" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

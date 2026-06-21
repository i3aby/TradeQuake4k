import { motion } from 'motion/react';
import { Shield, Zap, Crown, Check } from 'lucide-react';
import React, { useState } from 'react';

export default function VipPlans() {
  const [showPopup, setShowPopup] = useState(false);

  const handleBuyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const proceedToTelegram = () => {
    setShowPopup(false);
    window.location.href = "https://t.me/moneykickz";
  };

  return (
    <div className="flex flex-col w-full py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            VIP <span className="text-gradient">Membership</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400 mb-8"
          >
            Gain exclusive access to our premium signals, advanced education, and direct 1-on-1 mentorship.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block bg-brand-gold/10 border border-brand-gold/20 text-brand-gold px-6 py-3 rounded-full font-medium"
          >
            To activate your membership, contact the official Quake Trade administrator on Telegram.
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Starter Plan */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-panel p-8 rounded-2xl flex flex-col relative"
          >
            <div className="mb-6 flex items-center">
              <Shield className="w-8 h-8 text-gray-400 mr-3" />
              <h3 className="text-2xl font-bold">Starter</h3>
            </div>
            <p className="text-gray-400 mb-6 text-sm">Perfect for those getting started with trading signals.</p>
            
            <ul className="space-y-4 mb-8 flex-grow">
              {['Daily Signals', 'Community Access', 'Market Updates'].map((item, i) => (
                <li key={i} className="flex items-start text-sm text-gray-300">
                  <Check className="w-5 h-5 text-gray-400 mr-3 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            
            <button 
              onClick={handleBuyClick}
              className="w-full py-4 rounded-lg bg-white/5 hover:bg-white/10 text-center font-medium transition-colors"
            >
              Buy Now
            </button>
          </motion.div>

          {/* Pro Plan */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-panel border-brand-blue/30 p-8 rounded-2xl flex flex-col relative transform md:-translate-y-4 shadow-[0_0_30px_rgba(0,191,255,0.15)] bg-gradient-to-b from-brand-blue/5 to-transparent"
          >
            <div className="absolute top-0 right-0 px-3 py-1 bg-brand-blue text-brand-black text-xs font-bold rounded-bl-lg rounded-tr-2xl">
              RECOMMENDED
            </div>
            <div className="mb-6 flex items-center">
              <Zap className="w-8 h-8 text-brand-blue mr-3" />
              <h3 className="text-2xl font-bold">Pro</h3>
            </div>
            <p className="text-gray-400 mb-6 text-sm">For serious traders wanting educational material and mentoring.</p>
            
            <ul className="space-y-4 mb-8 flex-grow">
              {['Premium Signals', 'Educational Content', 'Weekly Mentorship', 'Community Access'].map((item, i) => (
                <li key={i} className="flex items-start text-sm text-gray-300">
                  <Check className="w-5 h-5 text-brand-blue mr-3 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            
            <button 
              onClick={handleBuyClick}
              className="w-full py-4 rounded-lg bg-brand-blue text-brand-black hover:bg-blue-400 text-center font-semibold transition-all shadow-lg"
            >
              Buy Now
            </button>
          </motion.div>

          {/* Elite Plan */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass-panel border-brand-gold/20 p-8 rounded-2xl flex flex-col relative bg-gradient-to-b from-brand-gold/5 to-transparent"
          >
            <div className="mb-6 flex items-center">
              <Crown className="w-8 h-8 text-brand-gold mr-3" />
              <h3 className="text-2xl font-bold">Elite</h3>
            </div>
            <p className="text-gray-400 mb-6 text-sm">The ultimate package for those aiming for professional mastery.</p>
            
            <ul className="space-y-4 mb-8 flex-grow">
              {['VIP Signals', 'Advanced Strategies', 'Priority Support', 'One-on-One Guidance'].map((item, i) => (
                <li key={i} className="flex items-start text-sm text-gray-300">
                  <Check className="w-5 h-5 text-brand-gold mr-3 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            
            <button 
              onClick={handleBuyClick}
              className="w-full py-4 rounded-lg bg-brand-gold/10 text-brand-gold hover:bg-brand-gold/20 border border-brand-gold/30 text-center font-medium transition-colors"
            >
              Buy Now
            </button>
          </motion.div>

        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-brand-black border border-white/10 p-8 rounded-2xl shadow-2xl max-w-md w-full text-center relative"
          >
            <div className="w-16 h-16 bg-brand-blue/10 text-brand-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4 font-display">Activating Membership</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              To activate your membership and receive VIP access, contact the official Quake Trade administrator on Telegram.
            </p>
            <div className="flex flex-col space-y-3">
              <button 
                onClick={proceedToTelegram}
                className="w-full py-3 rounded-lg bg-brand-blue text-brand-black font-semibold hover:bg-blue-400 transition-colors"
              >
                Continue to Telegram
              </button>
              <button 
                onClick={() => setShowPopup(false)}
                className="w-full py-3 rounded-lg bg-white/5 hover:bg-white/10 text-white font-medium transition-colors"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </div>
      )}

    </div>
  );
}

import { motion } from 'motion/react';
import { Send, MessageSquare } from 'lucide-react';
import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telegram: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Normally would submit to backend.
    alert('Message sent! Our admin will reach out on Telegram.');
    setFormData({ name: '', email: '', telegram: '', message: '' });
  };

  return (
    <div className="flex flex-col w-full py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row gap-16">
        
        <div className="flex-1 lg:pr-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Have questions about our signals, mentorship, or VIP plans? Reach out to us. For the fastest response, message the admin directly on Telegram or join our free community.
            </p>

            <div className="flex flex-col space-y-4 mb-12">
              <a 
                href="https://t.me/moneykickz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 rounded-xl glass-panel glass-panel-hover"
              >
                <div className="w-12 h-12 rounded-full bg-brand-blue/20 flex items-center justify-center mr-4">
                  <Send className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Contact Admin</h4>
                  <p className="text-sm text-gray-400">@moneykickz on Telegram</p>
                </div>
              </a>

              <a 
                href="https://t.me/Tradeqauke/4" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 rounded-xl glass-panel glass-panel-hover"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mr-4">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Join Community</h4>
                  <p className="text-sm text-gray-400">Free Daily Updates & Discussions</p>
                </div>
              </a>

              <a 
                href="https://www.instagram.com/tradequake4k?igsh=MTZjZ285aXp5cnd0Ng%3D%3D&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 rounded-xl glass-panel glass-panel-hover group"
              >
                <div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center mr-4 group-hover:bg-pink-500/20 transition-colors">
                  <svg className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-white">Instagram</h4>
                  <p className="text-sm text-gray-400">@tradequake4k</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex-1"
        >
          <form onSubmit={handleSubmit} className="glass-panel p-8 rounded-2xl flex flex-col space-y-6">
            <h3 className="text-2xl font-bold font-display mb-2">Send a Message</h3>
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
              <input 
                id="name"
                type="text" 
                required
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                className="w-full bg-brand-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
              <input 
                id="email"
                type="email" 
                required
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                className="w-full bg-brand-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="telegram" className="block text-sm font-medium text-gray-400 mb-2">Telegram Username</label>
              <input 
                id="telegram"
                type="text" 
                required
                value={formData.telegram}
                onChange={e => setFormData({...formData, telegram: e.target.value})}
                className="w-full bg-brand-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors"
                placeholder="@username"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
              <textarea 
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
                className="w-full bg-brand-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors resize-none"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full py-4 rounded-lg bg-brand-blue text-brand-black font-semibold hover:bg-blue-400 transition-colors"
            >
              Send Message
            </button>
          </form>
        </motion.div>

      </div>
    </div>
  );
}

import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const [view, setView] = useState<'login' | 'register' | 'forgot'>('login');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login
    login({ id: '1', name: 'Demo User', email: 'user@example.com', role: 'user' });
    navigate('/dashboard');
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    login({ id: '2', name: 'New User', email: 'new@example.com', role: 'user' });
    navigate('/dashboard');
  };

  const handleForgot = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Password reset link sent to your email.');
    setView('login');
  };

  return (
    <div className="flex flex-col w-full min-h-[80vh] items-center justify-center py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,191,255,0.1)_0%,rgba(10,10,10,1)_50%)] z-0" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md z-10 px-4"
      >
        <div className="glass-panel p-8 md:p-10 rounded-2xl relative">
          
          <div className="text-center mb-8">
            <h2 className="text-3xl font-display font-bold text-white mb-2">
              {view === 'login' && 'Welcome Back'}
              {view === 'register' && 'Create Account'}
              {view === 'forgot' && 'Reset Password'}
            </h2>
            <p className="text-gray-400 text-sm">
              {view === 'login' && 'Enter your credentials to access your dashboard.'}
              {view === 'register' && 'Join Quake Trade and elevate your trading.'}
              {view === 'forgot' && 'Enter your email to receive a reset link.'}
            </p>
          </div>

          <AnimatePresence mode="wait">
            {view === 'login' && (
              <motion.form 
                key="login"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onSubmit={handleLogin} 
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                  <input type="email" required className="w-full bg-brand-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors" placeholder="user@example.com" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="block text-sm font-medium text-gray-400">Password</label>
                    <button type="button" onClick={() => setView('forgot')} className="text-xs text-brand-blue hover:text-blue-400">Forgot Password?</button>
                  </div>
                  <input type="password" required className="w-full bg-brand-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors" placeholder="••••••••" />
                </div>
                <button type="submit" className="w-full py-3.5 mt-2 rounded-lg bg-brand-blue text-brand-black font-semibold hover:bg-blue-400 transition-colors">
                  Sign In
                </button>
                <div className="text-center mt-6 text-sm text-gray-400">
                  Don't have an account? <button type="button" onClick={() => setView('register')} className="text-brand-blue font-medium hover:text-blue-400">Register</button>
                </div>
              </motion.form>
            )}

            {view === 'register' && (
              <motion.form 
                key="register"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onSubmit={handleRegister} 
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
                  <input type="text" required className="w-full bg-brand-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                  <input type="email" required className="w-full bg-brand-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors" placeholder="user@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Password</label>
                  <input type="password" required className="w-full bg-brand-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors" placeholder="••••••••" />
                </div>
                <button type="submit" className="w-full py-3.5 mt-2 rounded-lg bg-brand-blue text-brand-black font-semibold hover:bg-blue-400 transition-colors">
                  Create Account
                </button>
                <div className="text-center mt-6 text-sm text-gray-400">
                  Already have an account? <button type="button" onClick={() => setView('login')} className="text-brand-blue font-medium hover:text-blue-400">Sign In</button>
                </div>
              </motion.form>
            )}

            {view === 'forgot' && (
              <motion.form 
                key="forgot"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onSubmit={handleForgot} 
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                  <input type="email" required className="w-full bg-brand-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors" placeholder="user@example.com" />
                </div>
                <button type="submit" className="w-full py-3.5 mt-2 rounded-lg bg-brand-blue text-brand-black font-semibold hover:bg-blue-400 transition-colors">
                  Send Reset Link
                </button>
                <div className="text-center mt-6 text-sm text-gray-400">
                  Remember your password? <button type="button" onClick={() => setView('login')} className="text-brand-blue font-medium hover:text-blue-400">Back to Login</button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>

        </div>
      </motion.div>
    </div>
  );
}

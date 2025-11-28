import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { Lock, Mail, AlertCircle, LogIn, Sparkles } from 'lucide-react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const success = await login(email, password);
      if (success) {
        navigate('/');
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        
        {/* Header */}
        <div className="text-center mb-8 animate-slide-up">
          <div className="inline-block mb-4">
            <div className="w-16 h-16 bg-black dark:bg-white rounded-2xl flex items-center justify-center mx-auto animate-float shadow-premium-lg">
              <Lock className="text-white dark:text-black" size={32} />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-black dark:text-white mb-3">
            Welcome Back
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            Sign in to continue to your account
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="glass shadow-premium-lg rounded-2xl p-8 animate-scale-in">
          
          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-xl flex items-start animate-slide-up">
              <AlertCircle className="text-red-500 mr-3 flex-shrink-0 mt-0.5" size={20} />
              <p className="text-sm text-red-800 dark:text-red-200">{error}</p>
            </div>
          )}

          {/* Demo Credentials */}
          <div className="mb-6 p-4 glass border-2 border-slate-200 dark:border-slate-700 rounded-xl">
            <div className="flex items-start">
              <Sparkles className="text-black dark:text-white mr-2 flex-shrink-0 mt-0.5" size={16} />
              <div className="text-xs">
                <p className="font-bold text-black dark:text-white mb-2">Demo Credentials:</p>
                <p className="text-slate-600 dark:text-slate-400">
                  <span className="font-semibold">Admin:</span> admin@tribui.com / admin123
                </p>
              </div>
            </div>
          </div>

          {/* Email Input */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-bold uppercase tracking-widest text-black dark:text-white mb-3">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-6 py-4 rounded-xl glass border-2 border-slate-200 dark:border-slate-800 focus:border-black dark:focus:border-white outline-none transition-all duration-300 text-black dark:text-white placeholder-slate-400"
                placeholder="your@email.com"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-bold uppercase tracking-widest text-black dark:text-white mb-3">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-6 py-4 rounded-xl glass border-2 border-slate-200 dark:border-slate-800 focus:border-black dark:focus:border-white outline-none transition-all duration-300 text-black dark:text-white placeholder-slate-400"
                placeholder="••••••••"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex items-center justify-center px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-bold uppercase tracking-widest rounded-xl hover:scale-105 transition-all duration-300 shadow-premium-lg shine-effect disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 group"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white dark:border-black mr-3"></div>
                Signing In...
              </>
            ) : (
              <>
                <LogIn size={20} className="mr-3 group-hover:translate-x-1 transition-transform" />
                Sign In
              </>
            )}
          </button>

          {/* Register Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Don't have an account?{' '}
              <Link
                to="/register"
                className="font-bold text-black dark:text-white hover:underline"
              >
                Create one
              </Link>
            </p>
          </div>
        </form>

        {/* Back to Home */}
        <div className="mt-6 text-center">
          <Link
            to="/"
            className="text-sm text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;


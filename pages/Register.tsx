import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { User, Mail, Lock, AlertCircle, UserPlus } from 'lucide-react';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validation
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setIsLoading(true);

    try {
      const success = await register(email, password, name);
      if (success) {
        navigate('/');
      } else {
        setError('Email already exists');
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
              <UserPlus className="text-white dark:text-black" size={32} />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-black dark:text-white mb-3">
            Create Account
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            Join the community of strategic marketers
          </p>
        </div>

        {/* Register Form */}
        <form onSubmit={handleSubmit} className="glass shadow-premium-lg rounded-2xl p-8 animate-scale-in">
          
          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-xl flex items-start animate-slide-up">
              <AlertCircle className="text-red-500 mr-3 flex-shrink-0 mt-0.5" size={20} />
              <p className="text-sm text-red-800 dark:text-red-200">{error}</p>
            </div>
          )}

          {/* Name Input */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-bold uppercase tracking-widest text-black dark:text-white mb-3">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-12 pr-6 py-4 rounded-xl glass border-2 border-slate-200 dark:border-slate-800 focus:border-black dark:focus:border-white outline-none transition-all duration-300 text-black dark:text-white placeholder-slate-400"
                placeholder="John Doe"
              />
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
                minLength={6}
              />
            </div>
            <p className="mt-2 text-xs text-slate-500">At least 6 characters</p>
          </div>

          {/* Confirm Password Input */}
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-sm font-bold uppercase tracking-widest text-black dark:text-white mb-3">
              Confirm Password
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
              <input
                id="confirmPassword"
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
                Creating Account...
              </>
            ) : (
              <>
                <UserPlus size={20} className="mr-3 group-hover:translate-x-1 transition-transform" />
                Create Account
              </>
            )}
          </button>

          {/* Login Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Already have an account?{' '}
              <Link
                to="/login"
                className="font-bold text-black dark:text-white hover:underline"
              >
                Sign in
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

export default Register;


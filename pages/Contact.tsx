import React, { useState } from 'react';
import { Send, CheckCircle, Mail, MessageSquare, Sparkles } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white dark:bg-black min-h-screen">
      
      {/* Hero Section */}
      <section className="gradient-bg border-b border-slate-200 dark:border-slate-800 py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6 animate-scale-in">
            <span className="inline-flex items-center px-4 py-2 glass rounded-full text-xs font-bold uppercase tracking-widest text-black dark:text-white shadow-premium">
              <Mail size={14} className="mr-2" />
              Get in Touch
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-black dark:text-white mb-6 leading-none tracking-tight animate-slide-up">
            Let's <span className="gradient-text">Talk</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-light animate-slide-up">
            Interested in collaboration, consulting, or just want to argue about marketing strategy?
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {submitted ? (
            <div className="glass shadow-premium-lg rounded-2xl p-12 text-center animate-scale-in border-2 border-green-500">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
                <CheckCircle className="text-white" size={40} />
              </div>
              <h3 className="text-3xl font-serif font-bold text-black dark:text-white mb-4">Message Sent!</h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                Thanks for reaching out. I usually reply within 24 hours.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="inline-flex items-center px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-bold uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-premium"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass shadow-premium-lg rounded-2xl p-8 md:p-12 animate-scale-in">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold uppercase tracking-widest text-black dark:text-white mb-3">
                    Name *
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    className="w-full px-6 py-4 rounded-xl glass border-2 border-slate-200 dark:border-slate-800 focus:border-black dark:focus:border-white outline-none transition-all duration-300 text-black dark:text-white placeholder-slate-400 focus:scale-105" 
                    placeholder="John Doe" 
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-bold uppercase tracking-widest text-black dark:text-white mb-3">
                    Email *
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    className="w-full px-6 py-4 rounded-xl glass border-2 border-slate-200 dark:border-slate-800 focus:border-black dark:focus:border-white outline-none transition-all duration-300 text-black dark:text-white placeholder-slate-400 focus:scale-105" 
                    placeholder="john@example.com" 
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="reason" className="block text-sm font-bold uppercase tracking-widest text-black dark:text-white mb-3">
                  What's on your mind? *
                </label>
                <select 
                  id="reason" 
                  className="w-full px-6 py-4 rounded-xl glass border-2 border-slate-200 dark:border-slate-800 focus:border-black dark:focus:border-white outline-none transition-all duration-300 text-black dark:text-white focus:scale-105 cursor-pointer"
                >
                  <option>General Inquiry</option>
                  <option>Consulting Request</option>
                  <option>Speaking Opportunity</option>
                  <option>Collaboration</option>
                  <option>Feedback</option>
                  <option>Just Want to Say Hi</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-bold uppercase tracking-widest text-black dark:text-white mb-3">
                  Message *
                </label>
                <textarea 
                  id="message" 
                  rows={6} 
                  required 
                  className="w-full px-6 py-4 rounded-xl glass border-2 border-slate-200 dark:border-slate-800 focus:border-black dark:focus:border-white outline-none transition-all duration-300 text-black dark:text-white placeholder-slate-400 resize-none focus:scale-105" 
                  placeholder="Tell me about your project, challenge, or just say hello..."
                ></textarea>
              </div>

              <div className="flex items-start mb-8">
                <input 
                  type="checkbox" 
                  id="newsletter" 
                  className="mt-1 h-5 w-5 rounded border-2 border-slate-300 dark:border-slate-700 text-black dark:text-white focus:ring-2 focus:ring-black dark:focus:ring-white cursor-pointer" 
                />
                <label htmlFor="newsletter" className="ml-3 text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
                  <span className="font-bold text-black dark:text-white">Subscribe to the weekly newsletter</span>
                  <br />
                  One case study + one framework every Tuesday. No fluff, pure signal.
                </label>
              </div>

              <button 
                type="submit" 
                className="w-full flex items-center justify-center px-8 py-5 bg-black dark:bg-white text-white dark:text-black font-bold uppercase tracking-widest rounded-xl hover:scale-105 transition-all duration-300 shadow-premium-lg shine-effect group"
              >
                <Send size={20} className="mr-3 group-hover:rotate-45 transition-transform duration-300" /> 
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="py-20 gradient-bg border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-black dark:text-white mb-4">
              Other Ways to Connect
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Choose what works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <a 
              href="mailto:hello@tribui.com" 
              className="glass shadow-premium p-8 rounded-2xl hover-lift group text-center"
            >
              <div className="w-16 h-16 bg-black dark:bg-white rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                <Mail className="text-white dark:text-black" size={32} />
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-2">Email</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                For detailed inquiries
              </p>
              <span className="text-sm font-bold text-black dark:text-white group-hover:underline">
                hello@tribui.com
              </span>
            </a>

            <a 
              href="https://linkedin.com/in/tribui" 
              target="_blank"
              rel="noopener noreferrer"
              className="glass shadow-premium p-8 rounded-2xl hover-lift group text-center"
            >
              <div className="w-16 h-16 bg-[#0077B5] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-2">LinkedIn</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                Let's connect professionally
              </p>
              <span className="text-sm font-bold text-black dark:text-white group-hover:underline">
                @tribui
              </span>
            </a>

            <a 
              href="https://twitter.com/tribui" 
              target="_blank"
              rel="noopener noreferrer"
              className="glass shadow-premium p-8 rounded-2xl hover-lift group text-center"
            >
              <div className="w-16 h-16 bg-black dark:bg-white rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                <MessageSquare className="text-white dark:text-black" size={32} />
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-2">Twitter</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                Quick thoughts & threads
              </p>
              <span className="text-sm font-bold text-black dark:text-white group-hover:underline">
                @tribui
              </span>
            </a>

          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="py-12 bg-white dark:bg-black border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 text-slate-600 dark:text-slate-400">
            <Sparkles size={16} />
            <p className="text-sm">
              <span className="font-bold text-black dark:text-white">Average response time:</span> 24 hours or less
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;

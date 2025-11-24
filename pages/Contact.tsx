import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white dark:bg-slate-900 min-h-screen py-16 animate-fade-in">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Let's Talk</h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
                Interested in collaboration, consulting, or just want to say hi?
            </p>
        </div>

        {submitted ? (
             <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-12 text-center animate-fade-in">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                <p className="text-slate-600 dark:text-slate-400">
                    Thanks for reaching out. I usually reply within 24 hours.
                </p>
                <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-brand-600 font-medium hover:underline"
                >
                    Send another message
                </button>
             </div>
        ) : (
            <form onSubmit={handleSubmit} className="space-y-6 bg-slate-50 dark:bg-slate-800 p-8 md:p-12 rounded-2xl border border-slate-200 dark:border-slate-700">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name</label>
                        <input type="text" id="name" required className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-brand-500 outline-none transition-colors dark:text-white" placeholder="Tri Bui" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
                        <input type="email" id="email" required className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-brand-500 outline-none transition-colors dark:text-white" placeholder="tri@example.com" />
                    </div>
                </div>

                <div>
                    <label htmlFor="reason" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Topic</label>
                    <select id="reason" className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-brand-500 outline-none transition-colors dark:text-white">
                        <option>General Inquiry</option>
                        <option>Consulting Request</option>
                        <option>Speaking Opportunity</option>
                        <option>Feedback</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                    <textarea id="message" rows={5} required className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-brand-500 outline-none transition-colors dark:text-white" placeholder="How can I help you?"></textarea>
                </div>

                <div className="flex items-center">
                    <input type="checkbox" id="newsletter" className="h-4 w-4 text-brand-600 focus:ring-brand-500 border-gray-300 rounded" />
                    <label htmlFor="newsletter" className="ml-2 block text-sm text-slate-600 dark:text-slate-400">
                        Subscribe to the weekly newsletter
                    </label>
                </div>

                <button type="submit" className="w-full flex items-center justify-center px-8 py-4 bg-brand-600 text-white font-bold rounded-lg hover:bg-brand-700 transition-colors shadow-lg shadow-brand-500/30">
                    <Send size={18} className="mr-2" /> Send Message
                </button>
            </form>
        )}
      </div>
    </div>
  );
};

export default Contact;

import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-900 min-h-screen animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        <div className="text-center mb-16">
            <div className="inline-block relative mb-8">
                <div className="absolute inset-0 bg-brand-500 rounded-full blur-lg opacity-20"></div>
                <img 
                    src="https://i.pravatar.cc/300?u=tribui" 
                    alt="Tri Bui" 
                    className="relative w-40 h-40 rounded-full border-4 border-white dark:border-slate-800 shadow-xl mx-auto"
                />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
                Hi, I'm Tri Bui.
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-serif italic">
                "Marketing is not about shouting louder. It's about whispering the right thing to the right person."
            </p>
        </div>

        <div className="prose prose-lg dark:prose-invert prose-indigo max-w-none text-slate-600 dark:text-slate-300 leading-relaxed">
            <p className="mb-6">
                I'm a marketing strategist with a background in <strong>startup growth, product management, and finance</strong>. This unique mix allows me to look at marketing not just as "creative campaigns" but as a lever for sustainable business growth.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-4">Why I Write</h3>
            <p className="mb-6">
                The marketing world is noisy. There are too many gurus selling hacks and not enough practitioners sharing fundamentals. I started this blog to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Document my own learning (teaching is the best way to learn).</li>
                <li>Analyze the SEA market specifically (western case studies don't always apply here).</li>
                <li>Connect with other data-driven creatives.</li>
            </ul>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-4">My Philosophy</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                    <h4 className="font-bold text-brand-600 mb-2">Simplicity First</h4>
                    <p className="text-sm">If you can't explain your strategy on a napkin, it's too complicated.</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                    <h4 className="font-bold text-brand-600 mb-2">Data + Gut</h4>
                    <p className="text-sm">Data tells you what happened. Gut tells you what could happen. You need both.</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                    <h4 className="font-bold text-brand-600 mb-2">Brand is Trust</h4>
                    <p className="text-sm">A brand is simply the sum of promises kept. Everything else is decoration.</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                    <h4 className="font-bold text-brand-600 mb-2">User Obsession</h4>
                    <p className="text-sm">Don't fall in love with your product. Fall in love with your user's problem.</p>
                </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-4">Connect</h3>
            <p className="mb-8">
                I'm currently open to consulting opportunities and speaking engagements. If you want to talk strategy, growth, or just argue about the best coffee in town, hit me up.
            </p>

            <div className="flex flex-col md:flex-row gap-4">
                <a href="#" className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    <Linkedin className="mr-2" size={20} /> LinkedIn
                </a>
                 <a href="#" className="flex items-center justify-center px-6 py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors font-medium">
                    <Twitter className="mr-2" size={20} /> Twitter
                </a>
                 <a href="/contact" className="flex items-center justify-center px-6 py-3 bg-slate-800 dark:bg-slate-700 text-white rounded-lg hover:bg-slate-900 transition-colors font-medium">
                    <Mail className="mr-2" size={20} /> Email Me
                </a>
            </div>

        </div>
      </div>
    </div>
  );
};

export default About;

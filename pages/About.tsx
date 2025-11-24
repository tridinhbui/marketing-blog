import React from 'react';
import { Linkedin, Twitter, Mail, ArrowRight, Sparkles, TrendingUp, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white dark:bg-black min-h-screen">
      
      {/* Hero Section with Image */}
      <section className="relative overflow-hidden gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Text Content */}
            <div className="order-2 lg:order-1 animate-slide-in-left">
              <div className="inline-block mb-6">
                <span className="inline-flex items-center px-4 py-2 glass rounded-full text-xs font-bold uppercase tracking-widest text-black dark:text-white shadow-premium">
                  <Sparkles size={14} className="mr-2" />
                  Marketing Strategist
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-black dark:text-white mb-6 leading-none tracking-tight">
                Hi, I'm <span className="gradient-text">Tri Bui</span>.
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 font-light leading-relaxed">
                I turn marketing chaos into strategic clarity. No buzzwords, no fluff—just frameworks that work.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="#connect" className="inline-flex items-center px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-bold uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-premium-lg shine-effect group">
                  Let's Connect
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </a>
                <a href="/blog" className="inline-flex items-center px-8 py-4 border-2 border-black dark:border-white text-black dark:text-white font-bold uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300">
                  Read My Work
                </a>
              </div>
            </div>
            
            {/* Right: Photo */}
            <div className="order-1 lg:order-2 animate-slide-in-right">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-72 h-72 bg-black dark:bg-white opacity-10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-slate-400 dark:bg-slate-600 opacity-10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                
                {/* Main photo container */}
                <div className="relative z-10 glass shadow-premium-lg rounded-2xl p-4 hover-lift">
                  <img 
                    src="/images/tri.jpg" 
                    alt="Tri Bui" 
                    className="w-full h-auto rounded-xl object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  
                  {/* Floating badge */}
                  <div className="absolute -bottom-6 -right-6 glass shadow-premium-lg rounded-xl p-4 animate-float">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-bold text-black dark:text-white">Available for Consulting</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-t border-b border-slate-200 dark:border-slate-800 py-12 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center animate-scale-in">
              <div className="text-4xl md:text-5xl font-serif font-bold text-black dark:text-white mb-2">5+</div>
              <div className="text-sm uppercase tracking-widest text-slate-500">Years Experience</div>
            </div>
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl md:text-5xl font-serif font-bold text-black dark:text-white mb-2">50+</div>
              <div className="text-sm uppercase tracking-widest text-slate-500">Case Studies</div>
            </div>
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl md:text-5xl font-serif font-bold text-black dark:text-white mb-2">5K+</div>
              <div className="text-sm uppercase tracking-widest text-slate-500">Readers</div>
            </div>
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl md:text-5xl font-serif font-bold text-black dark:text-white mb-2">∞</div>
              <div className="text-sm uppercase tracking-widest text-slate-500">Coffee Consumed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-32 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-black dark:text-white mb-6 animate-slide-up">
              The Story
            </h2>
            <div className="w-20 h-1 bg-black dark:bg-white mx-auto"></div>
          </div>

          <div className="space-y-8 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            <p className="animate-slide-up">
              I'm a marketing strategist with a background in <span className="font-bold text-black dark:text-white">startup growth, product management, and finance</span>. This unique mix allows me to look at marketing not just as "creative campaigns" but as a <span className="italic">lever for sustainable business growth</span>.
            </p>

            <p className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              I've spent years analyzing why some brands become cultural icons while others fade into obscurity. Why some campaigns go viral while others fall flat. Why some positioning statements stick and others sound like corporate jargon.
            </p>

            <p className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              The answer? <span className="font-bold text-black dark:text-white">It's never just one thing</span>. It's the intersection of psychology, data, timing, and taste. It's science meets art.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Cards */}
      <section className="py-20 gradient-bg border-t border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-black dark:text-white mb-6">
              My Philosophy
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Four principles that guide every strategy I build
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="glass shadow-premium-lg p-8 rounded-2xl hover-lift group animate-scale-in">
              <div className="w-12 h-12 bg-black dark:bg-white rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Sparkles className="text-white dark:text-black" size={24} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-black dark:text-white mb-3">Simplicity First</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                If you can't explain your strategy on a napkin, it's too complicated. Clarity wins.
              </p>
            </div>

            <div className="glass shadow-premium-lg p-8 rounded-2xl hover-lift group animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-12 h-12 bg-black dark:bg-white rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                <TrendingUp className="text-white dark:text-black" size={24} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-black dark:text-white mb-3">Data + Gut</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Data tells you what happened. Gut tells you what could happen. You need both.
              </p>
            </div>

            <div className="glass shadow-premium-lg p-8 rounded-2xl hover-lift group animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 bg-black dark:bg-white rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Award className="text-white dark:text-black" size={24} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-black dark:text-white mb-3">Brand is Trust</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                A brand is simply the sum of promises kept. Everything else is decoration.
              </p>
            </div>

            <div className="glass shadow-premium-lg p-8 rounded-2xl hover-lift group animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="w-12 h-12 bg-black dark:bg-white rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Users className="text-white dark:text-black" size={24} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-black dark:text-white mb-3">User Obsession</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Don't fall in love with your product. Fall in love with your user's problem.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Why I Write */}
      <section className="py-20 md:py-32 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-black dark:text-white mb-6">
              Why I Write
            </h2>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4 glass shadow-premium p-6 rounded-xl hover-lift animate-slide-in-left">
              <div className="w-8 h-8 bg-black dark:bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white dark:text-black font-bold text-sm">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">Document My Learning</h3>
                <p className="text-slate-600 dark:text-slate-400">Teaching is the best way to learn. Writing forces clarity.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 glass shadow-premium p-6 rounded-xl hover-lift animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
              <div className="w-8 h-8 bg-black dark:bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white dark:text-black font-bold text-sm">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">Analyze the SEA Market</h3>
                <p className="text-slate-600 dark:text-slate-400">Western case studies don't always apply here. Context matters.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 glass shadow-premium p-6 rounded-xl hover-lift animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
              <div className="w-8 h-8 bg-black dark:bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white dark:text-black font-bold text-sm">3</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">Connect with Practitioners</h3>
                <p className="text-slate-600 dark:text-slate-400">Less gurus selling hacks. More practitioners sharing fundamentals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="connect" className="py-20 gradient-bg border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-black dark:text-white mb-6 animate-scale-in">
              Let's Work Together
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto animate-slide-up">
              I'm currently open to consulting opportunities and speaking engagements. If you want to talk strategy, growth, or just argue about the best coffee in town—hit me up.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <a 
              href="https://linkedin.com/in/tribui" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center px-8 py-4 bg-[#0077B5] text-white font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-premium-lg shine-effect w-full sm:w-auto justify-center"
            >
              <Linkedin className="mr-2 group-hover:rotate-12 transition-transform" size={20} />
              LinkedIn
            </a>
            
            <a 
              href="https://twitter.com/tribui" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-premium-lg shine-effect w-full sm:w-auto justify-center"
            >
              <Twitter className="mr-2 group-hover:rotate-12 transition-transform" size={20} />
              Twitter
            </a>
            
            <a 
              href="/contact" 
              className="group flex items-center px-8 py-4 border-2 border-black dark:border-white text-black dark:text-white font-bold rounded-xl hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <Mail className="mr-2 group-hover:rotate-12 transition-transform" size={20} />
              Email Me
            </a>
          </div>

          {/* Quote */}
          <div className="mt-16 pt-16 border-t border-slate-200 dark:border-slate-800">
            <blockquote className="text-2xl md:text-3xl font-serif italic text-slate-700 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              "Marketing is not about shouting louder. It's about whispering the right thing to the right person."
            </blockquote>
            <p className="mt-6 text-sm uppercase tracking-widest text-slate-500">— Tri Bui</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;

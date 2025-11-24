import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BLOG_POSTS } from '../data/mockData';
import { Calendar, Clock, Share2, Eye, EyeOff, Bookmark } from 'lucide-react';

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find(p => p.id === id);
  const [deepDiveMode, setDeepDiveMode] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
        const totalScroll = document.documentElement.scrollTop;
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scroll = windowHeight > 0 ? totalScroll / windowHeight : 0;
        setReadingProgress(scroll);
    }
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [id]);

  if (!post) {
    return <div className="p-20 text-center dark:text-white">Post not found.</div>;
  }

  const relatedPosts = BLOG_POSTS.filter(p => p.category === post.category && p.id !== post.id).slice(0, 3);

  return (
    <div className={`transition-colors duration-700 ease-in-out ${deepDiveMode ? 'bg-zinc-950 text-slate-300' : 'bg-white dark:bg-black text-slate-800 dark:text-slate-200'}`}>
      
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 h-1 bg-black dark:bg-white z-[60] w-full origin-left transform transition-transform duration-100" style={{ transform: `scaleX(${readingProgress})` }}></div>

      {/* Floating Controls */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col space-y-4">
        <button 
            onClick={() => setDeepDiveMode(!deepDiveMode)}
            className={`p-3 rounded-full shadow-lg transition-all ${deepDiveMode ? 'bg-white text-black' : 'bg-black text-white dark:bg-white dark:text-black'}`}
            title="Deep Dive Mode"
        >
            {deepDiveMode ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
        <button className="p-3 bg-white dark:bg-zinc-800 text-slate-600 dark:text-slate-300 rounded-full shadow-md border border-slate-200 dark:border-zinc-700 hover:scale-110 transition-transform">
            <Share2 size={20} />
        </button>
        <button className="p-3 bg-white dark:bg-zinc-800 text-slate-600 dark:text-slate-300 rounded-full shadow-md border border-slate-200 dark:border-zinc-700 hover:scale-110 transition-transform">
            <Bookmark size={20} />
        </button>
      </div>

      {/* Header */}
      {!deepDiveMode && (
        <div className="relative h-[70vh] min-h-[500px]">
            <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover filter brightness-75 grayscale"
            />
            <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="max-w-5xl text-center text-white">
                    <div className="mb-6 flex justify-center space-x-4">
                        <span className="px-4 py-1 border border-white text-xs font-bold uppercase tracking-widest">
                            {post.category}
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-serif font-bold mb-8 leading-tight">
                        {post.title}
                    </h1>
                    <p className="text-xl md:text-2xl font-light opacity-90 max-w-2xl mx-auto mb-8">
                        {post.subtitle}
                    </p>
                    <div className="flex items-center justify-center space-x-8 text-sm font-bold uppercase tracking-widest opacity-80">
                        <span className="flex items-center"><Calendar size={14} className="mr-2" /> {post.date}</span>
                        <span className="flex items-center"><Clock size={14} className="mr-2" /> {post.readTime}</span>
                    </div>
                </div>
            </div>
        </div>
      )}

      <div className={`max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative ${deepDiveMode ? 'py-24' : 'py-20'}`}>
        
        {deepDiveMode && (
            <div className="mb-12 text-center animate-fade-in">
                <h1 className="text-4xl font-serif font-bold mb-4 text-white">{post.title}</h1>
                <p className="text-slate-500">Focus Mode Active</p>
            </div>
        )}

        {/* Intro */}
        <p className={`text-2xl md:text-3xl font-serif leading-relaxed mb-16 ${deepDiveMode ? 'text-slate-200' : 'text-black dark:text-white'}`}>
            <span className="text-6xl float-left mr-3 mt-[-10px] font-bold">"</span>
            {post.content.intro}
        </p>

        {/* Key Points Box */}
        <div className={`p-10 my-16 border-y ${deepDiveMode ? 'border-zinc-800 bg-zinc-900/50' : 'border-black dark:border-white bg-slate-50 dark:bg-zinc-900'}`}>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-slate-400">Executive Summary</h3>
            <ul className="space-y-4">
                {post.content.keyPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start text-lg font-serif">
                        <span className="mr-4 text-xs mt-2">●</span>
                        <span>{point}</span>
                    </li>
                ))}
            </ul>
        </div>

        {/* Main Content Sections */}
        <div className={`prose prose-xl max-w-none ${deepDiveMode ? 'prose-invert prose-p:text-slate-300' : 'dark:prose-invert prose-headings:font-serif prose-headings:font-bold prose-p:font-light prose-p:leading-loose'}`}>
            {post.content.sections.map((section, idx) => (
                <div key={idx} className="mb-16">
                    <h2 className="text-3xl md:text-4xl mb-6">
                        {section.heading}
                    </h2>
                    <p>
                        {section.body}
                    </p>
                    {/* Editorial Pull Quote */}
                    {idx === 0 && (
                        <blockquote className={`my-12 pl-6 border-l-4 ${deepDiveMode ? 'border-white text-white' : 'border-black dark:border-white text-black dark:text-white'} text-3xl font-serif italic font-bold`}>
                            "Great marketing isn't about the stuff you make, but about the stories you tell."
                        </blockquote>
                    )}
                </div>
            ))}
        </div>

        {/* Bottom CTA / Takeaways */}
        <div className={`mt-20 p-12 text-center ${deepDiveMode ? 'bg-white text-black' : 'bg-black text-white dark:bg-white dark:text-black'}`}>
            <h3 className="text-3xl font-serif font-bold mb-6">The Strategic Takeaway</h3>
            <p className="text-xl mb-10 font-light italic">"{post.content.takeaways}"</p>
            <button className={`px-8 py-3 font-bold uppercase tracking-widest border ${deepDiveMode ? 'border-black hover:bg-black hover:text-white' : 'border-white hover:bg-white hover:text-black dark:border-black dark:hover:bg-black dark:hover:text-white'} transition-colors`}>
                Share Insight
            </button>
        </div>

        <hr className="my-16 border-slate-200 dark:border-zinc-800" />

        {/* Author Bio */}
        <div className="flex items-center space-x-6">
            <img src="https://i.pravatar.cc/150?u=tribui" alt="Tri Bui" className="w-20 h-20 rounded-full grayscale" />
            <div>
                <h3 className={`text-xl font-bold ${deepDiveMode ? 'text-white' : 'text-black dark:text-white'}`}>Written by Tri Bui</h3>
                <p className="text-slate-500 mt-2">
                    Marketing strategist. Dissecting the why behind the buy.
                </p>
            </div>
        </div>

      </div>

      {/* Related Posts */}
      {!deepDiveMode && (
          <div className="bg-slate-50 dark:bg-zinc-900 py-20 px-4 sm:px-6 lg:px-8 mt-20">
              <div className="max-w-7xl mx-auto">
                  <h3 className="text-2xl font-serif font-bold mb-8 text-black dark:text-white">Read Next</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {relatedPosts.map(p => (
                          <div key={p.id} className="group cursor-pointer">
                              <div className="h-48 overflow-hidden bg-white mb-4">
                                  <img src={p.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" alt=""/>
                              </div>
                              <h4 className="text-lg font-bold font-serif group-hover:underline text-black dark:text-white">{p.title}</h4>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      )}
    </div>
  );
};

export default PostDetail;
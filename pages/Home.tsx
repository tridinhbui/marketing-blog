import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/mockData';
import PostCard from '../components/PostCard';
import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [email, setEmail] = useState('');
  
  const featuredPost = BLOG_POSTS.find(p => p.isFeatured) || BLOG_POSTS[0];
  const secondaryPosts = BLOG_POSTS.filter(p => p.id !== featuredPost.id).slice(0, 2);
  const listPosts = BLOG_POSTS.filter(p => p.id !== featuredPost.id).slice(2, 6);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thanks for subscribing with ${email}!`);
    setEmail('');
  };

  return (
    <div className="animate-fade-in">
      
      {/* Hero Section */}
      <section className="pt-12 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 border-b border-black dark:border-white pb-8">
            <h1 className="text-5xl md:text-8xl font-serif font-bold text-black dark:text-white leading-none tracking-tighter">
                Strategy <br/> <span className="text-slate-400 font-light italic">meets</span> Story.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-sm mt-8 md:mt-0 font-light leading-relaxed text-right">
                Marketing case studies, consumer behavior, and growth frameworks for the modern mind.
            </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-auto lg:h-[600px]">
            {/* Main Featured - Takes up half */}
            <div className="lg:col-span-8 h-full">
                <PostCard post={featuredPost} featured={true} />
            </div>
            
            {/* Secondary Column */}
            <div className="lg:col-span-4 flex flex-col gap-8 h-full">
                {secondaryPosts.map(post => (
                     <div key={post.id} className="flex-1 bg-slate-50 dark:bg-zinc-900 p-6 rounded-sm flex flex-col justify-center hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors group cursor-pointer">
                        <Link to={`/post/${post.id}`} className="block h-full">
                            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">{post.category}</span>
                            <h3 className="text-2xl font-serif font-bold text-black dark:text-white mb-2 group-hover:underline decoration-1 underline-offset-4">{post.title}</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">{post.subtitle}</p>
                        </Link>
                     </div>
                ))}
            </div>
        </div>
      </section>

      {/* Latest List */}
      <section className="py-16 bg-white dark:bg-black border-t border-slate-100 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
                <h2 className="text-3xl font-serif font-bold">Latest Thinking</h2>
                <Link to="/blog" className="text-sm font-bold uppercase tracking-widest border-b border-black dark:border-white pb-1 hover:opacity-60 transition-opacity">View All</Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {listPosts.map(post => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-slate-50 dark:bg-zinc-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
            <Mail className="mx-auto h-8 w-8 text-black dark:text-white mb-6" />
            <h2 className="text-4xl font-serif font-bold text-black dark:text-white mb-6">Smart Marketing, Weekly.</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-10 text-lg font-light">
                Join 5,000+ marketers getting one case study and one framework every Tuesday. No fluff, pure signal.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                    type="email" 
                    placeholder="Email address" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-grow bg-white dark:bg-black px-6 py-4 rounded-none border border-slate-300 dark:border-zinc-700 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                />
                <button type="submit" className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-bold uppercase tracking-widest hover:opacity-80 transition-opacity">
                    Join
                </button>
            </form>
        </div>
      </section>
    </div>
  );
};

export default Home;

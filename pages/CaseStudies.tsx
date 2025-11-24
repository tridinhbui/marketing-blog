import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/mockData';
import CaseStudyCard from '../components/CaseStudyCard';
import { Category } from '../types';
import { Filter, X, ArrowLeftRight } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const allCaseStudies = BLOG_POSTS.filter(post => post.category === Category.CASE_STUDY);
  
  const [filter, setFilter] = useState('All');
  const [compareMode, setCompareMode] = useState(false);
  const [selectedForCompare, setSelectedForCompare] = useState<string[]>([]);

  const industries = ['All', ...Array.from(new Set(allCaseStudies.map(p => p.caseStudyMeta?.industry || '')))];

  const filteredStudies = filter === 'All' 
    ? allCaseStudies 
    : allCaseStudies.filter(p => p.caseStudyMeta?.industry === filter);

  const toggleCompareSelection = (id: string) => {
    if (selectedForCompare.includes(id)) {
        setSelectedForCompare(selectedForCompare.filter(item => item !== id));
    } else {
        if (selectedForCompare.length < 2) {
            setSelectedForCompare([...selectedForCompare, id]);
        }
    }
  };

  return (
    <div className="bg-white dark:bg-black min-h-screen animate-fade-in pb-20">
      
      {/* Header */}
      <div className="bg-slate-50 dark:bg-zinc-900 py-20 px-4 sm:px-6 lg:px-8 mb-12">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-black dark:text-white mb-6">
                The Library
            </h1>
            <div className="flex flex-col md:flex-row justify-between items-end">
                <p className="text-xl text-slate-600 dark:text-slate-400 max-w-xl font-light leading-relaxed">
                    Deconstructed campaigns. Strategic breakdowns. 
                    <br/>Real results from the brands shaping culture.
                </p>
                <div className="mt-8 md:mt-0 flex items-center space-x-4">
                     <button 
                        onClick={() => { setCompareMode(!compareMode); setSelectedForCompare([]); }}
                        className={`flex items-center px-4 py-2 border ${compareMode ? 'bg-black text-white dark:bg-white dark:text-black border-transparent' : 'border-slate-300 dark:border-zinc-700'} text-sm font-bold uppercase tracking-widest transition-all`}
                     >
                        <ArrowLeftRight size={16} className="mr-2" />
                        {compareMode ? 'Exit Compare' : 'Compare Cases'}
                     </button>
                </div>
            </div>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-12 border-b border-slate-100 dark:border-zinc-800 pb-8">
            <span className="flex items-center text-sm font-bold uppercase tracking-widest mr-4 text-slate-400">
                <Filter size={14} className="mr-2" /> Filter By:
            </span>
            {industries.map(ind => (
                <button
                    key={ind}
                    onClick={() => setFilter(ind)}
                    className={`text-sm px-4 py-2 rounded-full transition-all ${
                        filter === ind 
                        ? 'bg-black text-white dark:bg-white dark:text-black font-bold' 
                        : 'text-slate-500 hover:text-black dark:hover:text-white bg-slate-100 dark:bg-zinc-900'
                    }`}
                >
                    {ind}
                </button>
            ))}
        </div>

        {/* Comparison View */}
        {compareMode && selectedForCompare.length === 2 && (
            <div className="mb-20 grid grid-cols-2 gap-8 border-b-2 border-black dark:border-white pb-12 animate-slide-up">
                 {selectedForCompare.map(id => {
                     const post = allCaseStudies.find(p => p.id === id);
                     if (!post || !post.caseStudyMeta) return null;
                     return (
                         <div key={id} className="space-y-6">
                             <div className="h-48 overflow-hidden bg-slate-100">
                                 <img src={post.image} className="w-full h-full object-cover" alt="" />
                             </div>
                             <h3 className="text-3xl font-serif font-bold">{post.caseStudyMeta.brand}</h3>
                             
                             <div className="space-y-4">
                                <div className="border-t border-slate-200 dark:border-zinc-800 pt-4">
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Problem</h4>
                                    <p>{post.caseStudyMeta.problem}</p>
                                </div>
                                <div className="border-t border-slate-200 dark:border-zinc-800 pt-4">
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Strategy</h4>
                                    <p>{post.caseStudyMeta.approach}</p>
                                </div>
                                <div className="border-t border-slate-200 dark:border-zinc-800 pt-4">
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Key Insight</h4>
                                    <p className="font-serif italic text-lg">"{post.caseStudyMeta.keyInsight}"</p>
                                </div>
                             </div>
                         </div>
                     )
                 })}
                 <div className="col-span-2 text-center">
                     <button onClick={() => setSelectedForCompare([])} className="text-sm underline text-slate-500">Clear Comparison</button>
                 </div>
            </div>
        )}

        {/* List */}
        <div className="space-y-0">
          {filteredStudies.map(post => (
            <div key={post.id} className="relative">
                {compareMode && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 -ml-12 z-10">
                        <input 
                            type="checkbox" 
                            checked={selectedForCompare.includes(post.id)}
                            onChange={() => toggleCompareSelection(post.id)}
                            disabled={selectedForCompare.length >= 2 && !selectedForCompare.includes(post.id)}
                            className="w-6 h-6 accent-black cursor-pointer"
                        />
                    </div>
                )}
                <CaseStudyCard post={post} />
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-24 text-center border p-12 border-slate-200 dark:border-zinc-800">
            <h3 className="text-2xl font-serif font-bold mb-4">Have a brand story?</h3>
            <p className="text-slate-500 mb-8">I'm always looking for the next great SEA case study.</p>
            <a href="/contact" className="inline-block px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-bold uppercase tracking-widest hover:opacity-80 transition-opacity">
                Submit a Case
            </a>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;

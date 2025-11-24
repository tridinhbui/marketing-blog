import React from 'react';
import { RESOURCES } from '../data/mockData';
import { Download, BookOpen, FileText, ArrowUpRight } from 'lucide-react';

const Resources: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
        case 'Template': return <FileText size={20} />;
        case 'Book': return <BookOpen size={20} />;
        default: return <Download size={20} />;
    }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen py-16 animate-fade-in">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Tools & Resources</h1>
            <p className="text-xl text-slate-600 dark:text-slate-400">
                A curated list of frameworks, templates, and reading materials I use to build brands.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {RESOURCES.map(resource => (
                <div key={resource.id} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow group">
                    <div className="flex items-start justify-between mb-4">
                        <div className={`p-3 rounded-lg ${
                            resource.type === 'Book' ? 'bg-amber-100 text-amber-600' :
                            resource.type === 'Framework' ? 'bg-purple-100 text-purple-600' :
                            'bg-blue-100 text-blue-600'
                        }`}>
                            {getIcon(resource.type)}
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                            {resource.type}
                        </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-600 transition-colors">
                        {resource.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6 min-h-[3rem]">
                        {resource.description}
                    </p>
                    <a href={resource.link} className="inline-flex items-center font-medium text-brand-600 hover:text-brand-700">
                        {resource.type === 'Book' ? 'View on Amazon' : 'Download Now'} <ArrowUpRight size={16} className="ml-1" />
                    </a>
                </div>
            ))}
        </div>

        <div className="mt-16 bg-slate-900 dark:bg-brand-900 rounded-3xl p-10 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Want my private swipe file?</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                I keep a folder of the best ads, landing pages, and email flows I've seen. Subscribers get access to the archive.
            </p>
            <button className="px-8 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-100 transition-colors">
                Get Access
            </button>
        </div>

      </div>
    </div>
  );
};

export default Resources;

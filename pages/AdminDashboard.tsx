import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { PlusCircle, Edit2, Trash2, Save, X, Image as ImageIcon, LayoutDashboard } from 'lucide-react';
import { BlogPost, Category } from '../types';
import { BLOG_POSTS } from '../data/mockData';

const AdminDashboard: React.FC = () => {
  const { isAdmin, user } = useAuth();
  const navigate = useNavigate();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    category: Category.STRATEGY,
    tags: '',
    image: '',
    content: {
      intro: '',
      keyPoints: [''],
      sections: [{ heading: '', body: '' }],
      takeaways: ''
    }
  });

  useEffect(() => {
    if (!isAdmin) {
      navigate('/login');
      return;
    }

    // Load posts from localStorage or use default
    const storedPosts = localStorage.getItem('blogPosts');
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
    } else {
      setPosts(BLOG_POSTS);
      localStorage.setItem('blogPosts', JSON.stringify(BLOG_POSTS));
    }
  }, [isAdmin, navigate]);

  const handleCreateNew = () => {
    setIsEditing(true);
    setEditingPost(null);
    setFormData({
      title: '',
      subtitle: '',
      category: Category.STRATEGY,
      tags: '',
      image: '/images/placeholder.jpg',
      content: {
        intro: '',
        keyPoints: [''],
        sections: [{ heading: '', body: '' }],
        takeaways: ''
      }
    });
  };

  const handleEdit = (post: BlogPost) => {
    setIsEditing(true);
    setEditingPost(post);
    setFormData({
      title: post.title,
      subtitle: post.subtitle,
      category: post.category,
      tags: post.tags.join(', '),
      image: post.image,
      content: {
        intro: post.content.intro,
        keyPoints: post.content.keyPoints || [''],
        sections: post.content.sections || [{ heading: '', body: '' }],
        takeaways: post.content.takeaways
      }
    });
  };

  const handleDelete = (postId: string) => {
    if (confirm('Are you sure you want to delete this post?')) {
      const updatedPosts = posts.filter(p => p.id !== postId);
      setPosts(updatedPosts);
      localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
    }
  };

  const handleSave = () => {
    const newPost: BlogPost = {
      id: editingPost?.id || `post-${Date.now()}`,
      title: formData.title,
      subtitle: formData.subtitle,
      category: formData.category,
      tags: formData.tags.split(',').map(t => t.trim()),
      image: formData.image,
      date: editingPost?.date || new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      readTime: `${Math.ceil(formData.content.intro.split(' ').length / 200)} min read`,
      content: formData.content,
      isFeatured: editingPost?.isFeatured || false,
      caseStudyMeta: editingPost?.caseStudyMeta
    };

    let updatedPosts;
    if (editingPost) {
      updatedPosts = posts.map(p => p.id === editingPost.id ? newPost : p);
    } else {
      updatedPosts = [newPost, ...posts];
    }

    setPosts(updatedPosts);
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
    setIsEditing(false);
    setEditingPost(null);
  };

  const addKeyPoint = () => {
    setFormData({
      ...formData,
      content: {
        ...formData.content,
        keyPoints: [...formData.content.keyPoints, '']
      }
    });
  };

  const updateKeyPoint = (index: number, value: string) => {
    const newKeyPoints = [...formData.content.keyPoints];
    newKeyPoints[index] = value;
    setFormData({
      ...formData,
      content: {
        ...formData.content,
        keyPoints: newKeyPoints
      }
    });
  };

  const addSection = () => {
    setFormData({
      ...formData,
      content: {
        ...formData.content,
        sections: [...formData.content.sections, { heading: '', body: '' }]
      }
    });
  };

  const updateSection = (index: number, field: 'heading' | 'body', value: string) => {
    const newSections = [...formData.content.sections];
    newSections[index][field] = value;
    setFormData({
      ...formData,
      content: {
        ...formData.content,
        sections: newSections
      }
    });
  };

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8 pb-8 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <LayoutDashboard className="text-black dark:text-white" size={32} />
                <h1 className="text-4xl font-serif font-bold text-black dark:text-white">
                  Admin Dashboard
                </h1>
              </div>
              <p className="text-slate-600 dark:text-slate-400">
                Welcome back, {user?.name}
              </p>
            </div>
            {!isEditing && (
              <button
                onClick={handleCreateNew}
                className="flex items-center px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-bold uppercase tracking-widest rounded-xl hover:scale-105 transition-all duration-300 shadow-premium"
              >
                <PlusCircle size={20} className="mr-2" />
                New Post
              </button>
            )}
          </div>
        </div>

        {/* Editor Form */}
        {isEditing ? (
          <div className="glass shadow-premium-lg rounded-2xl p-8 mb-8 animate-scale-in">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-serif font-bold text-black dark:text-white">
                {editingPost ? 'Edit Post' : 'Create New Post'}
              </h2>
              <button
                onClick={() => setIsEditing(false)}
                className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-6">
              {/* Title */}
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-black dark:text-white mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl glass border-2 border-slate-200 dark:border-slate-800 focus:border-black dark:focus:border-white outline-none transition-all text-black dark:text-white"
                  placeholder="Enter post title"
                />
              </div>

              {/* Subtitle */}
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-black dark:text-white mb-2">
                  Subtitle *
                </label>
                <input
                  type="text"
                  value={formData.subtitle}
                  onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl glass border-2 border-slate-200 dark:border-slate-800 focus:border-black dark:focus:border-white outline-none transition-all text-black dark:text-white"
                  placeholder="Enter post subtitle"
                />
              </div>

              {/* Category & Tags */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-black dark:text-white mb-2">
                    Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value as Category })}
                    className="w-full px-4 py-3 rounded-xl glass border-2 border-slate-200 dark:border-slate-800 focus:border-black dark:focus:border-white outline-none transition-all text-black dark:text-white"
                  >
                    <option value={Category.CASE_STUDY}>Case Study</option>
                    <option value={Category.STRATEGY}>Strategy</option>
                    <option value={Category.GROWTH}>Growth</option>
                    <option value={Category.CONSUMER}>Consumer</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-black dark:text-white mb-2">
                    Tags (comma-separated)
                  </label>
                  <input
                    type="text"
                    value={formData.tags}
                    onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl glass border-2 border-slate-200 dark:border-slate-800 focus:border-black dark:focus:border-white outline-none transition-all text-black dark:text-white"
                    placeholder="Branding, Marketing, Growth"
                  />
                </div>
              </div>

              {/* Image URL */}
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-black dark:text-white mb-2">
                  Image URL
                </label>
                <div className="relative">
                  <ImageIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                  <input
                    type="text"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 rounded-xl glass border-2 border-slate-200 dark:border-slate-800 focus:border-black dark:focus:border-white outline-none transition-all text-black dark:text-white"
                    placeholder="/images/your-image.jpg"
                  />
                </div>
              </div>

              {/* Content - Intro */}
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-black dark:text-white mb-2">
                  Introduction *
                </label>
                <textarea
                  value={formData.content.intro}
                  onChange={(e) => setFormData({ ...formData, content: { ...formData.content, intro: e.target.value } })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl glass border-2 border-slate-200 dark:border-slate-800 focus:border-black dark:focus:border-white outline-none transition-all text-black dark:text-white resize-none"
                  placeholder="Write the introduction..."
                />
              </div>

              {/* Key Points */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-bold uppercase tracking-widest text-black dark:text-white">
                    Key Points
                  </label>
                  <button
                    onClick={addKeyPoint}
                    className="text-sm font-bold text-black dark:text-white hover:underline"
                  >
                    + Add Point
                  </button>
                </div>
                {formData.content.keyPoints.map((point, index) => (
                  <input
                    key={index}
                    type="text"
                    value={point}
                    onChange={(e) => updateKeyPoint(index, e.target.value)}
                    className="w-full px-4 py-3 rounded-xl glass border-2 border-slate-200 dark:border-slate-800 focus:border-black dark:focus:border-white outline-none transition-all text-black dark:text-white mb-2"
                    placeholder={`Key point ${index + 1}`}
                  />
                ))}
              </div>

              {/* Sections */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-bold uppercase tracking-widest text-black dark:text-white">
                    Content Sections
                  </label>
                  <button
                    onClick={addSection}
                    className="text-sm font-bold text-black dark:text-white hover:underline"
                  >
                    + Add Section
                  </button>
                </div>
                {formData.content.sections.map((section, index) => (
                  <div key={index} className="glass p-4 rounded-xl mb-4">
                    <input
                      type="text"
                      value={section.heading}
                      onChange={(e) => updateSection(index, 'heading', e.target.value)}
                      className="w-full px-4 py-2 rounded-lg glass border-2 border-slate-200 dark:border-slate-800 focus:border-black dark:focus:border-white outline-none transition-all text-black dark:text-white mb-2"
                      placeholder="Section heading"
                    />
                    <textarea
                      value={section.body}
                      onChange={(e) => updateSection(index, 'body', e.target.value)}
                      rows={3}
                      className="w-full px-4 py-2 rounded-lg glass border-2 border-slate-200 dark:border-slate-800 focus:border-black dark:focus:border-white outline-none transition-all text-black dark:text-white resize-none"
                      placeholder="Section content"
                    />
                  </div>
                ))}
              </div>

              {/* Takeaways */}
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-black dark:text-white mb-2">
                  Key Takeaways
                </label>
                <textarea
                  value={formData.content.takeaways}
                  onChange={(e) => setFormData({ ...formData, content: { ...formData.content, takeaways: e.target.value } })}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl glass border-2 border-slate-200 dark:border-slate-800 focus:border-black dark:focus:border-white outline-none transition-all text-black dark:text-white resize-none"
                  placeholder="Summary and key takeaways..."
                />
              </div>

              {/* Save Button */}
              <div className="flex space-x-4">
                <button
                  onClick={handleSave}
                  className="flex-1 flex items-center justify-center px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-bold uppercase tracking-widest rounded-xl hover:scale-105 transition-all duration-300 shadow-premium"
                >
                  <Save size={20} className="mr-2" />
                  Save Post
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-8 py-4 border-2 border-black dark:border-white text-black dark:text-white font-bold uppercase tracking-widest rounded-xl hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Posts List */
          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-black dark:text-white mb-4">
              All Posts ({posts.length})
            </h2>
            {posts.map((post) => (
              <div
                key={post.id}
                className="glass shadow-premium p-6 rounded-xl hover-lift flex items-center justify-between"
              >
                <div className="flex items-center space-x-4 flex-1">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-black dark:text-white mb-1">
                      {post.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                      {post.subtitle}
                    </p>
                    <div className="flex items-center space-x-3 text-xs text-slate-500">
                      <span className="font-bold">{post.category}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(post)}
                    className="p-3 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:scale-110 transition-all duration-300"
                  >
                    <Edit2 size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="p-3 bg-red-500 text-white rounded-lg hover:scale-110 transition-all duration-300"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;


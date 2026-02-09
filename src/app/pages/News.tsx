import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Search, Filter, Calendar, User, ArrowRight, Tag } from 'lucide-react';

const NEWS_POSTS = [
  {
    id: 1,
    title: 'Annual Science Fair Showcases Student Innovation',
    excerpt: 'Our students presented groundbreaking projects ranging from sustainable energy to AI applications...',
    date: 'Feb 10, 2026',
    author: 'Admin',
    category: 'Academic',
    image: 'https://images.unsplash.com/photo-1759092912891-9f52486bb059?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzY2llbmNlJTIwbGFib3JhdG9yeSUyMHNjaG9vbHxlbnwxfHx8fDE3NzAzNjUwMjh8MA'
  },
  {
    id: 2,
    title: 'Varsity Basketball Team Secures Regional Championship',
    excerpt: 'A thrilling final match saw our team triumph over rival schools in a display of teamwork and grit...',
    date: 'Feb 8, 2026',
    author: 'Sports Dept',
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1563299967-5208dc3f5d19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBiYXNrZXRiYWxsJTIwY291cnQlMjBjYW1wdXN8ZW58MXx8fHwxNzcwMzY1MDI4fDA'
  },
  {
    id: 3,
    title: 'New International Partnership for STEM Education',
    excerpt: 'We are proud to announce a new collaboration with global tech giants to enhance our coding curriculum...',
    date: 'Feb 5, 2026',
    author: 'Admissions',
    category: 'Partners',
    image: 'https://images.unsplash.com/photo-1724949286531-aad1be889342?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwcml2YXRlJTIwc2Nob29sJTIwY2FtcHVzJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MDM2NTAyN3ww'
  },
  {
    id: 4,
    title: 'Parent-Teacher Conference Highlights',
    excerpt: 'A productive session focused on student well-being and the introduction of our new digital portal...',
    date: 'Feb 2, 2026',
    author: 'Staff',
    category: 'Community',
    image: 'https://images.unsplash.com/photo-1740153204804-200310378f2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhc2lhbiUyMGVkdWNhdG9yJTIwaW4lMjBvZmZpY2UlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzAzNjUwMjh8MA'
  }
];

export function News() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = NEWS_POSTS.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 flex flex-col">
      {/* Header */}
      <section className="bg-[#182B70] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            News & Events
          </motion.h1>
          <p className="text-white/80 text-xl max-w-3xl leading-relaxed">
            Stay connected with the latest stories, achievements, and updates from the Chea Chanto College community.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Filters */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
            <div className="flex flex-wrap gap-4">
              {['All', 'Academic', 'Sports', 'Partners', 'Community'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-6 py-2 rounded-full font-bold text-sm transition-all",
                    activeCategory === cat ? "bg-[#182B70] text-white" : "bg-gray-100 text-[#182B70] hover:bg-gray-200"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#182B70]/20 focus:bg-white transition-all"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>

          {/* Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {filteredPosts.map((post, idx) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video rounded-3xl overflow-hidden mb-8 shadow-xl">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md text-[#182B70] px-4 py-2 rounded-xl font-bold text-xs uppercase tracking-widest shadow-lg">
                    {post.category}
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-6 text-gray-400 text-sm font-medium">
                    <span className="flex items-center gap-2"><Calendar size={16} /> {post.date}</span>
                    <span className="flex items-center gap-2"><User size={16} /> {post.author}</span>
                  </div>
                  <h2 className="text-[#182B70] text-2xl md:text-3xl font-bold group-hover:text-blue-700 transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-lg line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <button className="flex items-center gap-2 text-[#182B70] font-bold border-b-2 border-[#182B70] pb-1 hover:border-transparent transition-all">
                    Read Story <ArrowRight size={18} />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20 text-gray-400 italic">
              No news articles found matching your criteria.
            </div>
          )}
          
          {/* Pagination */}
          <div className="flex justify-center mt-20 gap-4">
             <button className="w-12 h-12 rounded-xl bg-[#182B70] text-white font-bold">1</button>
             <button className="w-12 h-12 rounded-xl bg-gray-50 text-gray-400 font-bold hover:bg-gray-100 transition-all">2</button>
             <button className="w-12 h-12 rounded-xl bg-gray-50 text-gray-400 font-bold hover:bg-gray-100 transition-all">3</button>
             <button className="w-12 h-12 rounded-xl bg-gray-50 text-gray-400 font-bold hover:bg-gray-100 transition-all">→</button>
          </div>
        </div>
      </section>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}

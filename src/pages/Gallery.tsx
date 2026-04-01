import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { Image as ImageIcon, Video, Maximize2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const galleryItems = [
  { id: 1, type: 'image', url: 'https://picsum.photos/seed/gal1/800/600', title: 'AI Workshop 2024', category: 'Events' },
  { id: 2, type: 'image', url: 'https://picsum.photos/seed/gal2/800/600', title: 'Machine Learning Lab', category: 'Infrastructure' },
  { id: 3, type: 'image', url: 'https://picsum.photos/seed/gal3/800/600', title: 'Hackathon Winners', category: 'Achievements' },
  { id: 4, type: 'image', url: 'https://picsum.photos/seed/gal4/800/600', title: 'Guest Lecture by Industry Expert', category: 'Events' },
  { id: 5, type: 'image', url: 'https://picsum.photos/seed/gal5/800/600', title: 'Robotics Showcase', category: 'Projects' },
  { id: 6, type: 'image', url: 'https://picsum.photos/seed/gal6/800/600', title: 'Department Library', category: 'Infrastructure' },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState('All');

  const filteredItems = filter === 'All' ? galleryItems : galleryItems.filter(item => item.category === filter);

  return (
    <div>
      <PageHeader 
        title="Photo Gallery" 
        subtitle="A visual journey through the events, facilities, and achievements of the Department of AI & ML."
        breadcrumb="Students"
      />

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {['All', 'Events', 'Infrastructure', 'Achievements', 'Projects'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                filter === cat 
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' 
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="group relative aspect-[4/3] rounded-[2rem] overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all"
              onClick={() => setSelectedImage(item.url)}
            >
              <img 
                src={item.url} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                <p className="text-indigo-400 text-[10px] font-bold uppercase tracking-widest mb-1">{item.category}</p>
                <h3 className="text-white font-bold text-lg">{item.title}</h3>
                <div className="absolute top-6 right-6 p-2 bg-white/20 backdrop-blur rounded-lg text-white">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button className="absolute top-8 right-8 text-white hover:text-indigo-400 transition-colors">
                <X className="w-8 h-8" />
              </button>
              <motion.img 
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                src={selectedImage} 
                className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl"
                alt="Enlarged"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}

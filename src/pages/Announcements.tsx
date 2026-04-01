import React from 'react';
import PageHeader from '../components/PageHeader';
import { announcements } from '../data';
import { Bell, Calendar, ArrowRight, Filter } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Announcements() {
  return (
    <div>
      <PageHeader 
        title="Announcements" 
        subtitle="Stay updated with the latest news, academic notices, and event alerts from the Department of AI & ML."
        breadcrumb="Resources"
      />

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <div className="w-full lg:w-64 shrink-0 space-y-8">
            <div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center">
                <Filter className="w-4 h-4 mr-2" />
                Filter by Category
              </h3>
              <div className="space-y-2">
                {['All', 'Academic', 'Notice', 'Event', 'Placement'].map((cat) => (
                  <button 
                    key={cat}
                    className="w-full text-left px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-indigo-600 transition-colors"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-6 bg-indigo-600 rounded-2xl text-white">
              <Bell className="w-8 h-8 mb-4 opacity-50" />
              <h4 className="font-bold mb-2">Push Notifications</h4>
              <p className="text-xs text-indigo-100 leading-relaxed mb-4">Subscribe to get instant alerts for important academic notices.</p>
              <button className="w-full py-2 bg-white text-indigo-600 text-xs font-bold rounded-lg">Subscribe Now</button>
            </div>
          </div>

          {/* Announcements List */}
          <div className="flex-grow space-y-6">
            {announcements.map((ann, i) => (
              <motion.div
                key={ann.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg hover:border-indigo-100 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <span className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-wider rounded-full">
                      {ann.category}
                    </span>
                    <div className="flex items-center text-slate-400 text-xs font-medium">
                      <Calendar className="w-3.5 h-3.5 mr-1.5" />
                      {ann.date}
                    </div>
                  </div>
                  <button className="text-indigo-600 text-xs font-bold flex items-center group-hover:translate-x-1 transition-transform">
                    Read Details <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
                  </button>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{ann.title}</h3>
                <p className="text-slate-600 leading-relaxed">{ann.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import PageHeader from '../components/PageHeader';
import { achievements } from '../data';
import { Trophy, Star, Target, Rocket, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap = {
  Hackathon: Trophy,
  Competition: Star,
  Research: Target,
  Startup: Rocket,
  Project: Award,
};

export default function Achievements() {
  return (
    <div>
      <PageHeader 
        title="Student Achievements" 
        subtitle="Celebrating the remarkable accomplishments of our students in hackathons, research, and innovation."
        breadcrumb="Students"
      />

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {achievements.map((ach, i) => {
            const Icon = iconMap[ach.category] || Award;
            return (
              <motion.div
                key={ach.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden hover:shadow-2xl transition-all"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={ach.image} 
                    alt={ach.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-10">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">{ach.category}</span>
                    <span className="text-xs text-slate-400 ml-auto">{ach.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{ach.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-8">{ach.description}</p>
                  <button className="text-indigo-600 font-bold text-sm flex items-center hover:translate-x-2 transition-transform">
                    Read Full Story <Star className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Achievement Stats */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: 'Hackathon Wins', value: '45+', color: 'bg-amber-50 text-amber-600' },
            { label: 'Research Papers', value: '30+', color: 'bg-blue-50 text-blue-600' },
            { label: 'Student Startups', value: '05+', color: 'bg-emerald-50 text-emerald-600' },
          ].map((stat, i) => (
            <div key={i} className="p-8 rounded-3xl border border-slate-100 text-center">
              <div className={`inline-block px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 ${stat.color}`}>
                Milestone
              </div>
              <p className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</p>
              <p className="text-sm font-medium text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

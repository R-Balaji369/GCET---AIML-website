import React from 'react';
import PageHeader from '../components/PageHeader';
import { Brain, Network, Eye, MessageSquare, Database, Cpu, FlaskConical, FileText, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const researchAreas = [
  { title: 'Artificial Intelligence', icon: Brain, desc: 'Exploring fundamental algorithms and cognitive modeling.' },
  { title: 'Machine Learning', icon: Database, desc: 'Statistical learning theory and predictive analytics.' },
  { title: 'Deep Learning', icon: Network, desc: 'Advanced neural architectures and generative models.' },
  { title: 'Computer Vision', icon: Eye, desc: 'Image processing, object detection, and scene understanding.' },
  { title: 'NLP', icon: MessageSquare, desc: 'Computational linguistics and semantic analysis.' },
  { title: 'Robotics', icon: Cpu, desc: 'Autonomous systems and human-robot interaction.' },
];

export default function Research() {
  return (
    <div>
      <PageHeader 
        title="Research & Innovation" 
        subtitle="Pushing the boundaries of what's possible with artificial intelligence through rigorous inquiry and collaborative innovation."
        breadcrumb="Research"
      />

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Research Focus</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">We focus on high-impact research areas that address real-world challenges using intelligent systems.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchAreas.map((area, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-white border border-slate-200 rounded-[2rem] hover:shadow-xl hover:border-indigo-100 transition-all group"
            >
              <div className="w-14 h-14 bg-slate-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <area.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{area.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{area.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Research Stats */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Research Excellence</h2>
              <div className="space-y-6">
                {[
                  { label: 'Ongoing Projects', value: '12', icon: FlaskConical },
                  { label: 'Journal Publications', value: '85+', icon: FileText },
                  { label: 'Patents Filed', value: '08', icon: Award },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center space-x-6 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center shrink-0">
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                      <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" 
                  className="w-full h-full object-cover"
                  alt="Research"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 p-8 bg-indigo-600 rounded-3xl text-white shadow-xl max-w-xs">
                <p className="text-sm font-medium opacity-90 mb-2 italic">"Innovation is the ability to see change as an opportunity - not a threat."</p>
                <p className="text-xs font-bold uppercase tracking-widest">— Steve Jobs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Preview */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Recent Publications</h2>
            <p className="text-slate-600">Explore the latest scholarly contributions from our faculty and students.</p>
          </div>
          <button className="px-6 py-3 border border-slate-200 rounded-xl font-bold text-sm hover:bg-slate-50 transition-colors">
            View All Publications
          </button>
        </div>

        <div className="space-y-4">
          {[
            { title: 'Optimizing Neural Networks for Edge Computing Devices', authors: 'Dr. S. Ravi Kumar, et al.', journal: 'IEEE Transactions on AI', year: '2024' },
            { title: 'A Novel Approach to Sentiment Analysis in Low-Resource Languages', authors: 'Dr. M. Lakshmi, et al.', journal: 'Journal of Computational Linguistics', year: '2023' },
            { title: 'Real-time Object Detection in Adverse Weather Conditions', authors: 'Prof. K. Venkat, et al.', journal: 'International Journal of Computer Vision', year: '2023' },
          ].map((pub, i) => (
            <div key={i} className="p-6 bg-white border border-slate-100 rounded-2xl hover:border-indigo-200 hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-slate-900 mb-1">{pub.title}</h3>
                <p className="text-sm text-slate-500">{pub.authors}</p>
              </div>
              <div className="flex items-center space-x-4 shrink-0">
                <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">{pub.journal}</span>
                <span className="text-xs font-bold text-slate-400">{pub.year}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

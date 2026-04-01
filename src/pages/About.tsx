import React from 'react';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import { Info, History, Users, Globe } from 'lucide-react';

export default function About() {
  return (
    <div>
      <PageHeader 
        title="About Department" 
        subtitle="Discover the history, growth, and future aspirations of the Department of Artificial Intelligence and Machine Learning at GCET."
        breadcrumb="About"
      />

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold uppercase tracking-widest">
              <Info className="w-4 h-4" />
              <span>Overview</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              Leading the Charge in the Age of Intelligence.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Established in 2020, the Department of Artificial Intelligence and Machine Learning at Geethanjali College of Engineering and Technology was founded to meet the growing global demand for AI expertise. Our department is a hub of intellectual activity, where students and faculty collaborate on projects that have real-world impact.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              We believe in a holistic approach to education, combining strong theoretical foundations with intensive practical training. Our state-of-the-art laboratories and industry-aligned curriculum ensure that our graduates are ready to lead in the competitive global landscape.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <p className="text-4xl font-bold text-indigo-600 mb-1">2020</p>
                <p className="text-sm font-medium text-slate-500">Year Established</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-indigo-600 mb-1">720+</p>
                <p className="text-sm font-medium text-slate-500">Active Students</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                className="w-full h-full object-cover"
                alt="Collaboration"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-600 rounded-3xl flex items-center justify-center text-white shadow-xl">
              <div className="text-center">
                <p className="text-2xl font-bold">#1</p>
                <p className="text-[10px] font-bold uppercase tracking-widest">In Innovation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why AI&ML at GCET */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why AI & ML at GCET?</h2>
            <p className="text-slate-400">What sets our department apart from the rest.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Industry Aligned', icon: Globe, desc: 'Our curriculum is updated regularly in consultation with industry experts to ensure relevance.' },
              { title: 'Expert Faculty', icon: Users, desc: 'Learn from professors with extensive research backgrounds and industry experience.' },
              { title: 'Research Culture', icon: History, desc: 'We encourage undergraduate research from day one, with dedicated mentorship.' },
            ].map((feature, i) => (
              <div key={i} className="text-center space-y-6">
                <div className="inline-flex p-4 bg-white/5 rounded-2xl text-indigo-400 border border-white/10">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import PageHeader from '../components/PageHeader';
import { Target, Eye, ShieldCheck, Heart, Star, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function VisionMission() {
  return (
    <div>
      <PageHeader 
        title="Vision & Mission" 
        subtitle="Our guiding principles that drive our pursuit of excellence in Computer Science and Engineering."
        breadcrumb="About"
      />

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 bg-indigo-600 rounded-[3rem] text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <Eye className="w-16 h-16 mb-8 opacity-50" />
            <h2 className="text-4xl font-bold mb-8">Our Vision</h2>
            <p className="text-xl leading-relaxed opacity-90">
              To produce globally competent and socially responsible computer science engineers contributing to the advancement of engineering and technology which involves creativity and innovation by providing excellent learning environment with world class facilities.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 bg-slate-900 rounded-[3rem] text-white relative overflow-hidden"
          >
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
            <Target className="w-16 h-16 mb-8 opacity-50" />
            <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
            <ul className="space-y-6 text-lg opacity-90">
              <li className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-indigo-400 rounded-full mt-3 shrink-0"></div>
                <span>To be a centre of excellence in instruction, innovation in research and scholarship, and service to the stake holders, the profession, and the public.</span>
              </li>
              <li className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-indigo-400 rounded-full mt-3 shrink-0"></div>
                <span>To prepare graduates to enter a rapidly changing field as a competent computer science engineer.</span>
              </li>
              <li className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-indigo-400 rounded-full mt-3 shrink-0"></div>
                <span>To prepare graduate capable in all phases of software development, possess a firm understanding of hardware technologies, have the strong mathematical background necessary for scientific computing, and be sufficiently well versed in general theory to allow growth within the discipline as it advances.</span>
              </li>
              <li className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-indigo-400 rounded-full mt-3 shrink-0"></div>
                <span>To prepare graduates to assume leadership roles by possessing good communication skills, the ability to work effectively as team members, and an appreciation for their social and ethical responsibility in a global setting.</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-slate-600">The pillars that support our academic and research environment.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Excellence', icon: Star, desc: 'Striving for the highest standards in everything we do.' },
              { title: 'Innovation', icon: Zap, desc: 'Encouraging creative thinking and novel solutions.' },
              { title: 'Integrity', icon: ShieldCheck, desc: 'Upholding honesty and ethical conduct in all interactions.' },
              { title: 'Empathy', icon: Heart, desc: 'Considering the human impact of our technological advancements.' },
            ].map((value, i) => (
              <div key={i} className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm text-center">
                <div className="inline-flex p-3 bg-indigo-50 text-indigo-600 rounded-2xl mb-6">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

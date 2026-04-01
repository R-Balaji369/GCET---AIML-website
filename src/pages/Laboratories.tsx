import React from 'react';
import PageHeader from '../components/PageHeader';
import { labData } from '../data';
import { Beaker, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Laboratories() {
  return (
    <div>
      <PageHeader 
        title="Laboratories" 
        subtitle="State-of-the-art facilities equipped with the latest hardware and software to support cutting-edge research and practical learning."
        breadcrumb="Academic"
      />

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {labData.map((lab, i) => (
            <motion.div 
              key={lab.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                  <img 
                    src={lab.image} 
                    alt={lab.name} 
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="absolute inset-0 bg-indigo-600/10 mix-blend-multiply"></div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 space-y-8">
                <div>
                  <div className="inline-flex p-3 bg-indigo-50 text-indigo-600 rounded-2xl mb-6">
                    <Beaker className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">{lab.name}</h2>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    {lab.description}
                  </p>
                </div>

                <div className="space-y-6">
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Key Facilities</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {lab.facilities.map((facility, idx) => (
                      <div key={idx} className="flex items-center space-x-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                        <Zap className="w-4 h-4 text-indigo-500" />
                        <span className="text-sm font-medium text-slate-700">{facility}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex items-center space-x-6 text-slate-500">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-emerald-500" />
                    <span className="text-xs font-semibold">Safety Certified</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-semibold">Currently Active</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lab Policies */}
      <section className="bg-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-12">Laboratory Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Access Control', desc: 'Secure entry for authorized students and faculty only.' },
              { title: 'Resource Booking', desc: 'Online portal for scheduling high-performance compute time.' },
              { title: 'Safety First', desc: 'Strict adherence to electrical and equipment safety protocols.' },
            ].map((policy, i) => (
              <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-4">{policy.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{policy.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

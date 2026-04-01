import React from 'react';
import PageHeader from '../components/PageHeader';
import { FileText, Globe, Search, Award, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Publications() {
  const publications = [
    {
      title: 'International Journal of Research in Machine Learning and Deep Learning (IJRMLDL)',
      authors: 'Department of AI & ML, GCET',
      journal: 'GCET Departmental Journal',
      year: '2024',
      link: 'https://gcet.edu.in/announcement/IJRMLDL%20Journal.pdf'
    },
    {
      title: 'Deep Learning for Medical Image Analysis',
      authors: 'Dr. S. Ravi Kumar, et al.',
      journal: 'IEEE Transactions on Medical Imaging',
      year: '2023',
      link: '#'
    },
    {
      title: 'Advanced Machine Learning in AI & ML Department',
      authors: 'GCET Faculty Research Team',
      journal: 'Departmental Research Journal',
      year: '2024',
      link: '#'
    },
    {
      title: 'Machine Learning Approaches for Predictive Maintenance',
      authors: 'Dr. M. Lakshmi, et al.',
      journal: 'International Journal of Machine Learning',
      year: '2023',
      link: '#'
    },
    {
      title: 'Ethical Considerations in Generative AI',
      authors: 'Prof. A. Sharma, et al.',
      journal: 'AI & Society',
      year: '2024',
      link: '#'
    },
    {
      title: 'Natural Language Processing for Regional Languages',
      authors: 'Dr. K. Venkatesh, et al.',
      journal: 'ACM Transactions on Asian and Low-Resource Language Information Processing',
      year: '2024',
      link: '#'
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Faculty Publications" 
        subtitle="A showcase of the research contributions and intellectual output of our faculty members in the field of AI and ML."
        breadcrumb="Research"
      />

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              Advancing Knowledge Through Research and Publication.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Our faculty members are actively involved in research, publishing their findings in top-tier international journals and presenting at prestigious conferences. We foster a culture of scholarly inquiry and collaboration.
            </p>
            <div className="space-y-4">
              {[
                'Publications in high-impact factor journals',
                'Presentations at international conferences (ICML, NeurIPS, CVPR)',
                'Collaborative research with global institutions',
                'Mentorship for student research and publications'
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3 text-slate-700">
                  <div className="w-5 h-5 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=1000" 
                className="w-full h-full object-cover"
                alt="Research and Publication"
              />
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">Recent Publications</h3>
          <div className="grid grid-cols-1 gap-6">
            {publications.map((pub, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-slate-900">{pub.title}</h4>
                  <p className="text-slate-600 text-sm font-medium">{pub.authors}</p>
                  <p className="text-indigo-600 text-xs font-bold uppercase tracking-widest">{pub.journal} • {pub.year}</p>
                </div>
                <a 
                  href={pub.link} 
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-slate-900 text-white rounded-full text-sm font-bold hover:bg-indigo-600 transition-colors shrink-0"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Paper</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Impact */}
      <section className="bg-slate-900 py-24 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Research Impact</h2>
            <p className="text-slate-400">Our research contributions have a significant impact on the field and society.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Citations', value: '500+', desc: 'Our research is widely cited by scholars globally.' },
              { title: 'Patents', value: '10+', desc: 'We have filed several patents for innovative AI solutions.' },
              { title: 'Grants', value: '$1M+', desc: 'Secured research funding from national and international agencies.' },
            ].map((impact, i) => (
              <div key={i} className="p-8 bg-white/5 rounded-[2rem] border border-white/10 backdrop-blur-sm text-center">
                <h3 className="text-4xl font-bold text-indigo-400 mb-4">{impact.value}</h3>
                <h4 className="text-xl font-bold mb-2">{impact.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{impact.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

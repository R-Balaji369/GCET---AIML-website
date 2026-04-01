import React from 'react';
import PageHeader from '../components/PageHeader';
import { Users, Globe, Briefcase, Award, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Alumni() {
  const alumni = [
    {
      name: 'John Doe',
      batch: '2020-2024',
      company: 'Google',
      designation: 'AI Research Scientist',
      quote: 'The AI & ML department at GCET provided me with the perfect foundation for my career in research.',
      image: 'https://picsum.photos/seed/alumni1/400/400'
    },
    {
      name: 'Jane Smith',
      batch: '2020-2024',
      company: 'Microsoft',
      designation: 'Machine Learning Engineer',
      quote: 'The hands-on projects and mentorship from faculty were instrumental in my professional growth.',
      image: 'https://picsum.photos/seed/alumni2/400/400'
    },
    {
      name: 'Robert Brown',
      batch: '2021-2025',
      company: 'Amazon',
      designation: 'Data Scientist',
      quote: 'I am grateful for the opportunities and support I received from the department.',
      image: 'https://picsum.photos/seed/alumni3/400/400'
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Alumni Network" 
        subtitle="Our graduates are making significant contributions to the global tech industry and research community."
        breadcrumb="Students"
      />

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              A Global Community of AI Professionals.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Our alumni are our pride and joy. They are working in some of the most innovative companies and research institutions around the world, contributing to the advancement of AI and ML.
            </p>
            <div className="space-y-4">
              {[
                'Active alumni network with global reach',
                'Mentorship programs for current students',
                'Regular alumni meets and networking events',
                'Contributions to department growth and development'
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
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1000" 
                className="w-full h-full object-cover"
                alt="Alumni Network"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {alumni.map((person, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-6 border-4 border-indigo-50 shadow-sm">
                <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">{person.name}</h3>
              <p className="text-sm font-medium text-slate-500 mb-4">{person.batch}</p>
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold mb-6 uppercase tracking-widest">
                <Briefcase className="w-3 h-3" />
                <span>{person.company}</span>
              </div>
              <p className="text-slate-600 text-sm italic leading-relaxed">"{person.quote}"</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Alumni Services */}
      <section className="bg-slate-900 py-24 text-white overflow-hidden relative">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full -ml-48 -mb-48 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Alumni Services</h2>
            <p className="text-slate-400">We offer a range of services to support our alumni community.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Networking', desc: 'Connect with other alumni and professionals in the AI domain.' },
              { title: 'Mentorship', desc: 'Share your expertise and mentor current students.' },
              { title: 'Career Support', desc: 'Access career resources and job opportunities.' },
            ].map((service, i) => (
              <div key={i} className="p-8 bg-white/5 rounded-[2rem] border border-white/10 backdrop-blur-sm text-center">
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

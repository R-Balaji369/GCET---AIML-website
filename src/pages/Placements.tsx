import React from 'react';
import PageHeader from '../components/PageHeader';
import { Briefcase, TrendingUp, Users, Award, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Placements() {
  const stats = [
    { title: 'Placement Rate', value: '95%', desc: 'A high percentage of our graduates are placed in top companies.' },
    { title: 'Highest Package', value: '45 LPA', desc: 'Our students have secured competitive salary packages.' },
    { title: 'Average Package', value: '8.5 LPA', desc: 'Consistent growth in the average salary offered to our students.' },
    { title: 'Top Recruiters', value: '50+', desc: 'We have strong partnerships with leading tech companies.' }
  ];

  const recruiters = [
    'Google', 'Microsoft', 'Amazon', 'TCS', 'Infosys', 'Wipro', 'Accenture', 'Cognizant', 'Capgemini', 'IBM', 'Oracle', 'Intel'
  ];

  return (
    <div>
      <PageHeader 
        title="Placements" 
        subtitle="Our students are highly sought after by top-tier tech companies for their expertise in AI and ML."
        breadcrumb="Students"
      />

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              Empowering Students for a Successful Career in AI.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              The Department of AI & ML at GCET has a dedicated placement cell that works tirelessly to connect our students with the best career opportunities. We provide comprehensive training and support to ensure our graduates are industry-ready.
            </p>
            <div className="space-y-4">
              {[
                'Specialized training in AI/ML coding interviews',
                'Mock interviews and soft skills workshops',
                'Internship opportunities with leading tech firms',
                'Career counseling and mentorship programs'
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
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1000" 
                className="w-full h-full object-cover"
                alt="Placement and Career"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm text-center"
            >
              <h3 className="text-4xl font-bold text-indigo-600 mb-4">{stat.value}</h3>
              <h4 className="text-xl font-bold text-slate-900 mb-2">{stat.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Recruiters Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Top Recruiters</h2>
          <p className="text-slate-600">Leading companies that hire our talented graduates.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {recruiters.map((recruiter, i) => (
            <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center font-bold text-slate-400 hover:text-indigo-600 hover:bg-white hover:shadow-md transition-all cursor-default">
              {recruiter}
            </div>
          ))}
        </div>
      </section>

      {/* Placement Training */}
      <section className="bg-slate-900 py-24 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:flex items-center justify-between gap-16">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h2 className="text-3xl font-bold mb-6">Placement Training Program</h2>
              <p className="text-slate-400 text-lg mb-8">
                Our comprehensive training program covers all aspects of the placement process, from technical skills to soft skills.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <TrendingUp className="w-8 h-8 text-indigo-400 mb-4" />
                  <h4 className="font-bold mb-2">Technical Skills</h4>
                  <p className="text-xs text-slate-500">Intensive coding bootcamps and AI/ML workshops.</p>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <Users className="w-8 h-8 text-indigo-400 mb-4" />
                  <h4 className="font-bold mb-2">Soft Skills</h4>
                  <p className="text-xs text-slate-500">Communication, team collaboration, and leadership training.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-6">Our Training Modules</h3>
                <ul className="space-y-4">
                  {[
                    'Data Structures and Algorithms (DSA)',
                    'Machine Learning Model Development',
                    'Deep Learning Frameworks (PyTorch, TensorFlow)',
                    'Natural Language Processing (NLP)',
                    'Computer Vision (CV)',
                    'Cloud Computing and Deployment'
                  ].map((module, i) => (
                    <li key={i} className="flex items-center space-x-3 text-slate-300">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                      <span>{module}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

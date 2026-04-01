import React from 'react';
import PageHeader from '../components/PageHeader';
import { BookOpen, Video, Users, Award, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TeachingLearning() {
  const methods = [
    {
      title: 'Active Learning',
      icon: Users,
      desc: 'Flipped classrooms, group discussions, and collaborative problem-solving sessions to engage students actively.'
    },
    {
      title: 'Project-Based Learning',
      icon: Award,
      desc: 'Every semester includes a mini-project where students apply AI/ML concepts to solve real-world problems.'
    },
    {
      title: 'Digital Resources',
      icon: Video,
      desc: 'Access to recorded lectures, online coding platforms, and curated digital libraries for self-paced learning.'
    },
    {
      title: 'Continuous Assessment',
      icon: CheckCircle,
      desc: 'Regular quizzes, coding challenges, and peer reviews to provide timely feedback on student progress.'
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Teaching Learning Process" 
        subtitle="Our innovative pedagogical approaches designed to foster deep understanding and practical expertise in AI and ML."
        breadcrumb="About"
      />

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              A Student-Centric Approach to Modern Engineering.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              In the rapidly evolving field of AI and ML, traditional rote learning is insufficient. We employ a variety of modern teaching methodologies that prioritize critical thinking, creativity, and hands-on experience.
            </p>
            <div className="space-y-4">
              {[
                'Outcome-Based Education (OBE) framework',
                'Integration of industry-standard tools and platforms',
                'Mentorship-driven research initiatives',
                'Regular guest lectures from industry experts'
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
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000" 
                className="w-full h-full object-cover"
                alt="Modern Classroom"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {methods.map((method, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                <method.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{method.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{method.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* E-Learning Section */}
      <section className="bg-slate-900 py-24 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:flex items-center justify-between gap-16">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h2 className="text-3xl font-bold mb-6">Blended Learning Environment</h2>
              <p className="text-slate-400 text-lg mb-8">
                We leverage cutting-edge educational technology to provide a seamless learning experience both inside and outside the classroom.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <BookOpen className="w-8 h-8 text-indigo-400 mb-4" />
                  <h4 className="font-bold mb-2">LMS Platform</h4>
                  <p className="text-xs text-slate-500">Centralized hub for all course materials and assignments.</p>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <Video className="w-8 h-8 text-indigo-400 mb-4" />
                  <h4 className="font-bold mb-2">Virtual Labs</h4>
                  <p className="text-xs text-slate-500">Cloud-based environments for coding and experimentation.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-6">Key Pedagogical Tools</h3>
                <ul className="space-y-4">
                  {[
                    'Google Classroom for resource sharing',
                    'Kaggle for data science competitions',
                    'GitHub for version control and collaboration',
                    'Coursera & NPTEL integration for certifications',
                    'HackerRank for coding proficiency'
                  ].map((tool, i) => (
                    <li key={i} className="flex items-center space-x-3 text-slate-300">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                      <span>{tool}</span>
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

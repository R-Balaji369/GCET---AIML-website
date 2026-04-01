import React from 'react';
import PageHeader from '../components/PageHeader';
import { CheckCircle2, BookOpen, Target, Award } from 'lucide-react';

export default function Programs() {
  return (
    <div>
      <PageHeader 
        title="Academic Programs" 
        subtitle="Comprehensive curriculum designed to bridge the gap between theoretical foundations and industrial applications of AI."
        breadcrumb="Academic"
      />

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">B.Tech in Artificial Intelligence & Machine Learning</h2>
              <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                Our undergraduate program is meticulously crafted to provide students with a solid foundation in computer science while specializing in the rapidly evolving fields of AI and ML. The program emphasizes hands-on learning through projects, internships, and research opportunities.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: 'Duration', value: '4 Years (8 Semesters)' },
                  { title: 'Intake', value: '180 Students' },
                  { title: 'Affiliation', value: 'JNTU Hyderabad' },
                  { title: 'Accreditation', value: 'NBA Accredited' },
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{item.title}</p>
                    <p className="text-lg font-bold text-slate-900">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <Target className="w-6 h-6 text-indigo-600 mr-3" />
                Program Educational Objectives (PEOs)
              </h3>
              <ul className="space-y-4">
                {[
                  'To provide students with a strong foundation in mathematical, scientific and engineering fundamentals.',
                  'To develop the ability to design and implement AI/ML solutions for real-world problems.',
                  'To foster professional ethics, leadership qualities, and lifelong learning.',
                  'To prepare students for successful careers in industry, research, and entrepreneurship.'
                ].map((peo, i) => (
                  <li key={i} className="flex items-start space-x-4 p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                    <span className="text-slate-600">{peo}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <BookOpen className="w-6 h-6 text-indigo-600 mr-3" />
                Curriculum Highlights
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Data Structures & Algorithms',
                  'Probability & Statistics',
                  'Machine Learning Foundations',
                  'Deep Learning & Neural Networks',
                  'Natural Language Processing',
                  'Computer Vision',
                  'Reinforcement Learning',
                  'Big Data Analytics',
                  'AI Ethics & Governance',
                  'Robotics & Automation'
                ].map((course, i) => (
                  <div key={i} className="flex items-center space-x-3 p-3 bg-indigo-50/50 rounded-lg border border-indigo-100/50">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    <span className="text-sm font-medium text-slate-700">{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-900 rounded-3xl p-8 text-white">
              <Award className="w-12 h-12 text-indigo-400 mb-6" />
              <h3 className="text-xl font-bold mb-4">Learning Outcomes</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Upon completion, students will be able to design, implement, and evaluate AI-based systems to meet desired needs within realistic constraints.
              </p>
              <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-bold transition-colors">
                Download Syllabus
              </button>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Future Programs</h3>
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <p className="font-bold text-slate-900">M.Tech in AI & Data Science</p>
                  <p className="text-xs text-slate-500 mt-1">Proposed for Academic Year 2025-26</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <p className="font-bold text-slate-900">Ph.D. Research Program</p>
                  <p className="text-xs text-slate-500 mt-1">In collaboration with research centers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

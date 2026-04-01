import React from 'react';
import PageHeader from '../components/PageHeader';
import { Download, FileText, Globe, Search, Award, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Downloads() {
  const categories = [
    {
      title: 'Academic Resources',
      items: [
        { name: 'B.Tech AI&ML Syllabus', size: '1.2 MB', link: '#' },
        { name: 'Academic Calendar 2024-25', size: '0.8 MB', link: '#' },
        { name: 'Course Structure and Credits', size: '0.5 MB', link: '#' }
      ]
    },
    {
      title: 'Forms and Applications',
      items: [
        { name: 'Internship Application Form', size: '0.3 MB', link: '#' },
        { name: 'Project Proposal Template', size: '0.4 MB', link: '#' },
        { name: 'Leave Application Form', size: '0.2 MB', link: '#' }
      ]
    },
    {
      title: 'Department Publications',
      items: [
        { name: 'Annual Report 2023', size: '2.5 MB', link: '#' },
        { name: 'Department Newsletter - Q1 2024', size: '1.8 MB', link: '#' },
        { name: 'Research Brochure', size: '3.2 MB', link: '#' }
      ]
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Downloads" 
        subtitle="Access and download important documents, forms, and resources related to the Department of AI & ML."
        breadcrumb="Resources"
      />

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {categories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-4">{category.title}</h3>
              <div className="space-y-4">
                {category.items.map((item, j) => (
                  <div 
                    key={j} 
                    className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
                        <p className="text-xs text-slate-500">{item.size}</p>
                      </div>
                    </div>
                    <a 
                      href={item.link} 
                      className="p-2 text-slate-400 hover:text-indigo-600 transition-colors"
                      title="Download"
                    >
                      <Download className="w-5 h-5" />
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Important Notice */}
      <section className="bg-slate-900 py-24 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Important Notice</h2>
            <p className="text-slate-400">Please ensure you are downloading the latest versions of these documents.</p>
          </div>
          <div className="p-8 bg-white/5 rounded-[2rem] border border-white/10 backdrop-blur-sm text-center max-w-3xl mx-auto">
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              All documents are provided in PDF format. If you have trouble accessing any of these files, please contact the department office.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center space-x-2 text-indigo-400 font-bold">
                <CheckCircle className="w-5 h-5" />
                <span>Verified Content</span>
              </div>
              <div className="w-1 h-1 bg-slate-700 rounded-full"></div>
              <div className="flex items-center space-x-2 text-indigo-400 font-bold">
                <CheckCircle className="w-5 h-5" />
                <span>Secure Downloads</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

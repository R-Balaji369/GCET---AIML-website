import React from 'react';
import PageHeader from '../components/PageHeader';
import { Book, Search, Globe, Database, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Library() {
  const resources = [
    {
      title: 'Physical Collection',
      icon: Book,
      desc: 'Over 5,000 volumes of books specifically focused on Artificial Intelligence, Machine Learning, Data Science, and related fields.'
    },
    {
      title: 'Digital Library',
      icon: Globe,
      desc: 'Access to IEEE Xplore, ACM Digital Library, and Springer journals for the latest research publications.'
    },
    {
      title: 'Project Repository',
      icon: Database,
      desc: 'A comprehensive archive of past student projects, research papers, and technical reports for reference.'
    },
    {
      title: 'Online Journals',
      icon: Search,
      desc: 'Subscriptions to top-tier international journals and conference proceedings in the AI domain.'
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Department Library" 
        subtitle="A specialized knowledge hub for students and faculty, providing access to a vast collection of resources in AI and ML."
        breadcrumb="Academic"
      />

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              Fueling Research and Innovation Through Knowledge.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Our department library is more than just a collection of books; it is a space for intellectual exploration and discovery. We provide a quiet and conducive environment for study, research, and collaboration.
            </p>
            <div className="space-y-4">
              {[
                'Specialized sections for AI, ML, and Data Science',
                'High-speed internet access for digital research',
                'Automated library management system',
                'Inter-library loan facilities with central library'
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
                src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=1000" 
                className="w-full h-full object-cover"
                alt="Department Library"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                <resource.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{resource.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{resource.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Library Services */}
      <section className="bg-slate-900 py-24 text-white overflow-hidden relative">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full -ml-48 -mb-48 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Library Services</h2>
            <p className="text-slate-400">We offer a range of services to support academic and research needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Reference Service', desc: 'Expert assistance in locating information and using library resources.' },
              { title: 'Current Awareness', desc: 'Regular updates on new arrivals and latest research trends.' },
              { title: 'Digital Access', desc: 'Remote access to e-resources for students and faculty.' },
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

import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { facultyData } from '../data';
import { Search, Mail, Linkedin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Faculty() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFaculty = facultyData.filter(f => 
    f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    f.researchInterests.some(ri => ri.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div>
      <PageHeader 
        title="Faculty Directory" 
        subtitle="Meet our distinguished faculty members who are leading the way in AI and Machine Learning research and education."
        breadcrumb="Academic"
      />

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Bar */}
        <div className="relative max-w-xl mb-16">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by name or research interest..."
            className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFaculty.map((faculty, i) => (
            <motion.div
              key={faculty.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white border border-slate-200 rounded-3xl overflow-hidden hover:shadow-2xl hover:border-indigo-100 transition-all"
            >
              <div className="aspect-square overflow-hidden relative">
                <img 
                  src={faculty.photo} 
                  alt={faculty.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute bottom-4 right-4 flex space-x-2">
                  {faculty.linkedIn && (
                    <a href={faculty.linkedIn} className="p-2 bg-white/90 backdrop-blur rounded-lg text-slate-600 hover:text-indigo-600 shadow-sm transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {faculty.googleScholar && (
                    <a href={faculty.googleScholar} className="p-2 bg-white/90 backdrop-blur rounded-lg text-slate-600 hover:text-indigo-600 shadow-sm transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{faculty.name}</h3>
                <p className="text-indigo-600 font-semibold text-sm mb-4">{faculty.designation}</p>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">Qualification</p>
                    <p className="text-sm text-slate-600">{faculty.qualification}</p>
                  </div>
                  
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">Research Interests</p>
                    <div className="flex flex-wrap gap-2">
                      {faculty.researchInterests.map((interest, idx) => (
                        <span key={idx} className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-medium rounded">
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center text-slate-500 hover:text-indigo-600 transition-colors">
                    <Mail className="w-4 h-4 mr-2" />
                    <a href={`mailto:${faculty.email}`} className="text-xs font-medium">{faculty.email}</a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredFaculty.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500">No faculty members found matching your search.</p>
          </div>
        )}
      </section>
    </div>
  );
}

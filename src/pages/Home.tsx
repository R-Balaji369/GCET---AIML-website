import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Brain, Network, Database, Users, GraduationCap, Award, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { announcements, achievements } from '../data';

export default function Home() {
  return (
    <div className="space-y-16 md:space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] md:h-[90vh] flex items-center overflow-hidden bg-slate-900 py-20 md:py-0">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-30"
            alt="AI Concept"
          />
          <div className="absolute inset-0 bg-slate-900/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 pt-32 md:pt-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 mb-8 text-[10px] font-bold tracking-[0.2em] text-indigo-400 uppercase bg-indigo-400/5 rounded-full border border-indigo-400/10 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
              <span>Department of AI & Machine Learning</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-white mb-8 leading-[1.05] tracking-[-0.03em]">
              Architecting the <span className="text-indigo-400">Future</span> of Intelligence.
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 mb-12 leading-relaxed max-w-2xl font-medium">
              Geethanjali College of Engineering and Technology is at the forefront of AI education, fostering innovation and excellence in the most transformative field of the 21st century.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link to="/about" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all flex items-center justify-center group shadow-lg shadow-indigo-600/20">
                Explore Department
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/programs" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl backdrop-blur-md transition-all border border-white/10 text-center">
                Our Programs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Infinite Image Slider */}
      <section className="overflow-hidden bg-white py-10 border-y border-slate-100">
        <div className="relative flex overflow-x-hidden">
          <motion.div
            animate={{
              x: [0, -2592], // (400px width + 32px margin) * 6 images = 2592px
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
            whileHover={{ scale: 1.02 }}
            className="flex whitespace-nowrap"
          >
            {[
              "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
            ].map((url, index) => (
              <div key={index} className="mx-4 w-[400px] h-[250px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg border border-slate-200 group relative">
                <img src={url} alt={`Slide ${index}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <p className="text-white font-bold text-sm">Department Highlight {index + 1}</p>
                </div>
              </div>
            ))}
            {/* Duplicate for infinite effect */}
            {[
              "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
            ].map((url, index) => (
              <div key={`dup-${index}`} className="mx-4 w-[400px] h-[250px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg border border-slate-200 group relative">
                <img src={url} alt={`Slide Dup ${index}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <p className="text-white font-bold text-sm">Department Highlight {index + 1}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Faculty Members', value: '25+', icon: Users },
            { label: 'Research Papers', value: '150+', icon: BookOpen },
            { label: 'Student Intake', value: '180', icon: GraduationCap },
            { label: 'Placements', value: '95%', icon: Award },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-slate-50 rounded-3xl border border-slate-100 text-center group hover:bg-white hover:shadow-xl hover:border-indigo-100 transition-all"
            >
              <div className="inline-flex p-3 bg-indigo-50 text-indigo-600 rounded-2xl mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-slate-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Areas */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Cutting-Edge Specializations</h2>
          <p className="text-slate-600">Our curriculum and research focus on the most impactful domains of modern artificial intelligence.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Machine Learning', icon: Brain, desc: 'Developing algorithms that learn from data to make predictions.' },
            { title: 'Deep Learning', icon: Network, desc: 'Neural network architectures for complex pattern recognition.' },
            { title: 'Computer Vision', icon: Cpu, desc: 'Enabling machines to interpret and understand visual information.' },
            { title: 'Data Science', icon: Database, desc: 'Extracting meaningful insights from structured and unstructured data.' },
          ].map((area, i) => (
            <div key={i} className="p-8 bg-white border border-slate-200 rounded-3xl hover:shadow-lg transition-shadow">
              <area.icon className="w-10 h-10 text-indigo-600 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-4">{area.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{area.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Announcements & Events */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="flex justify-between items-end mb-8">
                <h2 className="text-3xl font-bold text-slate-900">Latest Announcements</h2>
                <Link to="/announcements" className="text-indigo-600 font-semibold text-sm hover:underline">View All</Link>
              </div>
              <div className="space-y-4">
                {announcements.map((ann) => (
                  <div key={ann.id} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <span className="px-2 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-wider rounded">
                        {ann.category}
                      </span>
                      <span className="text-xs text-slate-400">{ann.date}</span>
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">{ann.title}</h3>
                    <p className="text-sm text-slate-600 line-clamp-2">{ann.content}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex justify-between items-end mb-8">
                <h2 className="text-3xl font-bold text-slate-900">Student Achievements</h2>
                <Link to="/achievements" className="text-indigo-600 font-semibold text-sm hover:underline">View All</Link>
              </div>
              <div className="relative group overflow-hidden rounded-3xl aspect-video">
                <img 
                  src={achievements[0].image} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt="Achievement"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <span className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-2 block">
                    {achievements[0].category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">{achievements[0].title}</h3>
                  <p className="text-slate-300 text-sm">{achievements[0].description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Partners */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Our Industry Partners</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
            {['Microsoft', 'Google', 'Amazon', 'NVIDIA', 'Intel', 'IBM'].map((partner) => (
              <span key={partner} className="text-2xl font-display font-bold text-slate-400">{partner}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-indigo-600 rounded-3xl md:rounded-[3rem] p-8 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400/20 rounded-full -ml-32 -mb-32 blur-3xl"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-6 md:mb-8">Join the AI Revolution at GCET</h2>
            <p className="text-indigo-100 text-base sm:text-lg mb-8 md:mb-12 leading-relaxed">
              Whether you're a prospective student, a researcher, or an industry partner, there's a place for you in our vibrant AI ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-xl hover:bg-indigo-50 transition-colors text-center">
                Get in Touch
              </Link>
              <Link to="/programs" className="px-8 py-4 bg-indigo-500 text-white font-bold rounded-xl hover:bg-indigo-400 transition-colors border border-indigo-400 text-center">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

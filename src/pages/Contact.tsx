import React from 'react';
import PageHeader from '../components/PageHeader';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div>
      <PageHeader 
        title="Contact Us" 
        subtitle="Have questions? We're here to help. Reach out to the Department of AI & ML for academic inquiries, collaborations, or general information."
      />

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Get in Touch</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900">Email Us</h3>
                  <p className="text-sm text-slate-500">hod.aiml@gcet.edu.in</p>
                  <p className="text-sm text-slate-500">office.aiml@gcet.edu.in</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900">Call Us</h3>
                  <p className="text-sm text-slate-500">+91 91820 58187</p>
                  <p className="text-sm text-slate-500">+91 40 2422 8187</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-indigo-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Our Location</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Department of AI & ML, Block 4,<br />
                    Geethanjali College of Engineering and Technology,<br />
                    Cheeryal (V), Keesara (M), Medchal Dist.,<br />
                    Telangana, India - 501301
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-6 bg-indigo-600 rounded-2xl text-white">
              <Clock className="w-6 h-6" />
              <div>
                <p className="text-xs font-bold uppercase tracking-widest opacity-80">Office Hours</p>
                <p className="font-medium">Monday - Saturday: 9:00 AM - 4:30 PM</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-12 shadow-xl"
          >
            <div className="flex items-center space-x-3 mb-8">
              <MessageSquare className="w-6 h-6 text-indigo-600" />
              <h2 className="text-2xl font-bold text-slate-900">Send a Message</h2>
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Subject</label>
                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all">
                  <option>General Inquiry</option>
                  <option>Admission Question</option>
                  <option>Research Collaboration</option>
                  <option>Placement/Industry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all flex items-center justify-center group">
                Send Message
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="w-full h-[400px] bg-slate-100 rounded-[2.5rem] overflow-hidden border border-slate-200 relative">
          <div className="absolute inset-0 flex items-center justify-center text-slate-400 flex-col">
            <MapPin className="w-12 h-12 mb-4" />
            <p className="font-medium">Interactive Map Integration</p>
            <p className="text-xs">Geethanjali College of Engineering and Technology</p>
          </div>
          {/* In a real app, I'd use an iframe or Google Maps API here */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.301948624191!2d78.6538419751673!3d17.49308078341352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb76082987823d%3A0x633393165b678c93!2sGeethanjali%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1710170000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="GCET Location"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

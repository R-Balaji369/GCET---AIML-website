import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                AI
              </div>
              <span className="text-xl font-bold text-white">GCET AI & ML</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Empowering the next generation of AI leaders through excellence in education, research, and innovation at Geethanjali College of Engineering and Technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-indigo-400 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-indigo-400 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-indigo-400 transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-indigo-400 transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-indigo-400 transition-colors">About Department</Link></li>
              <li><Link to="/faculty" className="hover:text-indigo-400 transition-colors">Faculty Directory</Link></li>
              <li><Link to="/research" className="hover:text-indigo-400 transition-colors">Research Areas</Link></li>
              <li><Link to="/placements" className="hover:text-indigo-400 transition-colors">Placements</Link></li>
              <li><Link to="/gallery" className="hover:text-indigo-400 transition-colors">Photo Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Academic</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/programs" className="hover:text-indigo-400 transition-colors">B.Tech Programs</Link></li>
              <li><Link to="/laboratories" className="hover:text-indigo-400 transition-colors">Laboratories</Link></li>
              <li><Link to="/downloads" className="hover:text-indigo-400 transition-colors">Downloads</Link></li>
              <li><Link to="/announcements" className="hover:text-indigo-400 transition-colors">Announcements</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-indigo-400 shrink-0" />
                <span>Geethanjali College of Engineering and Technology, Cheeryal, Keesara, Hyderabad, Telangana 501301</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-indigo-400 shrink-0" />
                <span>+91 91820 58187</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-indigo-400 shrink-0" />
                <span>hod.aiml@gcet.edu.in</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Department of AI & ML, GCET. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';

const navItems = [
  { name: 'Home', path: '/' },
  { 
    name: 'About', 
    submenu: [
      { name: 'About Department', path: '/about' },
      { name: 'Vision & Mission', path: '/vision-mission' },
      { name: 'Teaching Learning', path: '/teaching-learning' },
    ]
  },
  { 
    name: 'Academic', 
    submenu: [
      { name: 'Faculty', path: '/faculty' },
      { name: 'Programs', path: '/programs' },
      { name: 'Laboratories', path: '/laboratories' },
      { name: 'Department Library', path: '/library' },
    ]
  },
  { 
    name: 'Research', 
    submenu: [
      { name: 'Research Areas', path: '/research' },
      { name: 'Publications', path: '/publications' },
    ]
  },
  { 
    name: 'Students', 
    submenu: [
      { name: 'Achievements', path: '/achievements' },
      { name: 'Placements', path: '/placements' },
      { name: 'Alumni', path: '/alumni' },
      { name: 'Gallery', path: '/gallery' },
    ]
  },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const isTransparent = isHomePage && !scrolled;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveSubmenu(null);
    setIsSearchOpen(false);
  }, [location]);

  return (
    <>
      <nav className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isTransparent 
          ? "bg-transparent border-transparent py-6" 
          : scrolled 
            ? "bg-white/90 backdrop-blur-md py-2 border-slate-200 shadow-sm" 
            : "bg-white py-4 border-slate-200"
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg sm:text-xl">
                AI
              </div>
              <div>
                <h1 className={cn(
                  "text-base sm:text-lg font-bold leading-tight transition-colors",
                  isTransparent ? "text-white" : "text-slate-900"
                )}>GCET</h1>
                <p className={cn(
                  "text-[8px] sm:text-[10px] uppercase tracking-widest font-semibold transition-colors",
                  isTransparent ? "text-slate-300" : "text-slate-500"
                )}>Dept. of AI & ML</p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div 
                  key={item.name} 
                  className="relative group"
                  onMouseEnter={() => setActiveSubmenu(item.name)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  {item.submenu ? (
                    <button className={cn(
                      "px-4 py-2 text-sm font-medium flex items-center transition-colors",
                      isTransparent ? "text-white/90 hover:text-white" : "text-slate-600 hover:text-indigo-600"
                    )}>
                      {item.name}
                      <ChevronDown className="ml-1 w-4 h-4 opacity-50 group-hover:rotate-180 transition-transform" />
                    </button>
                  ) : (
                    <Link 
                      to={item.path!} 
                      className={cn(
                        "px-4 py-2 text-sm font-medium transition-colors",
                        location.pathname === item.path 
                          ? (isTransparent ? "text-white" : "text-indigo-600") 
                          : (isTransparent ? "text-white/70 hover:text-white" : "text-slate-600 hover:text-indigo-600")
                      )}
                    >
                      {item.name}
                    </Link>
                  )}

                  {item.submenu && (
                    <AnimatePresence>
                      {activeSubmenu === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute left-0 mt-0 w-56 bg-white border border-slate-200 shadow-xl rounded-xl overflow-hidden py-2"
                        >
                          {item.submenu.map((sub) => (
                            <Link
                              key={sub.name}
                              to={sub.path}
                              className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-indigo-600 transition-colors"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
              <button 
                onClick={() => setIsSearchOpen(true)}
                className={cn(
                  "ml-4 p-2 transition-colors",
                  isTransparent ? "text-white/70 hover:text-white" : "text-slate-400 hover:text-indigo-600"
                )}
              >
                <Search className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                  "p-2 transition-colors",
                  isTransparent ? "text-white" : "text-slate-600 hover:text-indigo-600"
                )}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.submenu ? (
                      <div className="space-y-1">
                        <p className="px-3 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider">{item.name}</p>
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-indigo-600 hover:bg-slate-50 rounded-lg"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link
                        to={item.path!}
                        className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-indigo-600 hover:bg-slate-50 rounded-lg"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-sm flex items-start justify-center pt-24 px-4"
            onClick={() => setIsSearchOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: -20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: -20 }}
              className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 w-6 h-6" />
                <input
                  autoFocus
                  type="text"
                  placeholder="Search faculty, research, events..."
                  className="w-full pl-16 pr-6 py-6 text-lg border-b border-slate-100 focus:outline-none"
                />
                <button 
                  onClick={() => setIsSearchOpen(false)}
                  className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-8">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Quick Links</h4>
                <div className="grid grid-cols-2 gap-4">
                  {['Faculty Directory', 'B.Tech Program', 'AI Lab', 'Research Areas', 'Placements', 'Contact Us'].map((link) => (
                    <button key={link} className="text-left px-4 py-2 rounded-lg hover:bg-slate-50 text-slate-600 text-sm transition-colors">
                      {link}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

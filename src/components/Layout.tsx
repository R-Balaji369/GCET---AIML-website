import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { cn } from '../lib/utils';

export default function Layout() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      <main className={cn("flex-grow", !isHomePage && "pt-20")}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

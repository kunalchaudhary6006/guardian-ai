"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <nav className="border-b border-slate-100 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <Link to="/">
              <Logo />
            </Link>
            
            <div className="hidden md:flex items-center gap-8">
              <Link to="/pricing" className="text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors">Pricing</Link>
              <Link to="/contact" className="text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors">Contact</Link>
              <Link to="/dashboard" className="text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors">Demo</Link>
              <div className="h-4 w-[1px] bg-slate-200" />
              <Link to="/login" className="text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors">Log in</Link>
              <Button asChild className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-6 font-bold">
                <Link to="/signup">Get Started</Link>
              </Button>
            </div>

            <button className="md:hidden text-slate-500" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-100 p-4 space-y-4 bg-white">
            <Link to="/pricing" className="block text-base font-bold text-slate-500">Pricing</Link>
            <Link to="/contact" className="block text-base font-bold text-slate-500">Contact</Link>
            <Link to="/dashboard" className="block text-base font-bold text-slate-500">Demo</Link>
            <Link to="/login" className="block text-base font-bold text-slate-500">Log in</Link>
            <Button asChild className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-full font-bold">
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>
        )}
      </nav>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-slate-50 border-t border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-8">
            <Logo size="sm" />
          </div>
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <Link to="/pricing" className="text-sm font-bold text-slate-400 hover:text-slate-900 transition-colors">Pricing</Link>
            <Link to="/contact" className="text-sm font-bold text-slate-400 hover:text-slate-900 transition-colors">Contact</Link>
            <Link to="/privacy" className="text-sm font-bold text-slate-400 hover:text-slate-900 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-sm font-bold text-slate-400 hover:text-slate-900 transition-colors">Terms & Conditions</Link>
            <Link to="/login" className="text-sm font-bold text-slate-400 hover:text-slate-900 transition-colors">Login</Link>
          </div>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">© 2024 Guardian AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingLayout;
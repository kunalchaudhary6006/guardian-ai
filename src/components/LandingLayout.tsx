"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <nav className="border-b border-slate-100 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
                <ShieldCheck className="text-white" size={20} />
              </div>
              <span className="font-bold text-xl text-slate-900">Guardian AI</span>
            </Link>
            
            <div className="hidden md:flex items-center gap-8">
              <Link to="/pricing" className="text-sm font-medium text-slate-600 hover:text-slate-900">Pricing</Link>
              <Link to="/dashboard" className="text-sm font-medium text-slate-600 hover:text-slate-900">Demo</Link>
              <div className="h-4 w-[1px] bg-slate-200" />
              <Link to="/login" className="text-sm font-medium text-slate-600 hover:text-slate-900">Log in</Link>
              <Button asChild className="bg-slate-900 hover:bg-slate-800 rounded-full px-6">
                <Link to="/signup">Get Started</Link>
              </Button>
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-100 p-4 space-y-4 bg-white">
            <Link to="/pricing" className="block text-base font-medium text-slate-600">Pricing</Link>
            <Link to="/dashboard" className="block text-base font-medium text-slate-600">Demo</Link>
            <Link to="/login" className="block text-base font-medium text-slate-600">Log in</Link>
            <Button asChild className="w-full bg-slate-900 hover:bg-slate-800 rounded-full">
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>
        )}
      </nav>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-slate-50 border-t border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center">
              <ShieldCheck className="text-white" size={14} />
            </div>
            <span className="font-bold text-slate-900">Guardian AI</span>
          </div>
          <p className="text-slate-500 text-sm">© 2024 Guardian AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingLayout;
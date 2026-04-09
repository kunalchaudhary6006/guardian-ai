"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <nav className="border-b border-slate-100 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/">
              <Logo />
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
          <div className="flex justify-center mb-4">
            <Logo size="sm" />
          </div>
          <p className="text-slate-500 text-sm">© 2024 Guardian AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingLayout;
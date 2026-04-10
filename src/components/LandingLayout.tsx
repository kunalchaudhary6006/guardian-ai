"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-[#020617] text-white flex flex-col">
      <nav className="border-b border-[#1E293B] sticky top-0 bg-[#020617]/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/">
              <Logo />
            </Link>
            
            <div className="hidden md:flex items-center gap-8">
              <Link to="/pricing" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Pricing</Link>
              <Link to="/contact" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Contact</Link>
              <Link to="/dashboard" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Demo</Link>
              <div className="h-4 w-[1px] bg-[#1E293B]" />
              <Link to="/login" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Log in</Link>
              <Button asChild className="bg-blue-600 hover:bg-blue-700 rounded-full px-6 shadow-lg shadow-blue-900/20">
                <Link to="/signup">Get Started</Link>
              </Button>
            </div>

            <button className="md:hidden text-slate-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-[#1E293B] p-4 space-y-4 bg-[#0F172A]">
            <Link to="/pricing" className="block text-base font-medium text-slate-400">Pricing</Link>
            <Link to="/contact" className="block text-base font-medium text-slate-400">Contact</Link>
            <Link to="/dashboard" className="block text-base font-medium text-slate-400">Demo</Link>
            <Link to="/login" className="block text-base font-medium text-slate-400">Log in</Link>
            <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 rounded-full">
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>
        )}
      </nav>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-[#0F172A] border-t border-[#1E293B] py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Logo size="sm" />
          </div>
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <Link to="/pricing" className="text-sm text-slate-500 hover:text-white transition-colors">Pricing</Link>
            <Link to="/contact" className="text-sm text-slate-500 hover:text-white transition-colors">Contact</Link>
            <Link to="/privacy" className="text-sm text-slate-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-slate-500 hover:text-white transition-colors">Terms & Conditions</Link>
            <Link to="/login" className="text-sm text-slate-500 hover:text-white transition-colors">Login</Link>
          </div>
          <p className="text-slate-600 text-sm">© 2024 Guardian AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingLayout;
"use client";

import React, { useEffect } from 'react';
import LandingLayout from '@/components/LandingLayout';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { Shield, Zap, Lock, Globe, ArrowRight, Play } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      navigate('/dashboard');
    }
  }, [navigate]);

  return (
    <LandingLayout>
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider mb-8 border border-blue-500/20">
            <Zap size={14} className="text-blue-400" fill="currentColor" /> Next-Gen Safety Infrastructure
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8">
            Secure your platform with <span className="text-blue-500">AI-driven</span> safety.
          </h1>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Guardian AI provides real-time content moderation, threat intelligence, and policy enforcement for modern digital communities.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-full px-8 h-14 text-lg shadow-lg shadow-blue-900/20 w-full sm:w-auto">
              <Link to="/signup">Get Started for Free <ArrowRight className="ml-2" size={20} /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-14 text-lg border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 transition-all w-full sm:w-auto shadow-lg shadow-blue-500/5">
              <Link to="/dashboard" className="flex items-center justify-center gap-2">
                <Play size={18} fill="currentColor" /> View Live Demo
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-[#0F172A]/50 border-y border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Comprehensive Safety Suite</h2>
            <p className="text-slate-400">Everything you need to keep your users safe and your platform compliant.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'Content Moderation', desc: 'Automated text, image, and video analysis to filter harmful content instantly.' },
              { icon: Lock, title: 'Threat Intelligence', desc: 'Real-time monitoring of global attack vectors and automated countermeasures.' },
              { icon: Globe, title: 'Policy Enforcement', desc: 'Customizable safety rules that adapt to your community guidelines automatically.' },
            ].map((feature, i) => (
              <div key={i} className="bg-[#0F172A] p-8 rounded-3xl shadow-sm border border-[#1E293B] hover:border-blue-500/30 transition-all group">
                <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/20 group-hover:scale-110 transition-transform">
                  <feature.icon className="text-blue-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-12">Trusted by industry leaders</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-30 grayscale invert">
            <div className="font-black text-2xl italic">TECHFLOW</div>
            <div className="font-black text-2xl italic">SECURELY</div>
            <div className="font-black text-2xl italic">DATACORE</div>
            <div className="font-black text-2xl italic">CLOUDLY</div>
          </div>
        </div>
      </section>
    </LandingLayout>
  );
};

export default Home;
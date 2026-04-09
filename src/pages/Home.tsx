"use client";

import React, { useEffect } from 'react';
import LandingLayout from '@/components/LandingLayout';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { Shield, Zap, Lock, Globe, ArrowRight } from 'lucide-react';

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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider mb-8">
            <Zap size={14} className="text-amber-500" /> Next-Gen Safety Infrastructure
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8">
            Secure your platform with <span className="text-primary">AI-driven</span> safety.
          </h1>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Guardian AI provides real-time content moderation, threat intelligence, and policy enforcement for modern digital communities.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-slate-900 hover:bg-slate-800 rounded-full px-8 h-14 text-lg">
              <Link to="/signup">Get Started for Free <ArrowRight className="ml-2" size={20} /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-14 text-lg">
              <Link to="/dashboard">View Live Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Comprehensive Safety Suite</h2>
            <p className="text-slate-600">Everything you need to keep your users safe and your platform compliant.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'Content Moderation', desc: 'Automated text, image, and video analysis to filter harmful content instantly.' },
              { icon: Lock, title: 'Threat Intelligence', desc: 'Real-time monitoring of global attack vectors and automated countermeasures.' },
              { icon: Globe, title: 'Policy Enforcement', desc: 'Customizable safety rules that adapt to your community guidelines automatically.' },
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Trusted by industry leaders</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50 grayscale">
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
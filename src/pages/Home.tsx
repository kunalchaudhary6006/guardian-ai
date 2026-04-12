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
      <section className="pt-24 pb-32 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-[10px] font-bold uppercase tracking-wider mb-10 border border-orange-100">
            ✨ Next-Gen Safety Infrastructure
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-[1.1]">
            Secure your platform with <span className="text-blue-600">AI-driven</span> safety.
          </h1>
          <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            Guardian AI provides real-time content moderation, threat intelligence, and policy enforcement for modern digital communities.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-8 h-14 text-base font-bold shadow-xl shadow-slate-200 w-full sm:w-auto">
              <Link to="/signup">Get Started for Free <ArrowRight className="ml-2" size={18} /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-14 text-base font-bold border-slate-200 text-slate-600 hover:bg-slate-50 transition-all w-full sm:w-auto">
              <Link to="/dashboard" className="flex items-center justify-center gap-2">
                View Live Demo
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Comprehensive Safety Suite</h2>
            <p className="text-slate-500 font-medium">Everything you need to keep your users safe and your platform compliant.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'Content Moderation', desc: 'Automated text, image, and video analysis to filter harmful content instantly.' },
              { icon: Lock, title: 'Threat Intelligence', desc: 'Real-time monitoring of global attack vectors and automated countermeasures.' },
              { icon: Globe, title: 'Policy Enforcement', desc: 'Customizable safety rules that adapt to your community guidelines automatically.' },
            ].map((feature, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-all group">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 border border-slate-100 group-hover:scale-110 transition-transform">
                  <feature.icon className="text-slate-900" size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-16">Trusted by industry leaders</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 opacity-40 grayscale">
            <div className="font-black text-xl tracking-tighter">TECHFLOW</div>
            <div className="font-black text-xl tracking-tighter">SECURELY</div>
            <div className="font-black text-xl tracking-tighter">DATACORE</div>
            <div className="font-black text-xl tracking-tighter">CLOUDLY</div>
          </div>
        </div>
      </section>
    </LandingLayout>
  );
};

export default Home;
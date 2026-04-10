"use client";

import React from 'react';
import LandingLayout from '@/components/LandingLayout';
import { Shield, ChevronRight, Mail, Globe, Clock } from 'lucide-react';

const PrivacyPolicy = () => {
  const sections = [
    { id: 'collection', title: '1. Information We Collect' },
    { id: 'usage', title: '2. How We Use Your Information' },
    { id: 'sharing', title: '3. Data Sharing & Disclosure' },
    { id: 'retention', title: '4. Data Retention' },
    { id: 'security', title: '5. Security' },
    { id: 'rights', title: '6. Your Rights' },
    { id: 'gdpr', title: '7. GDPR & International Compliance' },
    { id: 'cookies', title: '8. Cookies & Tracking' },
    { id: 'third-party', title: '9. Third-Party Services' },
    { id: 'children', title: '10. Children’s Privacy' },
    { id: 'changes', title: '11. Changes to This Policy' },
    { id: 'contact', title: '12. Contact Us' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <LandingLayout>
      <div className="bg-[#020617] min-h-screen pt-20 pb-32 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6 border border-blue-500/20">
              <Shield size={14} /> Legal Documentation
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Privacy Policy
            </h1>
            <div className="flex items-center justify-center gap-4 text-slate-400 text-sm">
              <span className="flex items-center gap-1"><Clock size={14} /> Effective Date: May 24, 2024</span>
              <span className="w-1 h-1 bg-slate-700 rounded-full" />
              <span>Version 1.2</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sticky Sidebar Navigation */}
            <aside className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24 space-y-1">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4 px-4">Table of Contents</p>
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="w-full text-left px-4 py-2 rounded-xl text-sm text-slate-400 hover:text-blue-400 hover:bg-blue-500/5 transition-all flex items-center justify-between group"
                  >
                    {section.title.split('. ')[1]}
                    <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </button>
                ))}
              </div>
            </aside>

            {/* Content Area */}
            <div className="lg:col-span-3 space-y-16">
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-slate-300 leading-relaxed">
                  Guardian AI ("we", "our", "us") operates an AI-powered platform for content moderation, safety, and analytics. This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our website and services.
                </p>

                <div id="collection" className="scroll-mt-24 space-y-6">
                  <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                    <span className="w-8 h-8 bg-blue-600/10 rounded-lg flex items-center justify-center text-blue-400 text-sm">1</span>
                    Information We Collect
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-[#0F172A] border border-[#1E293B] rounded-3xl">
                      <h3 className="text-blue-400 font-bold mb-4">Personal Information</h3>
                      <ul className="space-y-2 text-slate-400 text-sm">
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Name</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Email address</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Company details</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Billing and payment information</li>
                      </ul>
                    </div>
                    <div className="p-6 bg-[#0F172A] border border-[#1E293B] rounded-3xl">
                      <h3 className="text-blue-400 font-bold mb-4">Usage & Content Data</h3>
                      <ul className="space-y-2 text-slate-400 text-sm">
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> IP address & Device type</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Log data and analytics</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Content submitted for moderation</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> AI processing results</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div id="usage" className="scroll-mt-24 space-y-6">
                  <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                    <span className="w-8 h-8 bg-blue-600/10 rounded-lg flex items-center justify-center text-blue-400 text-sm">2</span>
                    How We Use Your Information
                  </h2>
                  <p className="text-slate-400">We use your information to:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      'Provide and maintain our services',
                      'Process transactions and billing',
                      'Improve AI models and performance',
                      'Detect fraud and security threats',
                      'Communicate updates and support'
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-[#0F172A]/50 border border-[#1E293B] rounded-2xl text-sm text-slate-300">
                        <CheckCircle2 className="text-blue-500 shrink-0" size={18} />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div id="sharing" className="scroll-mt-24 space-y-6">
                  <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                    <span className="w-8 h-8 bg-blue-600/10 rounded-lg flex items-center justify-center text-blue-400 text-sm">3</span>
                    Data Sharing & Disclosure
                  </h2>
                  <div className="p-6 bg-blue-600/5 border border-blue-500/20 rounded-3xl mb-6">
                    <p className="text-blue-400 font-bold flex items-center gap-2">
                      <Shield size={18} /> We do not sell your personal data.
                    </p>
                  </div>
                  <p className="text-slate-400">We may share data with:</p>
                  <ul className="list-disc list-inside text-slate-400 space-y-2 ml-4">
                    <li>Payment processors (e.g., Stripe, Razorpay)</li>
                    <li>Cloud infrastructure providers (AWS, etc.)</li>
                    <li>Legal authorities when required by law</li>
                  </ul>
                </div>

                <div id="retention" className="scroll-mt-24 space-y-6">
                  <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                    <span className="w-8 h-8 bg-blue-600/10 rounded-lg flex items-center justify-center text-blue-400 text-sm">4</span>
                    Data Retention
                  </h2>
                  <div className="space-y-4 text-slate-400">
                    <p>Data is retained based on your plan (7 / 30 / 90 days or custom). You can request deletion at any time.</p>
                    <p>Backup data may be retained temporarily for security compliance and disaster recovery purposes.</p>
                  </div>
                </div>

                <div id="security" className="scroll-mt-24 space-y-6">
                  <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                    <span className="w-8 h-8 bg-blue-600/10 rounded-lg flex items-center justify-center text-blue-400 text-sm">5</span>
                    Security
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: 'Encryption', icon: Lock },
                      { label: 'Secure Storage', icon: Database },
                      { label: 'Auth Control', icon: Shield },
                      { label: 'Regular Audits', icon: FileText }
                    ].map((item, i) => (
                      <div key={i} className="p-4 bg-[#0F172A] border border-[#1E293B] rounded-2xl text-center space-y-2">
                        <item.icon className="mx-auto text-blue-400" size={24} />
                        <p className="text-[10px] font-bold text-white uppercase tracking-wider">{item.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div id="gdpr" className="scroll-mt-24 space-y-6">
                  <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                    <span className="w-8 h-8 bg-blue-600/10 rounded-lg flex items-center justify-center text-blue-400 text-sm">7</span>
                    GDPR & International Compliance
                  </h2>
                  <div className="p-8 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 border border-blue-500/20 rounded-[2.5rem]">
                    <p className="text-slate-300 leading-relaxed">
                      For users in the European Union, we comply with GDPR regulations. Data processing is based on consent and legitimate interest. You may contact us for any data-related requests or to exercise your rights under GDPR.
                    </p>
                  </div>
                </div>

                <div id="contact" className="scroll-mt-24 space-y-8 pt-8 border-t border-[#1E293B]">
                  <h2 className="text-2xl font-bold text-white">12. Contact Us</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center gap-4 p-6 bg-[#0F172A] border border-[#1E293B] rounded-3xl">
                      <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-400">
                        <Mail size={24} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Support</p>
                        <p className="text-white font-medium">support@guardianai.co.in</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-6 bg-[#0F172A] border border-[#1E293B] rounded-3xl">
                      <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-400">
                        <Globe size={24} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Regions</p>
                        <p className="text-white font-medium">India | Europe | USA</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LandingLayout>
  );
};

const CheckCircle2 = ({ className, size }: { className?: string, size?: number }) => (
  <svg 
    className={className} 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const Database = ({ className, size }: { className?: string, size?: number }) => (
  <svg 
    className={className} 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5V19A9 3 0 0 0 21 19V5" />
    <path d="M3 12A9 3 0 0 0 21 12" />
  </svg>
);

export default PrivacyPolicy;
"use client";

import React from 'react';
import LandingLayout from '@/components/LandingLayout';
import { Shield, ChevronRight, Mail, Globe, Clock, FileText, Scale, AlertTriangle } from 'lucide-react';

const TermsAndConditions = () => {
  const sections = [
    { id: 'services', title: '1. Use of Services' },
    { id: 'account', title: '2. Account Registration' },
    { id: 'billing', title: '3. Subscription & Billing' },
    { id: 'trials', title: '4. Free Trials' },
    { id: 'refunds', title: '5. Refund Policy' },
    { id: 'acceptable-use', title: '6. Acceptable Use Policy' },
    { id: 'ai-disclaimer', title: '7. AI Limitations Disclaimer' },
    { id: 'data', title: '8. Data & Privacy' },
    { id: 'ip', title: '9. Intellectual Property' },
    { id: 'termination', title: '10. Termination' },
    { id: 'liability', title: '11. Limitation of Liability' },
    { id: 'indemnity', title: '12. Indemnification' },
    { id: 'law', title: '13. Governing Law' },
    { id: 'changes', title: '14. Changes to Terms' },
    { id: 'contact', title: '15. Contact Information' },
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
              <Scale size={14} /> Legal Agreement
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Terms & Conditions
            </h1>
            <div className="flex items-center justify-center gap-4 text-slate-400 text-sm">
              <span className="flex items-center gap-1"><Clock size={14} /> Effective Date: May 24, 2024</span>
              <span className="w-1 h-1 bg-slate-700 rounded-full" />
              <span>Version 1.0</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sticky Sidebar Navigation */}
            <aside className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24 space-y-1">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4 px-4">Navigation</p>
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
                  Welcome to Guardian AI ("we", "our", "us"). By accessing or using our platform, website, and services, you agree to comply with and be bound by these Terms & Conditions.
                </p>

                <div id="services" className="scroll-mt-24 space-y-6">
                  <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                    <span className="w-8 h-8 bg-blue-600/10 rounded-lg flex items-center justify-center text-blue-400 text-sm">1</span>
                    Use of Services
                  </h2>
                  <p className="text-slate-400">Guardian AI provides AI-powered content moderation, analytics, and safety tools. By using our services, you agree:</p>
                  <ul className="space-y-3 text-slate-400 text-sm list-none p-0">
                    <li className="flex items-start gap-3 p-4 bg-[#0F172A] border border-[#1E293B] rounded-2xl">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 shrink-0" />
                      To use the platform only for lawful purposes
                    </li>
                    <li className="flex items-start gap-3 p-4 bg-[#0F172A] border border-[#1E293B] rounded-2xl">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 shrink-0" />
                      Not to misuse, disrupt, or attempt unauthorized access
                    </li>
                    <li className="flex items-start gap-3 p-4 bg-[#0F172A] border border-[#1E293B] rounded-2xl">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 shrink-0" />
                      Not to reverse-engineer or copy our technology
                    </li>
                  </ul>
                </div>

                <div id="account" className="scroll-mt-24 space-y-6">
                  <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                    <span className="w-8 h-8 bg-blue-600/10 rounded-lg flex items-center justify-center text-blue-400 text-sm">2</span>
                    Account Registration
                  </h2>
                  <p className="text-slate-400">To access certain features, you must create an account. You agree to:</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {['Provide accurate information', 'Maintain credential security', 'Responsible for all activity'].map((item, i) => (
                      <div key={i} className="p-4 bg-[#0F172A]/50 border border-[#1E293B] rounded-2xl text-center text-xs text-slate-300">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div id="billing" className="scroll-mt-24 space-y-6">
                  <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                    <span className="w-8 h-8 bg-blue-600/10 rounded-lg flex items-center justify-center text-blue-400 text-sm">3</span>
                    Subscription & Billing
                  </h2>
                  <div className="p-6 bg-blue-600/5 border border-blue-500/20 rounded-3xl space-y-4">
                    <p className="text-slate-300">Guardian AI operates on a subscription model:</p>
                    <ul className="list-disc list-inside text-slate-400 space-y-2 ml-4">
                      <li>Plans may be billed monthly or yearly</li>
                      <li>Payments are processed via secure third-party providers (e.g., Stripe, Razorpay)</li>
                      <li>Subscriptions automatically renew unless canceled</li>
                    </ul>
                    <p className="text-xs text-slate-500 italic">We reserve the right to modify pricing with prior notice.</p>
                  </div>
                </div>

                <div id="ai-disclaimer" className="scroll-mt-24 space-y-6">
                  <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                    <span className="w-8 h-8 bg-rose-600/10 rounded-lg flex items-center justify-center text-rose-400 text-sm">7</span>
                    AI Limitations Disclaimer
                  </h2>
                  <div className="p-6 bg-rose-600/5 border border-rose-500/20 rounded-3xl">
                    <div className="flex items-center gap-3 text-rose-400 font-bold mb-4">
                      <AlertTriangle size={20} />
                      Important Notice
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Guardian AI uses artificial intelligence. Results may not always be 100% accurate. Users are responsible for final decisions based on outputs. We are not liable for errors, false positives, or missed detections.
                    </p>
                  </div>
                </div>

                <div id="contact" className="scroll-mt-24 space-y-8 pt-8 border-t border-[#1E293B]">
                  <h2 className="text-2xl font-bold text-white">15. Contact Information</h2>
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

                <div className="mt-16 p-8 bg-[#0F172A] border border-[#1E293B] rounded-[2.5rem] text-center">
                  <p className="text-slate-400 text-sm">
                    By using Guardian AI, you acknowledge that you have read and agreed to these Terms & Conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LandingLayout>
  );
};

export default TermsAndConditions;
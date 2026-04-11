"use client";

import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Zap, 
  Plus, 
  Rocket, 
  LayoutDashboard, 
  Sparkles, 
  Settings, 
  Bell,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  XCircle
} from 'lucide-react';
import CampaignInput from '@/components/Marketing/CampaignInput';
import ComplianceCheck from '@/components/Marketing/ComplianceCheck';
import IntegrationsHub from '@/components/Marketing/IntegrationsHub';
import CreativeStudio from '@/components/Marketing/CreativeStudio';
import PerformancePanel from '@/components/Marketing/PerformancePanel';
import ExecutionHub from '@/components/Marketing/ExecutionHub';
import { toast } from 'sonner';

export default function MarketingCommandCenter() {
  const [step, setStep] = useState(1);
  const [campaignData, setCampaignData] = useState<any>(null);

  const handleStartCampaign = (data: any) => {
    setCampaignData(data);
    setStep(2);
    toast.success("Campaign initialized. AI is generating content...");
  };

  return (
    <DashboardLayout>
      {/* Navbar / Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 bg-[#0F172A] p-6 rounded-[2.5rem] border border-[#1E293B] shadow-xl">
        <div className="flex items-center gap-4">
          <div className="bg-blue-600 p-2.5 rounded-2xl shadow-lg shadow-blue-900/20">
            <Shield className="text-white" size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-black text-white uppercase tracking-tighter">Guardian AI</h1>
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Marketing Command Center</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-2 bg-[#020617] p-1 rounded-2xl border border-[#1E293B]">
            <Button variant="ghost" size="sm" className="rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white">Content Studio</Button>
            <Button variant="ghost" size="sm" className="rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white">AI Assistant</Button>
            <Button className="bg-white text-black hover:bg-slate-200 rounded-xl text-[10px] font-black uppercase tracking-widest px-4">＋ Create Campaign</Button>
          </div>
          <div className="h-8 w-[1px] bg-[#1E293B] mx-2" />
          <Button variant="outline" className="rounded-xl border-[#1E293B] text-white hover:bg-[#1E293B] text-[10px] font-black uppercase tracking-widest">Generate Creative</Button>
          <Button className="bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-[10px] font-black uppercase tracking-widest px-6 shadow-lg shadow-teal-900/20">Launch Ads</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Vertical Pipeline / Main Content */}
        <div className="lg:col-span-8 space-y-8">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-xl font-black text-white uppercase tracking-widest">AI Marketing Intelligence</h2>
            <Badge className="bg-blue-600/10 text-blue-400 border-blue-500/20">Automation Active</Badge>
          </div>

          {/* Pipeline Stages */}
          <div className="space-y-12 relative before:absolute before:left-8 before:top-12 before:bottom-12 before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:via-indigo-500 before:to-teal-500">
            
            {/* Stage 1: Input */}
            <div className="relative pl-20">
              <div className="absolute left-0 w-16 h-16 rounded-3xl bg-[#0F172A] border-2 border-blue-500 flex items-center justify-center z-10 shadow-xl shadow-blue-900/20">
                <Plus className="text-blue-500" size={24} />
              </div>
              <CampaignInput onStart={handleStartCampaign} active={step === 1} />
            </div>

            {/* Stage 2: Creative Studio */}
            <div className={`relative pl-20 transition-opacity duration-500 ${step < 2 ? 'opacity-40 grayscale pointer-events-none' : ''}`}>
              <div className="absolute left-0 w-16 h-16 rounded-3xl bg-[#0F172A] border-2 border-indigo-500 flex items-center justify-center z-10 shadow-xl shadow-indigo-900/20">
                <Sparkles className="text-indigo-500" size={24} />
              </div>
              <CreativeStudio onApprove={() => setStep(3)} />
            </div>

            {/* Stage 3: Compliance */}
            <div className={`relative pl-20 transition-opacity duration-500 ${step < 3 ? 'opacity-40 grayscale pointer-events-none' : ''}`}>
              <div className="absolute left-0 w-16 h-16 rounded-3xl bg-[#0F172A] border-2 border-rose-500 flex items-center justify-center z-10 shadow-xl shadow-rose-900/20">
                <Shield className="text-rose-500" size={24} />
              </div>
              <ComplianceCheck onApprove={() => setStep(4)} />
            </div>

            {/* Stage 4: Execution */}
            <div className={`relative pl-20 transition-opacity duration-500 ${step < 4 ? 'opacity-40 grayscale pointer-events-none' : ''}`}>
              <div className="absolute left-0 w-16 h-16 rounded-3xl bg-[#0F172A] border-2 border-teal-500 flex items-center justify-center z-10 shadow-xl shadow-teal-900/20">
                <Rocket className="text-teal-500" size={24} />
              </div>
              <ExecutionHub onLaunch={() => setStep(5)} />
            </div>

            {/* Stage 5: Performance */}
            <div className={`relative pl-20 transition-opacity duration-500 ${step < 5 ? 'opacity-40 grayscale pointer-events-none' : ''}`}>
              <div className="absolute left-0 w-16 h-16 rounded-3xl bg-[#0F172A] border-2 border-emerald-500 flex items-center justify-center z-10 shadow-xl shadow-emerald-900/20">
                <LayoutDashboard className="text-emerald-500" size={24} />
              </div>
              <PerformancePanel />
            </div>
          </div>
        </div>

        {/* Sidebar / Intelligence Panel */}
        <div className="lg:col-span-4 space-y-8">
          <IntegrationsHub />
          
          <Card className="border-none bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2.5rem] text-white p-8 shadow-2xl shadow-blue-900/20">
            <h3 className="text-lg font-black uppercase tracking-widest mb-6 flex items-center gap-2">
              <Zap size={20} fill="currentColor" /> AI Recommendations
            </h3>
            <div className="space-y-4">
              {[
                { title: 'Scale Meta Ads', impact: '+$2.4K', conf: 94 },
                { title: 'Pause Low-ROI Keywords', impact: '-$800 Cost', conf: 88 },
                { title: 'Refresh Creative Assets', impact: '+15% CTR', conf: 91 },
              ].map((rec, i) => (
                <div key={i} className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm group cursor-pointer hover:bg-white/20 transition-all">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-bold text-sm">{rec.title}</h4>
                    <Badge className="bg-white/20 text-white border-none text-[8px]">{rec.conf}% Conf.</Badge>
                  </div>
                  <p className="text-xs text-blue-100">Predicted Impact: {rec.impact}</p>
                </div>
              ))}
            </div>
            <Button className="w-full mt-6 bg-white text-blue-600 hover:bg-slate-100 rounded-xl font-black uppercase tracking-widest text-[10px] h-10">
              Apply All Optimizations
            </Button>
          </Card>

          <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl p-6">
            <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">System Intelligence</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-500">Market Fit Score</span>
                <span className="text-xs font-black text-emerald-400">92 / 100</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-500">Policy Alignment</span>
                <span className="text-xs font-black text-blue-400">Optimal</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-500">ROI Forecast</span>
                <span className="text-xs font-black text-white">3.8x</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
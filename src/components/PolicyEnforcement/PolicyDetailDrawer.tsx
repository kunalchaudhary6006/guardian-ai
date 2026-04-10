"use client";

import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Brain, CheckCircle2, Download, ExternalLink, Info, Zap } from 'lucide-react';

interface PolicyDetailDrawerProps {
  policy: any;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function PolicyDetailDrawer({ policy, open, onOpenChange }: PolicyDetailDrawerProps) {
  if (!policy) return null;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="bg-[#0F172A] border-[#1E293B] text-white w-full sm:max-w-md p-0 overflow-y-auto">
        <div className="p-8 border-b border-[#1E293B] bg-[#020617]/50">
          <SheetHeader>
            <div className="flex items-center justify-between mb-4">
              <Badge className="bg-blue-600/10 text-blue-400 border-blue-500/20">Policy Intelligence</Badge>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">ID: POL-{policy.id}</span>
            </div>
            <SheetTitle className="text-white text-2xl font-black uppercase tracking-tighter">{policy.name}</SheetTitle>
            <SheetDescription className="text-slate-400 text-sm leading-relaxed">
              This policy is enforced using Guardian AI’s detection, risk evaluation, and repeat-offender models.
            </SheetDescription>
          </SheetHeader>
        </div>

        <div className="p-8 space-y-8">
          {/* Models Involved */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
              <Brain size={14} className="text-blue-400" /> AI Models Involved
            </h4>
            <div className="space-y-2">
              {['NLP Classifier', 'Multimodal Vision', 'Repeat Offender (KMeans)', 'Risk Scoring (XGBoost)'].map((m) => (
                <div key={m} className="flex items-center gap-3 p-3 bg-[#020617] border border-[#1E293B] rounded-xl">
                  <CheckCircle2 size={14} className="text-emerald-500" />
                  <span className="text-xs text-slate-300">{m}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Confidence Metrics */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Model Confidence Metrics</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-[#020617] border border-[#1E293B] rounded-2xl">
                <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Accuracy</p>
                <p className="text-xl font-black text-white">94%</p>
              </div>
              <div className="p-4 bg-[#020617] border border-[#1E293B] rounded-2xl">
                <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">False Positive</p>
                <p className="text-xl font-black text-rose-400">2.1%</p>
              </div>
            </div>
          </div>

          {/* Enforcement Flow */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest">AI Enforcement Flow</h4>
            <div className="relative space-y-4 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#1E293B]">
              {[
                'Violation Detected',
                'Model Risk Evaluation',
                'Repeat Offender Analysis',
                'Automated Decision',
                'Audit Log Creation'
              ].map((step, i) => (
                <div key={i} className="relative pl-8 flex items-center gap-3">
                  <div className="absolute left-0 w-4 h-4 rounded-full bg-[#0F172A] border-2 border-blue-500 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  </div>
                  <span className="text-xs text-slate-300">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Audit & Compliance */}
          <div className="p-6 bg-blue-600/5 border border-blue-500/20 rounded-3xl space-y-4">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <Info size={16} className="text-blue-400" /> Audit & Compliance
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-500">Audit Status</span>
                <span className="text-emerald-400 font-bold">Active & Logged</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-slate-500">Compliance</span>
                <span className="text-white font-bold">Enterprise-Ready</span>
              </div>
            </div>
            <div className="flex gap-2 pt-2">
              <Button variant="outline" className="flex-1 border-[#1E293B] text-white rounded-xl h-9 text-[10px] font-black uppercase tracking-widest gap-2">
                <Download size={14} /> CSV
              </Button>
              <Button variant="outline" className="flex-1 border-[#1E293B] text-white rounded-xl h-9 text-[10px] font-black uppercase tracking-widest gap-2">
                <ExternalLink size={14} /> API
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
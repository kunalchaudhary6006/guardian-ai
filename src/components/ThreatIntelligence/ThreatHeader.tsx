"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShieldAlert, History, Zap } from 'lucide-react';
import { toast } from 'sonner';

interface ThreatHeaderProps {
  onInitiateCrisis: () => void;
}

export default function ThreatHeader({ onInitiateCrisis }: ThreatHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      <div>
        <h1 className="text-3xl font-black text-white uppercase tracking-tighter flex items-center gap-3">
          <ShieldAlert className="text-rose-500" size={32} /> Threat & Crisis Response
        </h1>
        <p className="text-slate-400 text-sm mt-1">Monitor, predict, and respond to global threats using AI-driven intelligence</p>
      </div>
      
      <div className="flex flex-wrap items-center gap-3">
        <Badge className="bg-blue-600/10 text-blue-400 border-blue-500/20 px-3 py-1.5 h-10 flex items-center gap-2">
          <Zap size={14} fill="currentColor" /> AI Confidence: 92%
        </Badge>
        
        <Button 
          variant="outline" 
          className="rounded-2xl border-[#1E293B] bg-[#0F172A] text-white hover:bg-[#1E293B] gap-2 h-10 px-6"
          onClick={() => toast.info("Opening incident history...")}
        >
          <History size={18} /> Incident History
        </Button>
        
        <div className="flex flex-col items-end">
          <Button 
            onClick={onInitiateCrisis}
            className="bg-rose-600 hover:bg-rose-700 text-white rounded-2xl gap-2 h-10 px-6 shadow-lg shadow-rose-900/20 font-bold"
          >
            Initiate Crisis Protocol
          </Button>
          <span className="text-[10px] text-rose-400 font-bold uppercase tracking-widest mt-1 animate-pulse">
            AI recommends escalation
          </span>
        </div>
      </div>
    </div>
  );
}
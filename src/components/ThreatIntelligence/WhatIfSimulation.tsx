"use client";

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, TrendingUp, Clock, ShieldAlert } from 'lucide-react';

export default function WhatIfSimulation() {
  const [active, setActive] = useState(false);

  return (
    <Card className="border-[#1E293B] bg-[#0F172A] rounded-[2.5rem] shadow-xl overflow-hidden">
      <div className="p-6 border-b border-[#1E293B] flex items-center justify-between bg-[#020617]/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-400">
            <ShieldAlert size={20} />
          </div>
          <div>
            <h3 className="text-white font-bold">What-If Simulation</h3>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Predictive Impact Analysis</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Label htmlFor="sim-toggle" className="text-xs text-slate-400">Simulate No Action</Label>
          <Switch id="sim-toggle" checked={active} onCheckedChange={setActive} />
        </div>
      </div>
      
      <CardContent className="p-8">
        {active ? (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-rose-500/5 border border-rose-500/20 rounded-2xl text-center">
                <TrendingUp className="text-rose-500 mx-auto mb-2" size={20} />
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Spread Map</p>
                <p className="text-lg font-black text-white">Global</p>
              </div>
              <div className="p-4 bg-rose-500/5 border border-rose-500/20 rounded-2xl text-center">
                <Clock className="text-rose-500 mx-auto mb-2" size={20} />
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Time to Escalation</p>
                <p className="text-lg font-black text-white">12 min</p>
              </div>
              <div className="p-4 bg-rose-500/5 border border-rose-500/20 rounded-2xl text-center">
                <AlertTriangle className="text-rose-500 mx-auto mb-2" size={20} />
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Impact Score</p>
                <p className="text-lg font-black text-white">9.8 / 10</p>
              </div>
            </div>
            
            <div className="p-5 bg-rose-600 rounded-2xl text-white">
              <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">AI Prediction</p>
              <p className="text-sm font-medium leading-relaxed">
                Without immediate mitigation, the current DDoS attack will saturate 95% of bandwidth within 12 minutes, leading to a total platform blackout.
              </p>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-[#020617] border border-[#1E293B] rounded-full flex items-center justify-center mx-auto mb-4">
              <ShieldAlert className="text-slate-700" size={32} />
            </div>
            <p className="text-sm text-slate-500">Toggle simulation to view predicted impact of inaction.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
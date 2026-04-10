"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShieldCheck, Activity, Zap, AlertCircle } from 'lucide-react';

export default function PlatformHealth() {
  return (
    <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl shadow-xl">
      <CardHeader>
        <CardTitle className="text-white text-lg flex items-center gap-2">
          <ShieldCheck className="text-blue-400" size={20} /> Platform Health & Model Status
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-[#020617] border border-[#1E293B] rounded-2xl text-center relative overflow-hidden">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Community Health</p>
            <h3 className="text-3xl font-black text-white">74 <span className="text-xs text-slate-500">/ 100</span></h3>
            <Badge className="mt-2 bg-amber-500/10 text-amber-400 border-amber-500/20">Moderate Risk</Badge>
          </div>
          <div className="p-4 bg-[#020617] border border-[#1E293B] rounded-2xl text-center">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Model Accuracy</p>
            <h3 className="text-3xl font-black text-white">98%</h3>
            <Badge className="mt-2 bg-emerald-500/10 text-emerald-400 border-emerald-500/20">Stable</Badge>
          </div>
        </div>

        <div className="space-y-3">
          {[
            { label: 'Model Drift', status: 'Minimal', color: 'text-emerald-400' },
            { label: 'Stability Status', status: 'Optimal', color: 'text-emerald-400' },
            { label: 'Inference Latency', status: '42ms', color: 'text-blue-400' },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-[#020617] border border-[#1E293B] rounded-xl">
              <span className="text-xs text-slate-400 font-medium">{item.label}</span>
              <span className={`text-xs font-bold ${item.color}`}>{item.status}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
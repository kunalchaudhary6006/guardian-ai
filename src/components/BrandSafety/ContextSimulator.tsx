"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Globe, CheckCircle2, AlertTriangle, Info } from 'lucide-react';

const placements = [
  { type: 'News', status: 'Safe', context: 'General News, Tech', icon: CheckCircle2, color: 'text-emerald-500' },
  { type: 'Social Feed', status: 'Safe', context: 'Lifestyle, Business', icon: CheckCircle2, color: 'text-emerald-500' },
  { type: 'Video Content', status: 'Unsafe', context: 'Sensitive Topics', icon: AlertTriangle, color: 'text-rose-500' },
];

export default function ContextSimulator() {
  return (
    <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl shadow-xl">
      <CardHeader>
        <CardTitle className="text-white text-lg flex items-center gap-2">
          <Globe className="text-indigo-400" size={20} /> Contextual Simulator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {placements.map((p, i) => (
          <div key={i} className="p-4 bg-[#020617] border border-[#1E293B] rounded-2xl space-y-3 group hover:border-indigo-500/30 transition-all">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg bg-[#0F172A] ${p.color}`}>
                  <p.icon size={16} />
                </div>
                <span className="text-sm font-bold text-white">{p.type}</span>
              </div>
              <Badge className={p.status === 'Safe' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}>
                {p.status}
              </Badge>
            </div>
            <div className="flex items-center justify-between text-[10px]">
              <span className="text-slate-500 font-bold uppercase tracking-widest">Context: {p.context}</span>
              <Info size={12} className="text-slate-600 group-hover:text-indigo-400" />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
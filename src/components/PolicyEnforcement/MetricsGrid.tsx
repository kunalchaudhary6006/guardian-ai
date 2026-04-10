"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck, AlertTriangle, Zap, FileText, TrendingUp } from 'lucide-react';

export default function MetricsGrid() {
  const metrics = [
    { title: 'Active AI Policies', value: '24', sub: 'Mapped to detection models', icon: ShieldCheck, color: 'text-blue-400' },
    { title: 'High-Risk Violations', value: '142', sub: 'Last 24h • AI Scored', icon: AlertTriangle, color: 'text-rose-400' },
    { title: 'Automated Actions', value: '892', sub: 'Executed by AI workflows', icon: Zap, color: 'text-amber-400' },
    { title: 'Audit Logs', value: '12.4K', sub: 'Created by audit engine', icon: FileText, color: 'text-emerald-400' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {metrics.map((m, i) => (
        <Card key={i} className="border-[#1E293B] bg-[#0F172A] rounded-2xl shadow-sm group hover:border-blue-500/30 transition-all">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2 rounded-lg bg-[#020617] border border-[#1E293B] ${m.color}`}>
                <m.icon size={20} />
              </div>
              <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-500">
                <TrendingUp size={10} /> +12%
              </div>
            </div>
            <h3 className="text-2xl font-black text-white mb-1">{m.value}</h3>
            <p className="text-xs font-bold text-white uppercase tracking-widest">{m.title}</p>
            <p className="text-[10px] text-slate-500 mt-1">{m.sub}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
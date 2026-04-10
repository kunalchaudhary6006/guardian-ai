"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck, AlertTriangle, Globe, Heart, Users, ShieldAlert, TrendingUp } from 'lucide-react';

const kpis = [
  { label: 'Overall Brand Safety Score', value: '87 / 100', trend: '+3%', icon: ShieldCheck, color: 'text-blue-400' },
  { label: 'Policy Compliance Status', value: '92%', trend: 'Stable', icon: ShieldAlert, color: 'text-emerald-400' },
  { label: 'Contextual Placement Safety', value: 'Safe', trend: 'Optimal', icon: Globe, color: 'text-indigo-400' },
  { label: 'Sentiment Risk Index', value: 'Low Risk', trend: '-2%', icon: Heart, color: 'text-rose-400' },
  { label: 'Creator Safety Index', value: '89 / 100', trend: '+1%', icon: Users, color: 'text-amber-400' },
  { label: 'Flagged Ads (24h)', value: '3 Ads', trend: 'Action Required', icon: AlertTriangle, color: 'text-orange-400' },
];

export default function KPIOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
      {kpis.map((kpi, i) => (
        <Card key={i} className="border-[#1E293B] bg-[#0F172A] rounded-2xl shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className={`p-2 rounded-lg bg-[#020617] border border-[#1E293B] ${kpi.color}`}>
                <kpi.icon size={18} />
              </div>
              <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-500">
                <TrendingUp size={10} /> {kpi.trend}
              </div>
            </div>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">{kpi.label}</p>
            <h3 className="text-lg font-black text-white">{kpi.value}</h3>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
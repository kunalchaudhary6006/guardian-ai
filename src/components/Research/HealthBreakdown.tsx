"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, AlertTriangle, MessageSquare, UserCheck } from 'lucide-react';

const metrics = [
  { label: 'Toxicity', value: 72, icon: AlertTriangle, color: 'bg-rose-500' },
  { label: 'Harassment', value: 65, icon: ShieldCheck, color: 'bg-orange-500' },
  { label: 'Misinformation', value: 58, icon: MessageSquare, color: 'bg-amber-500' },
  { label: 'Trust Signals', value: 81, icon: UserCheck, color: 'bg-emerald-500' },
];

export default function HealthBreakdown() {
  return (
    <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl shadow-xl">
      <CardHeader>
        <CardTitle className="text-white text-lg flex items-center gap-2">
          <ShieldCheck className="text-emerald-400" size={20} /> Community Health Breakdown
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {metrics.map((m, i) => (
          <div key={i} className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <m.icon size={14} className="text-slate-500" />
                <span className="text-xs font-bold text-slate-300">{m.label}</span>
              </div>
              <span className="text-xs font-black text-white">{m.value}</span>
            </div>
            <div className="w-full bg-[#020617] h-2 rounded-full overflow-hidden border border-[#1E293B]">
              <div 
                className={`${m.color} h-full transition-all duration-1000`} 
                style={{ width: `${m.value}%` }} 
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
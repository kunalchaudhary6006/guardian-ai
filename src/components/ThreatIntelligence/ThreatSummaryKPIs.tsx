"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Clock, ShieldAlert, Activity, Sparkles } from 'lucide-react';

interface ThreatSummaryKPIsProps {
  onOpenConsole: () => void;
}

export default function ThreatSummaryKPIs({ onOpenConsole }: ThreatSummaryKPIsProps) {
  const kpis = [
    { label: 'Predicted Escalation Risk', value: 'High ↑ 18%', icon: TrendingUp, color: 'text-rose-400' },
    { label: 'Forecast (Next 60 min)', value: '+3 Incidents', icon: Clock, color: 'text-blue-400' },
    { label: 'Most Affected Vector', value: 'Auth Layer', icon: ShieldAlert, color: 'text-amber-400' },
    { label: 'Avg Response Time', value: '14 minutes', icon: Activity, color: 'text-emerald-400' },
  ];

  return (
    <div className="space-y-8 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi, i) => (
          <Card key={i} className="border-[#1E293B] bg-[#0F172A] rounded-2xl shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-3">
                <div className={`p-2 rounded-lg bg-[#020617] border border-[#1E293B] ${kpi.color}`}>
                  <kpi.icon size={18} />
                </div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{kpi.label}</p>
              </div>
              <h3 className="text-xl font-black text-white">{kpi.value}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="flex justify-center">
        <Button 
          onClick={onOpenConsole}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-2xl gap-2 h-12 px-8 shadow-lg shadow-blue-900/20 font-bold"
        >
          <Sparkles size={18} /> Open AI Threat Console
        </Button>
      </div>
    </div>
  );
}
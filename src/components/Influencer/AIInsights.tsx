"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export default function AIInsights({ insights }: { insights: string[] }) {
  return (
    <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl shadow-xl">
      <CardHeader>
        <CardTitle className="text-white text-lg flex items-center gap-2">
          <Sparkles className="text-blue-400" size={20} /> AI Insights
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {insights.map((insight, i) => (
          <div key={i} className="flex items-start gap-3 p-4 bg-[#020617] border border-[#1E293B] rounded-2xl group hover:border-blue-500/30 transition-all">
            <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={16} />
            <p className="text-sm text-slate-300 leading-relaxed group-hover:text-white transition-colors">{insight}</p>
          </div>
        ))}
        <div className="p-4 bg-blue-600/5 border border-blue-500/20 rounded-2xl">
          <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1">Recommendation</p>
          <p className="text-xs text-white font-bold">Best Match for Brand: High</p>
        </div>
      </CardContent>
    </Card>
  );
}
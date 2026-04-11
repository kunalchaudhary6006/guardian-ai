"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, TrendingUp, Target, MousePointer2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function MarketingIntelligencePanel() {
  return (
    <Card className="border-[#1E293B] bg-[#0B1220] rounded-3xl shadow-xl overflow-hidden">
      <CardHeader className="border-b border-[#1E293B] bg-[#020617]/50 flex flex-row items-center justify-between">
        <CardTitle className="text-white text-lg flex items-center gap-2">
          <Sparkles className="text-blue-400" size={20} /> Marketing Intelligence
        </CardTitle>
        <Badge className="bg-blue-600/10 text-blue-400 border-blue-500/20">AI Optimized</Badge>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-[#020617] border border-[#1E293B] rounded-2xl">
            <div className="flex items-center gap-2 text-slate-500 mb-2">
              <Target size={14} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Predicted ROI</span>
            </div>
            <p className="text-xl font-black text-white">3.8x</p>
            <div className="flex items-center gap-1 text-emerald-500 text-[10px] font-bold mt-1">
              <TrendingUp size={10} /> +15% lift
            </div>
          </div>
          <div className="p-4 bg-[#020617] border border-[#1E293B] rounded-2xl">
            <div className="flex items-center gap-2 text-slate-500 mb-2">
              <MousePointer2 size={14} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Avg. CTR</span>
            </div>
            <p className="text-xl font-black text-white">4.2%</p>
            <p className="text-[10px] text-slate-500 mt-1">Industry avg: 2.1%</p>
          </div>
          <div className="p-4 bg-[#020617] border border-[#1E293B] rounded-2xl">
            <div className="flex items-center gap-2 text-slate-500 mb-2">
              <Sparkles size={14} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Brand Safety</span>
            </div>
            <p className="text-xl font-black text-white">92%</p>
            <Badge className="mt-1 bg-emerald-500/10 text-emerald-400 text-[8px]">Secure</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
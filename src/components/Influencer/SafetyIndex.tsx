"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, Zap } from 'lucide-react';

export default function SafetyIndex({ score, risk }: { score: number, risk: string }) {
  const getColor = () => {
    if (score >= 90) return 'text-emerald-500';
    if (score >= 70) return 'text-amber-500';
    return 'text-rose-500';
  };

  const getBg = () => {
    if (score >= 90) return 'bg-emerald-500/10';
    if (score >= 70) return 'bg-amber-500/10';
    return 'bg-rose-500/10';
  };

  return (
    <Card className="border-none bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2.5rem] text-white shadow-2xl shadow-blue-900/20">
      <CardHeader>
        <CardTitle className="text-lg font-black flex items-center gap-2 uppercase tracking-widest">
          <Zap size={20} fill="currentColor" /> Creator Safety Index
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center py-6">
        <div className="w-40 h-40 rounded-full border-8 border-white/10 flex flex-col items-center justify-center relative">
          <div 
            className="absolute inset-0 rounded-full border-8 border-white border-t-transparent transition-all duration-1000" 
            style={{ transform: `rotate(${(score / 100) * 360}deg)` }}
          />
          <span className="text-5xl font-black">{score}</span>
          <span className="text-[10px] font-bold uppercase tracking-widest opacity-70">Score</span>
        </div>
        <div className={`mt-8 px-8 py-2 rounded-full font-black uppercase tracking-widest text-sm bg-white text-blue-600 shadow-xl`}>
          {risk} Risk
        </div>
      </CardContent>
    </Card>
  );
}
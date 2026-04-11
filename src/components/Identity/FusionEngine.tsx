"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap } from 'lucide-react';

export default function FusionEngine({ result, isProcessing }: { result: any, isProcessing: boolean }) {
  const score = result?.fusion.score || 0;
  const risk = result?.fusion.risk || 'N/A';

  return (
    <Card className="border-[#E2E8F0] bg-white rounded-3xl shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-xs font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
          <Zap size={14} className="text-[#00BFA5]" /> Fusion & Scoring Engine
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center py-8">
        <div className="relative w-32 h-32 flex items-center justify-center">
          <svg className="w-full h-full -rotate-90">
            <circle
              cx="64"
              cy="64"
              r="58"
              fill="none"
              stroke="#F5F7FA"
              strokeWidth="8"
            />
            <circle
              cx="64"
              cy="64"
              r="58"
              fill="none"
              stroke="url(#tealGradient)"
              strokeWidth="8"
              strokeDasharray={364}
              strokeDashoffset={364 - (364 * score) / 100}
              strokeLinecap="round"
              className="transition-all duration-1000"
            />
            <defs>
              <linearGradient id="tealGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00BFA5" />
                <stop offset="100%" stopColor="#00E5FF" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-black text-[#1E293B]">{score}</span>
            <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Final Score</span>
          </div>
        </div>
        
        <div className="mt-6 flex items-center gap-4">
          <div className="text-center">
            <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Risk Level</p>
            <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
              risk === 'Low' ? 'bg-emerald-100 text-emerald-600' : 
              risk === 'Medium' ? 'bg-amber-100 text-amber-600' : 
              risk === 'High' ? 'bg-rose-100 text-rose-600' : 'bg-slate-100 text-slate-400'
            }`}>
              {risk}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
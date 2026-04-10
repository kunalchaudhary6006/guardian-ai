"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ResponsiveContainer, LineChart, Line } from 'recharts';

const data = [
  { v: 40 }, { v: 45 }, { v: 42 }, { v: 50 }, { v: 65 }, { v: 72 }, { v: 78 }
];

export default function GlobalThreatIndex() {
  return (
    <Card className="border-[#1E293B] bg-[#0F172A] rounded-[2.5rem] overflow-hidden shadow-xl mb-8">
      <CardContent className="p-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-8">
          <div>
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Global Threat Index</p>
            <div className="flex items-baseline gap-3">
              <h2 className="text-5xl font-black text-white">78 <span className="text-xl text-slate-500">/ 100</span></h2>
              <Badge className="bg-rose-500/10 text-rose-500 border-rose-500/20 px-3 py-1 font-black uppercase tracking-widest">
                Elevated
              </Badge>
            </div>
          </div>
          
          <div className="h-16 w-48">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <Line type="monotone" dataKey="v" stroke="#f43f5e" strokeWidth={3} dot={false} />
              </LineChart>
            </ResponsiveContainer>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1 text-center">Last 24h Trend</p>
          </div>
        </div>
        
        <div className="text-right hidden md:block">
          <p className="text-xs text-slate-400 max-w-[240px] leading-relaxed">
            Unified score derived from anomaly detection and multi-modal intelligence models.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
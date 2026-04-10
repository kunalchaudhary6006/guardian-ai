"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, ShieldCheck, AlertCircle, TrendingUp } from 'lucide-react';

const creators = [
  { name: 'Alex Rivera', score: 94, violations: 0, risk: 'Low' },
  { name: 'Sarah Chen', score: 82, violations: 1, risk: 'Low' },
  { name: 'Mike Ross', score: 45, violations: 4, risk: 'High' },
];

export default function CreatorSafetyPanel({ onViewGraph }: { onViewGraph: (creator: any) => void }) {
  return (
    <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl shadow-xl">
      <CardHeader>
        <CardTitle className="text-white text-lg flex items-center gap-2">
          <Users className="text-amber-400" size={20} /> Creator Safety Panel
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {creators.map((c, i) => (
          <div key={i} className="p-4 bg-[#020617] border border-[#1E293B] rounded-2xl flex items-center justify-between group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-400 font-bold">
                {c.name[0]}
              </div>
              <div>
                <p className="text-sm font-bold text-white">{c.name}</p>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${c.score > 80 ? 'text-emerald-500' : c.score > 60 ? 'text-amber-500' : 'text-rose-500'}`}>
                    Index: {c.score}
                  </span>
                  <span className="text-[10px] text-slate-600">•</span>
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest">{c.violations} Violations</span>
                </div>
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => onViewGraph(c)}
              className="text-blue-400 hover:bg-blue-500/10 rounded-xl text-[10px] font-black uppercase tracking-widest"
            >
              <TrendingUp size={14} className="mr-2" /> Graph
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
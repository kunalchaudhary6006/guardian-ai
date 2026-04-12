"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, TrendingUp, ShieldAlert, ChevronRight } from 'lucide-react';

const clusters = [
  { topic: 'Election Misinformation', risk: 'High', growth: '+31%', confidence: 0.91, keywords: ['vote', 'fraud', 'stolen'] },
  { topic: 'Financial Scams', risk: 'Medium', growth: '+12%', confidence: 0.88, keywords: ['crypto', 'investment', 'guaranteed'] },
  { topic: 'Hate Speech Narratives', risk: 'High', growth: '+24%', confidence: 0.94, keywords: ['slur', 'attack', 'threat'] },
];

export default function TopicClusters() {
  return (
    <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl shadow-xl">
      <CardHeader>
        <CardTitle className="text-white text-lg flex items-center gap-2">
          <Search className="text-indigo-400" size={20} /> Topic & Risk Clusters
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {clusters.map((cluster, i) => (
          <div key={i} className="p-4 bg-[#020617] border border-[#1E293B] rounded-2xl group hover:border-indigo-500/30 transition-all cursor-pointer">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h4 className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors">{cluster.topic}</h4>
                <div className="flex items-center gap-2 mt-1">
                  <Badge className={cluster.risk === 'High' ? 'bg-rose-500/10 text-rose-400' : 'bg-amber-500/10 text-amber-400'}>
                    {cluster.risk} Risk
                  </Badge>
                  <span className="text-[10px] text-emerald-500 font-bold flex items-center gap-1">
                    <TrendingUp size={10} /> {cluster.growth}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Confidence</p>
                <p className="text-xs font-black text-indigo-400">{cluster.confidence * 100}%</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {cluster.keywords.map((k, j) => (
                <span key={j} className="text-[10px] bg-[#0F172A] text-slate-500 px-2 py-0.5 rounded-md border border-[#1E293B]">
                  #{k}
                </span>
              ))}
            </div>
          </div>
        ))}
        <button className="w-full py-2 text-[10px] font-black text-slate-500 hover:text-indigo-400 uppercase tracking-widest transition-colors">
          View All Clusters
        </button>
      </CardContent>
    </Card>
  );
}
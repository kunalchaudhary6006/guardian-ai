"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sparkles, TrendingUp, AlertTriangle, CheckCircle2, Clock } from 'lucide-react';

export default function InsightSummary() {
  return (
    <Card className="border-none bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2.5rem] text-white shadow-2xl shadow-blue-900/20">
      <CardContent className="p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl">
              <Sparkles size={24} className="text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-black uppercase tracking-tighter">AI Insight Summary</h3>
              <p className="text-blue-100 text-sm opacity-80">Synthesized intelligence from platform-wide model analysis</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-[10px] font-black uppercase tracking-widest opacity-70">Confidence</p>
              <p className="text-xl font-black">94%</p>
            </div>
            <div className="h-10 w-[1px] bg-white/20" />
            <div className="text-right">
              <p className="text-[10px] font-black uppercase tracking-widest opacity-70">Last Updated</p>
              <p className="text-sm font-bold">Just now</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { text: "Hate speech increased by 18% in the last 7 days.", icon: TrendingUp, color: "text-rose-200" },
            { text: "Two emerging topic clusters are driving this rise.", icon: AlertTriangle, color: "text-amber-200" },
            { text: "Engagement spikes correlate strongly with flagged content.", icon: Sparkles, color: "text-blue-200" },
            { text: "Recommended action: tighten moderation thresholds.", icon: CheckCircle2, color: "text-emerald-200" },
          ].map((insight, i) => (
            <div key={i} className="p-5 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/10 flex flex-col gap-4 hover:bg-white/20 transition-colors group">
              <insight.icon className={`${insight.color} group-hover:scale-110 transition-transform`} size={20} />
              <p className="text-sm font-medium leading-relaxed">{insight.text}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
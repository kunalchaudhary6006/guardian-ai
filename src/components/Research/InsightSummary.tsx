"use client";

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, TrendingUp, AlertTriangle, CheckCircle2, Clock } from "lucide-react";

export default function InsightSummary() {
  // Simulate AI-generated insights
  const [insights, setInsights] = useState<any[]>([
    { text: "Hate speech increased by 18% in the last 7 days.", icon: TrendingUp, color: "text-rose-200" },
    { text: "Two emerging topic clusters are driving this rise.", icon: AlertTriangle, color: "text-amber-200" },
    { text: "Engagement spikes correlate strongly with flagged content.", icon: Sparkles, color: "text-blue-200" },
    { text: "Recommended action: tighten moderation thresholds.", icon: CheckCircle2, color: "text-emerald-200" },
  ]);

  return (
    <Card className="border-none bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-[2.5rem] shadow-2xl shadow-blue-900/20">
      <CardContent className="p-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
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
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Confidence</p>
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
          {insights.map((insight, i) => (
            <div key={i} className="p-5 bg-white/10 backdrop-blur-sm rounded-3xl group cursor-pointer hover:bg-white/20 transition-colors">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-bold text-sm">{insight.text.split('.')[0]}</h4>
                <Badge className="bg-white/20 text-white border-none text-[10px] uppercase tracking-widest">{insight.confidence * 100}% Conf.</Badge>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xs text-blue-100">Impact: {insight.text}</p>
                <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
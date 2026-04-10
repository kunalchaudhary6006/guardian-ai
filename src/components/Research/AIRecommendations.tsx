"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sparkles, CheckCircle2, Search, FileText } from 'lucide-react';
import { toast } from 'sonner';

const recommendations = [
  { 
    title: 'Increase moderation coverage on weekends', 
    desc: 'Predicted activity spike in political topic clusters.', 
    confidence: 0.87, 
    impact: 'High' 
  },
  { 
    title: 'Update hate speech thresholds', 
    desc: 'New slur variations detected in regional clusters.', 
    confidence: 0.92, 
    impact: 'Medium' 
  },
];

export default function AIRecommendations() {
  const handleAction = (action: string) => {
    toast.promise(new Promise(r => setTimeout(r, 1000)), {
      loading: `Processing ${action}...`,
      success: `Recommendation ${action}ed successfully.`,
      error: 'Action failed'
    });
  };

  return (
    <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl shadow-xl">
      <CardHeader>
        <CardTitle className="text-white text-lg flex items-center gap-2">
          <Sparkles className="text-blue-400" size={20} /> AI Recommendations
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {recommendations.map((rec, i) => (
          <div key={i} className="p-5 bg-[#020617] border border-[#1E293B] rounded-2xl space-y-4">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white">{rec.title}</h4>
                <p className="text-xs text-slate-500">{rec.desc}</p>
              </div>
              <Badge className="bg-blue-600/10 text-blue-400 border-blue-500/20">
                {rec.impact} Impact
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Confidence: {rec.confidence * 100}%</span>
              <div className="flex gap-2">
                <Button 
                  size="sm" 
                  variant="ghost" 
                  onClick={() => handleAction('review')}
                  className="h-8 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white"
                >
                  Review
                </Button>
                <Button 
                  size="sm" 
                  onClick={() => handleAction('apply')}
                  className="h-8 text-[10px] font-black uppercase tracking-widest bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                >
                  Apply
                </Button>
              </div>
            </div>
          </div>
        ))}
        <Button variant="outline" className="w-full border-[#1E293B] text-slate-500 hover:text-white rounded-xl text-[10px] font-black uppercase tracking-widest gap-2">
          <FileText size={14} /> View Audit Trail
        </Button>
      </CardContent>
    </Card>
  );
}
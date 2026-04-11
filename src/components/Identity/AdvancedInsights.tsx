"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Clock, Hash, BarChart2 } from 'lucide-react';

export default function AdvancedInsights({ result, isProcessing }: { result: any, isProcessing: boolean }) {
  return (
    <Card className="border-[#E2E8F0] bg-[#F5F7FA] rounded-3xl shadow-sm h-full">
      <CardContent className="p-6 space-y-8">
        <h3 className="text-xs font-black text-slate-500 uppercase tracking-widest">Advanced Insights</h3>
        
        <div className="space-y-4">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
            <BarChart2 size={12} /> Confidence Breakdown
          </p>
          <div className="space-y-3">
            {[
              { label: 'Biometric Weight', val: 40 },
              { label: 'Liveness Weight', val: 30 },
              { label: 'Deepfake Weight', val: 30 },
            ].map((item, i) => (
              <div key={i} className="space-y-1">
                <div className="flex justify-between text-[10px] font-bold text-slate-500">
                  <span>{item.label}</span>
                  <span>{item.val}%</span>
                </div>
                <div className="w-full bg-white h-1 rounded-full overflow-hidden">
                  <div className="bg-[#00BFA5] h-full" style={{ width: `${item.val}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4 pt-6 border-t border-[#E2E8F0]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-400">
              <Clock size={14} />
              <span className="text-[10px] font-bold uppercase">Processing Time</span>
            </div>
            <span className="text-xs font-black text-[#1E293B]">{result?.latency || 0} ms</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-400">
              <Hash size={14} />
              <span className="text-[10px] font-bold uppercase">Request ID</span>
            </div>
            <span className="text-[10px] font-mono font-bold text-[#00BFA5]">{result?.id || 'N/A'}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-4">
          <Button variant="outline" className="rounded-xl border-[#E2E8F0] text-[#1E293B] hover:bg-white text-[10px] font-black uppercase tracking-widest h-10">
            PDF Report
          </Button>
          <Button variant="outline" className="rounded-xl border-[#E2E8F0] text-[#1E293B] hover:bg-white text-[10px] font-black uppercase tracking-widest h-10">
            JSON Data
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
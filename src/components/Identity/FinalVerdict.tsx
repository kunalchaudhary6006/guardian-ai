"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, AlertTriangle, XCircle, ShieldCheck } from 'lucide-react';

export default function FinalVerdict({ result, isProcessing }: { result: any, isProcessing: boolean }) {
  const verdict = result?.verdict || 'Waiting';

  const getVerdictStyles = () => {
    if (verdict === 'Authentic') return { color: 'text-emerald-500', bg: 'bg-emerald-50', icon: CheckCircle2 };
    if (verdict === 'Suspicious') return { color: 'text-amber-500', bg: 'bg-amber-50', icon: AlertTriangle };
    if (verdict === 'Fake') return { color: 'text-rose-500', bg: 'bg-rose-50', icon: XCircle };
    return { color: 'text-slate-300', bg: 'bg-[#F5F7FA]', icon: ShieldCheck };
  };

  const styles = getVerdictStyles();

  return (
    <Card className={`border-none rounded-3xl shadow-sm flex flex-col items-center justify-center p-8 transition-all duration-500 ${styles.bg}`}>
      <CardContent className="p-0 flex flex-col items-center text-center gap-6">
        <div className={`w-20 h-20 rounded-full flex items-center justify-center ${styles.color} bg-white shadow-lg`}>
          <styles.icon size={40} />
        </div>
        <div>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Final Verdict</p>
          <h2 className={`text-4xl font-black uppercase tracking-tighter ${styles.color}`}>
            {isProcessing ? 'Analyzing...' : verdict}
          </h2>
        </div>
        <p className="text-xs text-slate-500 font-medium max-w-[200px]">
          {verdict === 'Authentic' ? 'Identity verified with high confidence across all models.' : 
           verdict === 'Waiting' ? 'Upload media to begin the verification process.' : 
           'Potential anomalies detected in the verification pipeline.'}
        </p>
      </CardContent>
    </Card>
  );
}